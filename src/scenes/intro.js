export function runIntro() {
  return new Promise((resolve) => {
    const introVideo = document.getElementById('introVideo');
    const videoElem = document.getElementById('videoElem');
    const blackScreen = document.getElementById('blackScreen');

    videoElem.addEventListener('ended', () => {
      introVideo.classList.remove('visible');

      setTimeout(() => {
        blackScreen.classList.add('visible');
      }, 1000);

      setTimeout(() => {
        blackScreen.classList.remove('visible');
        resolve();
      }, 2500);
    });
  });
}
