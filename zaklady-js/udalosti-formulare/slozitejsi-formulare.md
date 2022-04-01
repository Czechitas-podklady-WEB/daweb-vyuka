## Složitější formuláře

Od jednoduchého formuláře s jedním textovým políčkem nyní pokročíme k zajímavějším sestavám. Uvnitř jednoho `<form>` můžeme rozhodně mít více inputů a těch máme mnoho různých druhů. Všechny by měly mít různá `id`, abychom pak z nich dokázali získat potřebná data.

Přidejme do našeho formuláře políčko pro přijmení.

```html
<form id="registration">
  <h1>Přihláška na kurz</h1>
  <input id="firstName" type="text" />
  <input id="lastName" type="text" />
  <button type="submit">Přihlásit</button>
</form>
```

::fig[Jméno příjmení]{src=assets/jmeno-prijmeni.png}

Tady už se ale uživatel moc nevyzná kam má co psát. Potřebujeme políčka nějak popsat. 

### Popisky

Pro zpřehlednění formulářů je dobré k jednotlivým vstupním pvkům přidat popisky. K tom používáme značku `label`.

```html
<label>
  Jméno: <input type="text" />
</label>
```   

S použitím popisků bude náš registrační formulář vypadat následovně.

```html
<form id="registration">
  <label class="field">
    Jméno: <input type="text" id="firstName" />
  </label>
  <label class="field">
    Příjmení: <input type="text" id="lastName" />
  </label>
  <button type="submit">Přihlásit</button>
</form>
```

::fig[labely]{src=assets/labely.png}

Takto ale rozložení prvků nevypadá moc hezky. Využijeme proto více našich připravných stylů a dáme formuláři hezčí strukturu.

```html
<form id="registration">
  <h1>Přihláška na kurz</h1>
  <label class="field">
    Jméno: <input type="text" id="firstName" />
  </label>
  <label class="field">
    Příjmení: <input type="text" id="lastName" />
  </label>
  <div class="controls">
    <button type="submit">Přihlásit</button>
  </div>
</form>
```

::fig[Nastylované labely]{src=assets/labely-styled.png}

### Další druhy formulářových prvků

Kromě základního textového políčka máme i další typy například `password`, `number`, `email`, `search` apod. Nastavit ve formuláři správné typy je zásadní pro to, aby se uživateli formulář dobře vyplňoval. Použití správnýcn typů u políček má dvě zásadní výhody. 

1. Na mobilním telefonu se zobrazí správné klávesnice. Napřiklad pro typ `number` se zobrazí numerická klávesnice. Pro typ `email` je na klávesnici rychlej dostupný znak zavináče.
1. Automatický předvyplňovač formulářů ve vašem prohlížeči pozná, kam má vyplnit váš email, adresu a další informace. Toto jistě znáte z různých objednávek v e-shopech.

### Zaškrtávací tlačítko

Umožňuje uživateli zaškrtnout možnost ano či ne. 

```html
<label class="check">
  <input type="checkbox" />Chci dostávat informovat o dalších akcích
</label>
```

::fig[labely]{src=assets/checkbox.png}

### Rozbalovací nabídka

Umožňuje výběr z několika možností formou rozbalovací nabídky.

```html
<label class="field">
  Odkud o nás víte:
  <select>
    <option value="facebook">Facebook</option>
    <option value="instagram">Instagram</option>
    <option value="friends">Od známých</option>
    <option value="other">Jiné…</option>
  </select>
</label>
```

::fig[labely]{src=assets/select.png}

Tímto výčet zdaleka nekončí. Další typy vstupních prvků najdete na [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types) nebo [W3Schools](https://www.w3schools.com/html/html_form_input_types.asp). Výše uvedené prvky už nám však zcela postačí k vytvoření jednoduchých formulářů.
