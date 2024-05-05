import Phaser from "phaser";

export default class SandFun extends Phaser.Scene {

	constructor() {
		super("SandFun");
		this.graphics = null;
		this.music = null;
	}

	preload() {
	}

	create() {
		this.graphics = this.add.graphics().setDepth(1);
	}

	update(time, delta) {
	}

	playMusic() {
		if (this.music) {
			this.music.play();
		}
	}

}
