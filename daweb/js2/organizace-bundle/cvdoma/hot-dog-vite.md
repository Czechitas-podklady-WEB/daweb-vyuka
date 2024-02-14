---
title: Hot dog s Vite
demand: 3
lead: Přepište aplikaci pro výběr přísad do hot dogu na Vite.
solutionAccess: protected
---

1. Založte si nový projekt, tentokrát s Vite bundlerem:
   ```shell
   npm init kodim-app@latest hot-dog-vite jsx
   ```
1. Smažte obsah složky `src/pages` a vlože do ní soubory z projektu hot dogu z minulého cvičení.
1. Styly pro stránku nyní nechceme mít nalinkované přímo v HTML, ale chceme je importovat do souboru `index.js`. Proveďte tedy následující změny:
   1. V souboru `index.html` smažte element `link` pro styly.
   1. V souboru `index.js` importujte styly pomocí `import "./style.css";`.
1. Projekt spusťte pomocí `npm run dev` a vyzkoušejte si, že vše funguje.
