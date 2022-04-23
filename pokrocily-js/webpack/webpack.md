## Webpack

Ve chvili, kdy máme založený projekt, budeme potřebovat nástroj, který vezme náš kód spolu s použitými knihovnami a zabalí je všechny do jednoho velkého JavaScriptového souboru. Ten si pak prohlížeč může stáhnout celý najednou a nemusí tak čekat na spoustu malých souborů za sebou. Nástroj, který k tomuto účelu budeme používat, se jmenuje Webpack.

Nejdříve musíme do našeho projektu Webpack nainstalovat. To provedeme příkazem

```sh
$ npm install -D webpack webpack-cli
```

Po tomto zásahu bude náš `package.json` vypadat následovně.

```json
{
  "name": "muj-projekt",
  "version": "0.0.1",
  "dependencies": {
    "dayjs": "^1.10.4",
    "validator": "^13.5.2"
  },
  "devDependencies": {
    "webpack": "^5.34.0",
    "webpack-cli": "^4.6.0"
  }
}
```

Přibyla nám nová položka `devDependencies`. V té je vypsán seznam balíčků, které představují takzvané vývojové závislosti. Tyto balíčky se nestanou součástí naší výsledné stránky, používáme je pouze během vývoje.

### Struktura projektu

Od této chvíle bude každý náš projekty mít více souborů, než jsme zvyklí. Je tedy dobré je projekt smysluplně organizovat, abychom se v něm vyznali.

Nejprve v projektu `muj-projekt` vytvoříme složku `src`. Do té budeme vždy dávat zdrojové kódy naší aplikace, tedy všechny soubory s JavaScriptem, CSS, HTML atd. Zatím v této složce vytvoříme hlavní soubor `index.js`.

```
├──node_modules
├──src
│  └──index.js
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

Nyní použijeme Webpack k sestavení výsledné aplikace. Aby se náš projekt sestavil, potřebujeme Webpack správně nakonfigurovat. V projektu `muj-projekt` vytvoříme soubor `webpack.config.js` s tímto obsahem.

```js
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
};
```

Vytvořit takovou konfiguraci od základu je už relativně pokročilá dovednost. Proto jsme zde rádi, že nám byla dána takto shůry a po jejím původu se nepídíme. Tato konfigurace v podstatě říká, že Webpack má vzít soubor `src/index.js` a sestavit z něj výsledek, který se bude nacházet ve složce `public/bundle.js`.

Abychom mohli webpack spustit, v souboru `package.json` si vytvoříme příkaz `build`.

```json
{
  "name": "muj-projekt",
  "version": "0.0.1",
  "scripts": {
    "build": "webpack"
  },
  "dependencies": {
    "dayjs": "^1.10.4",
    "validator": "^13.5.2"
  },
  "devDependencies": {
    "webpack": "^5.34.0",
    "webpack-cli": "^4.6.0"
  }
}
```

Nyní stačí otevřít v našem projektu terminál a napsat příkaz

```sh
$ npm run build
```

Pokud se vše povedlo, uvnitř projektu se vytvoří soubor `public/bundle.js`, který obsahuje takzvaně :term{cs="minifikovanou" en="minified"} verzi našeho kódu. Ta může vypadat například takto děsivě.

```
(()=>{const t=t=>`Hello ${t}`;document.querySelector("h1").textContent=t("Martin"),console.log(t("Martin"))})();
```

Webpack dělá minifikaci proto, aby náš výsledný kód byl co nejmenší. Vzhledem k tomu, že kód bude číst prohlížeč, můžeme zcela objetovat jakoukouliv srozumitelnost pro člověka. Webpack tedy

- odstranil všechny bílé znaky,
- přejmenoval naši funkci `greet` prostě na `t`,
- všude, kde se dalo vynechal závorky a zbytečné znaky.
