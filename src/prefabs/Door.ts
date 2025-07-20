
// You can write more code here

import { SoundManager } from "../SoundManager";
import Character from "./Character";

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Door extends Phaser.GameObjects.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "Entry", frame ?? 0);

		/* START-USER-CTR-CODE */
		// Write your code here.
		scene.physics.add.existing(this, true); // true = static body

		const addColliders = () => {
			const characterPlayer = this.scene.children.list.find(obj => obj instanceof Character) as Character;

			if (characterPlayer) {
				this.scene.physics.add.collider(characterPlayer, this);
			} else {
				console.warn("[DOOR]: Character prefab not found in the scene. Retrying...");
				this.scene.time.delayedCall(100, addColliders);
			}
		}

		addColliders();
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */
	private soundManager = SoundManager.getInstance();

	// Write your code here.
	public openDoor() {
		this.soundManager.playSoundSpatial("door-open", this.x, this.y, { refDistance: 10, maxDistance: 300 });
		this.play({ key: "door-open", frameRate: 12, repeat: 0 });
		this.once(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
			const body = this.body as Phaser.Physics.Arcade.Body;
			body.enable = false;
		});
	}

	public closeDoor() {
		this.soundManager.playSoundSpatial("door-close", this.x, this.y, { refDistance: 10, maxDistance: 300 });
		this.play({ key: "door-close", frameRate: 12, repeat: 0 });
		this.once(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
			const body = this.body as Phaser.Physics.Arcade.Body;
			body.enable = true;
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
