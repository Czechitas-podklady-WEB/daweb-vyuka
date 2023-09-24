---
title: E-mail, tělo
demand: 2
solutionAccess: lock
---

Pokračujte na stránce z přechozího příkladu.

1. Do souboru `index.js` přidejte funkci `fillSubject` s jedním parametrem `subject`. Tato funkce ze stránky vybere DOM element představující předmět e-mailu a nastaví jeho obsah na řetězec, který přišel v parametru.
1. Zavolejte funkci na konci souboru `index.js` a vykoušejte si nastavit předmět e-mailu na nějaký smysluplný text.
1. Napište funkci `fillBody` s jedním parametrem `body`, která ze stránky vybere DOM element představující tělo e-mailu a nastaví jeho obsah dle hodnoty parametru.
1. Zavolejte funkci na konci souboru `index.js` a ověřte, že v zobrazené stránce správně změní tělo e-mailu.
1. Z předchozího cvičení nám zůstala funkce `goodbye`. Do funkce `fillBody` přidejte další parametr s názvem `name`. Tento parametr bude představovat jméno odesílatele. Funkce vyplní tělo e-mailu a do elementu `email__closing` vloží pozdrav, který vyrobí pomocí volání funkce `goodbye`.

:::solution

Obsah souboru `index.js`:

```js
const goodbye = (name) => {
  return 'S pozdravem ' + name;
};

const fillSubject = (subject) => {
  document.querySelector('.email__subject').textContent = subject;
};

const fillBody = (body, name) => {
  const bodyElm = document.querySelector('.email__body');
  bodyElm.innerHTML = body;
  const closingElm = document.querySelector('.email__closing');
  closingElm.textContent = goodbye(name);
};

fillSubject('Nepřišly gumičky');
fillBody(
  'Nepřišly gumičky. A co na to počítač? Mlčí. No tak to je konec. Všecko vylejt.',
  'referent Kubrt'
);
```

:::
