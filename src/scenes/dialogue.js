const dialogues = {
  owlIntro: {
    background: '/assets/FoxNOwl.png',
    lines: [
      "OWL : Bienvenue dans la bibliothèque d'Annabeth.",
      "OWL : Je suis le hibou, gardien des secrets anciens.",
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
    background: '/assets/backgrounds/mount-olympus.jpg',
    lines: [
      "Je suis Zeus, roi de l'Olympe.",
      "Pourquoi m’as-tu dérangé, petit renard ?",
    ],
  },
  // etc...
};

// Display an image with  a white div at the bottom

export async function runDialogue(who) {
  const dialogueData = dialogues[who];
  if (!dialogueData) return;

  // Mettre le fond une fois
  console.log(`Setting background for ${who}: ${dialogueData.background}`);
  const backgroundElement = document.getElementById('animation');
  if (backgroundElement) {
    backgroundElement.style.backgroundImage = `url(${dialogueData.background})`;
  } else {
    console.error('Background element not found');
  }

  const dialogueBox = document.createElement('div');
  dialogueBox.classList.add('dialogue-box');
  dialogueBox.innerHTML = `<span class="dialogue-text"></span>`;
  document.body.appendChild(dialogueBox);

  for (const line of dialogueData.lines) {
    dialogueBox.innerText = '';
    await typeLine(dialogueBox, line);
    await waitForClick();
  }

  dialogueBox.remove();
}

function typeLine(element, text, speed = 30) {
  return new Promise((resolve) => {
    let i = 0;
    const interval = setInterval(() => {
      element.innerText += text[i];
      i++;
      if (i >= text.length) {
        clearInterval(interval);
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
  const gods = ['zeus', 'athena'];
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