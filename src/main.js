import { runIntro } from './scenes/intro.js';

let introStarted = false;

async function waitForFirstClick() {
  return new Promise((resolve) => {
    const handler = () => {
      document.removeEventListener('click', handler);
      resolve();
    };
    document.addEventListener('click', handler);
  });
}

function playAmbientMusic() {
  const ambient = new Audio('/sounds/ambient.mp3');
  ambient.loop = true;
  ambient.volume = 0.2;
  ambient.play().catch((err) => {
    console.warn('Ambient music failed to autoplay:', err);
  });
  window._ambientMusic = ambient;
}

async function checkOrientationAndStart() {
  const overlay = document.getElementById('orientation-overlay');
  const isPortrait = window.innerHeight > window.innerWidth;

  if (isPortrait) {
    overlay.style.display = 'flex';
  } else {
    overlay.style.display = 'flex';
    overlay.textContent = 'Cliquez pour lancer';

    if (!introStarted) {
      await waitForFirstClick();

      overlay.style.display = 'none';
      document.body.style.overflow = '';

      runIntro();
      playAmbientMusic();

      introStarted = true;
    }
  }
}


// Event listeners
window.addEventListener('load', checkOrientationAndStart);
window.addEventListener('resize', checkOrientationAndStart);
window.addEventListener('orientationchange', checkOrientationAndStart);
