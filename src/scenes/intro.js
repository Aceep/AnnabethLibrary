import { runDialogue } from './dialogue.js';

export function runIntro() {
  return new Promise(async (resolve) => {
    await runDialogue('intro');
    await runDialogue('owlIntro');
  });
}


