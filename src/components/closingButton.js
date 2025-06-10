const closeButton = document.createElement('button');
  closeButton.textContent = '✕';
  closeButton.style.position = 'absolute';
  closeButton.style.top = '1rem';
  closeButton.style.right = '1rem';
  closeButton.style.fontSize = '1.5rem';
  closeButton.style.color = 'white';
  closeButton.style.background = 'transparent';
  closeButton.style.border = 'none';
  closeButton.style.cursor = 'pointer';


export function createClosingButton() {
    return closeButton;
  }

export function appendClosingButtonToModal(modal, onClick) {
    const closeButton = createClosingButton();
    closeButton.onclick = () => {
        if (onClick) {
        onClick();
        }
        modal.style.display = 'none';
        document.body.style.overflow = '';
    };
    modal.appendChild(closeButton);
}