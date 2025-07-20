
// You can write more code here

import { SoundManager } from "../SoundManager";
import PlayerHUD from "./ui/PlayerHUD";

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Character extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// shieldIcon
		const shieldIcon = scene.add.image(0, -25, "Shield");
		shieldIcon.scaleX = 0.75;
		shieldIcon.scaleY = 0.75;
		shieldIcon.visible = false;
		shieldIcon.alpha = 0.4;
		shieldIcon.alphaTopLeft = 0.4;
		shieldIcon.alphaTopRight = 0.4;
		shieldIcon.alphaBottomLeft = 0.4;
		shieldIcon.alphaBottomRight = 0.4;
		this.add(shieldIcon);

		// rectangle_1
		const rectangle_1 = scene.add.sprite(-2, -4, "PlayerHands");
		rectangle_1.setOrigin(0, 0.5);
		this.add(rectangle_1);

		// arcadesprite_1
		const arcadesprite_1 = scene.add.sprite(0, 7, "Player", 0);
		arcadesprite_1.play("");
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

		// consume_health_v
		const consume_health_v = this.scene.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.V);

		// consume_stamina_b
		const consume_stamina_b = this.scene.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.B);

		this.shieldIcon = shieldIcon;
		this.rectangle_1 = rectangle_1;
		this.arcadesprite_1 = arcadesprite_1;
		this.move_left_a = move_left_a;
		this.move_right_d = move_right_d;
		this.move_up_w = move_up_w;
		this.move_up_space = move_up_space;
		this.move_sprint_shift = move_sprint_shift;
		this.move_dash_e = move_dash_e;
		this.consume_health_v = consume_health_v;
		this.consume_stamina_b = consume_stamina_b;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.cursorX = scene.add.image(0, 0, "CursorX");
		this.cursorX.setOrigin(0.5, 0.5);

		scene.physics.world.enable(this);
		(this.body as Phaser.Physics.Arcade.Body)
		.setCollideWorldBounds(true)
		.setBounce(0)
		.setSize(15, 30)
		.setOffset(-7, -9); // This is the hitbox

		scene.physics.add.existing(this.rectangle_1, true);
		const blockBody = this.rectangle_1.body as Phaser.Physics.Arcade.Body;
		blockBody.setSize(15, 25);

		scene.cameras.main.startFollow(this, true, 0.1, 0.1).setDeadzone(50, 50);
		scene.cameras.main.fadeIn(1000, 0, 0, 0);

		this.scene.input.mouse?.disableContextMenu();
		this.scene.input.on('pointerdown', () => {
			this.scene.input.mouse?.requestPointerLock();
		});

		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
		this.scene.events.on(Phaser.Scenes.Events.DESTROY, () => {
			this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.update, this);
		});

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
					this._HUD.updateEnergyDrinkAmount(this.energyDrinkAmount);
					this._HUD.updateHealthPackAmount(this.healthPackAmount);
					this._HUD.updateStamina(this.currentStamina / this.maxStamina);
					this._HUD.updateHealth(this.currentHealth / this.maxHealth);
				}
			},
			configurable: true,
			enumerable: true
		});

		const camera = this.scene.cameras.main;
		this.vCursor = { x: camera.width/2, y: camera.height/2 };

		this.scene.input.on('pointermove', (pointer: Phaser.Input.Pointer) => {
			if (this.scene.input.mouse?.locked) {
				this.vCursor.x += pointer.movementX * 0.5;
				this.vCursor.y += pointer.movementY * 0.5;
				this.vCursor.x = Phaser.Math.Clamp(this.vCursor.x, 0, camera.width);
				this.vCursor.y = Phaser.Math.Clamp(this.vCursor.y, 0, camera.height);
			}
		});

		this.scene.input.on('pointerlockchange', (_: any, isLocked: boolean) => {
			if (!isLocked) {
				this.vCursor.x = camera.width / 2;
				this.vCursor.y = camera.height / 2;
			}
		});

		/* END-USER-CTR-CODE */
	}

	private shieldIcon: Phaser.GameObjects.Image;
	public rectangle_1: Phaser.GameObjects.Sprite;
	private arcadesprite_1: Phaser.GameObjects.Sprite;
	private move_left_a: Phaser.Input.Keyboard.Key;
	private move_right_d: Phaser.Input.Keyboard.Key;
	private move_up_w: Phaser.Input.Keyboard.Key;
	private move_up_space: Phaser.Input.Keyboard.Key;
	private move_sprint_shift: Phaser.Input.Keyboard.Key;
	private move_dash_e: Phaser.Input.Keyboard.Key;
	private consume_health_v: Phaser.Input.Keyboard.Key;
	private consume_stamina_b: Phaser.Input.Keyboard.Key;
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
	public maxHealth: number = 100;
	public healthRegenDelay: number = 1000;
	public healthRegenMultiplier: number = 0.1;
	public blockStaminaPenalty: number = 20;

	/* START-USER-CODE */
	// Health related properties
	private cursorX: Phaser.GameObjects.Image;

	private currentHealth: number = this.maxHealth;

	// Stamina related properties
	private _HUD: PlayerHUD;
	private currentStamina: number = this.maxStamina;
	private lastStaminaUsed: number = 0;
	private jumpActive: boolean = false;
	private hasCharacterDied: boolean = false;

	private lastLeftTap: number = 0;
	private lastRightTap: number = 0;
	private dashTimer: number = 0;
	private dashing: boolean = false;
	private keyDelay: number = 250;
	private dashDirection: number = 0; // -1 for left, 1 for right
	private rightSide: boolean = true; // Initially the dash was cursor oriented, but now its switched to the last pressed direction

	// Inventory
	private healthPackAmount: number = 0;
	private energyDrinkAmount: number = 0;

	//Other
	private currentlyBlocking: boolean = false;
	private vCursor = {x: 0, y: 0};
	private lastValidRotation: number = 0; 
	private sideMultiplier: number = 1;

	private soundManager: SoundManager = SoundManager.getInstance();

	preUpdate(_time: number, _delta: number) {		
		if (!this.active) return;
		if (this.hasCharacterDied) return;

		const pointer = this.scene.input.activePointer;
		const camera = this.scene.cameras.main;

		if (!this.scene.input.mouse?.locked) {
			this.vCursor.x = pointer.x;
			this.vCursor.y = pointer.y;
			this.vCursor.x = Phaser.Math.Clamp(this.vCursor.x, 0, camera.width);
			this.vCursor.y = Phaser.Math.Clamp(this.vCursor.y, 0, camera.height);
		}

		const worldPoint = camera.getWorldPoint(this.vCursor.x, this.vCursor.y);
		this.cursorX.setPosition(worldPoint.x, worldPoint.y);

		const body = this.body as Phaser.Physics.Arcade.Body;

		const angle = Phaser.Math.Angle.Between(
			body.center.x, body.center.y,
			worldPoint.x, worldPoint.y
		);

		if (angle < 0.45 && angle > -0.9) {
			this.rectangle_1.rotation = angle;
			this.rectangle_1.setFlip(false, false);
			this.rectangle_1.setPosition(-2, -4);
			this.lastValidRotation = angle;
			this.arcadesprite_1.setFlipX(false);
			this.sideMultiplier = -1;
			//this.rightSide = true;
		} else if ((angle < -2.3 && angle >= -Math.PI) || (angle > 2.7 && angle <= Math.PI)) {
			this.rectangle_1.rotation = angle;
			this.rectangle_1.setFlip(false, true);
			this.rectangle_1.setPosition(2, -4);
			this.lastValidRotation = angle;
			this.arcadesprite_1.setFlipX(true);
			this.sideMultiplier = 1;
			//this.rightSide = false;
		}

		const rectBody = this.rectangle_1.body as Phaser.Physics.Arcade.Body;

		const offsetX = (Math.cos(this.lastValidRotation) * 20) + (this.sideMultiplier * 10);
		const offsetY = (Math.sin(this.lastValidRotation) * 20) - 10;

		rectBody.x = body.center.x + offsetX - rectBody.width / 2;
		rectBody.y = body.center.y + offsetY - rectBody.height / 2;
	}

	update(_time: number, delta: number) {
		if (!this.active) return;
		if (this.hasCharacterDied) return;

		//this.scene.sound.setListenerPosition(this.x, this.y);

		const body = this.body as Phaser.Physics.Arcade.Body;
		const now = this.scene.time.now;
		const isOnFloor = body.onFloor();

		let shouldRegenStamina = (now - this.lastStaminaUsed > this.staminaRegenDelay);
		let sprinting = this.move_sprint_shift.isDown;
		let walking = true;
		let sprintingActive = false;

		if (Phaser.Input.Keyboard.JustDown(this.consume_health_v)) {
			this.useHealthPack();
		}

		if (Phaser.Input.Keyboard.JustDown(this.consume_stamina_b)) {
			this.useEnergyDrink();
		}

		const pointer = this.scene.input.activePointer;

		if (pointer.isDown && pointer.rightButtonDown() 
			&& this.currentStamina - this.blockStaminaPenalty > 0) {
			shouldRegenStamina = false;
			this.shieldIcon.visible = true;
			this.currentlyBlocking = true;
		} else {
			this.shieldIcon.visible = false;
			this.currentlyBlocking = false;
		}

		// Jump
		if ((this.move_up_w.isDown || this.move_up_space.isDown) && body.onFloor()) {
			if (this.currentStamina - this.jumpStaminaLoss > 0 && !this.jumpActive) {
				this.currentStamina -= this.jumpStaminaLoss; 
				body.setVelocityY(-this.jumpHeight);
				this.jumpActive = true;
				this.lastStaminaUsed = now;
				walking = true;
			}
		} else if (body.velocity.y > 0 && !body.onFloor()) {
			this.jumpActive = false;
			this.lastStaminaUsed = now;
		} 

		if (this.dashing) {
			body.setVelocityX(this.dashDirection * this.dashSpeed);
			this.dashTimer -= delta;
			this.arcadesprite_1.play("sprint-player", true);
			if (this.dashTimer <= 0) {
				this.dashing = false;
				this.lastStaminaUsed = now;
			}
			return;
		}

		// Dash with E key
		if (this.move_dash_e.isDown && !this.dashing && this.currentStamina - this.dashStaminaLoss > 0) {
			this.dashing = true;
			this.dashDirection = this.rightSide ? 1 : -1;
			this.dashTimer = this.dashDuration;
			this.currentStamina -= this.dashStaminaLoss;
			this.lastStaminaUsed = now;
			this.soundManager.playSound2D("foley-jump-comic-swoosh-fast-02");
		}

		// Double-tap A for dash left
		if (Phaser.Input.Keyboard.JustDown(this.move_left_a) && !this.dashing && this.currentStamina - this.dashStaminaLoss > 0) {
			if (now - this.lastLeftTap < this.keyDelay) {
				this.dashing = true;
				this.dashDirection = -1;
				this.dashTimer = this.dashDuration;
				this.currentStamina -= this.dashStaminaLoss;
				this.lastStaminaUsed = now;
				this.soundManager.playSound2D("foley-jump-comic-swoosh-fast-02");
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
				this.soundManager.playSound2D("foley-jump-comic-swoosh-fast-02");
			}
			this.lastRightTap = now;
			this.rightSide = true;
		}

		if (this.move_left_a.isDown && this.move_right_d.isDown) {
			// If both keys are pressed, do nothing
			body.setVelocityX(0);
			walking = false;
			this.arcadesprite_1.play("idle-player", true);
		} else if (this.move_left_a.isDown) { // Run left
			if (sprinting && this.currentStamina - this.sprintStaminaLoss > 0) {
				this.currentStamina -= this.sprintStaminaLoss;
				body.setVelocityX(-this.runSpeed);
				this.lastStaminaUsed = now;
				this.arcadesprite_1.play("sprint-player", true);
				sprintingActive = true;
			} else { // Walk left + regen
				body.setVelocityX(-this.walkSpeed);
				if (shouldRegenStamina && this.currentStamina + this.staminaRegen < this.maxStamina) {
					this.currentStamina += this.staminaRegen;
				}
				if (isOnFloor) this.arcadesprite_1.play("walking-player", true);
			}
			this.rightSide = false;
		} else if (this.move_right_d.isDown) { // Run right
			if (sprinting && this.currentStamina - this.sprintStaminaLoss > 0) {
				this.currentStamina -= this.sprintStaminaLoss;
				body.setVelocityX(this.runSpeed);
				this.lastStaminaUsed = now;
				this.arcadesprite_1.play("sprint-player", true);
				sprintingActive = true;
			} else { // Walk right + regen
				body.setVelocityX(this.walkSpeed);
				if (shouldRegenStamina && this.currentStamina + this.staminaRegen < this.maxStamina) {
					this.currentStamina += this.staminaRegen;
				}
				if (isOnFloor) this.arcadesprite_1.play("walking-player", true);
			}
			this.rightSide = true;
		} else {
			body.setVelocityX(0);
			walking = false;
			if (isOnFloor) this.arcadesprite_1.play("idle-player", true);
		}

		if (!walking && body.velocity.y === 0) { // Regenerate stamina when idle
			if (shouldRegenStamina && this.currentStamina + this.idleStaminaRegen < this.maxStamina) {
				this.currentStamina += this.idleStaminaRegen;
			}
		}

		if (!isOnFloor && !sprintingActive) {
			this.arcadesprite_1.play("fall-player", true);
		}

		// Update UI
		this._HUD.updateStamina(this.currentStamina / this.maxStamina);
		this._HUD.updateHealth(this.currentHealth / this.maxHealth);
	}

	private resetLevel() {
		if (this.scene && this.scene.cameras) {
			this.scene.cameras.main.stopFollow();
			this.scene.cameras.main.fadeOut(1000, 0, 0, 0).once('camerafadeoutcomplete', () => {
				this.scene.scene.restart();
				setTimeout(() => {
					this.soundManager.getCharacterPlayer();
				}, 100);
			});
		}
	}

	public dieFromEnvironment(deathCause: "hammer" | "fall") {
		if (this.hasCharacterDied) return; // Prevent multiple calls

		switch (deathCause) {
			case "hammer":
				this.soundManager.playSound2D("gore-guts-bloody-guts-drop-down-single-impact-wet-03");
				break;
			case "fall":
				this.soundManager.playSound2D("object-box-cardboard-medium-fall-02");
				break;
		}

		this.die(false);
	}

	public pickUpHealthPack() {
		this.soundManager.playSound2D("object-herb-pickup-02");
		this.healthPackAmount++;
		this._HUD.updateHealthPackAmount(this.healthPackAmount);
	}

	private useHealthPack() {
		if (this.healthPackAmount > 0 && this.currentHealth < this.maxHealth) {
			this.healthPackAmount--;
			this.currentHealth = this.maxHealth;
			this._HUD.updateHealth(this.currentHealth / this.maxHealth);
			this._HUD.updateHealthPackAmount(this.healthPackAmount);
		}
	}

	public pickUpEnergyDrink() {
		this.soundManager.playSound2D("object-herb-pickup-02");
		this.energyDrinkAmount++;
		this._HUD.updateEnergyDrinkAmount(this.energyDrinkAmount);
	}

	private useEnergyDrink() {
		if (this.energyDrinkAmount > 0 && this.currentStamina < this.maxStamina) {
			this.energyDrinkAmount--;
			this.currentStamina = this.maxStamina;
			this._HUD.updateStamina(this.currentStamina / this.maxStamina);
			this._HUD.updateEnergyDrinkAmount(this.energyDrinkAmount);
		}
	}

	public takeDamage(amount: number) {
		if (this.hasCharacterDied) return; // Prevent damage after death
		this.currentHealth -= amount;

		// Currently only bullets can damage the player
		this.soundManager.playSound2D("gore-impact-guts-wet-02");

		if (this.currentHealth <= 0) {
			this.die();
		} else {
			this._HUD.updateHealth(this.currentHealth / this.maxHealth);
		}
	}

	public tryBlock() : boolean {
		if (this.currentStamina - this.blockStaminaPenalty > 0 && this.currentlyBlocking) {
			this.currentStamina -= this.blockStaminaPenalty;
			this._HUD.updateStamina(this.currentStamina / this.maxStamina);
			this.soundManager.playSound2D("weapons-bullet-large-impact-metal-03");
			return true;
		}

		return false;
	}

	private die(slowAnimation: boolean = true) {
		if (this.hasCharacterDied) return; // Prevent multiple calls

		this.hasCharacterDied = true;
		this.currentHealth = 0;
		this._HUD.updateHealth(0);

		this.rectangle_1.setVisible(false);

		const body = this.body as Phaser.Physics.Arcade.Body;
		body.setVelocity(0, 0);

		if (slowAnimation) {
			this.arcadesprite_1.play({ key: "die-player", frameRate: 8, repeat: 0 },)
		} else {
			this.arcadesprite_1.play("die-player", true);
		}

		this.resetLevel();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
