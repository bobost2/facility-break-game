
// You can write more code here

import Character from "./Character";

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ConsumablePickup extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? -1, y ?? -1);

		// consumableImage
		const consumableImage = scene.add.image(0, 0, "EnergyDrink");
		consumableImage.scaleX = 0.9;
		consumableImage.scaleY = 0.9;
		this.add(consumableImage);

		// pickupCollision
		const pickupCollision = scene.add.rectangle(0, 0, 20, 20);
		pickupCollision.visible = false;
		pickupCollision.isStroked = true;
		this.add(pickupCollision);

		this.consumableImage = consumableImage;
		this.pickupCollision = pickupCollision;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.scene.events.once('update', () => {
			switch (this.consumableType) {
				case "HealthPack":
					this.consumableImage.setScale(1);
					this.consumableImage.setTexture("HealthPack");
					break;
				case "EnergyDrink":
					this.consumableImage.setScale(0.9);
					this.consumableImage.setTexture("EnergyDrink");
					break;
			}
		});

		this.scene.physics.add.existing(this.pickupCollision, true);

		const useConsumable = (character: Character) => {
			switch (this.consumableType) {
				case "HealthPack":
					character.pickUpHealthPack();
					break;
				case "EnergyDrink":
					character.pickUpEnergyDrink();
					break;
			}
			this.scene.children.remove(this);
			this.destroy();
		}

		const addColliders = () => {
			const characterPlayer = this.scene.children.list.find(obj => obj instanceof Character) as Character;

			if (characterPlayer) {
				this.scene.physics.add.overlap(characterPlayer, this.pickupCollision, () => {
					useConsumable(characterPlayer);
				});
			} else {
				console.warn("Character prefab not found in the scene. Retrying...");
				this.scene.time.delayedCall(100, addColliders);
			}
		}

		const updateCollisionBody = () => {
			const body = this.pickupCollision.body as Phaser.Physics.Arcade.Body;
			body.x = this.x + this.pickupCollision.x - body.halfWidth;
			body.y = this.y + this.pickupCollision.y - body.halfHeight;
		}

		updateCollisionBody();
		addColliders();
		/* END-USER-CTR-CODE */
	}

	private consumableImage: Phaser.GameObjects.Image;
	private pickupCollision: Phaser.GameObjects.Rectangle;
	public consumableType: "HealthPack"|"EnergyDrink" = "EnergyDrink";

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
