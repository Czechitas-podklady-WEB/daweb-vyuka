## Základy formuláře

Pokud na vaší webové stránce potřebujete od uživatele získat nějaká data, bude se vám pravděpodobně hodit formulářový html prvek `<input>`. V základu zobrazí ná stránce obdélníček, do kterého může uživatel psát text.

![input](assets/input.gif){.fig .fig-50}

Samotné textové políčko ale nestačí. Běžný formulář by měl mít ještě tlačítko, `<button>` pro odeslání a `<form>`, vymezení, kde formulář začíná a končí.

```html
<form>
  <input />
  <button>odeslat</button>
</form>
```

![základní formulář](assets/zakladni-formular.png){.fig .fig-50}

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

[[[ excs Cvičení: Textový vstup
- vyhledavac
]]]

## Složitější formuláře

Zatím jste si vyzkoušeli vytvořit jen jednoduchý formulář s jedním textovým políčkem. Inputů uvnitř jednoho `<form>` může být ale mnohem víc. Všechny by měly mít různý `name`, aby na backendu šlo rozpoznat, která data od uživatele patří ke kterým prvkům.

```html
<form action="https://postman-echo.com/get">
  <input name="prvni_vstup" />
  <input name="druhy_vstup" />
  <button type="submit">odeslat</button>
</form>
```

### Label

S každým dalším políčkem ale pro uživatele přestává být přehledné, co má kam psát. Pro zpřehlednění použijeme prvek `<label>`. Na výběr máme dva způsoby. Jeden je jednodušší na zápis, ale někdy se hůře styluje.

1. Label jako obal:

   ```html
   <label>Zadejte jméno: <input name="jmeno" /> </label>
   ```

   Jednodušší na zápis, ale občas se hůře styluje.

1. Label jako samostatný prvek a input s `id`:

   ```html
   <label for="vstup_na_jmeno">Zadejte jméno:</label>
   <input id="vstup_na_jmeno" name="jmeno" />
   ```

   Jednodušší na stylování, ale vyžaduje vymyslet v rámci celé stránky unikátní označení pro atributy `for` a `id`.

![label](assets/label.png){.fig .fig-50}

### Další druhy formulářových prvků

Kromě základního textového políčka máme i speciální například na datum, e-mail, heslo a jiné. Nastavit ve formuláři správné typy je zásadní pro to, aby se uživateli formulář dobře vyplňoval. Přece jen po něm chceme nějakou práci, a tak je důležité, aby byla co nejjednodušší, aby nám frustrovaný uživatel třeba neutekl ke konkurenci. Dobře nastavený formulář se může umět z části sám vyplnit nebo nabídnout uživateli jiné pomocné nástroje. Třeba textové políčko určené pro e-mailovou adresu může na klávesnici dotykové obrazovky zobrazit snadno dostupnou klávesu pro zavináč, který je pro obyčejný text schovaný. Typ se nastavuje přes atribut `type`.

#### E-mail:

```html
<label>Zadej e-mail: <input type="email" /></label>
```

#### Datum:

```html
<label>Zadej datum: <input type="date" /></label>
```

#### Číslo:

```html
<label>Zadej číslo: <input type="number" /></label>
```

#### Zaškrtávací tlačítko:

```html
<label><input type="checkbox" /> Souhlasím s obchodními podmínkami</label>
```

#### Další vybrané:

- Heslo: `type="password"`
- Telefon: `type="tel"`
- Barva: `type="color"`
- Odkaz: `type="url"`
- Rozmezí: `type="range"`

Tím výčet nekončí. Další typy nademe třeba na [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types) nebo [W3Schools](https://www.w3schools.com/html/html_form_input_types.asp).

#### Několik možností, ze kterých jde vybrat jen jedna:

```html
<h1>Oblíbené ovoce:</h1>
<label><input type="radio" name="ovoce" value="a" /> jablko</label>
<label><input type="radio" name="ovoce" value="b" /> hruška</label>
<label><input type="radio" name="ovoce" value="c" /> pomeranč</label>
```

Je potřeba dbát na to, aby všechny související inputy měly stejný atribut `name`.

```html
<h1>Oblíbená zelenina:</h1>
<select name="zelenina">
  <option value="a">Mrkev</option>
  <option value="b">Celer</option>
  <option value="c">Petržel</option>
</select>
```

#### Víceřádkový text:

```html
<label>Zpráva: <textarea name="zprava"></textarea></label>
```

### Metody odeslání

Formulář odesílá data na backend přes url adresu. To nemusí být vždy vhodné. Mohly by tak uniknout například tajná hesla nebo vznikat příliš dlouhé adresy. Z těchto důvodů má formulář možnost alternativní metody odeslání pomocí atributu `method` nastaveného na `post` (výchozí je `get`).

```html
<form method="post" action="http://formular.itgirls.cz/">
  <label>E-mail: <input type="email" name="email" /></label>
  <label>Heslo: <input type="password" name="heslo" /></label>
  <button type="submit">Přihlásit se</button>
</form>
```

[[[ excs Cvičení: Pokročilé formuláře
- statisticky-urad
]]]

## Dobrovolné čtení na doma

### Další atributy

- `autocomplete` pro lepší automatické doplňování. Více zde: [The HTML autocomplete attribute | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete).
- `autofocus` zaměří políčko hned po načtení stránky, aby do něj mohl uživatel okamžitě psát. Užitečné hlavně v případech, kdy očekáváme, že uživatel začne vyplňovat první políčko bezprostředně po načtení stránky.
- `disabled` zamezí vyplnění políčka nebo odeslání celého formuláře. Disabled políčka se neodesílají na backend.
- `readonly` podobně jako `disabled` zamezí úpravy, ale odešle se se zbytkem formuláře na backend.
- `value` políčko předvyplní daným obsahem.
- `checked` říká, že zaškrtávací políčko má být v počátečním stavu předzaškrtnuté.
- `placeholder` je nevýrazná nápověda v místě, kam uživatel píše text. Není vidět, pokud uživatel začne psát. Protože je nápověda nevýrazná a mizí, není vhodné ji používat pro důležité informace.
- `required` přiměje uživatele před odesláním vyplnit aspoň něco.
- `minlength` přiměje uživatele vyplnit políčko o minimální délce.
