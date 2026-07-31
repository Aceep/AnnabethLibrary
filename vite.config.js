import { defineConfig } from 'vite';

// Le projet est publié sur deux hébergements aux contraintes opposées :
//
//   - GitHub Pages  -> https://aceep.github.io/AnnabethLibrary/  (sous-chemin)
//   - Vercel        -> https://annabeth-library.vercel.app/      (racine)
//
// Une base figée casse forcément l'un des deux : servi à la racine avec une
// base '/AnnabethLibrary/', le HTML référence des bundles inexistants et la
// page reste vide. La cible est donc déduite de l'environnement de build.
//
// VITE_BASE permet de forcer la valeur à la main si besoin.
function resolveBase() {
  if (process.env.VITE_BASE) return process.env.VITE_BASE;

  // Renseigné uniquement par le workflow GitHub Pages (voir deploy.yml).
  if (process.env.GITHUB_PAGES) return '/AnnabethLibrary/';

  return '/';
}

export default defineConfig(() => ({
  base: resolveBase(),
  build: {
    outDir: 'dist',
    assetsInlineLimit: 4096,
  },
  server: {
    open: true,
  },
}));
