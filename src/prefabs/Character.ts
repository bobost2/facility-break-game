
// You can write more code here

import PlayerHUD from "./ui/PlayerHUD";

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Character extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// rectangle_1
		const rectangle_1 = scene.add.rectangle(0, 3, 25, 2.5);
		rectangle_1.setOrigin(0, 0.5);
		rectangle_1.isFilled = true;
		this.add(rectangle_1);

		// arcadesprite_1
		const arcadesprite_1 = scene.add.rectangle(0, 7, 15, 30);
		arcadesprite_1.isFilled = true;
		arcadesprite_1.fillColor = 10395294;
		this.add(arcadesprite_1);

		// move_left_a
		const move_left_a = this.scene.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.A);

		// move_right_d
		const move_right_d = this.scene.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.D);

		// move_up_w
		const move_up_w = this.scene.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.W);

		// move_up_space
		const move_up_space = this.scene.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

		// move_sprint_shift
		const move_sprint_shift = this.scene.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.SHIFT);

		this.move_left_a = move_left_a;
		this.move_right_d = move_right_d;
		this.move_up_w = move_up_w;
		this.move_up_space = move_up_space;
		this.move_sprint_shift = move_sprint_shift;

		/* START-USER-CTR-CODE */
		// Write your code here.

		// Set the container to simulate a physics body
		scene.physics.world.enable(this);
		(this.body as Phaser.Physics.Arcade.Body)
		.setCollideWorldBounds(true)
		.setBounce(0)
		.setSize(15, 30)
		.setOffset(-7, -9); // This is the hitbox

		scene.cameras.main.startFollow(this, true, 0.1, 0.1).setDeadzone(50, 50);
		scene.cameras.main.fadeIn(1000, 0, 0, 0);

		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
		this.scene.input.on('pointerdown', () => {
			this.scene.input.mouse?.requestPointerLock();
			if (this.scene.input.keyboard) {
				console.log("Keyboard input captured");
				// Prevent default browser actions for Ctrl+D and other keys
				this.scene.input.keyboard.addCapture([
					Phaser.Input.Keyboard.KeyCodes.W,
					Phaser.Input.Keyboard.KeyCodes.A,
					Phaser.Input.Keyboard.KeyCodes.S,
					Phaser.Input.Keyboard.KeyCodes.D,
					Phaser.Input.Keyboard.KeyCodes.CTRL,
					Phaser.Input.Keyboard.KeyCodes.SPACE,
					Phaser.Input.Keyboard.KeyCodes.SHIFT
				]);
			}
		});

		this.once(Phaser.GameObjects.Events.DESTROY, () => {
			this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.update, this);
			this.scene.input.off('pointerdown', () => {
				this.scene.input.mouse?.releasePointerLock();
			});
		});

		// Defer HUD checks until after it's set via prefab props
		Object.defineProperty(this, "HUD", {
			get: () => this._HUD,
			set: (value: Phaser.GameObjects.GameObject) => {
				if (!value) {
					console.error("HUD is not set. Please set the HUD property.");
				} else if (!(value instanceof PlayerHUD)) {
					console.error("HUD is not an instance of PlayerHUD");
				} else {
					console.log("HUD initialized!");
					this._HUD = value as PlayerHUD;
				}
			},
			configurable: true,
			enumerable: true
		});
		/* END-USER-CTR-CODE */
	}

	private move_left_a: Phaser.Input.Keyboard.Key;
	private move_right_d: Phaser.Input.Keyboard.Key;
	private move_up_w: Phaser.Input.Keyboard.Key;
	private move_up_space: Phaser.Input.Keyboard.Key;
	private move_sprint_shift: Phaser.Input.Keyboard.Key;
	public walkSpeed: number = 80;
	public runSpeed: number = 130;
	public jumpHeight: number = 150;
	public HUD!: Phaser.GameObjects.GameObject;
	public maxStamina: number = 250;
	public sprintStaminaLoss: number = 0.25;
	public staminaRegen: number = 0.05;
	public jumpStaminaLoss: number = 10;
	public idleStaminaRegen: number = 0.09;

	/* START-USER-CODE */
	private _HUD: PlayerHUD;
	private currentStamina: number = this.maxStamina;
	private jumpActive: boolean = false;
	// Write your code here.

	update() {
		if (!this.active) return;
		const body = this.body as Phaser.Physics.Arcade.Body;

		let sprinting = this.move_sprint_shift.isDown;
		let walking = false;

		if (this.move_left_a.isDown && this.move_right_d.isDown) {
			// If both keys are pressed, do nothing
			body.setVelocityX(0);
			walking = false;
		} else if (this.move_left_a.isDown) {
			if (sprinting && this.currentStamina - this.sprintStaminaLoss > 0) {
				this.currentStamina -= this.sprintStaminaLoss;
				body.setVelocityX(-this.runSpeed);
			} else {
				body.setVelocityX(-this.walkSpeed);
				if (this.currentStamina + this.staminaRegen < this.maxStamina) {
					this.currentStamina += this.staminaRegen;
					console.log("REGEN-LEFT");
				}
			}
		} else if (this.move_right_d.isDown) {
			if (sprinting && this.currentStamina - this.sprintStaminaLoss > 0) {
				this.currentStamina -= this.sprintStaminaLoss;
				body.setVelocityX(this.runSpeed);
			} else {
				body.setVelocityX(this.walkSpeed);
				if (this.currentStamina + this.staminaRegen < this.maxStamina) {
					this.currentStamina += this.staminaRegen;
					console.log("REGEN-RIGHT");
				}
			}
		} else {
			body.setVelocityX(0);
			walking = false;
		}

		if ((this.move_up_w.isDown || this.move_up_space.isDown) && body.onFloor()) {
			if (this.currentStamina - this.jumpStaminaLoss > 0 && !this.jumpActive) {
				this.currentStamina -= this.jumpStaminaLoss; 
				body.setVelocityY(-this.jumpHeight);
				this.jumpActive = true;
			}
		} else if (body.velocity.y > 0 && !body.onFloor()) {
			this.jumpActive = false;
		} else if (!walking && body.velocity.x === 0) {
			if (this.currentStamina + this.idleStaminaRegen < this.maxStamina) {
				this.currentStamina += this.idleStaminaRegen;
				console.log("REGEN-IDLE");
			}
		}

		this._HUD.updateStamina(this.currentStamina / this.maxStamina);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
