// Centralise l'accès aux deux <audio> déclarés dans index.html.
// Les scènes passent par ici plutôt que de construire leurs propres instances :
// un `new Audio(src)` détaché continue de jouer même après un vidage du DOM.

const AMBIENT_VOLUME = 0.2;

function ambientElement() {
  return document.getElementById('ambient-music');
}

function typingElement() {
  return document.getElementById('typing-sound');
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
