---
title: Bonus – Publikování na GitHub Pages
demand: 5
---

Váš projekt můžete zpřístupnit na GitHub Pages. Protože váš projekt už používá WebPack, nebude to tak jednoduché, jako dříve – ale jde to. Postupujte takto:

1. V souboru `index.js` upravte podmínky na jednotlivé cesty, aby před cestou byla proměnná `BASE_PATH`:
   ```js
   if (pathname === BASE_PATH + '/') {
     // … původní kód podmínky …
   } else if (pathname === BASE_PATH + '/objednavka') {
     // … původní kód podmínky …
   }
   ```
1. V repository na GitHubu přejděte nahoře do **Settings** → vlevo v sekci _Code and automation_ vyberte **Pages** a na stránce pod _Build and deployment_ v _Source_ změňte _Deploy from branch_ na **GitHub Actions (beta)**.
1. Otevřete soubor .gitignore v kořenové složce vašeho projektu. V souboru zakomentujte pomocí znaku `#` řádek s `package-lock.json`:
   ```plain
   # Ignore the package-lock.json to prevent conflicts when collaborating
   # package-lock.json
   ```
1. V souboru `webpack.config.js` pod první dva řádky (volání funkce `require`) přidejte tento kód:

   ```js
   const webpack = require("webpack");

   const publicPath = process && process.env && process.env.GITHUB_REPOSITORY ? "/"+process.env.GITHUB_REPOSITORY.split(/)[1] : ""
   ```

   V `module.exports` v objektu `output` změňte hodnotu `'/'` na (proměnnou) `publicPath` a za ni připojte string `"/"`.

   Začátek souboru `webapck.config.js` pak bude vypadat takto:

   ```js
   const CopyPlugin = require("copy-webpack-plugin");
   const HtmlWebpackPlugin = require("html-webpack-plugin");
   const webpack = require("webpack");

   const publicPath = process && process.env && process.env.GITHUB_REPOSITORY ? "/"+process.env.GITHUB_REPOSITORY.split(/)[1] : ""

   module.exports = {
     mode: "development",
     entry: "./src/index.js",
     devtool: "eval-source-map",
     output: {
       filename: "bundle-[contenthash:6].js",
       publicPath: publicPath + "/",
       clean: true,
     },
     // …
   }
   ```

1. Stále v souboru `webpack.config.js` v `module.exports` najděte pole `plugins`. Obsahuje `HtmlWebpackPlugin` a `CopyPlugin`, přidejte tam ještě `webpack.DefinePlugin`:

   ```js
   plugins: [
     new HtmlWebpackPlugin({
       template: "src/index.html",
     }),
     new CopyPlugin({
       patterns: [{ from: "public", to: "", noErrorOnMissing: true }],
     }),
     new webpack.DefinePlugin({
       BASE_PATH: "'" + publicPath + "'",
     }),
   ],
   ```

1. Vytvořte v kořenové složce projektu složku `.github`, v ní složku `workflows` a v ní soubor `pages.yml`. Celá cesta tedy bude `.github/worfkflows/pages.yml`.
1. Do souboru `pages.yml` zkopírujte obsah ze vzorového souboru [pages.yml](https://github.com/FilipJirsak/cafelora-reseni/blob/main/.github/workflows/pages.yml).

1. Všechny soubory (`index.js`, `.gitignore`, `package-lock.json`, `webpack.config.js`, `.github/workflows/pages.yml`) commitněte a pushněte na GitHub.

1. Na konfigurační stránce GitHub Pages (viz první krok) se za chvilku objeví odkaz, kde běží publikovaný web. Otevřete web v prohlížeči a přidejte do LocalStorage svůj token z `kodim.cz` (pod klíč `token`). Po obnovení stránky by vám (se správným tokenem v prohlížeči) měla stránka plně fungovat včetně volání API.

```

```
