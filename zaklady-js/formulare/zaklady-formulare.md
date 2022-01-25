## Základy formulářů

Pokud na vaší webové stránce potřebujete od uživatele získat nějaká data, bude se vám pravděpodobně hodit formulářový html prvek `<input>`. V základu zobrazí ná stránce obdélníček, do kterého může uživatel psát text.

::fig[input]{src=assets/input.gif size=50}

Samotné textové políčko ale nestačí. Běžný formulář by měl mít ještě tlačítko, `<button>` pro odeslání a `<form>`, vymezení, kde formulář začíná a končí.

```html
<form>
	<input />
	<button>odeslat</button>
</form>
```

::fig[základní formulář]{src=assets/zakladni-formular.png size=50}

Všechny tři prvky můžou mít nějaké atributy. Většinou se u všech hodí atribut `class` pro jednodušší stylování. CSS se ale zatím zabývat nebudeme.

### Action

Velmi důležitý atribut prvku `<form>` je `action`. Říká, kam se data od uživatele mají odeslat po tom, co stiskne odesílací tlačítko. Na zpracování takových dat je potřeba backend. Backend je samostatná disciplína. V rámci akademie se ho učit nebudeme. Můžeme si ale nějaký hotový backend vypůjčit. Například backend na adrese `https://postman-echo.com/get` umí zobrazit, co všechno přijal od uživatele za data.

```html
<form action="https://postman-echo.com/get">
	<input />
	<button>odeslat</button>
</form>
```

### Name

Formulář po odeslání přesměruje uživatele na cizí stránku a zobrazí přijatá data. Backend ale zatím ještě neví, co uživatel do `<input>` napsal. To proto, že jsme vstupní políčko nepojmenovali. Nepojmenovaná data se nikam neposílají. Doplňme tedy ještě jméno pomocí atributu `name`.

```html
<form action="https://postman-echo.com/get">
	<input name="vstup_od_uzivatele" />
	<button>odeslat</button>
</form>
```

### Ukázka z praxe

Nyní už se obsah políčka na backend odesílá. Můžeme si také všimnout, že data se připojí do adresního řádku za otazník `vstup_od_uzivatele=Toto+napsal+uživatel` jako takzvaný GET parametr. Na těchto základech staví většina internetových vyhledávačů. Na ukázku zkuste vyhledat, jaká je venku teplota, ve formuláři na adrese [https://www.google.com/](https://www.google.com/). Po odeslání se dostanete na adresu, která by mohla vypadat zhruba takhle: `https://www.google.com/search?q=teplota`. Podle toho můžeme usoudit, že Google má ve formuláři nastavený atribut `action="https://www.google.com/search"` a u vstupního políčka `<input name="q">`.

### Type

Poctivý formulář by měl mít ještě u odesílacího tlačítka řečeno pomocí atributu `type`, jaký je jeho účel. Není vždy zřejmé, co má tlačítko dělat. Kromě odesílacího máme i tlačítko pro mazání zadaných dat nebo obecné, kterému účel dodá až JavaScript.

```html
<form action="https://postman-echo.com/get">
	<input name="vstup_od_uzivatele" />
	<button type="submit">odeslat</button>
	<button type="reset">vymazat</button>
	<button type="button">bez JS nic nedělám</button>
</form>
```
