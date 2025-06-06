import { runDialogue } from './dialogue.js';

export function runIntro() {
  return new Promise((resolve) => {
    const introVideo = document.getElementById('introVideo');
    const videoElem = document.getElementById('videoElem');
    const blackScreen = document.getElementById('blackScreen');

    videoElem.addEventListener('ended', async () => {
      introVideo.classList.remove('visible');
      blackScreen.classList.add('visible');

      setTimeout(async () => {
        blackScreen.classList.remove('visible');
        setTimeout(async () => {
          await runDialogue('owlIntro');
          resolve();
        }, 500);
      }, 1500);
    });
  });
}


