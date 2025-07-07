import Phaser from "phaser";
import Level from "./scenes/Level";
import Preload from "./scenes/Preload";
import IntroLevel from "./scenes/intro-level/IntroLevel";

class Boot extends Phaser.Scene {

    constructor() {
        super("Boot");
    }

    preload() {
        //this.load.pack("pack", "assets/preload-asset-pack.json");
    }

    create() {

       this.scene.start("Preload");
    }
}

window.addEventListener('load', function () {
	
	const game = new Phaser.Game({
		pixelArt: true,
		width: 360,
		height: 202,
		backgroundColor: "#2f2f2f",
		parent: "game-container",
		scale: {
			mode: Phaser.Scale.ScaleModes.FIT,
			autoCenter: Phaser.Scale.Center.CENTER_BOTH
		},
		scene: [Boot, Preload, Level, IntroLevel],
		physics: {
			default: "arcade",
			arcade: {
				gravity: { x: 0, y: 500 },
				debug: true
			},
		}
	});

	window.addEventListener('keydown', (e) => {
		// Prevent Ctrl+W or Cmd+W (close tab)
		if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'w') {
			e.preventDefault();
		}
		// Prevent Ctrl+D or Cmd+D (bookmark)
		if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'd') {
			e.preventDefault();
		}
	});

	game.scene.start("Boot");
});