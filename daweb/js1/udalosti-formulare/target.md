V této lekci opět o kus zvýšíme interaktivitu našich stránek. Rozšíříme si znalosti ohledně událostí a naučíme se například poznat, která klávesa na klávesnici byla stisknuta. Zároveň si ukážeme, jak v našich programech získat vstup od uživatele pomocí HTML formulářů.

## Vlastnost target

Všimněte si, že pokud jsme vytvářeli funkci reagující na nějakou událost, psali jsme ji vždy bez parametrů.

```js
button.addEventListener('click', () => {
  document.body.innerHTML = '<p>ahoj</p>';
});
```

Funkci reagující na událost lze však také psát s jedním parametrem. Tento parametr často pojmenováváme `event`.

```js
button.addEventListener('click', (event) => {
  document.body.innerHTML = '<p>ahoj</p>';
});
```

Pokud má naše funkce parametr, dáváme tím JavaScript runtimu najevo, že nás zajímají bližší informace o vzniklé události. Vždy, když událost nastane, runtime nám do tohoto parametru vloží objekt s mnoha různými vlastnostmi. Tyto vlastnosti představují různé detaily o právě proběhlé událost. Pro nás bude v tuto chvíli důležitá vlastnost `target`. Ta obsahuje DOM element, na kterém událost nastala. V našem případě je to element tlačítka.

Hned z kraje je důležité si zvyknout na to, že jméno pro parametr v našem posluchači jsme si zvolili sami. JavaScript runtimu je srdečně jedno, jaké jméno si zvoláme. V různých jiným materiálech jistě narazíte na název `evt` nebo klidně jen `e`. Abychom vás udrželi ve střehu, i my budeme název různě měnit.

Vlastnost `target` je jedna z vůbec nejdůležitějších vlastností na událostech. Díky ní se můžeme dostat z mnoha jinak svízelných situací. Představte si například, že chceme naprogramovat jednoduchou chatovací aplikaci, která umožňuje přiřadit zprávě smajlíka. Začneme s již připraveným kódem, který najdete v [tomto repozitáři](https://github.com/Czechitas-podklady-WEB/ukazka-smajlici). Naklonujte si tento repozitář k sobě do počítače. Pro nás je v tuto chvíli relevanentí část HTML zobrazující tlačítka se smajlíky.

```html
<button id="smiley1" class="btn-smiley">😀</button>
<button id="smiley2" class="btn-smiley">😍</button>
<button id="smiley3" class="btn-smiley">😜</button>
<button id="smiley4" class="btn-smiley">😢</button>
<button id="smiley5" class="btn-smiley">😱</button>
```

Nyní budeme chtít, aby při stisku každého tlačítka přibyla na tomto tlačítku třída `btn-smiley--selected`. První řešení, které nás může napadnout, je dát každému tlačíku na kliknutí jinou funkci.

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

Tento kód sice bude fungovat, ale už od pohledu je strašlivě ukecaný. Všech našich pět funkcí dělá v podstatě totéž. Liší se dokonce pouze v jednom znaku. Mnohem šikovnější by bylo mít pouze jednu funkci, která se připojí na každé tlačítko. Tato funkce ale musí nějak zjistit, na jaké tlačítko bylo kliknuto. A to právě můžeme šikovně vyčíst z vlastnosti `target`. Výsledný kód pak bude vypadat takto.

```js
const selectSmiley = (evt) => {
  evt.target.classList.add('btn-smiley--selected');
};

document.querySelector('#smiley1').addEventListener('click', selectSmiley);
document.querySelector('#smiley2').addEventListener('click', selectSmiley);
document.querySelector('#smiley3').addEventListener('click', selectSmiley);
document.querySelector('#smiley4').addEventListener('click', selectSmiley);
document.querySelector('#smiley5').addEventListener('click', selectSmiley);
```

Takový kód už je mnohem hezčí. Kdybychom ještě navíc uměli cykly, které nás již brzo čekají, dokázali bychom jej zkrátit ještě výrazněji.
