import { runIntro } from './scenes/intro.js';
import { playAmbientMusic } from './audio.js';

const PORTRAIT_MESSAGE =
  'Ce site est optimisé pour le mode paysage. Veuillez tourner votre appareil.';
const START_MESSAGE = 'Cliquez pour lancer';

let introStarted = false;

function isPortrait() {
  return window.innerHeight > window.innerWidth;
}

function overlayElement() {
  return document.getElementById('orientation-overlay');
}

// Appelé au chargement puis à chaque resize / rotation.
function refreshOrientationOverlay() {
  const overlay = overlayElement();
  if (!overlay) return;

  if (isPortrait()) {
    overlay.textContent = PORTRAIT_MESSAGE;
    overlay.style.display = 'flex';
    return;
  }

  // Une fois la partie lancée, l'overlay ne doit plus jamais réapparaître en
  // paysage : le redonner à voir masquerait le jeu sans possibilité de retour.
  if (introStarted) {
    overlay.style.display = 'none';
    return;
  }

  overlay.textContent = START_MESSAGE;
  overlay.style.display = 'flex';
}

async function startGame() {
  const overlay = overlayElement();
  if (overlay) overlay.style.display = 'none';
  document.body.style.overflow = '';

  // Déclenché dans la foulée du clic pour rester dans le geste utilisateur,
  // sans quoi le navigateur refuse la lecture.
  playAmbientMusic();

  await runIntro();
}

function handleStartClick() {
  if (introStarted) return;
  if (isPortrait()) return; // clic sur l'avertissement de rotation : on ignore

  // Positionné de façon synchrone, avant le moindre await : sinon plusieurs
  // clics (ou plusieurs écouteurs) lanceraient autant de parties concurrentes.
  introStarted = true;
  document.removeEventListener('click', handleStartClick);

  startGame();
}

// Un seul écouteur pour toute la durée de vie de la page.
document.addEventListener('click', handleStartClick);

window.addEventListener('load', refreshOrientationOverlay);
window.addEventListener('resize', refreshOrientationOverlay);
window.addEventListener('orientationchange', refreshOrientationOverlay);
