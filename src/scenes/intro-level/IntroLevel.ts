
// You can write more code here

/* START OF COMPILED CODE */

import Character from "../../prefabs/Character";
import PlayerHUD from "../../prefabs/ui/PlayerHUD";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class IntroLevel extends Phaser.Scene {

	constructor() {
		super("IntroLevel");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// editabletilemap
		this.cache.tilemap.add("editabletilemap_cc48068b-13f6-48c5-a9aa-d2adc5da5693", {
			format: 1,
			data: {
				width: 10,
				height: 10,
				orientation: "orthogonal",
				tilewidth: 32,
				tileheight: 32,
				tilesets: [
					{
						columns: 9,
						margin: 0,
						spacing: 0,
						tilewidth: 32,
						tileheight: 32,
						tilecount: 81,
						firstgid: 1,
						image: "IndustrialTiles",
						name: "IndustrialTiles",
						imagewidth: 288,
						imageheight: 288,
					},
					{
						columns: 9,
						margin: 2,
						spacing: 4,
						tilewidth: 32,
						tileheight: 36,
						tilecount: 45,
						firstgid: 82,
						image: "IndustrialObjects",
						name: "IndustrialObjects",
						imagewidth: 324,
						imageheight: 200,
					},
					{
						columns: 3,
						margin: 0,
						spacing: 0,
						tilewidth: 32,
						tileheight: 32,
						tilecount: 3,
						firstgid: 127,
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
						width: 40,
						height: 7,
						opacity: 1,
						data: [64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 64, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41],
					},
					{
						type: "tilelayer",
						name: "bg-layer",
						width: 40,
						height: 7,
						opacity: 1,
						data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					},
					{
						type: "tilelayer",
						name: "collision-layer",
						width: 40,
						height: 7,
						opacity: 1,
						data: [127, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 127, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 127, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 127, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 127, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					},
				],
			},
		});
		const editabletilemap = this.add.tilemap("editabletilemap_cc48068b-13f6-48c5-a9aa-d2adc5da5693");
		editabletilemap.addTilesetImage("IndustrialTiles");
		editabletilemap.addTilesetImage("IndustrialObjects");
		editabletilemap.addTilesetImage("CollisionsTilemap");

		// bg-layer
		editabletilemap.createLayer("bg-layer", [], 0, 0);

		// layer
		editabletilemap.createLayer("layer", ["IndustrialTiles"], 0, 0);

		// collision-layer
		const collision_layer = editabletilemap.createLayer("collision-layer", ["CollisionsTilemap"], 0, 0)!;
		collision_layer.visible = false;

		// characterPlayer
		const characterPlayer = new Character(this, 177, 136);
		this.add.existing(characterPlayer);

		// UI
		const uI = this.add.layer();

		// playerHUD
		const playerHUD = new PlayerHUD(this, 77, 118);
		playerHUD.scaleX = 1;
		playerHUD.scaleY = 1;
		uI.add(playerHUD);

		// text_1
		const text_1 = this.add.text(217, 62, "", {});
		text_1.text = "Sample text";
		text_1.setStyle({ "fontFamily": "Jersey10-Regular", "fontSize": "25px" });

		// lists
		const collisionList = [collision_layer];

		// collider
		this.physics.add.collider(characterPlayer, collisionList);

		// characterPlayer (prefab fields)
		characterPlayer.HUD = playerHUD;

		this.collision_layer = collision_layer;
		this.editabletilemap = editabletilemap;
		this.collisionList = collisionList;

		this.events.emit("scene-awake");
	}

	private collision_layer!: Phaser.Tilemaps.TilemapLayer;
	private editabletilemap!: Phaser.Tilemaps.Tilemap;
	private collisionList!: Phaser.Tilemaps.TilemapLayer[];

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.editorCreate();

		this.cameras.main.setBackgroundColor("#222a5c");

		this.physics.world.setBounds(0, 0, this.collision_layer.width, this.collision_layer.height);
		this.cameras.main.setBounds(0, 0, this.collision_layer.width, this.collision_layer.height);

		this.collision_layer.setCollision([127]);

		// show collision layer
		let debugLayer = false;
		if (debugLayer) {
			this.collision_layer.setVisible(true);
			this.collision_layer.setAlpha(0.25);
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
