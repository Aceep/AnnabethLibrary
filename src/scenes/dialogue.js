import dialogues from '../data/dialogues.js';
import bookList from '../data/bookList.js';
import { appendClosingButtonToModal } from '../components/closingButton.js';
import runEnding  from './ending.js';

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
  // display the books list in a modal
  const booksListContainer = document.getElementById('books-list-container');
  booksListContainer.style.display = 'block';
  booksListContainer.innerHTML = '';
  const modal = document.createElement('div');
  modal.classList.add('modal');
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  modalContent.innerHTML = '<h2>Liste des livres</h2>';
  
  // Create a close button
  appendClosingButtonToModal(modal, () => {
    booksListContainer.style.display = 'none';
    document.body.style.overflow = '';
    runEnding();
  }
  );

  const booksList = document.createElement('ul');
  for (const [god, books] of Object.entries(bookList)) {
    const godItem = document.createElement('li');
    godItem.classList.add('text-white');
    godItem.textContent = god.toUpperCase();
    const booksUl = document.createElement('ul');
    books.forEach(book => {
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
  booksListContainer.style.display = 'block';
  document.getElementById('orientation-overlay').style.display = 'none';
  document.body.style.overflow = 'hidden';
  modal.onclick = (event) => {
    if (event.target === modal) {
      booksListContainer.style.display = 'none';
      document.body.style.overflow = ''; 
    }
  }
  document.body.appendChild(booksListContainer);
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

    document.getElementById('typing-sound').play();
  
    const interval = setInterval(() => {
      if (interrupted) {
        element.innerText = text;
        clearInterval(interval);
        document.removeEventListener('click', handler);
        document.getElementById('typing-sound').pause();
        document.getElementById('typing-sound').currentTime = 0;
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

      // Stop typing sound if the text is fully displayed
      if (i === text.length) {
        document.getElementById('typing-sound').pause();
        document.getElementById('typing-sound').currentTime = 0;
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
