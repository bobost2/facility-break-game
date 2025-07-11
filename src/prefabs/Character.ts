
// You can write more code here

import PlayerHUD from "./ui/PlayerHUD";

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Character extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// rectangle_1
		const rectangle_1 = scene.add.sprite(0, 0, "ProtHands", 0);
		rectangle_1.scaleX = 0.6;
		rectangle_1.scaleY = 0.4;
		rectangle_1.setOrigin(0, 0.5);
		this.add(rectangle_1);

		// arcadesprite_1
		const arcadesprite_1 = scene.add.rectangle(0, 7, 12, 30);
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

		// move_dash_e
		const move_dash_e = this.scene.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.E);

		this.rectangle_1 = rectangle_1;
		this.move_left_a = move_left_a;
		this.move_right_d = move_right_d;
		this.move_up_w = move_up_w;
		this.move_up_space = move_up_space;
		this.move_sprint_shift = move_sprint_shift;
		this.move_dash_e = move_dash_e;

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

	private rectangle_1: Phaser.GameObjects.Sprite;
	private move_left_a: Phaser.Input.Keyboard.Key;
	private move_right_d: Phaser.Input.Keyboard.Key;
	private move_up_w: Phaser.Input.Keyboard.Key;
	private move_up_space: Phaser.Input.Keyboard.Key;
	private move_sprint_shift: Phaser.Input.Keyboard.Key;
	private move_dash_e: Phaser.Input.Keyboard.Key;
	public walkSpeed: number = 80;
	public runSpeed: number = 130;
	public jumpHeight: number = 150;
	public HUD!: Phaser.GameObjects.GameObject;
	public maxStamina: number = 250;
	public sprintStaminaLoss: number = 0.25;
	public staminaRegen: number = 0.05;
	public jumpStaminaLoss: number = 10;
	public idleStaminaRegen: number = 0.09;
	public dashStaminaLoss: number = 30;
	public dashSpeed: number = 300;
	public dashDuration: number = 250;
	public staminaRegenDelay: number = 500;

	/* START-USER-CODE */
	private _HUD: PlayerHUD;
	private currentStamina: number = this.maxStamina;
	private lastStaminaUsed: number = 0;
	private jumpActive: boolean = false;

	private lastLeftTap: number = 0;
	private lastRightTap: number = 0;
	private dashTimer: number = 0;
	private dashing: boolean = false;
	private keyDelay: number = 250;
	private dashDirection: number = 0; // -1 for left, 1 for right
	private rightSide: boolean = true; // Initially the dash was cursor oriented, but now its switched to the last pressed direction

	// Write your code here.

	preUpdate(time: number, delta: number) {
		if (!this.active) return;

		const pointer = this.scene.input.activePointer;
		const camera = this.scene.cameras.main;
		const worldPoint = camera.getWorldPoint(pointer.x, pointer.y);
		const body = this.body as Phaser.Physics.Arcade.Body;

		const angle = Phaser.Math.Angle.Between(
			body.center.x, body.center.y,
			worldPoint.x, worldPoint.y
		);

		if (angle < 0.45 && angle > -0.9) {
			this.rectangle_1.rotation = angle;
			this.rectangle_1.setFlip(false, false);
			//this.rightSide = true;
		} else if ((angle < -2.3 && angle >= -Math.PI) || (angle > 2.7 && angle <= Math.PI)) {
			this.rectangle_1.rotation = angle;
			this.rectangle_1.setFlip(false, true);
			//this.rightSide = false;
		}
	}

	update(time: number, delta: number) {
		if (!this.active) return;
		const body = this.body as Phaser.Physics.Arcade.Body;
		const now = this.scene.time.now;
		const shouldRegenStamina = (now - this.lastStaminaUsed > this.staminaRegenDelay);

		if (this.dashing) {
			body.setVelocityX(this.dashDirection * this.dashSpeed);
			this.dashTimer -= delta;
			if (this.dashTimer <= 0) {
				this.dashing = false;
				this.lastStaminaUsed = now;
			}
			return;
		}

		let sprinting = this.move_sprint_shift.isDown;
		let walking = true;

		// Dash with E key
		if (this.move_dash_e.isDown && !this.dashing && this.currentStamina - this.dashStaminaLoss > 0) {
			this.dashing = true;
			this.dashDirection = this.rightSide ? 1 : -1;
			this.dashTimer = this.dashDuration;
			this.currentStamina -= this.dashStaminaLoss;
			this.lastStaminaUsed = now;
		}

		// Double-tap A for dash left
		if (Phaser.Input.Keyboard.JustDown(this.move_left_a) && !this.dashing && this.currentStamina - this.dashStaminaLoss > 0) {
			if (now - this.lastLeftTap < this.keyDelay) {
				this.dashing = true;
				this.dashDirection = -1;
				this.dashTimer = this.dashDuration;
				this.currentStamina -= this.dashStaminaLoss;
				this.lastStaminaUsed = now;
			}
			this.lastLeftTap = now;
			this.rightSide = false;
		}

		// Double-tap D for dash right
		if (Phaser.Input.Keyboard.JustDown(this.move_right_d) && !this.dashing && this.currentStamina - this.dashStaminaLoss > 0) {
			if (now - this.lastRightTap < this.keyDelay) {
				this.dashing = true;
				this.dashDirection = 1;
				this.dashTimer = this.dashDuration;
				this.currentStamina -= this.dashStaminaLoss;
				this.lastStaminaUsed = now;
			}
			this.lastRightTap = now;
			this.rightSide = true;
		}

		if (this.move_left_a.isDown && this.move_right_d.isDown) {
			// If both keys are pressed, do nothing
			body.setVelocityX(0);
			walking = false;
		} else if (this.move_left_a.isDown) { // Run left
			if (sprinting && this.currentStamina - this.sprintStaminaLoss > 0) {
				this.currentStamina -= this.sprintStaminaLoss;
				body.setVelocityX(-this.runSpeed);
				this.lastStaminaUsed = now;
			} else { // Walk left + regen
				body.setVelocityX(-this.walkSpeed);
				if (shouldRegenStamina && this.currentStamina + this.staminaRegen < this.maxStamina) {
					this.currentStamina += this.staminaRegen;
				}
			}
			this.rightSide = false;
		} else if (this.move_right_d.isDown) { // Run right
			if (sprinting && this.currentStamina - this.sprintStaminaLoss > 0) {
				this.currentStamina -= this.sprintStaminaLoss;
				body.setVelocityX(this.runSpeed);
				this.lastStaminaUsed = now;
			} else { // Walk right + regen
				body.setVelocityX(this.walkSpeed);
				if (shouldRegenStamina && this.currentStamina + this.staminaRegen < this.maxStamina) {
					this.currentStamina += this.staminaRegen;
				}
			}
			this.rightSide = true;
		} else {
			body.setVelocityX(0);
			walking = false;
		}

		// Jump
		if ((this.move_up_w.isDown || this.move_up_space.isDown) && body.onFloor()) {
			if (this.currentStamina - this.jumpStaminaLoss > 0 && !this.jumpActive) {
				this.currentStamina -= this.jumpStaminaLoss; 
				body.setVelocityY(-this.jumpHeight);
				this.jumpActive = true;
				this.lastStaminaUsed = now;
			}
		} else if (body.velocity.y > 0 && !body.onFloor()) {
			this.jumpActive = false;
			this.lastStaminaUsed = now;
		} else if (!walking && body.velocity.y === 0) { // Regenerate stamina when idle
			if (shouldRegenStamina && this.currentStamina + this.idleStaminaRegen < this.maxStamina) {
				this.currentStamina += this.idleStaminaRegen;
			}
		}

		// Update UI
		this._HUD.updateStamina(this.currentStamina / this.maxStamina);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
