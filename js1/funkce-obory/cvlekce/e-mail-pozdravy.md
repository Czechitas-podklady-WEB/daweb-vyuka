---
title: E-mail, pozdravy
demand: 1
---

Vytvořte si repozitář ze šablony [cviceni-email](https://github.com/Czechitas-podklady-WEB/cviceni-email) se stránkou obsahující šablonu jednoduchého e-mailu. Všimněte si, že do stránky je vložený JavaScript bez atributu `type=module`. To nám umožní volat námi vytvořené funkce přímo z konzole. S tímto atributem by to nešlo.

Každý e-mail je třeba zakončit zdvořilým pozdravem.

1. V souboru `index.js` vytvořte funkci bez parametrů s názvem `goodbye`. Tato funkce vloží do odstavce s třídou `email__closing` rozloučení „Na shledanou“.
1. Otevřete stránku v prohlížeči a zavolejte funkci v konzoli. Ověřte, že správně změnila pozdrav na konci e-mailu.
1. Končit e-mail slovy „Na shledanou“ je nezdvořilé. Přidejte proto do funkce `goodbye` parametr představující jméno pisatele e-mailu. Funkce do posledního odstavce vloží koncový pozdrav i se jménem. Příklad použití:
   ```jscon
   > goodbye('Pavel Ovesný')
   ```
   Ve stránce bude
   ```jsc
   S pozdravem Pavel Ovesný
   ```

:::solution

Obsah souboru `index.js`:

```js
const goodbye = (name) => {
  const closingElement = document.querySelector('.email__closing');
  closingElement.textContent = `Na shledanou ${name}`;
};
```

:::
