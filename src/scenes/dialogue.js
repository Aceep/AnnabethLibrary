const dialogues = {
  intro: {  
    background: '/assets/intro/AnnabethLibrary.png',
  lines: [
    'FOXY : Oh quelle librarie bien cachee ! Je me demande ce que je vais y trouver...',
    `FOXY : La porte est entre-ouverte, je vais pouvoir y entrer sans me faire remarquer.`
  ],
},
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
  hera: {
    background: '/assets/FoxNHera.png',
    books: [
      ['/assets/books/Les-Misérables.jpg', 'Pour me représenter, je pense à "Les Misérables" de Victor Hugo. Cest un livre qui parle de la justice, de la rédemption et de la lutte contre l’injustice sociale. Hera est la déesse du mariage et de la famille, mais elle est aussi connue pour sa jalousie et sa vengeance.']
    ],
    lines: [
  "HERA : Je suis Héra, déesse du mariage et des serments inviolables.",
  "HERA : On t’a laissé entrer ? Quelle audace.",
  "FOX : Je viens avec respect. Je cherche un foyer pour mes questions.",
  "HERA : Un foyer… fragile sans vigilance.",
  "HERA : Lis avec le cœur, petit, ou reste dehors.",
],

  },
  athena: {
    background: '/assets/FoxNAthena.png',
    books: [
      ['/assets/books/Le-Monde-de-Narnia.jpg', 'Pour me représenter, je pense à "Le Monde de Narnia" de C.S. Lewis. Cest un livre qui parle de la sagesse, de la stratégie et de la connaissance. Athena est la déesse de la sagesse et de la guerre, et elle est souvent représentée comme une guerrière sage et stratégique.']
    ],
lines: [
  "ATHENA : Je suis Athéna, déesse de la sagesse et des batailles stratégiques.",
  "ATHENA : Tu as des yeux vifs, renard. C’est un bon début.",
  "FOX : Je veux apprendre. J’ai soif de comprendre ce monde de lettres.",
  "ATHENA : Alors prends ce fil. Il ne sert pas à fuir… mais à tisser ton savoir.",
  "ATHENA : Ne confonds jamais ruse et sagesse. L’une trompe, l’autre éclaire.",
],

  },
  poseidon: {
    background: '/assets/FoxNPoseidon.png',
    books: [
      ['/assets/books/Le-Seigneur-des-anneaux.jpg', 'Pour me représenter, je pense à "Le Seigneur des Anneaux" de J.R.R. Tolkien. Cest un livre qui parle de la puissance, de la force et de la domination. Poseidon est le dieu de la mer et des tempêtes, et il est souvent représenté comme un dieu puissant et dominateur.']
    ],
  lines: [
    "POSEIDON : Je suis Poséidon, seigneur des mers et des tempêtes.",
    "POSEIDON : La mer et les livres ont ceci de commun : leurs profondeurs te noient si tu n’es pas prêt.",
    "FOX : Je suis prêt à plonger, même si je ne sais pas nager.",
    "POSEIDON : Alors choisis bien ton souffle, petit renard.",
    "POSEIDON : Certains récits engloutissent ceux qui les ouvrent.",
  ],
  },
  ares: {
    background: '/assets/FoxNAres.png',
    books: [
      ['/assets/books/Le-Trône-de-Fer.jpg', 'Pour me représenter, je pense à "Le Trône de Fer" de George R.R. Martin. Cest un livre qui parle de la guerre, de la violence et de la conquête. Ares est le dieu de la guerre et de la violence, et il est souvent représenté comme un dieu sanguinaire et impitoyable.']
    ],
    lines: [
  "ARES : Je suis Arès, dieu de la guerre et de la violence.",
  "ARES : Pourquoi viens-tu troubler ma paix ?",
  "FOX : Je cherche des réponses, Arès. J'ai entendu parler de ta puissance et de ta force.",
  "ARES : La puissance et la force sont des qualités que tu dois apprendre à maîtriser. Mais dis-moi, qu'est-ce que tu cherches vraiment ?",
  "ARES : Tu sembles perdu, petit renard. Tu dois apprendre à te connaître avant de chercher des réponses ailleurs.",
],

  },
  hephaistos: {
    background: '/assets/FoxNHephaistos.png',
    books: [
      ['/assets/books/Le-Cycle-des-Rois.jpg', 'Pour me représenter, je pense à "Le Cycle des Rois" de Bernard Cornwell. Cest un livre qui parle de la forge, de la création et de l’artisanat. Hephaistos est le dieu de la forge et de l’artisanat, et il est souvent représenté comme un dieu créatif et ingénieux.']
    ],
lines: [
  "HEPHAISTOS : Je suis Héphaïstos, maître des forges et bâtisseur d’idées.",
  "HEPHAISTOS : Chaque livre ici a été façonné. Rien n’est né du hasard.",
  "FOX : Puis-je apprendre à construire mes pensées, moi aussi ?",
  "HEPHAISTOS : Bien sûr. Lis, casse, répare.",
  "HEPHAISTOS : Le savoir se forge comme le fer : au feu et à la patience.",
],

  },
  aphrodite: {
    background: '/assets/FoxNAphrodite.png',
    books: [
      ['/assets/books/Orgueil-et-Préjugés.jpg', 'Pour me représenter, je pense à "Orgueil et Préjugés" de Jane Austen. Cest un livre qui parle de l’amour, de la beauté et des relations humaines. Aphrodite est la déesse de l’amour et de la beauté, et elle est souvent représentée comme une déesse séduisante et charismatique.']
    ],
lines: [
  "APHRODITE : Je suis Aphrodite, déesse de l’amour, de la beauté et du désir.",
  "APHRODITE : Que viens-tu chercher avec ces yeux si pleins ?",
  "FOX : Une émotion peut-être… quelque chose qui me bouleverse.",
  "APHRODITE : Bonne réponse.",
  "APHRODITE : Laisse-toi toucher. C’est ainsi que commence le vrai voyage.",
],

  },
  demeter: {
    background: '/assets/FoxNDemeter.png',
    books: [
      ['/assets/books/Le-Petit-Prince.jpg', 'Pour me représenter, je pense à "Le Petit Prince" d’Antoine de Saint-Exupéry. Cest un livre qui parle de la nature, de la vie et de la mort. Demeter est la déesse de la nature et des saisons, et elle est souvent représentée comme une déesse maternelle et protectrice.']
    ],
lines: [
  "DEMETER : Je suis Déméter, gardienne des moissons et de la terre nourricière.",
  "DEMETER : Tu sens la forêt… c’est bien.",
  "FOX : Je cultive la curiosité. Elle pousse lentement.",
  "DEMETER : Comme tout ce qui vaut la peine.",
  "DEMETER : Lis doucement, petit renard. Sinon tu ne récolteras que du vent.",
],

  },
  apollon: {
    background: '/assets/FoxNApollon.png',
    books: [
      ['/assets/books/Le-Monde-de-Narnia.jpg', 'Pour me représenter, je pense à "Le Monde de Narnia" de C.S. Lewis. Cest un livre qui parle de la sagesse, de la stratégie et de la connaissance. Apollon est le dieu de la lumière, de la musique et de la poésie, et il est souvent représenté comme un dieu sage et inspirant.']
    ],
lines: [
  "APOLLON : Je suis Apollon, dieu du soleil, des arts et des oracles.",
  "APOLLON : Ah, un pelage flamboyant parmi mes rayons !",
  "FOX : Je cherche la beauté des mots et la lumière du sens.",
  "APOLLON : Alors écoute, autant que tu lis.",
  "APOLLON : L’harmonie se cache dans les silences entre les pages.",
],

  },
  artemis: {
    background: '/assets/FoxNArtemis.png',
    books: [
      ['/assets/books/Le-Cycle-des-Rois.jpg', 'Pour me représenter, je pense à "Le Cycle des Rois" de Bernard Cornwell. Cest un livre qui parle de la chasse, de la nature et de la vie sauvage. Artemis est la déesse de la chasse et de la nature, et elle est souvent représentée comme une déesse sauvage et indépendante.']
    ],
lines: [
  "ARTEMIS : Je suis Artémis, déesse de la chasse et des secrets nocturnes.",
  "ARTEMIS : Tu marches léger. Très bien.",
  "FOX : Je cherche la vérité. On m’a dit qu’elle courait vite.",
  "ARTEMIS : Elle fuit les sabots lourds et les cœurs bruyants.",
  "ARTEMIS : Sois patient. Tire seulement quand tu es prêt.",
],

  },
  hermes: {
    background: '/assets/FoxNHermes.png',
    books: [
      ['/assets/books/Le-Seigneur-des-anneaux.jpg', 'Pour me représenter, je pense à "Le Seigneur des Anneaux" de J.R.R. Tolkien. Cest un livre qui parle de la vitesse, de la ruse et de l’intelligence. Hermes est le dieu du commerce, des voyageurs et des voleurs, et il est souvent représenté comme un dieu rapide et rusé.']
    ],
lines: [
  "HERMES : Je suis Hermès, messager ailé et passeur de frontières.",
  "HERMES : Rapide, hein ? Mais pas assez pour lire entre les lignes.",
  "FOX : J’ai appris à suivre les traces, même dans le vent.",
  "HERMES : Parfait. Alors cherche les messages cachés, les notes de bas de page oubliées.",
  "HERMES : Là se trouve l’aventure… et parfois, la clef.",
],

  },
  dionysos: {
    background: '/assets/FoxNDionysos.png',
    books: [
      ['/assets/books/Le-Petit-Prince.jpg', 'Pour me représenter, je pense à "Le Petit Prince" d’Antoine de Saint-Exupéry. Cest un livre qui parle de la joie, de la fête et de la vie. Dionysos est le dieu de la vigne, du vin et de la fête, et il est souvent représenté comme un dieu joyeux et exubérant.']
    ],
lines: [
  "DIONYSOS : Je suis Dionysos, dieu du vin, de la fête et des mystères.",
  "DIONYSOS : Quelle tête sérieuse ! Tu crois que tout ici est logique ?",
  "FOX : Je croyais que les livres demandaient du silence.",
  "DIONYSOS : Erreur ! Certains chantent, d’autres dansent.",
  "DIONYSOS : Laisse-toi perdre. Tu verras : on lit mieux en étant un peu ivre.",
],

  },
  hades: {
    background: '/assets/FoxNHades.png',
    books: [
      ['/assets/books/Le-Cycle-des-Rois.jpg', 'Pour me représenter, je pense à "Le Cycle des Rois" de Bernard Cornwell. Cest un livre qui parle de la mort, de l’au-delà et de la vie après la mort. Hades est le dieu des enfers et de la mort, et il est souvent représenté comme un dieu sombre et mystérieux.']
    ],
lines: [
  "HADES : Je suis Hadès, roi des ombres et gardien des vérités oubliées.",
  "HADES : Tu es encore vivant ? Intéressant.",
  "FOX : Je n’ai pas peur du noir. J’y vois même plutôt bien.",
  "HADES : Alors lis… mais sache que certaines vérités n’aiment pas être réveillées.",
  "HADES : Tu pourrais y laisser plus qu’un poil ou deux.",
],

  },
  owlEnd: {
    background: '/assets/FoxNOwl.png',
    lines: [
      "OWL : Tu as rencontré les dieux, jeune renard. As-tu trouvé ce que tu cherchais ?",
      "OWL : Les dieux sont puissants, mais n'oublie pas que la véritable force réside en toi.",
      "OWL : N'hésite pas à revenir si tu as besoin de plus de connaissances. La bibliothèque d'Annabeth est toujours ouverte pour ceux qui cherchent la vérité.",
      "OWL : Maintenant, pars et utilise ce que tu as appris pour faire le bien dans le monde.",
    ],
  },
};

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