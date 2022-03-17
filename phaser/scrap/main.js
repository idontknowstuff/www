import {LoadScene} from "./scenes/LoadScene";
import {MenuScene} from "./scenes/MenuScene";
import { CST } from "../CST.js"

let game = new Phaser.Game({
    // type: Phaser.AUTO,
    width: 100,
    height: 100,
    scene:[
        LoadScene, MenuScene
    ]
});