
// You can write more code here

import Character from "./Character";

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class TriggerBox extends Phaser.GameObjects.Rectangle {

	constructor(scene: Phaser.Scene, x?: number, y?: number, width?: number, height?: number) {
		super(scene, x ?? 0, y ?? 0, width ?? 20, height ?? 128);

		this.isStroked = true;
		this.strokeColor = 12145920;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.setVisible(false);
		this.scene.physics.add.existing(this, true);

		this.scene.events.once('update', () => {
			//this.setSize(this.width, this.height);
			//this.setPosition(x ?? 0, y ?? 0);
		});

		const addColliders = () => {
			const characterPlayer = this.scene.children.list.find(obj => obj instanceof Character) as Character;

			if (characterPlayer) {
				this.scene.physics.add.overlap(characterPlayer, this, () => {
					if (!this.triggerActivated && this.triggerObject) {
						this.triggerActivated = true;
						const func = (this.triggerObject as any)[this.functionCall];
						if (typeof func === "function") {
							func.call(this.triggerObject);
						}
					}
				});
			} else {
				console.warn("Character prefab not found in the scene. Retrying...");
				this.scene.time.delayedCall(100, addColliders);
			}
		}

		addColliders();

		/* END-USER-CTR-CODE */
	}

	public triggerObject!: Phaser.GameObjects.GameObject;
	public functionCall: string = "onTrigger";

	/* START-USER-CODE */
	private triggerActivated: boolean = false;

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
