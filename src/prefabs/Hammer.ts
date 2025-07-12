
// You can write more code here

import Character from "./Character";

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Hammer extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// hammerSprite
		const hammerSprite = scene.add.sprite(0, 0, "Hammer", 0);
		hammerSprite.scaleX = 1.5;
		hammerSprite.scaleY = 1.5;
		this.add(hammerSprite);

		// blockingVolume1
		const blockingVolume1 = scene.add.rectangle(-17, -48, 10, 50);
		blockingVolume1.setOrigin(0.5, 0);
		blockingVolume1.visible = false;
		blockingVolume1.isFilled = true;
		blockingVolume1.fillColor = 15837526;
		this.add(blockingVolume1);

		// blockingVolume2
		const blockingVolume2 = scene.add.rectangle(17, -48, 10, 50);
		blockingVolume2.setOrigin(0.5, 0);
		blockingVolume2.visible = false;
		blockingVolume2.isFilled = true;
		blockingVolume2.fillColor = 15837526;
		this.add(blockingVolume2);

		// killingVolume
		const killingVolume = scene.add.rectangle(0, -3, 38, 10);
		killingVolume.visible = false;
		killingVolume.isFilled = true;
		killingVolume.fillColor = 15615815;
		this.add(killingVolume);

		this.hammerSprite = hammerSprite;
		this.blockingVolume1 = blockingVolume1;
		this.blockingVolume2 = blockingVolume2;
		this.killingVolume = killingVolume;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.scene.events.once('update', () => {
			this.hammerSprite.play({
				"key":"hammer",
				"frameRate":12,
				"delay": this.initDelay,
				"repeat":-1,
				"repeatDelay": this.repeatDelay
			});
		});

		const coordMap: Record<string, { scaleY: number, offsetY: number }> = {
			"1": { scaleY: 50, offsetY: -3 },
			"2": { scaleY: 75, offsetY: 20 },
			"3": { scaleY: 95, offsetY: 40 },
			"4": { scaleY: 95, offsetY: 40 },
			"5": { scaleY: 95, offsetY: 40 },
			"6": { scaleY: 70, offsetY: 15 },
			"7": { scaleY: 60, offsetY: 5 },
			"8": { scaleY: 50, offsetY: -3 }
		};

		this.scene.physics.add.existing(this.blockingVolume1, true);
		this.scene.physics.add.existing(this.blockingVolume2, true);
		this.scene.physics.add.existing(this.killingVolume, true);

		const addColliders = () => {
			const characterPlayer = this.scene.children.list.find(obj => obj instanceof Character) as Character;

			if (characterPlayer) {
				this.scene.physics.add.collider(characterPlayer, this.blockingVolume1);
				this.scene.physics.add.collider(characterPlayer, this.blockingVolume2);

				this.scene.physics.add.overlap(characterPlayer, this.killingVolume, () => {
					characterPlayer.dieFromEnvironment();
				});
			} else {
				console.warn("Character prefab not found in the scene. Retrying...");
				this.scene.time.delayedCall(100, addColliders);
			}
		}

		addColliders();

		this.hammerSprite.on(
			Phaser.Animations.Events.ANIMATION_UPDATE,
			(_anim: Phaser.Animations.Animation, frame: Phaser.Animations.AnimationFrame) => {
				const coord = coordMap[frame.index.toString()];
				if (coord) {
					this.blockingVolume1.setSize(10, coord.scaleY);
					this.blockingVolume2.setSize(10, coord.scaleY);
					this.killingVolume.setPosition(0, coord.offsetY);

					const updateBody = (
						child: Phaser.GameObjects.Rectangle,
						width: number,
						height: number
					) => {
						const transMatrix = this.getWorldTransformMatrix();
						const worldPt = new Phaser.Math.Vector2();
						transMatrix.transformPoint(child.x, child.y, worldPt);

						const originX = child.originX;
						const originY = child.originY;
						const transX = worldPt.x - width * originX;
						const transY = worldPt.y - height * originY;

						const body = child.body as Phaser.Physics.Arcade.StaticBody;
						body.setSize(width, height);
						body.position.set(transX, transY);
					};

					updateBody(this.blockingVolume1, 10, coord.scaleY);
					updateBody(this.blockingVolume2, 10, coord.scaleY);

					const killingBody = this.killingVolume.body as Phaser.Physics.Arcade.StaticBody;
					updateBody(this.killingVolume, killingBody.width, killingBody.height);
				}
			}
		);
		/* END-USER-CTR-CODE */
	}

	private hammerSprite: Phaser.GameObjects.Sprite;
	private blockingVolume1: Phaser.GameObjects.Rectangle;
	private blockingVolume2: Phaser.GameObjects.Rectangle;
	private killingVolume: Phaser.GameObjects.Rectangle;
	public initDelay: number = 0;
	public repeatDelay: number = 500;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
