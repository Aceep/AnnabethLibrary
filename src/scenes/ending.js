import { fadeOutAmbientMusic } from '../audio.js';

async function runEnding() {
  // La musique doit être coupée avant le vidage du DOM : passé ce point
  // l'élément <audio> n'existe plus et la boucle tournerait indéfiniment.
  const musicFadedOut = fadeOutAmbientMusic(1000);

  document.body.style.transition = 'opacity 1s';
  document.body.style.opacity = '0';
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await musicFadedOut;

  document.body.style.opacity = '1';
  document.body.innerHTML = '';
  document.body.classList.add('ending');

  const endingDiv = document.createElement('div');
  endingDiv.classList.add('ending-text');
  endingDiv.textContent = "Merci d'avoir joué !\nThe End";
  document.body.appendChild(endingDiv);

  await new Promise((resolve) => setTimeout(resolve, 5000));
  endingDiv.classList.add('fade-out');
  await new Promise((resolve) => setTimeout(resolve, 1000));

  endingDiv.remove();
}

export default runEnding;
