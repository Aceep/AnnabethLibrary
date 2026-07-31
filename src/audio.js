// Centralise l'accès aux deux <audio> déclarés dans index.html.
// Les scènes passent par ici plutôt que de construire leurs propres instances :
// un `new Audio(src)` détaché continue de jouer même après un vidage du DOM.

import { assetUrl } from './assets.js';

const AMBIENT_VOLUME = 0.2;

const AMBIENT_SRC = '/sounds/ambient.mp3';
const TYPING_SRC = '/sounds/typing.mp4';

// Vite ne réécrit pas l'attribut `src` des balises <audio> en fonction de
// `base` : renseigné dans le HTML, il pointerait vers la racine du domaine et
// renverrait un 404 sur un déploiement en sous-chemin. On l'affecte donc ici.
function mediaElement(id, src) {
  const element = document.getElementById(id);
  if (!element) return null;

  if (!element.getAttribute('src')) element.src = assetUrl(src);

  return element;
}

function ambientElement() {
  return mediaElement('ambient-music', AMBIENT_SRC);
}

function typingElement() {
  return mediaElement('typing-sound', TYPING_SRC);
}

export function playAmbientMusic() {
  const ambient = ambientElement();
  if (!ambient) return;

  ambient.loop = true;
  ambient.volume = AMBIENT_VOLUME;
  ambient.play().catch((err) => {
    console.warn("Musique d'ambiance : lecture automatique refusée", err);
  });
}

// Doit être appelé avant tout vidage du DOM : une fois l'élément retiré,
// plus personne ne peut arrêter la lecture.
export async function fadeOutAmbientMusic(duration = 1000) {
  const ambient = ambientElement();
  if (!ambient) return;

  const startVolume = ambient.volume;
  const steps = 20;
  const stepDuration = duration / steps;

  for (let i = steps - 1; i >= 0; i--) {
    ambient.volume = (startVolume * i) / steps;
    await new Promise((resolve) => setTimeout(resolve, stepDuration));
  }

  ambient.pause();
  ambient.currentTime = 0;
  ambient.volume = startVolume;
}

export function playTypingSound() {
  const typing = typingElement();
  if (!typing) return;

  typing.play().catch((err) => {
    console.warn('Son de frappe : lecture automatique refusée', err);
  });
}

export function stopTypingSound() {
  const typing = typingElement();
  if (!typing) return;

  typing.pause();
  typing.currentTime = 0;
}
