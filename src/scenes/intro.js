import { runDialogue } from './dialogue.js';
import dialogues from '../data/dialogues.js';
import { assetUrl } from '../assets.js';

// Les fonds sont chargés pendant que le joueur lit l'introduction. Sans cela,
// chaque changement de dieu déclenche son téléchargement derrière le fondu
// d'une seconde, ce qui laisse voir un écran vide.
function preloadBackgrounds() {
  const seen = new Set();

  for (const scene of Object.values(dialogues)) {
    if (!scene.background || seen.has(scene.background)) continue;
    seen.add(scene.background);
    new Image().src = assetUrl(scene.background);
  }
}

export async function runIntro() {
  await runDialogue('intro');
  preloadBackgrounds();
  await runDialogue('owlIntro');
}
