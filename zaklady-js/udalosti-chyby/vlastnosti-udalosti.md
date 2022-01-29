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
: Tyto vlastnosti obsahují pravdivostní hodnoty, které udávají, zda byla při kliknutí stisknuta klávesa :kbd[Alt], :kbd[Shift] nebo :kbd[Ctrl].

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

Pokud chceme zjistit, jaká klávesa byla stisknuta při událostech `keyup` a `keydown`, musíme znát název této klávesy. Názvy kláves snadno najdete na [keycode.info](https://keycode.info). Zjistíme tak například, že klávesa :kbd[Enter] se jemnuje prostě `Enter`, klávesa :kbd[D] se jmenuje `KeyD` a tak dále. Takto pak na stránce můžeme zareagovat například na stisknutí :kbd[Enter].

```js
document.addEventListener('keyup', (event) => {
  if (event.code === 'Enter') {
    console.log('enter');
  }
});
```

Nebo na stisknutí :kbd[Ctrl]+:kbd[C].

```js
document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyC' && event.ctrlKey) {
    console.log('Ctrl+C');
  }
});
```

