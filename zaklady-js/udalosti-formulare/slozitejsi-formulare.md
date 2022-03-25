## Složitější formuláře

Od jednoduchého formuláře s jedním textovým políčkem nyní pokročíme k zajímavějším sestavám. Uvnitř jednoho `<form>` můžeme rozhodně mít více inputů a těch máme mnoho různých druhů. Všechny by měly mít různá `id`, abychom pak z nich dokázali získat potřebná data.

Přidejme do našeho formuláře políčko pro přijmení.

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

```html
<form id="registration">
  <legend>Přihláška na kurz</legend>
  <div class="field">
    <label for="firsName">Jméno:</label>
    <input id="firstName" type="text" />
  </div>
  <div class="field">
    <label for="lastName">Příjmení:</label>
    <input id="lastName" type="text" />
  </div>
  <div class="controls">
    <button type="submit">Přihlásit</button>
  </div>
</form>
```

::fig[Nastylované labely]{src=assets/labely-styled.png size=80}

### Další druhy formulářových prvků

Kromě základního textového políčka máme i další typy například `password`, `number`, `email`, `search` apod. Nastavit ve formuláři správné typy je zásadní pro to, aby se uživateli formulář dobře vyplňoval. Použití správnýcn typů u políček má dvě zásadní výhody. 

1. Na mobilním telefonu se zobrazí správné klávesnice. Napřiklad pro typ `number` se zobrazí numerická klávesnice. Pro typ `email` je na klávesnici rychlej dostupný znak zavináče.
1. Automatický předvyplňovač formulářů ve vašem prohlížeči pozná, kam má vyplnit váš email, adresu a další informace. Toto jistě znáte z různých objednávek v e-shopech.

### Zaškrtávací tlačítko

Umožňuje uživateli zaškrtnout možnost ano či ne. 

```html
<label><input type="checkbox" />Chci dostávat informovat o dalších akcích</label>
```

### Výběr z více možností

Umožňuje uživateli vybrat jednu z více nabízených možností.

```html
<label>Vaše zkušenosti:</label>
<div>
  <label><input type="radio" name="experience" checked="true" /> Nováček </label>
  <label><input type="radio" name="experience" /> Začátečník </label>
  <label><input type="radio" name="experience" /> Pokročilý </label>
</div>
```

Pokud chceme, aby tyto inputy patřily do stejné skupiny, musím jim všem dát stejný atribut `name`. Pokud chceme nastavit nějakou možnost jako vybranou, nastavíme jí atribut `checked` na `true`. 

### Rozbalovací nabídka

Také umožňuje výběr z několika možností, tentokrát však formou rozbalovací nabídky.

```html
<label for="reference">Odkud o nás víte:</label>
<select id="referece">
  <option value="facebook">Facebook</option>
  <option value="instagram">Instagram</option>
  <option value="friends">Od známých</option>
  <option value="othen">Jiné...</option>
</select>
```

### Víceřádkový text

Umožňuje uživateli vložit delsi kus textu. Zobrazuje v podstatě jednoduchý textový editor.

```html
<label for="note">Vzkaz pro nás:</label>
<textarea id="note" rows="5"></textarea>
```

Tímto výčet zdaleka nekončí. Další typy vstupních prvků najdete na [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types) nebo [W3Schools](https://www.w3schools.com/html/html_form_input_types.asp). Výše uvedené prvky už nám však zcela postačí k vytvoření formuláře z úvodu této lekce.
