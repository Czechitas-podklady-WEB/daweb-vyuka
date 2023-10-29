# První React aplikace

Do této chvíle jsem naše aplikace psali v "čistém" (anglicky se též říká "vanilla") JavaScriptu obohaceném o JSX šablony. Tímto jsme získali velkou průpravu k tomu, konečně si ukázat React, který je na JSX založen. Postupy, které jsme se dosud naučili, jsou zcela legitimní samy o sobě a můžeme takto psát i větší aplikace. U aplikací, které jsou velmi interaktivní a často mění obsah stránky, však narazíme na zásadní problém:

Při změně obsahu stránky je třeba celou stránku znovu načíst, což je pomalé a našikovné. Hlavně u větších stránek se spoustou komponent to může být velmi pomalá operace. Ideálně bychom tedy chtěli překreslit pouze ty části stránky, které se změnily. Například překreslit pouze jednu komponentu nebo pouze její část. 

Na tento problém kdysi tvrdě narazili vývojáři Facebooku, a proto vytvořili framework s názvem [React](https://reactjs.org/). Podobných reaktivních frameworků existuje vícero. Mezi nejznámější vedle Reactu patří [Angular](https://angular.io/) a [Vue](https://vuejs.org/), ale svoji popularitu si získávají i další, například [Svelte](https://svelte.dev/) nebo [Solid](https://www.solidjs.com/). V současné době je však React stále s přehledem nejpopulárnější a také nejžádanější na trhu práce.

## Založení React projektu

Ať už je to šikovná náhoda nebo dokonale promyšlený plán, velkou část reactových principů už jste v tomto kurzu používali, aniž byste o tom věděli. K vytvoření prvního React projektu tak stačí pouze malinko upravit konfiguraci Vite a naučit se psát náš kód reactovým způsobem.

Základní Vite projekt nastavený pro práci v Reactu si můžete vygenerovat pomocí 

```bash
npm init kodim-app@latest my-app react
```

Pozor na to, že tontokrát v příkazu máme místo slova `jsx` slovo `react`. Vite/React projekt se používá stejným způsobem, jakým jsme byli zvyklí u Vite/JSX projektů. Všimněte si však, že tento projekt má malinko jinou strukturu.

### Reactová aplikace a stránky

Aplikace v Reactu použivají jiný způsob stránkování než jsme byli dosud zvyklí. Do této chvíle jsme používaly takzvaý "multi-page" nebo "server-side" přístup, kdy každá stránka byla samostatný HTML soubor se svým vlastním JavaScriptem. Reactové aplikace však používají takzvaný "single-page" nebo-li "client-side" přístup, kdy máme pouze jeden HTML soubor a všechny stránky jsou komponenty, které se načítají pomocí JavaScriptu/Reactu. 

Tento způsob stránkování si hlouběji probereme v pozdějích lekcích. Nyní nám stačí vědět, že Reactové aplikace mají pouze jeden hlavní HTML soubor `index.html` a jeden hlavní JavaScript soubor `index.jsx`. Ve složce `pages` pak máme pouze jednotlivé komponenty, které se později budou načítat na různých URL adresách.

V hlavním souboru `index.jsx` máme pouze volání funkce `render` podobně, jako jsme byli dřívě zvyklí, jen místo `render` z balíčku `@czechitas/render` používáme funkci `createRoot` z balíčku `react-dom/client`. Hlavní soubor `index.jsx` tak vypadá takto.

```js
import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import './global.css';

createRoot(
  document.querySelector('#app'),
).render(<HomePage />);
```

Na objektu, který nám vrátí funkce `createRoot`, pak zavoláme funkci `render`, které už předáme JSX, které chceme vložit na stránku. V souboru `index.html` pak máme pouze prázdný element `<div id="app"></div>`, do kterého se vloží náš obsah.
