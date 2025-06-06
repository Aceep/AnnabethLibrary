const dialogues = {
  owlIntro: {
    background: '/assets/FoxNOwl.png',
    lines: [
      "OWL : Bienvenue dans la bibliothèque d'Annabeth, jeune renard.",
      "OWL : Je suis Annabeth le hibou, gardien des secrets anciens. Qu'est-ce qui t'amène ici ?",
      "FOX : Je cherche des réponses, des connaissances oubliées. Je veux en savoir plus sur les dieux grecs. As-tu des livres a me recommander ?",
      "OWL : Mieux, jeune renard, enonce-moi le nom d'un dieu, et je te menerai à lui.",
    ],
  },
  owl: {
    background: '/assets/backgrounds/library-night.jpg',
    books: [
      ['/assets/books/greek-mythology.jpg', 'Mythologie grecque'],
      ['/assets/books/olympus.jpg', 'L’Olympe'],
    ], 
    lines: [
      "Tu es de retour, renard. As-tu trouvé ce que tu cherchais ?",
      "Les dieux t’attendent.",
    ],
  },
  zeus: {
    background: '/assets/FoxNZeus.png',
    books: [
      ['/assets/books/La-Guerre-du-pavot.jpg', 'Pour me representer  quoi de plus approprié que la Guerre du Pavot de R.F Kuang (cest le début de la propagande oui oui) avec une héroïne qui est constamment en recherche de puissance à travers l invocation du plus fort et destructeur des dieux du panthéon. La puissance est la pierre angulaire du livre ; cest ce qui va guider ses choix.']
    ], 
    lines: [
      "ZEUS : Je suis Zeus, roi de l'Olympe.",
      "ZEUS : Pourquoi m’as-tu dérangé, petit renard ?",
        "FOX : Je suis à la recherche de connaissances, Zeus. J'ai entendu parler de ta puissance et de ta sagesse.",
        "ZEUS : La puissance, tu dis ? Tu veux en savoir plus sur la force et le pouvoir ?",
        "ZEUS : Eh bien, petite créature, la puissance est un outil dangereux. Elle peut être utilisée pour le bien ou pour le mal. Es-tu satisfait de cette réponse ? Maintenant, va-t'en.",
    ],
  },
  // etc...
};

// Display an image with  a white div at the bottom

export async function runDialogue(who) {
  const dialogueData = dialogues[who];
  if (!dialogueData) return;

  const backgroundElement = document.getElementById('animation');
  const textContent = document.getElementById('text-content');

  backgroundElement.style.display = 'block';

  if (backgroundElement) {
    backgroundElement.style.backgroundImage = `url(${dialogueData.background})`;
    backgroundElement.style.backgroundSize = 'cover';
    backgroundElement.style.backgroundPosition = 'center';
  }

  textContent.style.display = 'block';
  for (let i = 0; i < dialogueData.lines.length; i++) {
    textContent.textContent = ''; // clear previous line
    await typeLine(textContent, dialogueData.lines[i]);
    await waitForClick();
    if (dialogueData.books && i === dialogueData.lines.length - 2) {
      await displayBooks(dialogueData.books);
    }
  }

  // Laisser visible la dernière ligne
  textContent.textContent = dialogueData.lines[dialogueData.lines.length - 1];

  // Afficher le menu
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