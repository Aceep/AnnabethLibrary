import { runIntro } from './scenes/intro.js';
import { runDialogue, showGodMenu } from './scenes/dialogue.js';

async function start() {
  await runIntro();                   
  await runDialogue('owlIntro');    
  showGodMenu();                    
}

start();
