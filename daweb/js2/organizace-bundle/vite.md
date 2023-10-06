## Vite

Ve chvili, kdy máme založený projekt, budeme potřebovat nástroj, který vezme náš kód spolu s použitými knihovnami a zabalí je všechny do jednoho velkého JavaScriptového souboru. Ten si pak prohlížeč může stáhnout celý najednou a nemusí tak čekat na spoustu malých souborů jednotlivě po sobě. Nástrojům, které toto pro nás dělají se říká _bundlery_. Existuje jich několik různých. Jeden z nejpopulárnější se jmenuje [_Webpack_](https://webpack.js.org/). My v tomto kurzu budeme používat modernější bundler jménem [_Vite_](https://vitejs.dev/).

Nejdříve musíme do našeho projektu Vite nainstalovat. To provedeme příkazem

```sh
$ npm install -D vite glob
```

Po tomto zásahu bude náš `package.json` vypadat následovně:

```json
{
  "name": "muj-projekt",
  "version": "0.0.1",
  "dependencies": {
    "dayjs": "^1.10.4",
    "validator": "^13.5.2"
  },
  "devDependencies": {
    "vite": "^4.4.11",
    "glob": "^10.3.0"
  }
}
```

Přibyla nám nová položka `devDependencies`. V té je vypsán seznam balíčků, které představují takzvané _vývojové závislosti_. Tyto balíčky se nestávají součástí naší výsledné stránky, používáme je pouze během vývoje.

### Struktura projektu

Od této chvíle bude každý náš projekt mít více souborů, než jsme zvyklí. Je tedy dobré projekt smysluplně organizovat, abychom se v něm vyznali.

Nejprve v projektu `muj-projekt` vytvoříme složku `src`. Do té budeme vždy vkládat zdrojové kódy naší aplikace, tedy všechny soubory s JavaScriptem a CSS. Abychom měli do budoucna prostor pro vícestránkové aplikace, uděláme si ve složce `src` složku `pages`, do které dáme soubory `index.html`, `index.js` a `index.cxs`.

```
├──node_modules
├──src
│  └──pages
│     ├──index.html
│     ├──index.js
│     └──index.css
├──package-lock.json
└──package.json
```

Do souboru `index.js` vložíme jednoduchý uvítací kód.

```js
const greet = (name) => {
  return `Hello ${name}`;
};

const h1Elm = document.querySelector('h1');
h1Elm.textContent = greet('Martin');
console.log(greet('Martin'));
```

Do souboru `index.html` vložíme náš `index.js` tak, jak jsme zvyklí.

```html
<script type="module" src="index.js"></script>
```

Nyní použijeme Vite k sestavení výsledné aplikace. Aby se náš projekt sestavil, potřebujeme Vite správně nakonfigurovat. V projektu `muj-projekt` vytvoříme soubor `vite.config.js` s tímto obsahem.

```js
import { czechitasRenderVitePlugin } from '@czechitas/render/plugin';
import { glob } from 'glob';
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src/pages',
	publicDir: '../../public',
  server: {
    hmr: false,
  },
  build: {
		outDir: '../../dist',
		emptyOutDir: true,
		target: 'es2022',
		rollupOptions: {
			input: glob.sync('src/pages/**/*.html'),
		},
    modulePreload: false,
  },
  plugins: [czechitasRenderVitePlugin()],
});
```

Co přesně je obsahem této konfigurace necháme zahaleno tajemstvím. Vytvořit dobrou konfiguraci pro konkrétní typ projektu od základu je už relativně pokročilá dovednost. Proto jsme zde rádi, že nám byla seslána takto shůry a po jejím původu se nepídíme.

Nyní stačí otevřít v našem projektu terminál a napsat příkaz

```sh
$ npm run build
```

Pokud se vše povedlo, uvnitř projektu se vytvoří soubor `dist/assets/index-7a801922.js` (u vás možná s trochu jiným číslem na konci), který obsahuje takzvaně :term{cs="minifikovanou" en="minified"} verzi našeho kódu. Ta může vypadat například takto děsivě:

```
const t=e=>`Hello ${e}`,n=document.querySelector("h1");n.textContent=t("Martin");console.log(t("Martin"));
```

Vite dělá minifikaci proto, aby náš výsledný kód byl co nejmenší. Vzhledem k tomu, že kód bude číst prohlížeč, můžeme zcela obětovat jakoukouliv srozumitelnost pro člověka. Vite tedy

- odstranil všechny „bílé“ znaky (mezery, konce řádků, tabulátory…),
- přejmenoval naši funkci `greet` prostě na `t`,
- všude, kde se dalo, vynechal závorky a zbytečné znaky.

## Vývojový server

Pomocí příkazu `npm run dev` sestavujeme stránku pro finální nasazení na nějaký server. Během vývoje chceme, aby stránka běžela na našem lokálním serveru, podobně jako když jsme spouštěli příkad `npx serve`. Ten už nyní pro Vite projekty používat nebudeme. Místo toho používejme příkaz

```sh
$ npm run dev
```

Ten sleduje změny v našem kódu a průběžně sestavuje všechny nezbytné JavaScriptové a CSS soubory. Funugje tady podobně, jako jsme zvyklí z příkazu `npx serve`.
