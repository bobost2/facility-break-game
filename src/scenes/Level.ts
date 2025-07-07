
// You can write more code here

/* START OF COMPILED CODE */

import PlayerHUD from "../prefabs/ui/PlayerHUD";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// editabletilemap
		this.cache.tilemap.add("editabletilemap_2e517558-f44f-4ab6-bf90-2cec48f4276d", {
			format: 1,
			data: {
				width: 10,
				height: 10,
				orientation: "orthogonal",
				tilewidth: 32,
				tileheight: 32,
				tilesets: [
					{
						columns: 3,
						margin: 0,
						spacing: 0,
						tilewidth: 32,
						tileheight: 32,
						tilecount: 3,
						firstgid: 1,
						image: "CollisionsTilemap",
						name: "CollisionsTilemap",
						imagewidth: 96,
						imageheight: 32,
					},
				],
				layers: [
					{
						type: "tilelayer",
						name: "layer",
						width: 20,
						height: 11,
						opacity: 1,
						data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					},
				],
			},
		});
		const editabletilemap = this.add.tilemap("editabletilemap_2e517558-f44f-4ab6-bf90-2cec48f4276d");
		editabletilemap.addTilesetImage("CollisionsTilemap");

		// fufuSuperDino
		const fufuSuperDino = this.add.image(428, 146, "FufuSuperDino");
		fufuSuperDino.scaleX = 0.5;
		fufuSuperDino.scaleY = 0.5;

		// text
		const text = this.add.text(421, 46, "", {});
		text.setOrigin(0.5, 0.5);
		text.text = "Phaser 3 + Phaser Editor v4\nVite + TypeScript";
		text.setStyle({ "align": "center", "fontFamily": "Arial", "fontSize": "3em" });

		// layer
		editabletilemap.createLayer("layer", ["CollisionsTilemap"], 0, 0);

		// ui
		const ui = this.add.layer();

		// playerHUD
		const playerHUD = new PlayerHUD(this, 82, 124);
		ui.add(playerHUD);

		this.editabletilemap = editabletilemap;

		this.events.emit("scene-awake");
	}

	private editabletilemap!: Phaser.Tilemaps.Tilemap;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
