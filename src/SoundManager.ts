import Character from "./prefabs/Character";

export class SoundManager {
	private static instance: SoundManager;
	private static musicVolume: number = 0.5;
	private static soundVolume: number = 1.0;
	private scene: Phaser.Scene;
	private backgroundMusic: Phaser.Sound.BaseSound;
	private initialized: boolean = false;
	private characterPlayer: Character;
	private activeSpatialSounds: any[] = [];

	public getCharacterPlayer()
	{
		const instance = SoundManager.instance;

		const character = instance.scene?.children?.list?.find(obj => obj instanceof Character) as Character;
		if (character) {
			instance.characterPlayer = character;
		} else {
			console.warn("[SOUND MANAGER]: Character prefab not found in the scene. Retrying...");
			setTimeout(this.getCharacterPlayer, 100);
		}
	};

	static getInstance(): SoundManager {
		if (!SoundManager.instance) {
			SoundManager.instance = new SoundManager();
			SoundManager.instance.getCharacterPlayer();
		}
		return SoundManager.instance;
	}

	initialize(scene: Phaser.Scene) {
		if (!this.initialized) {
			this.scene = scene;
			this.initialized = true;

			this.scene.events.on('update', this.updateAllSpatialSounds, this);
			this.scene.events.on('shutdown', this.cleanup, this);
			this.scene.events.on('destroy', this.cleanup, this);
		}
	}

	

	isInitialized(): boolean {
		return this.initialized && this.backgroundMusic && this.backgroundMusic.isPlaying;
	}

	playBackgroundMusic(key: string) {
		if (this.backgroundMusic) {
			this.backgroundMusic.stop();
		}

		this.backgroundMusic = this.scene.sound.add(key, {
			loop: true,
			volume: SoundManager.musicVolume
		});

		this.backgroundMusic.play();
	}

	playSound2D(key: string) {
		this.scene.sound.play(key, {
			loop: false,
			volume: SoundManager.soundVolume,
		});
	}

	playSoundSpatial(key: string, x: number, y: number, options = { refDistance: 5, maxDistance: 20 }) {
		const relX = x - this.characterPlayer.x;
		const relY = y - this.characterPlayer.y;
		const sound = this.scene.sound.add(key, {
			loop: false,
			volume: SoundManager.soundVolume,
			source: {
				x: relX,
				y: relY,
				refDistance: options.refDistance,
				maxDistance: options.maxDistance,
				rolloffFactor: 1,
				distanceModel: 'linear',
			}
		});
		sound.play();
		this.activeSpatialSounds.push({ sound, x, y });
		return sound;
	}

	stopBackgroundMusic() {
		if (this.backgroundMusic) {
			this.backgroundMusic.stop();
			this.initialized = false;
		}
	}

	private updateAllSpatialSounds() {
		if (!this.activeSpatialSounds || !this.characterPlayer) return;

		for (const { sound, x, y } of this.activeSpatialSounds) {
			sound.x = x - this.characterPlayer.x;
			sound.y = y - this.characterPlayer.y;
		}
	}

	private cleanup = () => {
		if (this.scene && this.scene.events) {
			this.scene.events.off('update', this.updateAllSpatialSounds, this);
			this.scene.events.off('shutdown', this.cleanup, this);
			this.scene.events.off('destroy', this.cleanup, this);
		}

		this.initialized = false;
	}
}