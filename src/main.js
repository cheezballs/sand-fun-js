import SandFun from "./sand-fun.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/favicon-32x32.png";

const config = {
	type: Phaser.AUTO,
	scale: {
		mode: Phaser.Scale.CENTER_BOTH,
		parent: "game-container",
		width: 600,
		height: 800
	},
	scene: SandFun
};

const game = new Phaser.Game(config);
