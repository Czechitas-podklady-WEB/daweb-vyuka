## Složitější formuláře

Od jednoduchého formuláře s jedním textovým políčkem nyní pokročíme k zajímavějším sestavám. Uvnitř jednoho `<form>` můžeme rozhodně mít více inputů a těch máme mnoho různých druhů. Všechny by měly mít různá `id`, abychom pak z nich dokázali získat potřebná data.

Přdejme do našeho formuláře políčko pro přijmení.

```html
<form id="registration">
  <legend>Přihláška na kurz</legend>
  <input id="firstName" type="text" />
  <input id="lastName" type="text" />
  <button type="submit">Přihlásit</button>
</form>
```

::fig[Jméno příjmení]{src=assets/jmeno-prijmeni.png size=80}

Tady už se ale uživatel moc nevyzná kam má co psát. Potřebujeme políčka nějak popsat. 

### Label

Pro zpřehlednění formulářů používáme značku `label`. Na výběr máme dvě možnosti.

1. *Label jako obal:*

   ```html
   <label>Jméno: <input id="firstName" type="text" /></label>
   ```

   Tento způsob je jednodušší na zápis, ale hůře se styluje.

1. *Label jako samostatný prvek:*

   ```html
   <label for="firstName">Jméno:</label>
   <input id="firstName" type="text" />
   ```

   Tento způsob je jednodušší na stylování, vyžaduje ale správnou práci s atributy `for` a `id`.

S použitím druhého způsobu bude náš registrační formulář vypadat následovně.

```html
<form id="registration">
  <label for="firsName">Jméno:</label>
  <input id="firstName" type="text" />
  <label for="lastName">Příjmení:</label>
  <input id="lastName" type="text" />
  <button type="submit">Přihlásit</button>
</form>
```

::fig[labely]{src=assets/labely.png size=80}

Takto ale rozložení prvků nevypadá moc hezky. Využijeme proto více našich připravných stylů a dáme formuláři hezčí strukturu.


### Další druhy formulářových prvků

Kromě základního textového políčka máme i další typy například `password`, `number`, `email`, `search` apod. Nastavit ve formuláři správné typy je zásadní pro to, aby se uživateli formulář dobře vyplňoval. Použití správnýcn typů u políček má dvě zásadní výhody. 

1. Na mobilním telefonu se zobrazí správné klávesnice. Napřiklad pro typ `number` se zobrazí numerická klávesnice. Pro typ `email` je na klávesnici rychlej dostupný znak zavináče.
1. Automatický předvyplňovač formulářů ve vašem prohlížeči pozná, kam má vyplnit váš email, adresu a další informace. Toto jistě znáte z různých objednávek v e-shopech.

**Zaškrtávací tlačítko:**

```html
<label><input type="checkbox" /> Souhlasím s obchodními podmínkami</label>
```

### Výběr z více možností

```html
<h1>Oblíbené ovoce:</h1>
<label><input type="radio" name="ovoce" value="a" /> jablko</label>
<label><input type="radio" name="ovoce" value="b" /> hruška</label>
<label><input type="radio" name="ovoce" value="c" /> pomeranč</label>
```

### Rozbalovací nabídka

Je potřeba dbát na to, aby všechny související inputy měly stejný atribut `name`.

```html
<h1>Oblíbená zelenina:</h1>
<select name="zelenina">
  <option value="a">Mrkev</option>
  <option value="b">Celer</option>
  <option value="c">Petržel</option>
</select>
```

### Víceřádkový text

```html
<label>Zpráva: <textarea name="zprava"></textarea></label>
```

Tímto výčet zdaleka nekončí. Další typy vstupních prvků najdete na [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types) nebo [W3Schools](https://www.w3schools.com/html/html_form_input_types.asp).


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
