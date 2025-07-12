
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PlayerHUD extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 87.01182838132256, y ?? 127.90512190015957);

		// consumablesGroup
		const consumablesGroup = scene.add.container(-60, -89);
		this.add(consumablesGroup);

		// staminaConsumableGroup
		const staminaConsumableGroup = scene.add.container(314.00001525878906, 0);
		consumablesGroup.add(staminaConsumableGroup);

		// energyDrinkUI
		const energyDrinkUI = scene.add.image(11, 9, "EnergyDrinkUI");
		staminaConsumableGroup.add(energyDrinkUI);

		// energyDrinkAmountText
		const energyDrinkAmountText = scene.add.text(0, 0, "", {});
		energyDrinkAmountText.setOrigin(1, 0);
		energyDrinkAmountText.text = "(B) x0";
		energyDrinkAmountText.setStyle({ "align": "right", "fontFamily": "Jersey10-Regular" });
		staminaConsumableGroup.add(energyDrinkAmountText);

		// healthConsumableGroup
		const healthConsumableGroup = scene.add.container(0, 0);
		consumablesGroup.add(healthConsumableGroup);

		// healthPackUI
		const healthPackUI = scene.add.image(0, 8, "HealthPackUI");
		healthConsumableGroup.add(healthPackUI);

		// healthPackAmountText
		const healthPackAmountText = scene.add.text(14, 0, "", {});
		healthPackAmountText.text = "x0 (V)";
		healthPackAmountText.setStyle({ "fontFamily": "Jersey10-Regular" });
		healthConsumableGroup.add(healthPackAmountText);

		// vitalBarsGroup
		const vitalBarsGroup = scene.add.container(-59, -117);
		this.add(vitalBarsGroup);

		// StaminaBarUI
		const staminaBarUI = scene.add.container(172, 0);
		vitalBarsGroup.add(staminaBarUI);

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
		const healthBarUI = scene.add.container(0, 13);
		vitalBarsGroup.add(healthBarUI);

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

		this.energyDrinkAmountText = energyDrinkAmountText;
		this.healthPackAmountText = healthPackAmountText;
		this.barStamina = barStamina;
		this.barHealth = barHealth;

		/* START-USER-CTR-CODE */
		this.setScrollFactor(0); // Make the HUD fixed to the camera
		/* END-USER-CTR-CODE */
	}

	private energyDrinkAmountText: Phaser.GameObjects.Text;
	private healthPackAmountText: Phaser.GameObjects.Text;
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

	public updateHealthPackAmount(amount: number) {
		this.healthPackAmountText.text = `x${amount} (V)`;
	}

	public updateEnergyDrinkAmount(amount: number) {
		this.energyDrinkAmountText.text = `(B) x${amount}`;
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
