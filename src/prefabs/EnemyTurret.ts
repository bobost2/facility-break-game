
// You can write more code here

import { SoundManager } from "../SoundManager";
import Character from "./Character";

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class EnemyTurret extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// turretTrajectory
		const turretTrajectory = scene.add.tileSprite(25, 0, 10, 500, "TurretTrajectory");
		turretTrajectory.setOrigin(0.5, 0);
		turretTrajectory.alpha = 0.2;
		turretTrajectory.alphaTopLeft = 0.2;
		turretTrajectory.alphaTopRight = 0.2;
		turretTrajectory.alphaBottomLeft = 0.2;
		turretTrajectory.alphaBottomRight = 0.2;
		this.add(turretTrajectory);

		// turretGun
		const turretGun = scene.add.image(25, 0, "TurretGun");
		turretGun.setOrigin(0.5, 0);
		this.add(turretGun);

		// turretBase
		const turretBase = scene.add.image(0, 0, "TurretBase");
		turretBase.setOrigin(0, 0);
		this.add(turretBase);

		this.turretTrajectory = turretTrajectory;
		this.turretGun = turretGun;

		/* START-USER-CTR-CODE */
		this.turretTrajectory.setVisible(false);

		const setPlayer = () => {
			const characterPlayer = this.scene.children.list.find(obj => obj instanceof Character) as Character;

			if (characterPlayer) {
				this.characterPlayer = characterPlayer;
			} else {
				console.warn("[TURRET]: Character prefab not found in the scene. Retrying...");
				this.scene.time.delayedCall(100, setPlayer);
			}
		}
		setPlayer();

		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
		this.scene.events.on(Phaser.Scenes.Events.DESTROY, () => {
			this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.update, this);
		});

		/* END-USER-CTR-CODE */
	}

	private turretTrajectory: Phaser.GameObjects.TileSprite;
	private turretGun: Phaser.GameObjects.Image;
	public aimingDuration: number = 1500;
	public freezingDuration: number = 200;
	public cooldownDuration: number = 200;
	public projectileSpeed: number = 600;
	public bulletDamage: number = 25;

	/* START-USER-CODE */
	private characterPlayer: Character;
	private isActive: boolean = false;
	private firingState: 'aiming' | 'freezing' | 'firing' | 'cooling' = 'aiming';
	private stateTimer: number = 0;
	private soundManager = SoundManager.getInstance();

	// Write your code here.
	public activate() {
		this.turretTrajectory.setVisible(true);
		this.isActive = true;
	}

	public deactivate() {
		this.turretTrajectory.setVisible(false);
		this.isActive = false;
	}

	fireProjectile() {
		const bullet = this.scene.add.image(this.x + 25, this.y, "TurretBullet");
		bullet.setOrigin(0.5, 0.5);
		bullet.rotation = this.turretGun.rotation;

		bullet.setDepth(this.depth - 1);

		this.scene.physics.add.existing(bullet);
		const bulletBody = bullet.body as Phaser.Physics.Arcade.Body;

		bulletBody.setAngularVelocity(0);
		bulletBody.setAngularDrag(0);

		const speed = this.projectileSpeed;
		const velocityX = Math.cos(bullet.rotation + Math.PI / 2) * speed;
		const velocityY = Math.sin(bullet.rotation + Math.PI / 2) * speed;

		bulletBody.setVelocity(velocityX, velocityY);

		this.scene.physics.add.overlap(bullet, this.characterPlayer, (bullet, _player) => {
			bullet.destroy();
			this.characterPlayer.takeDamage(this.bulletDamage);
		});

		this.scene.physics.add.overlap(bullet, this.characterPlayer.rectangle_1, (bullet, _player) => {
			if (this.characterPlayer.tryBlock()) {
				bullet.destroy();
			}
		});

		this.scene.time.delayedCall(3000, () => {
			if (bullet.active) {
				bullet.destroy();
			}
		});

		bulletBody.setCollideWorldBounds(false);
	}

	private aimAtPlayer() {
		const angle = Phaser.Math.Angle.Between(this.x, this.y, this.characterPlayer.x, this.characterPlayer.y);
		const adjustedAngle = angle - Math.PI / 2.3; // epic magic number
		this.turretGun.rotation = adjustedAngle;
		this.turretTrajectory.rotation = adjustedAngle;
		
		const aimingProgress = Math.min(this.stateTimer / this.aimingDuration, 1);
		this.turretTrajectory.alpha = aimingProgress * 1;
	}

	update() {
		if (!this.scene || !this.scene.game || !this.isActive || !this.characterPlayer) return;

		const deltaTime = this.scene.game.loop.delta;
		this.stateTimer += deltaTime;

		switch (this.firingState) {
			case 'aiming':
				this.aimAtPlayer();

				if (this.stateTimer >= this.aimingDuration) {
					this.firingState = 'freezing';
					this.stateTimer = 0;
				}
				break;

			case 'freezing':
				this.turretTrajectory.alpha = 1;

				if (this.stateTimer >= this.freezingDuration) {
					this.firingState = 'firing';
					this.stateTimer = 0;
				}
				break;

			case 'firing':
				this.fireProjectile();
				this.soundManager.playSoundSpatial("sci-fi-space-laser-gun-short-silencer-03", this.x, this.y, { refDistance: 10, maxDistance: 300 });
				this.firingState = 'cooling';
				this.stateTimer = 0;
				this.turretTrajectory.alpha = 0;
				break;

			case 'cooling':
				this.aimAtPlayer();
				if (this.stateTimer >= this.cooldownDuration) {
					this.firingState = 'aiming';
					this.stateTimer = 0;
					this.turretTrajectory.alpha = 0;
				}
				break;
		}
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
