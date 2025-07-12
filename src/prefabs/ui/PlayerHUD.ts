
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PlayerHUD extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 87.01182838132256, y ?? 127.90512190015957);

		// StaminaBarUI
		const staminaBarUI = scene.add.container(113, -117);
		this.add(staminaBarUI);

		// barStaminaEmpty
		const barStaminaEmpty = scene.add.image(85, 13, "BarEmpty");
		staminaBarUI.add(barStaminaEmpty);

		// barStamina
		const barStamina = scene.add.tileSprite(21, 13, 128, 16, "BarStamina");
		barStamina.setOrigin(0, 0.5);
		staminaBarUI.add(barStamina);

		// staminaBolt
		const staminaBolt = scene.add.image(155, 13, "StaminaBolt");
		staminaBarUI.add(staminaBolt);

		// HealthBarUI
		const healthBarUI = scene.add.container(-59, -104);
		this.add(healthBarUI);

		// barHealthEmpty
		const barHealthEmpty = scene.add.image(72, 0, "BarEmpty");
		healthBarUI.add(barHealthEmpty);

		// barHealth
		const barHealth = scene.add.tileSprite(8, 0, 128, 16, "BarHealth");
		barHealth.setOrigin(0, 0.5);
		healthBarUI.add(barHealth);

		// heart
		const heart = scene.add.image(0, 0, "Heart");
		healthBarUI.add(heart);

		this.barStamina = barStamina;
		this.barHealth = barHealth;

		/* START-USER-CTR-CODE */
		this.setScrollFactor(0); // Make the HUD fixed to the camera
		/* END-USER-CTR-CODE */
	}

	private barStamina: Phaser.GameObjects.TileSprite;
	private barHealth: Phaser.GameObjects.TileSprite;

	/* START-USER-CODE */

	// Write your code here.
	private staminaBarMaxWidth: number = 128;
	private healthBarMaxWidth: number = 128;

	public updateStamina(staminaPercent: number) {
		const calcStaminaWidth = this.staminaBarMaxWidth * staminaPercent;
		this.barStamina.setSize(calcStaminaWidth, this.barStamina.height);
	}

	public updateHealth(healthPercent: number) {
		const calcHealthWidth = this.healthBarMaxWidth * healthPercent;
		this.barHealth.setSize(calcHealthWidth, this.barHealth.height);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
