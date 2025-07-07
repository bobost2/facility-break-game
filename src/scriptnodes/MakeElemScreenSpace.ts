
// You can write more code here

/* START OF COMPILED CODE */

import { ScriptNode } from "@phaserjs/editor-scripts-base";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class MakeElemScreenSpace extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	awake() {
		if(!this.gameObject) {
			return;
		}
		if (!(this.gameObject instanceof Phaser.GameObjects.Container)) {
			return;
		}
		(this.gameObject as Phaser.GameObjects.Container).setScrollFactor(0);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
