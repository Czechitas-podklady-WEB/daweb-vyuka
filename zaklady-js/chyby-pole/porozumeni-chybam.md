## Porozumění chybám

Každý programátor, začátečník i profesionál, dělá v programech chyby. Nikdy se vám nepodaří dosáhout toho, že byste chyby přestali dělat. Jak časem porostou vaše zkušenosti a dovednosti, tím také poroste komplikovanost programů, které budete psát. Důležité je tedy naučit se chybu co nejrychleji odhalit a opravit.

Pokud máme v programu tak závažnou chybu, že JavaScript runtime vůbec nerozumí tomu, co po něm chceme, vypíše takzvanou :term{cs="chybovou hlášku" en="error message"}. Pokud náš program nefunguje, jak má, a obdržíme chybovou hlášku, je to důvod k velké radosti. Máme totiž rovnou informaci o tom, kde je něco špatně.

V následující částí si probereme nejčastější chyby, na které jako začátečníci jistě často narazíte. Použijeme k tomu kód ze cvičení [Přihlášení](/kurzy/daweb/zaklady-js/udalosti-formulare/ulozky-na-doma#cvdoma>prihlaseni).

### Přístup k neexistujicím věcem

Často se nám může stát, že se pokoušíme použít proměnnou, funkci, metodu či vlastnost, která neexistuje. Uvažte funkci `submitClick` z předchozí části napsanou takto.

```js
const user = {
  email: 'bartolomej.rozumbrada@gmail.com',
  password: 'vimzenicnevim',
  name: 'Bartoloměj',
};

const handleSubmit = (e) => {
  e.preventDefault();

  const emailInput = document.querySelektor('.email-input');
  const passwordInput = document.querySelector('#password-input');
  const container = document.querySelector('.container');

  if (enailInput.value === user.email && passwordInput.value === user.pasword) {
    container.innerHTML = `<h1>Přihlášený uživatel: ${name}</h1>`;
  } else {
    container.innerHTML = '<h1>Neplatné přihlašovací údaje</h1>';
  }
};

document.querySelector('#login-form').addEventListener('submit', handleSubmit);
```

Při pokusu o kliknutí na tlačítko _Přihlásit_ obdržíme tuto chybovou hlášku

```
Uncaught TypeError: document.querySelektor is not a function
    at HTMLFormElement.handleSubmit (index.js:10:31)
```

JavaScript runtime se nám tímto snaží říct, že na řádku 10 v souboru `index.js` ve funkci `handleSubmit` přestal našemu programu rozumět. Dokonce nám i řekne proč. Říká, že `document.querySelektor` není funkce, nemůže ji tedy zavolat. A má pravdu. Pokud zkusíme zjistit, co je uloženo ve vlastnosti `document.querySelektor`, objevíme naši známou hodnotu.

```jscon
> document.querySelektor
undefined
```

Pokoušíme se tedy zavolat hodnotu `undefined`, což se nám nepovede, protože to skutečně není funkce. Můžeme si to dokonce přímo vyzkoušet.

```jscon
> undefined()
Uncaught TypeError: undefined is not a function
    at <anonymous>:1:1
```

Opravíme tedy název funkce a radujeme se, že už bude vše v pořádku.

```js
const handleSubmit = (e) => {
  e.preventDefault();

  const emailInput = document.querySelector('.email-input');
  const passwordInput = document.querySelector('#password-input');
  const container = document.querySelector('.container');

  if (enailInput.value === user.email && passwordInput.value === user.pasword) {
    container.innerHTML = `<h1>Přihlášený uživatel: ${name}</h1>`;
  } else {
    container.innerHTML = '<h1>Neplatné přihlašovací údaje</h1>';
  }
};
```

Do očí nás však uhodí další chyba.

```
Uncaught ReferenceError: enailInput is not defined
    at HTMLFormElement.handleSubmit (index.js:14:3)
```

JavaScript runtime si tentokrát stěžuje, že proměnná `enailInput` není definovaná. Což je pravda, žádná taková proměnná v našem programu neexistuje. Nejspíš jsme měli na mysli proměnnou `emailInput`. Opravit takovou chybu je tedy velmi jednoduché.

```js
const handleSubmit = (e) => {
  e.preventDefault();

  const emailInput = document.querySelector('.email-input');
  const passwordInput = document.querySelector('#password-input');
  const container = document.querySelector('.container');

  if (emailInput.value === user.email && passwordInput.value === user.pasword) {
    container.innerHTML = `<h1>Přihlášený uživatel: ${name}</h1>`;
  } else {
    container.innerHTML = '<h1>Neplatné přihlašovací údaje</h1>';
  }
};
```

Při spuštění stránky nás ovšem vytrestá hláška:

```
index.js:14 Uncaught TypeError: Cannot read properties of null (reading 'value')
    at HTMLFormElement.handleSubmit (index.js:14:18)
```

Nyní náš čeká malé detektivní pátrání. Z chybové hlášky vyluštíme, že na řádku 14 se snažíme přistoupit k vlastnosti `value` na hodnotě `null`. Hodnota `null` žádné vlastnosti nemá, takže to je jistě chyba. Když se podíváme na řádek 14, vydedukujeme, že v proměnné `emailInput` tedy musí být hodnota `null`. Tuto hodnotu tam jistě musela uložit funkce `document.querySelector`. Aha!! To tedy znamená, že funkce nenašla element, který jsme hledali. Máme totiž chybu v selektoru na řádku 10, kde jsme omylem vybírali podle třídy a ne podle `id`.

Tato situace je velmi častá. JavaScript přestal našemu programu rozumět na řádku 14, ale problém vznikl už dříve na řádku 10. Ne vždy tedy chyba vznikne tam, kde se JavaScirpt runtime ztratil. Místo příčíny chyby a místo, kde se chyba projeví, mohou být od sebe vzdáleny i mnoho řádků. Občas tedy musíme použít naše detektivní schopnosti a hledat chybu o několik řádků zpět.

### Když žádná chyba nenastane

Selektor jsme tedy opravili a program spustíme. Dostaneme se však do ještě svízelnější situace. Program se sice tváří, že funguje, ale i po pečlivém zadání správných přihlašovacích údajů stejně obdržíme hlášku :i[Neplatné přihlašovací údaje]. Toto je příklad té prekérní situace, kdy program běží bez chyby v konzoli, ale nedělá co dělat má. Bohužel tak nemáme k dispozici žádnou hlášku, která by nám pomohla odhalit, kde je problém.

Po pečlivé kontrole programu narazíme na to, že jsme špatně napsali název vlastnosti `password` u objektu `user`. Proč nás na to však JavaScript neupozornil? Jak už víme, neexistující vlastnosti jsou `undefined`. Hodnota výrazu `user.pasword` je tedy `undefined`. Pojďme vyzkoušet, co se stane, když zkusíme hodnotu `undefined` porovnat s nějakým řetězcem.

```js
> undefined === 'hesloveslo'
false
```

Výsledek je prostě `false`. Stejně to tedy dopadne v případě našeho objektu `user`.

```js
> user.pasword === 'vimzenicnevim'
false
```

Naše podmínka tedy vždy tiše selže a náš program běží vesele dál. Na to, že ve skutečnosti porovnáváme hrušky s jabkama, nás JavaScript runtime nijak neupozorní. Toto je jeden z důvodů, proč mnoho programátorů nemá JavaScript rádo. Většina ostatních programovacích jazyků by totiž v takovémto případě vyhodila chybu. V JavaScriptu si však musíte obléknout svůj detektivní plášť a vyrazit chybu hledat sami.
