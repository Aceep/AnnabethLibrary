# Annabeth Library

Un visual novel jouable dans le navigateur. FOXY, un renard curieux, pousse la
porte d'une bibliothèque cachée et y rencontre treize dieux grecs. Chacun lui
recommande des livres, avec une critique écrite par un contributeur.

Une fois les treize dieux visités, le hibou gardien dresse le récapitulatif de
toutes les lectures avant la scène finale.

## Prérequis

Node 20 ou plus (`.nvmrc` fourni) :

```bash
nvm use
npm install
```

## Commandes

| Commande                  | Effet                                        |
| ------------------------- | -------------------------------------------- |
| `npm run dev`             | Serveur de développement Vite                |
| `npm run build`           | Build de production dans `dist/`             |
| `npm run preview`         | Sert le build de production localement       |
| `npm run lint`            | ESLint                                       |
| `npm run format`          | Formate le code avec Prettier                |
| `npm run optimize:assets` | Convertit les PNG de `public/assets` en WebP |

Le jeu est prévu pour le **mode paysage** : en portrait, un message invite à
tourner l'appareil.

## Structure

```
index.html              squelette : conteneur de scène, overlay, balises <audio>
style.css               styles globaux
src/
  main.js               démarrage, gestion de l'orientation, clic de lancement
  audio.js              accès centralisé aux deux <audio> du DOM
  assets.js             résolution des chemins d'assets selon la base Vite
  scenes/
    intro.js            enchaînement d'ouverture + préchargement des fonds
    dialogue.js         moteur de dialogue, machine à écrire, menu, récapitulatif
    ending.js           scène de fin
  components/
    closingButton.js    bouton de fermeture des modales
  data/
    dialogues.js        contenu : fonds, répliques et critiques de livres
    bookList.js         récapitulatif des livres par dieu
scripts/
  optimize-assets.mjs   conversion PNG -> WebP (sharp)
public/
  assets/               fonds de scène (WebP) et couvertures de livres
  sounds/               musique d'ambiance et son de frappe
```

### Ajouter un dieu

La liste des dieux est actuellement répétée à quatre endroits : les deux
tableaux de `src/scenes/dialogue.js`, les clés de `src/data/dialogues.js` (en
minuscules) et celles de `src/data/bookList.js` (capitalisées). Les quatre
doivent rester cohérents.

### À propos des assets

- Les fonds sont des **WebP** produits par `npm run optimize:assets`
  (1920px de large, qualité 82). Le script ne supprime jamais les sources.
- `public/sounds/typing.mp4` est en réalité un fichier **audio** : l'extension
  `.mp4` est un choix de compression, le fichier est lu par une balise
  `<audio>`.

## Déploiement

Un push sur `main` déclenche le workflow `.github/workflows/deploy.yml`, qui
construit le site et le publie sur GitHub Pages. La base d'URL de production
(`/AnnabethLibrary/`) est définie dans `vite.config.js` ; les chemins construits
à l'exécution passent par `assetUrl()` (`src/assets.js`) pour en tenir compte.

## Crédits

Le jeu et les illustrations sont d'**Aceep**.

Les critiques de livres ont été écrites par :

Asiley · Eeilos · killumani · Loolis · Mama · Maria Materdei · noemie
