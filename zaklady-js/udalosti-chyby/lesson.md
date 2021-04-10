V této lekci opět o kus zvýšíme interaktivnost našich stránek. Naučíme se, jak získat vstup od uživatele skrze HTML prvky jako například textové políčko. Také si trochu rozšíříme znalosti ohledně událostí a naučíme se například poznat, která klávesa na klávesnici byla stisknuta. Zároveň si ukážeme, jak v našich programech lovit a opravovat chyby.

## Vlastnosti událostí

Všimněte si, že když jsme vytvářeli funkci reagující na nějakou událost, psali jsme ji bez parametrů.

```js
button.addEventListener('click', () => {
  console.log('ahoj');
});
```

Funkce reagující na událost lze však také psát s jedním parametrem. Tento parametr často pojmenováváme `event`.

```js
button.addEventListener('click', (event) => {
  console.log('ahoj');
});
```

Pokud má naše funkce parametr, dáváme tím JavaScript runtimu najevo, že nás zajímají bližší informace o vzniklé události. Vždy, když událost nastane, runtime nám do tohoto parametru vloží hodnotu obsahující mnoho různých vlastností. Tyto vlastnosti představují různé detaily o právě proběhlé událost.

`event.target`
: DOM element, na kterém událost nastala. V našem případě je to element tlačítka.

`event.shiftKey`, `event.altKey`, `event.ctrlKey`
: Tyto vlastnosti obsahují pravdivostní hodnoty, které udávají, zda byla při kliknutí stisknuta klávesa [[Alt]], [[Shift]] nebo [[Ctrl]].

`event.code`
: Pokud nastala událost stisknutí klávasy, tato vlastnost obsahuje jméno této klávesy.

### Vlastnost target

Nejříve si na příkladu vysvětlíme vlastnost `target`. Je to jedna z vůbec nejdůležitějších vlastností na událostech. Díky ní se můžeme dostat z mnoha jinak svízelných situací. Představte si například, že chceme naprogramovat jednoduchou chatovací aplikaci, která umožňuje přiřadit zprávě smajlíka. Začneme s již připaveným kódem, který si můžete [stáhnout zde](assets/smileys.zip). Pro nás je v tuto chvíli relavanentí část HTML zobrazující tlačítka se smajlíky.

```html
<button id="smiley1" class="btn-smiley">😀</button>
<button id="smiley2" class="btn-smiley">😍</button>
<button id="smiley3" class="btn-smiley">😜</button>
<button id="smiley4" class="btn-smiley">😢</button>
<button id="smiley5" class="btn-smiley">😱</button>
```

Nyní budeme chtít, aby při stisku každého tlačíka přibyla na tomto tlačítku třída `btn-smiley--selected`. První řešení, které nás může napadnout, je dát každému tlačíku na kliknutí jinou funkci.

```js
'use strict';

document.querySelector('#smiley1').addEventListener('click', () => {
  const btn = document.querySelector('#smiley1');
  btn.classList.add('btn-smiley--selected');
});
document.querySelector('#smiley2').addEventListener('click', () => {
  const btn = document.querySelector('#smiley2');
  btn.classList.add('btn-smiley--selected');
});
document.querySelector('#smiley3').addEventListener('click', () => {
  const btn = document.querySelector('#smiley3');
  btn.classList.add('btn-smiley--selected');
});
document.querySelector('#smiley4').addEventListener('click', () => {
  const btn = document.querySelector('#smiley4');
  btn.classList.add('btn-smiley--selected');
});
document.querySelector('#smiley5').addEventListener('click', () => {
  const btn = document.querySelector('#smiley5');
  btn.classList.add('btn-smiley--selected');
});
```

Tento kód sice bude fungovat, ale už od pohledu je strašlivě ukecaný. Všech naších pět funkcí dělá v podstatě totéž. Liší se pouze v jednom znaku. Mnohem šikovnější by bylo mít pouze jednu funkci, která se připojí na každé tlačítko. Tato funkce ale musí nějak zjistit, na jaké tlačítko bylo kliknuto. A to právě můžeme šikovně vyčíst z vlastnosti `event.target`. Výsledný kód pak bude vypadat takto.

```js
'use strict';

const selectSmiley = (event) => {
  event.target.classList.add('btn-smiley--selected');
};

document.querySelector('#smiley1').addEventListener('click', selectSmiley);
document.querySelector('#smiley2').addEventListener('click', selectSmiley);
document.querySelector('#smiley3').addEventListener('click', selectSmiley);
document.querySelector('#smiley4').addEventListener('click', selectSmiley);
document.querySelector('#smiley5').addEventListener('click', selectSmiley);
```

Takový kód už je mnohem hezčí. Kdybychom ještě navíc uměli cykly, které nás již brzo čekají, dokázali bychom jej zkrátit ještě výrazněji.

### Vlastnost code

Pokud chceme zjistit, jaká klávesa byla stisknuta při událostech `keyup` a `keydown`, musíme znát název této klávesy. Názvy kláves snadno najdete na [keycode.info](http://keycode.info). Zjistíme tak například, že klávesa [[Enter]] se jemnuje prostě `Enter`, klávesa [[D]] se jmenuje `KeyD` a tak dále. Takto pak na stránce můžeme zareagovat například na stisknutí [[Enter]].

```js
document.addEventListener('keyup', (event) => {
  if (event.code === 'Enter') {
    console.log('enter');
  }
});
```

Nebo na stisknutí [[Ctrl]]+[[C]].

```js
document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyC' && event.ctrlKey) {
    console.log('Ctrl+C');
  }
});
```

## Vstup pomocí textových políček

Poslední věc, která nám chybí pro příjemnou interakci s uživatelem, je získávat vstup jinak, než pomnocí funkce `prompt`. Naštěstí se vším, co už umíme, je to jen malý krůček. Stačí kdekoliv na stránce použít textové políčko, například takto.

```html
<input id="my-input" type="text" />
```

Kdykoliv chceme získat text, který uživatel do políčka vepsal, stačí nám toto políčko vybrat pomocí `querySelector` a použít vlastnost `value`.

```js
const inputElm = document.querySelector('#my-input');
const text = inputElm.value;
```

Stejně jako vlastnost `textContent`, i vlastnost `value` je jak pro čtení, tak pro zápis. Můžeme tak řetězec z políčka přečíst, ale také jej políčku nastavit. Všimněte si, že schválně používám slovo řetězec. Stejně jako u funkce `prompt` i zde platí, že vlastnost `value` je vždy řetězec. Je tedy opět nutné mít se na pozoru, chceme-li od uživatele například číslo, a provést nezbytnou konverzi.

```js
const inputElm = document.querySelector('#my-input');
const num = Number(inputElm.value);
```

Od této chvíle navždy se tedy vzdáváme funkce `prompt` a budeme už používat pouze textová políčka. Ta můžeme hezky nastylovat, aby dobře zapadla do grafiky našich stránek.

[[[ excs Cvičení: Vlastnosti událostí
- registrace
- auto
]]]

## Porozumění chybám

Každý programátor, začátečník i profesionál, dělá v programech chyby. Nikdy se vám nepodaří dosáhout toho, že byste chyby přestali dělat. Jak časem porostou vaše zkušenosti a dovednosti, tím také poroste komplikovanost programů, které budete psát. Důležité je tedy naučit se chybu co nejrychlej odhalit a opravit.

Pokud máme v programu tak závažnou chybu, že JavaScript runtime vůbec nerozumí tomu, co po něm chceme, vypíše takzvanou <term cs="chybovou hlášku" en="error message">. Pokud náš program nefunguje, jak má, a obdržíme chybovou hlášku, je to důved k velké radosti. Máme totiž rovnou informaci o tom, kde je něco špatně.

V následující částí si probereme nejčastější chyby, na které jako začátečníci jistě často narazíte.

### Přístup k neexistujicím věcem

Často se nám může stát, že se pokoušíme použít proměnnou, funkci, metodu či vlastnost, která neexistuje. Uvažte funkci `submitClick` z předchozí části napsanou takto.

```js
'use strict';

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

Při pokusu o kliknutí na tlačítko <i>submit</i> obdržíme tuto chybovou hlášku

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
'use strict';

const submitClick = () => {
  const passwordElm = document.querySelevtor('.pass-input');
  const password = passwordElm.value;
  let message = 'Insecure password';

  if (password.lenght >= 8) {
    message = 'Secure password';
  }

  alert(message);
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

## Ladění programů

Situace, kdy náš program napíšeme tak, že nedělá, co chceme, ale z hlediska JavaScriptu je zcela v pořádku, budou náš denní chleba. Čím jsou však naše programy větší a složitější, tím roste prostor pro stále záludnější a húře odhalitelné chyby. Velmi brzy už je program tak dlouhý a komplikovaný, že nejsme schopni chybu najít pouze tím, že si po sobě čteme svůj kód. Nedej bože, pokud navíc před sebou nemáme kód vlastní, nýbrž kód kolegy, který již dávno opustil firmu, a svému kódu rozuměl pouze on. V takovou chvíli přichází na řadu funkce `console.log`.

## JavaScriptové recitály

Jedním z hlavních způsobů, jak si ušetřit monho frustrace a mlácení hlavou o stůl během programování, je naučit se doopravdy porozumět tomu, co děláte. V předchozích lekcích se na vás vyhrnulo velké množství nových pojmů a možná se mezi nimi zmítáte jako vratká bárka v rozbouřeném moři. Zkusíme tedy postupně zakotvit tím, že se budeme učit přesně popsat - takzvaně recitovat - co přesně dělá nějaký kousek kódu, aby si vás mozek zvyknul na JavaScriptové myšlení.

### Recitál první

Mějme například následující kousek kódu.

```js
const input = prompt('Username:');
```

Tento úryvek můžeme po technické stránkce rozebrat takto.

![Recitál první](assets/recitation01.svg)

Dle tohoto rozboru pak můžene sestavit následující technický popis.

> Vytváříme proměnnou `input`, do které ukládáme výsledek volání funkce `pormpt`. Této funkci jako vstup (argument) předáváme řetězec `'Username:'`.

Vedle technického popisu také zkusíme odhadnout záměr uvedeného kódu.

> Získáváme vstup od uživatele a chceme po něm jeho uživatelské jméno.

### Recitál druhý

Zkusme nyní malinko složitější úryvek.

```js
const setColor = (element, color) => {
  element.style.color = color;
};
```

Technický rozbor by mohl vypadat takto.

![Recitál druhý](assets/recitation02.svg)

> Vytváříme proměnnou `setColor`, do které ukládáme novou funkci se dvěma parametry. Tato funkce vezme hodnotu v parametru `element` a nastaví vlastnost `color` vlastnosti `style` na hodnotu uloženou v parametru `color`.

Záměr funkce můžeme odhadnout takto.

> Funkce `setColor` nastavuje barvu textu zadaného elementu na zadanou barvu.

[[[ excs Doporučené úložky na doma
- recitaly
- pocitadlo
- minutka2
]]]

[[[ excs Volitelné úložky na doma
- minutka3
]]]
