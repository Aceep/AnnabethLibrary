// Les chemins d'assets vivent dans data/ sous forme de chaînes ('/assets/...').
// Vite réécrit les URLs présentes dans le HTML et le CSS en fonction de `base`,
// mais pas celles construites à l'exécution : sans ce passage, un déploiement
// sous un sous-chemin (GitHub Pages) renverrait des 404 sur tous les visuels.
// Repli sur '/' hors contexte Vite (tests, exécution directe sous Node) :
// import.meta.env n'y existe pas et la lecture directe lèverait une TypeError.
const BASE_URL = import.meta.env?.BASE_URL ?? '/';

export function assetUrl(path) {
  if (!path) return path;
  if (/^(https?:)?\/\//.test(path)) return path; // URL absolue : on ne touche pas

  return `${BASE_URL}${path.replace(/^\//, '')}`;
}
