## Porozumění chybám

Každý programátor, začátečník i profesionál, dělá v programech chyby. Nikdy se vám nepodaří dosáhout toho, že byste chyby přestali dělat. Jak časem porostou vaše zkušenosti a dovednosti, tím také poroste komplikovanost programů, které budete psát. Důležité je tedy naučit se chybu co nejrychlej odhalit a opravit.

Pokud máme v programu tak závažnou chybu, že JavaScript runtime vůbec nerozumí tomu, co po něm chceme, vypíše takzvanou :term{cs="chybovou hlášku" en="error message"}. Pokud náš program nefunguje, jak má, a obdržíme chybovou hlášku, je to důved k velké radosti. Máme totiž rovnou informaci o tom, kde je něco špatně.

V následující částí si probereme nejčastější chyby, na které jako začátečníci jistě často narazíte.

### Přístup k neexistujicím věcem

Často se nám může stát, že se pokoušíme použít proměnnou, funkci, metodu či vlastnost, která neexistuje. Uvažte funkci `submitClick` z předchozí části napsanou takto.

```js
const submitClick = () => {
  const passwordElm = document.querySelector('#pass-input');
  const password = passwordElm.value;
  let message = 'Access denied';

  if (pasword === 'swordfish') {
    message = 'Access granted';
  }

  alart(message);
};
```

Při pokusu o kliknutí na tlačítko :i[submit] obdržíme tuto chybovou hlášku

```
Uncaught ReferenceError: pasword is not defined
    at HTMLButtonElement.submitClick (index.js:8)
```

JavaScript runtime se nám tímto snaží říct, že na řádku 8 v souboru `index.js` ve funkci `submitClick` přestal našemu programu rozumět. Dokonce nám i řekne proč. Říká, že `pasword` není definováno. Což je pravda, žádné taková proměnná v našem programu neexistuje. Nejspíš jsme měli na mysli proměnnou `password`. Opravit takovou chybu je tedy velmi jednoduché.

Podobnou chybu však obdržíme i na řádku 11, kde se snažíme zavolat neexistující funkci.

```
Uncaught ReferenceError: alart is not defined
    at HTMLButtonElement.submitClick (index.js:12)
```

Vzpomeňte si, že všechny funkce se volají tak, že použijeme proměnnou, ve které je funkce uložena. Je tedy logické, že runtime hlásí, že proměnnou `alart` nezná.

Upravme nyní naši funkce `submitClick` takto.

```js
const submitClick = () => {
  const passwordElm = document.querySelevtor('.pass-input');
  const password = passwordElm.value;
  let message = 'Insecure password';

  if (password.lenght >= 8) {
    message = 'Secure password';
  }

  document.body.innerHTML = message;
};
```

Při jeho spuštění narazíme na následující hlášku.

```
Uncaught TypeError: document.querySelevtor is not a function
    at HTMLButtonElement.submitClick (index.js:4)
```

Tímto nám JavaScript runtime říká, že `document.querySelevtor` není funkce, nemůže ji tedy zavolat. A má pravdu. Pokud zkusíme zjistit, co je uloženo ve vlastnosti `document.querySelevtor`, objevíme naši známou hodnotu.

```jscon
> document.querySelevtor
undefined
```

Pokoušíme se tedy zavolat hodnotu `undefined`, což se nám nepovede, protože to skutečně není funkce. Můžeme si to dokonce přímo vyzkoušet.

```jscon
> undefined()
Uncaught TypeError: undefined is not a function
    at <anonymous>:1:1
```

Opravíme tedy název funkce a doufáme, že už bude vše v pořádku. Do očí nás však uhodí další chyba.

```
Uncaught TypeError: Cannot read property 'value' of null
    at HTMLButtonElement.submitClick (index.js:5)
```

Nyní náš čeká malé detektivní pátrání. Z chybové hlášky vyluštíme, že na řádku 5 se snažíme přistoupit k vlastnosti `value` na hodnotě `null`. Hodnota `null` žádné vlastnosti nemá, takže to je jistě chyba. Když se podíváme na řádek 5, vydedukujeme, že v proměnné `passwordElm` tedy musí být hodnota `null`. Tuto hodnotu tam jistě musela uložit funkce `document.querySelector`. Aha!! To tedy znamená, že funkce nenašla element, který jsme hledali. Máme totiž chybu v selektoru na řádku 4, kde jsme omylem vybírali podle třídy a ne podle `id`.

Tato situace je velmi častá. JavaScript přestal našemu programu rozumět na řádku 5, ale problém vznikl už dříve na řádku 4. Ne vždy tedy chyba vznikne tam, kde se JavaScirpt runtime ztratil. Místo příčíny chyby a místo, kde se chyba projeví, mohou být od sebe vzdáleny i mnoho řádků. Občas tedy musíme použít naše detektivní schonposti a hledat chybu o několik řádků zpět.

### Když žádná chyba nenastane

Selektor jsme tedy opravili a program spustíme. Dostaneme se však do ještě svízelnější situace. Program se sice tváří, že funguje, ale ani po zadání opravdu dlouhého hesla nám neřekne, že je dostatečně silné. Toto je příklad té prekérní situace, kdy program nefunguje, nevyhazuje však žádnou chybu, která by nám pomohla odhalit, kde je problém.

Po pečlivé kontrole programu narazíme na to, že jsme špatně napsali název vlastnosti `length`. Proč nás na to však JavaScript neupozornil? Jak už víme, neexistující vlastnosti jsou `undefined`. Hodnota výrazu `password.lenght` je tedy `undefined`. Pojďme vyzkoušet, co se stane, když zkusíme hodnotu `undefined` porovnat s číslem 8.

```js
> undefined >= 8
false
```

Výsledek je prostě `false`. Naše podmínka tedy vždy tiše selže a náš program běží vesele dál. Na to, že ve skutečnosti porovnáváme hrušky s jabkama, nás JavaScript runtime nijak neupozorní. Toto je jeden z důvodů, proč mnoho programátorů nemá JavaScript rádo. Většina ostatních programovacích jazyků by totiž v takovémto případě vyhodila chybu. V JavaScriptu si však musíte obléknout svůj detektivní plášť a vyrazit chybu hledat sami.
