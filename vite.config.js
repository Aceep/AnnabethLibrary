import { defineConfig } from 'vite';

// Le site est publié sur GitHub Pages sous https://<user>.github.io/AnnabethLibrary/.
// En développement (`npm run dev`) la base reste '/' : sans quoi le serveur
// local servirait le site sous un sous-chemin sans raison.
//
// Les chemins d'assets construits à l'exécution passent par src/assets.js,
// qui s'appuie sur import.meta.env.BASE_URL renseigné ici.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/AnnabethLibrary/' : '/',
  build: {
    outDir: 'dist',
    assetsInlineLimit: 4096,
  },
  server: {
    open: true,
  },
}));
