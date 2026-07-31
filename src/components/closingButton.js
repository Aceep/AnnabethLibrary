// Fabrique : chaque appel rend un nouveau bouton. Un noeud partagé entre
// plusieurs modales serait déplacé par le dernier appelant, laissant les
// précédentes sans moyen de fermeture.
export function createClosingButton() {
  const closeButton = document.createElement('button');
  closeButton.type = 'button';
  closeButton.classList.add('closing-button');
  closeButton.textContent = '✕';
  closeButton.setAttribute('aria-label', 'Fermer');

  return closeButton;
}

export function appendClosingButtonToModal(modal, onClick) {
  const closeButton = createClosingButton();

  closeButton.onclick = (event) => {
    event.stopPropagation();
    if (onClick) onClick();
  };

  modal.appendChild(closeButton);

  return closeButton;
}
