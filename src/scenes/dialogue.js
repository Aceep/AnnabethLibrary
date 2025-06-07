import dialogues from '../data/dialogues.js';

// Display an image with  a white div at the bottom

export async function runDialogue(who) {
  const dialogueData = dialogues[who];
  if (!dialogueData) return;

  const backgroundElement = document.getElementById('animation');
  const textContent = document.getElementById('text-content');

  if (backgroundElement) {
    backgroundElement.classList.add('fade-out');
    await new Promise(resolve => setTimeout(resolve, 1000)); 
  }

  backgroundElement.style.display = 'block';
  if (backgroundElement) {
    backgroundElement.style.backgroundImage = `url(${dialogueData.background})`;
    backgroundElement.style.backgroundSize = 'cover';
    backgroundElement.style.backgroundPosition = 'center';
  }


  if (backgroundElement) {
    backgroundElement.classList.remove('fade-out');
    backgroundElement.classList.add('fade-in');
    await new Promise(resolve => setTimeout(resolve, 500));
    backgroundElement.classList.remove('fade-in');
  }

  textContent.style.display = 'block';
  for (let i = 0; i < dialogueData.lines.length; i++) {
    textContent.textContent = '';
    await typeLine(textContent, dialogueData.lines[i]);
    await waitForClick();
    if (dialogueData.books && i === dialogueData.lines.length - 2) {
      await displayBooks(dialogueData.books);
    }
  }


  textContent.textContent = dialogueData.lines[dialogueData.lines.length - 1];


  if (who !== 'intro') 
    showGodMenu();
}


async function displayBooks(books) {
  // Créer une image flottante pour la couverture
  const img = document.createElement('img');
  img.classList.add('book-item');
  document.body.appendChild(img);

  const descriptionBox = document.getElementById('text-content');

  for (const [imgSrc, description] of books) {
    img.src = imgSrc;
    img.alt = description;

    // Vider et afficher la description dans la boîte dialogue principale
    descriptionBox.textContent = '';
    await typeLine(descriptionBox, description);

    // Attendre un clic avant de passer au suivant
    await waitForClick();
  }

  // Nettoyer l'image après affichage de tous les livres
  img.remove();
}

function typeLine(element, text, speed = 30) {
  return new Promise((resolve) => {
    let i = 0;
    let interrupted = false;

    const handler = () => {
      interrupted = true;
    };

    document.addEventListener('click', handler);

    const interval = setInterval(() => {
      if (interrupted) {
        element.innerText = text;
        clearInterval(interval);
        document.removeEventListener('click', handler);
        resolve();
        return;
      }

      element.innerText += text[i];
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        document.removeEventListener('click', handler);
        resolve();
      }
    }, speed);
  });
}

function waitForClick() {
  return new Promise((resolve) => {
    const handler = () => {
      document.removeEventListener('click', handler);
      resolve();
    };
    document.addEventListener('click', handler);
  });
}

export function showGodMenu() {
  const gods = ['zeus', 'hera','athena', 'poseidon', 'ares', 'hephaistos', 'aphrodite', 'demeter', 'apollon', 'artemis', 'hermes', 'dionysos', 'hades'];
  const menu = document.createElement('div');
  menu.classList.add('menu');

  gods.forEach((god) => {
    const btn = document.createElement('button');
    btn.textContent = god.toUpperCase();
    btn.onclick = async () => {
      menu.remove();
      await runDialogue(god);
    };
    menu.appendChild(btn);
  });

  document.body.appendChild(menu);
}