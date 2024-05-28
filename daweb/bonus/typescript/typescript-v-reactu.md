## Typescript v Reactu

V předchozí sekci jsme si řekli, proč Typescript používat a jaké základní typy máme. Dost bylo teorie a teď si ukážeme, jak se Typescript používá v praxi.

Vytvoříme si novou složku, kde budeme mít náš testovací projekt. Založíme si zde reaktí aplikaci, kterou si založíme pomocí vite. Podívejte se na průvodce na stránce [vitejs.dev](https://vitejs.dev/guide/#scaffolding-your-first-vite-project), kde si můžete všimnou řady předpřipravených šablon, z nichž si vybereme šablonu `react-ts`. Náš instalační script bude vypadat takto:

```js
npm create vite my-app -- --template react-ts
```

Vite nám sestaví základní kostru projektu a taktéž za nás nastaví Typescript. V aplikaci si můžete všimnout souboru `tsconfig.json`. Jedná se o klíčový soubor, protože obsahuje konfiguraci Typescriptu. Tímto souborem říkáme Typescriptu, jak se má v našem projektu chovat a to vůči vstupním souborům, jsx kódu, modulům, které můžeme instalovat až po výstupní soubory.

Nastavování `tsconfig.json` se ovšem věnovat nebudeme. Podrobné informace naleznete na stránkách [typescriptlang.org](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html). Všechno potřebné pro náš projekt už za nás nastavil vite.
