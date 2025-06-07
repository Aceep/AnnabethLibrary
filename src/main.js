import { runIntro } from './scenes/intro.js';

let introStarted = false;

function checkOrientationAndStart() {
  const overlay = document.getElementById('orientation-overlay');
  const isPortrait = window.innerHeight > window.innerWidth;

  if (isPortrait) {
    overlay.style.display = 'flex';
  } else {
    overlay.style.display = 'none';
    if (!introStarted) {
      introStarted = true;
      runIntro();
    }
  }
}

// Event listeners
window.addEventListener('load', checkOrientationAndStart);
window.addEventListener('resize', checkOrientationAndStart);
window.addEventListener('orientationchange', checkOrientationAndStart);
