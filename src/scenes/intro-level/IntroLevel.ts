
// You can write more code here

/* START OF COMPILED CODE */

import EnemyTurret from "../../prefabs/EnemyTurret";
import Door from "../../prefabs/Door";
import TriggerBox from "../../prefabs/TriggerBox";
import ConsumablePickup from "../../prefabs/ConsumablePickup";
import Character from "../../prefabs/Character";
import Hammer from "../../prefabs/Hammer";
import PlayerHUD from "../../prefabs/ui/PlayerHUD";
import { SoundManager } from "../../SoundManager";
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
						width: 120,
						height: 7,
						opacity: 1,
						data: [64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 15, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 13, 15, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 13, 15, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 13, 15, 14, 14, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 15, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 13, 15, 23, 23, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 24, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 33, 0, 0, 31, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 64, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 42, 0, 0, 40, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41],
					},
					{
						type: "tilelayer",
						name: "bg-layer",
						width: 120,
						height: 7,
						opacity: 1,
						data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 97, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 109, 110, 110, 111, 122, 120, 0, 96, 96, 96, 0, 0, 102, 104, 106, 0, 114, 0, 0, 0, 120, 0, 121, 0, 0, 124, 0, 0, 0, 0, 0, 0, 0, 109, 110, 110, 111, 0, 0, 100, 102, 0, 0, 123, 0, 0, 0, 0, 0, 101, 0, 0, 0, 0, 0, 106, 0, 0, 0, 0, 0, 105, 0, 109, 110, 110, 110, 111, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 127, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					},
					{
						type: "tilelayer",
						name: "collision-layer",
						width: 120,
						height: 7,
						opacity: 1,
						data: [127, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 127, 127, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 127, 127, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 127, 127, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 127, 127, 0, 0, 127, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 127, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 0, 0, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 129, 129, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127],
					},
				],
			},
		});
		const editabletilemap = this.add.tilemap("editabletilemap_cc48068b-13f6-48c5-a9aa-d2adc5da5693");
		editabletilemap.addTilesetImage("IndustrialTiles");
		editabletilemap.addTilesetImage("IndustrialObjects");
		editabletilemap.addTilesetImage("CollisionsTilemap");

		// bg-layer
		editabletilemap.createLayer("bg-layer", ["IndustrialObjects","CollisionsTilemap"], 0, 0);

		// enemies
		const enemies = this.add.layer();

		// enemyTurret
		const enemyTurret = new EnemyTurret(this, 2871, 28);
		enemies.add(enemyTurret);

		// enemyTurret_1
		const enemyTurret_1 = new EnemyTurret(this, 2983, 28);
		enemies.add(enemyTurret_1);

		// enemyTurret_2
		const enemyTurret_2 = new EnemyTurret(this, 3091, 28);
		enemies.add(enemyTurret_2);

		// objects
		const objects = this.add.layer();

		// tableHealth
		const tableHealth = this.add.image(1808, 143, "IndustrialObjects", 14);
		objects.add(tableHealth);

		// tableStamina
		const tableStamina = this.add.image(1968, 143, "IndustrialObjects", 14);
		objects.add(tableStamina);

		// doorComputer1
		const doorComputer1 = this.add.sprite(2689, 142, "Screen2", 0);
		doorComputer1.play("screen-2");
		objects.add(doorComputer1);

		// turretDoorEnterance
		const turretDoorEnterance = new Door(this, 2753, 128);
		objects.add(turretDoorEnterance);

		// triggerOpenEntrance
		const triggerOpenEntrance = new TriggerBox(this, 2688, 96);
		objects.add(triggerOpenEntrance);

		// turretDoorExit
		const turretDoorExit = new Door(this, 3264, 128);
		objects.add(turretDoorExit);

		// triggerOpenExit
		const triggerOpenExit = new TriggerBox(this, 3200, 95);
		objects.add(triggerOpenExit);

		// doorComputer
		const doorComputer = this.add.sprite(3202, 142, "Screen2", 0);
		doorComputer.play("screen-2");
		objects.add(doorComputer);

		// turretDoorExit_1
		const turretDoorExit_1 = new Door(this, 3744, 128);
		objects.add(turretDoorExit_1);

		// doorComputer_1
		const doorComputer_1 = this.add.sprite(3697, 142, "Screen2", 0);
		doorComputer_1.play("screen-2");
		objects.add(doorComputer_1);

		// triggerCloseDoor
		const triggerCloseDoor = new TriggerBox(this, 2811, 97);
		objects.add(triggerCloseDoor);

		// triggerActivateWeapons
		const triggerActivateWeapons = new TriggerBox(this, 2807, 97, 5, 128);
		objects.add(triggerActivateWeapons);

		// triggerActivateWeapons_1
		const triggerActivateWeapons_1 = new TriggerBox(this, 2871, 98, 5, 128);
		objects.add(triggerActivateWeapons_1);

		// triggerActivateWeapons_2
		const triggerActivateWeapons_2 = new TriggerBox(this, 2940, 97, 5, 128);
		objects.add(triggerActivateWeapons_2);

		// triggerDeactivateWeapons_1
		const triggerDeactivateWeapons_1 = new TriggerBox(this, 3220, 95, 5, 128);
		objects.add(triggerDeactivateWeapons_1);

		// triggerDeactivateWeapons_2
		const triggerDeactivateWeapons_2 = new TriggerBox(this, 3226, 96, 5, 128);
		objects.add(triggerDeactivateWeapons_2);

		// triggerDeactivateWeapons_3
		const triggerDeactivateWeapons_3 = new TriggerBox(this, 3232, 95, 5, 128);
		objects.add(triggerDeactivateWeapons_3);

		// pickups
		const pickups = this.add.layer();

		// energyDrink
		const energyDrink = new ConsumablePickup(this, 1968, 142);
		pickups.add(energyDrink);

		// healthPack
		const healthPack = new ConsumablePickup(this, 1808, 142);
		pickups.add(healthPack);

		// tutorialText
		const tutorialText = this.add.layer();

		// moveTipText
		const moveTipText = this.add.text(96, 64, "", {});
		moveTipText.text = "Use 'A' or 'D' to move.";
		moveTipText.setStyle({ "fontFamily": "Jersey10-Regular", "fontSize": "25px" });
		tutorialText.add(moveTipText);

		// sprintTipText
		const sprintTipText = this.add.text(418, 64, "", {});
		sprintTipText.text = "Use \"Shift\" to sprint.";
		sprintTipText.setStyle({ "fontFamily": "Jersey10-Regular", "fontSize": "25px" });
		tutorialText.add(sprintTipText);

		// dashTipText
		const dashTipText = this.add.text(706, 51, "", {});
		dashTipText.text = "Double tap \"A\"/\"D\" or \npress \"E\" to dash.";
		dashTipText.setStyle({ "fontFamily": "Jersey10-Regular", "fontSize": "25px" });
		tutorialText.add(dashTipText);

		// jumpTipText
		const jumpTipText = this.add.text(1229, 95, "", {});
		jumpTipText.text = "Use \"W\"/\"Space\" to jump.";
		jumpTipText.setStyle({ "fontFamily": "Jersey10-Regular", "fontSize": "25px" });
		tutorialText.add(jumpTipText);

		// consumablesTipText
		const consumablesTipText = this.add.text(1748, 63, "", {});
		consumablesTipText.text = "Use consumables to regenerate \nstamina or health instantly.";
		consumablesTipText.setStyle({ "fontFamily": "Jersey10-Regular", "fontSize": "25px" });
		tutorialText.add(consumablesTipText);

		// blockTipText
		const blockTipText = this.add.text(2296, 49, "", {});
		blockTipText.text = "Block bullets by holding \"Right Click\" \nand by moving the mouse in \nthe blocking direction";
		blockTipText.setStyle({ "fontFamily": "Jersey10-Regular", "fontSize": "25px" });
		tutorialText.add(blockTipText);

		// tutorialEndedText
		const tutorialEndedText = this.add.text(3505, 80, "", {});
		tutorialEndedText.setOrigin(0.5, 0);
		tutorialEndedText.text = "Tutorial finished.\nUnfortunately the demo too :(";
		tutorialEndedText.setStyle({ "align": "center", "fontFamily": "Jersey10-Regular", "fontSize": "25px" });
		tutorialText.add(tutorialEndedText);

		// layer
		editabletilemap.createLayer("layer", ["IndustrialTiles"], 0, 0);

		// collision-layer
		const collision_layer = editabletilemap.createLayer("collision-layer", ["CollisionsTilemap"], 0, 0)!;
		collision_layer.visible = false;

		// characterPlayer
		const characterPlayer = new Character(this, 177, 136);
		this.add.existing(characterPlayer);

		// obstacles
		const obstacles = this.add.layer();

		// hammer1
		const hammer1 = new Hammer(this, 1024, 112);
		obstacles.add(hammer1);

		// hammer2
		const hammer2 = new Hammer(this, 1087, 112);
		obstacles.add(hammer2);

		// UI
		const uI = this.add.layer();

		// playerHUD
		const playerHUD = new PlayerHUD(this, 77, 118);
		playerHUD.scaleX = 1;
		playerHUD.scaleY = 1;
		uI.add(playerHUD);

		// lists
		const collisionList = [collision_layer];

		// collider
		this.physics.add.collider(characterPlayer, collisionList);

		// triggerOpenEntrance (prefab fields)
		triggerOpenEntrance.triggerObject = turretDoorEnterance;
		triggerOpenEntrance.functionCall = "openDoor";

		// triggerOpenExit (prefab fields)
		triggerOpenExit.triggerObject = turretDoorExit;
		triggerOpenExit.functionCall = "openDoor";

		// triggerCloseDoor (prefab fields)
		triggerCloseDoor.triggerObject = turretDoorEnterance;
		triggerCloseDoor.functionCall = "closeDoor";

		// triggerActivateWeapons (prefab fields)
		triggerActivateWeapons.triggerObject = enemyTurret;
		triggerActivateWeapons.functionCall = "activate";

		// triggerActivateWeapons_1 (prefab fields)
		triggerActivateWeapons_1.triggerObject = enemyTurret_1;
		triggerActivateWeapons_1.functionCall = "activate";

		// triggerActivateWeapons_2 (prefab fields)
		triggerActivateWeapons_2.triggerObject = enemyTurret_2;
		triggerActivateWeapons_2.functionCall = "activate";

		// triggerDeactivateWeapons_1 (prefab fields)
		triggerDeactivateWeapons_1.triggerObject = enemyTurret;
		triggerDeactivateWeapons_1.functionCall = "deactivate";

		// triggerDeactivateWeapons_2 (prefab fields)
		triggerDeactivateWeapons_2.triggerObject = enemyTurret_1;
		triggerDeactivateWeapons_2.functionCall = "deactivate";

		// triggerDeactivateWeapons_3 (prefab fields)
		triggerDeactivateWeapons_3.triggerObject = enemyTurret_2;
		triggerDeactivateWeapons_3.functionCall = "deactivate";

		// healthPack (prefab fields)
		healthPack.consumableType = "HealthPack";

		// characterPlayer (prefab fields)
		characterPlayer.HUD = playerHUD;

		// hammer2 (prefab fields)
		hammer2.initDelay = 200;

		this.collision_layer = collision_layer;
		this.characterPlayer = characterPlayer;
		this.editabletilemap = editabletilemap;
		this.collisionList = collisionList;

		this.events.emit("scene-awake");
	}

	private collision_layer!: Phaser.Tilemaps.TilemapLayer;
	private characterPlayer!: Character;
	private editabletilemap!: Phaser.Tilemaps.Tilemap;
	private collisionList!: Phaser.Tilemaps.TilemapLayer[];

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.editorCreate();

		this.cameras.main.setBackgroundColor("#222a5c");

		this.physics.world.setBounds(0, 0, this.collision_layer.width, this.collision_layer.height);
		this.cameras.main.setBounds(0, 0, this.collision_layer.width, this.collision_layer.height);

		const blockingTileID = 127;
		const deathTileID = 129;

		this.collision_layer.setCollision([blockingTileID]);

		this.physics.add.overlap(
			this.characterPlayer,
			this.collision_layer,
			(player, tile) => {
				if (tile && tile instanceof Phaser.Tilemaps.Tile && tile.index === deathTileID) {
					(player as Character).dieFromEnvironment("fall");
				}
			},
			// Only trigger overlap if the tile is a Tile and its index is 129
			(_player, tile) => tile && tile instanceof Phaser.Tilemaps.Tile && tile.index === deathTileID,
			this
		);

		// show collision layer
		let debugLayer = false;
		if (debugLayer) {
			this.collision_layer.setVisible(true);
			this.collision_layer.setAlpha(0.25);
		}

		const soundManager = SoundManager.getInstance();
		if (!soundManager.isInitialized()) {
			soundManager.initialize(this);
			soundManager.playBackgroundMusic('tutorial-music');
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
