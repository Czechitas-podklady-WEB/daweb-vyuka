## Vstup pomocí formuláře

Poslední věc, která nám chybí pro příjemnou interakci s uživatelem, je získávat vstup jinak, než pomocí funkce `prompt`. Naštěstí se vším, co už umíme, je to jen malý krůček. Stačí si ukázat, jak fungují takzvané _formuláře_.

Formulář je sestava různých vstupních prvků jako jsou textová políčka, zaškrtávací tlačíka, rozbalovací nabídky a další. Jako příklad si můžeme představit jednoduchý formulář pro přihlášení na nějaký kurz.

::fig[formulář]{src=assets/formular.png}

Tento formulář už je nastylovaný, aby vypadal trochu k světu. Nenastylované HTML formuláře nevypadají moc vábně a jejich stylování je trochu opruz. Proto máme pro tuto lekci připravené styly, které si můžete [stáhnout zde](https://raw.githubusercontent.com/Czechitas-podklady-WEB/formulare/main/style.css) a použít pro základní experimenty s formuláři. 

Formulář výše je už docela obsáhlý a obsahuje prvky, které se v této akademii z časových důvodů učit nebudeme. Na konci lekce najdete odkazy na zdroje, odkud můžete načerpat další informace. 
V tuto chvíli začneme s tím úplně nejjednodušším formulářem, který má pouze textové políčko a odesílací tlačítko. Textové políčko vytvoříme pomocí značky `input`. 

```html
<input id="firstName" type="text" />
```

Každý formulář by měl mít odesílací tlačítko `button`, kterým uživatel potvrdí odeslání dat. Oba tyto prvky pak uzavřeme do značky `form` pomocí níž vymezíme, kde formulář začíná a končí. Můžeme také přidat formuláři nadpis.

```html
<form id="registration">
  <h1>Přihláška na kurz</h1>
  <input id="firstName" type="text" />
  <button type="submit">Přihlásit</button>
</form>
```

::fig[Jednoduchý formulář]{src=assets/jednoduchy-formular.png}

### Získání dat z formuláře

Příležitost získat data z formuláře máme ve chvili, kdy uživatel formulář odešle pomocí tlačítka nebo stiskne klávesu :kbd[Enter] uvnitř textového pole. Tuto akci zachytíme pomocí události `submit`, kterou vyhazuje samotný formulář. 

```js
const formElm = document.querySelector('#registration');
formElm.addEventListener('submit', () => {
  alert('Jste přihlášeni');
});
```

Pokud chceme získat text, který uživatel do políčka vepsal, stačí nám toto políčko vybrat pomocí `querySelector` a použít vlastnost `value`. 

```js
const formElm = document.querySelector('#registration');
formElm.addEventListener('submit', () => {
  const firstNameInput = document.querySelector('#firstName');
  const firstName = firstNameInput.value;
  alert(`${firstName}, jste přihlášeni`);
});
```

Stejně jako u funkce `prompt` i zde platí, že vlastnost `value` je vždy řetězec. Je tedy opět nutné mít se na pozoru, chceme-li od uživatele například číslo, a provést nezbytnou konverzi.

```js
const number = Number(inputElm.value);
```

Všimněte si však prazvláštní věci. Pokaždé, když formulář odešleme, obnoví se najednou celá stránka. To se děje proto, že HTML formuláře jsou původně určené k odesílání dat na server. Vždy, když formulář potvrdíme, prohlížeč automaticky pošle data z formuláře na server ze kterého obdržel naši stránku. Poté čeká, co server vrátí jako odpověď. Náš jednoduchý lokální servřík však umí odesílat jen a pouze naši stránku. Prohlížeč tak jako odpověd na odeslání formuláře obdrží znova tu samou stránku, na které zrovna je. Proto se naše stránka v prohlížeči obnoví.

My v celém tomto kurzu automatické odesílání formulářů na server používat nebudeme, protože bychom kvůli tomu museli programovat celý vlastní server. Formulářová data budeme zatím zpracovávat přímo na frontendu. Musíme tedy prohlížeči říct, aby formuláře nikam neposílal. K tomu použijeme metodu `preventDefault`.

```js
const formElm = document.querySelector('#registration');
formElm.addEventListener('submit', (event) => {
  event.preventDefault();
  const firstNameInput = document.querySelector('#firstName');
  const firstName = firstNameInput.value;
  alert(`${firstName}, jste přihlášeni`);
});
```

Po této úpravě se už stránka nebude obnovat.

Stejně jako vlastnost `textContent`, i vlastnost `value` je jak pro čtení, tak pro zápis. Můžeme tak řetězec z políčka přečíst, ale také jej políčku nastavit. Všimněte si, že schválně používáme slovo řetězec, protože všechna políčka vždy pracují jen s řetězci. Nastavování hodnot políček použijeme v pokročilejších formulářích. 

Zdaleka ne všechny formuláře musí používat nadpis a mít spoustu vstupů. Často si vystačíme jen s textovým políčkem a odesílacím tlačítkem. Například vyhledávací políčko jako na obrázku níže je také jen hezky nastylovaný formulář. 

::fig[Search box]{src=assets/search-box.png}

Od této chvíle navždy se tedy vzdáváme funkce `prompt` a budeme už používat pouze textová políčka. Ta můžeme hezky nastylovat, aby dobře zapadla do grafiky našich stránek.
