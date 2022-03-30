import load from 'load.js';
import mainscreen from 'mainscreen.js';
import modes from 'modes.js';
import singlePlayer from 'singlePlayer.js';
import Duel from 'duel.js';
import DuelPrep from 'duelprep.js';

var config = {
    width: 1000,
    height: 600,
    backgroundColor: 0x000000,
    scene: [load, mainscreen, modes, singlePlayer, Duel, DuelPrep]
}

var game = new Phaser.Game(config);