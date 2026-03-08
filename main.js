import Phaser from 'phaser';
import { GameScene } from './scenes/GameScene.js';
import { CONFIG } from './config.js';

const config = {
    type: Phaser.AUTO,
    parent: 'game-container',
    width: CONFIG.WIDTH,
    height: CONFIG.HEIGHT,
    backgroundColor: '#1a1a1a',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: [GameScene]
};

new Phaser.Game(config);
