---
title: E-mail podruhé
demand: 2
---

Pojďme dále rozvinout cvičení s [vyplňováním e-mailu](/kurzy/javascript-vyuka/js-1/funkce-obory/cv-funkce#cvlekce%3Ee-mail-telo) z předchozí lekce.

1. Vytvořte si repozitář ze šablony [email-zadani](https://github.com/Czechitas-podklady-WEB/email-zadani) a pojmenujte ho **email2-zadani**.
1. Do souboru `index.js` vložte kód [vzorového řešení](/kurzy/javascript-vyuka/js-1/funkce-obory/cv-funkce/cvlekce%3Ee-mail-telo). Na tomto kódu budeme dále stavět.
1. Všimněte si funkce `goodbye`, která generuje pozdrav na konec e-mailu. Přidejte alespoň dvě další funkce, kde každá generuje k zadanému jménu jiný typ pozdravu. Například `formalGoodbye` pro velmi formální pozdravy jako „S uctivou poklonou…“, nebo naopak `rudeGoodbye` typu „Se měj…“, pokud se chcete rozloučit nevybíravě.
1. Udělejte z funkce `fillBody` funkci vyššího řádu. Přidejte jí třetí parametr `goodbyeFunction`, který představuje funkci, pomocí které se má vygenerovat závěrečný pozdrav. Vyzkoušejte zavolat funkci `fillBody` postupně s každou z vašich zdravících funkcí a ověřte, že vše správně funguje.

#### Ukázka použití

```js
fillSubject('Obchodní sdělení');
fillBody(
  'Kupte mycí prostředek, který vám vytře zrak, se slevou 50 %.',
  'Jan Čistý',
  formalGoodbye
);
```

nebo

```js
fillSubject('Pozvánka na oslavu narozenin');
fillBody('Zítra oslava. 18:00 ve Starý hospodě.', 'Patrik Veselý', rudeGoodbye);
```

---solution

```js
const goodbye = (name) => {
  return 'S pozdravem ' + name;
};

const formalGoodbye = (name) => {
  return 'S uctivou poklonou ' + name;
};

const rudeGoodbye = (name) => {
  return 'Se měj. ' + name;
};

const fillSubject = (subject) => {
  document.querySelector('.email__subject').textContent = subject;
};

const fillBody = (body, name, goodbyeFunction) => {
  const bodyElm = document.querySelector('.email__body');
  bodyElm.innerHTML = body;
  const closingElm = document.querySelector('.email__closing');
  closingElm.textContent = goodbyeFunction(name);
};
```
