import dialogues from '../data/dialogues.js';
import bookList from '../data/bookList.js';
import { appendClosingButtonToModal } from '../components/closingButton.js';
import runEnding from './ending.js';
import { playTypingSound, stopTypingSound } from '../audio.js';

const visitedGods = new Set();

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


if (who !== 'intro' && who !== 'owlEnd') {
  visitedGods.add(who);

  const allGods = [
    'zeus', 'hera', 'athena', 'poseidon', 'ares',
    'hephaistos', 'aphrodite', 'demeter', 'apollon',
    'artemis', 'hermes', 'dionysos', 'hades'
  ];

  const allVisited = allGods.every(god => visitedGods.has(god));
  if (allVisited) {
    await runDialogue('owlEnd');
    return;
  }

  showGodMenu();
}

if (who === 'owlEnd') 
  await displayBooksList();
}

async function displayBooksList() {
  const booksListContainer = document.getElementById('books-list-container');
  booksListContainer.innerHTML = '';

  const modal = document.createElement('div');
  modal.classList.add('modal');

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  const title = document.createElement('h2');
  title.textContent = 'Liste des livres';
  modalContent.appendChild(title);

  // Unique porte de sortie de la modale. Le récapitulatif est le dernier
  // écran interactif : toute fermeture qui n'enchaînerait pas sur la scène
  // de fin laisserait le joueur sur un écran figé, sans menu ni suite.
  let closed = false;
  const closeBookList = () => {
    if (closed) return;
    closed = true;

    booksListContainer.style.display = 'none';
    document.body.style.overflow = '';
    runEnding();
  };

  appendClosingButtonToModal(modal, closeBookList);

  const booksList = document.createElement('ul');
  for (const [god, books] of Object.entries(bookList)) {
    const godItem = document.createElement('li');
    godItem.textContent = god.toUpperCase();

    const booksUl = document.createElement('ul');
    books.forEach((book) => {
      const bookItem = document.createElement('li');
      bookItem.textContent = book;
      booksUl.appendChild(bookItem);
    });

    godItem.appendChild(booksUl);
    booksList.appendChild(godItem);
  }

  modalContent.appendChild(booksList);
  modal.appendChild(modalContent);
  booksListContainer.appendChild(modal);

  // 'flex' et non 'block' : le centrage du conteneur est défini en CSS.
  booksListContainer.style.display = 'flex';
  document.body.style.overflow = 'hidden';

  // Clic en dehors de la boîte : le conteneur occupe tout l'écran, c'est lui
  // qui reçoit l'événement, pas la modale.
  booksListContainer.onclick = (event) => {
    if (event.target === booksListContainer) closeBookList();
  };
}

async function displayBooks(books) {
  const img = document.createElement('img');
  img.classList.add('book-item');

img.onclick = (event) => {
  event.stopPropagation(); 
  
  if (img.style.zIndex === '11000') {
    img.style.zIndex = '9000';
  } else {
    img.style.zIndex = '11000';
  }

};

  const animationContainer = document.getElementById('animation');
  animationContainer.appendChild(img);

  const descriptionBox = document.getElementById('text-content');

  for (const [imgSrc, description] of books) {
    img.src = imgSrc;
    img.alt = description;

    descriptionBox.textContent = '';
    await typeLine(descriptionBox, description);

    // restore the image to its original position
    img.style.zIndex = '9000';

    await waitForClick();
  }

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

    playTypingSound();

    const finish = () => {
      clearInterval(interval);
      document.removeEventListener('click', handler);
      stopTypingSound();
      resolve();
    };

    const interval = setInterval(() => {
      if (interrupted) {
        element.innerText = text;
        finish();
        return;
      }

      element.innerText += text[i];
      i++;

      if (i >= text.length) finish();
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
  const gods = [
    'zeus', 'hera', 'athena', 'poseidon', 'ares',
    'hephaistos', 'aphrodite', 'demeter', 'apollon',
    'artemis', 'hermes', 'dionysos', 'hades'
  ];

  const existingMenu = document.querySelector('.menu');
  if (existingMenu) existingMenu.remove();

  const menu = document.createElement('div');
  menu.classList.add('menu');

  gods.forEach((god) => {
    const btn = document.createElement('button');
    btn.textContent = god.toUpperCase();
    btn.style.whiteSpace = 'nowrap';
    btn.onclick = async () => {
      menu.remove();
      await runDialogue(god);
    };
    menu.appendChild(btn);
  });

  document.body.appendChild(menu);

  setTimeout(() => {
    const rect = menu.getBoundingClientRect();
    const overflowX = rect.right > window.innerWidth;
    const overflowY = rect.bottom > window.innerHeight;

    if (overflowX || overflowY) {
      menu.style.maxHeight = '80vh';
      menu.style.overflowY = 'auto';
      menu.style.right = '10px';
    }
  }, 0);
}
