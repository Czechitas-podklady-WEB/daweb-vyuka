## Podmínky

Nyní se konečně dostáváme k tématu, na které jsme se tak dlouho připravovali. Doposud všechny naše programy vypadaly jako sekvence příkazů vykonávané jeden za druhým. Pro komplikovanější problémy ale budeme potřebovat umožnit, aby se některé části programu vykonaly jen za určitých podmínek.

Pro jednoduchý příklad si představme e-shop prodávající alkoholické nápoje. Před každou objednávkou musíme zkontrolovat, že zákazník má alepoň 18 let.

```js
const age = Number(prompt('Zadejte svůj věk:'));

if (age >= 18) {
  document.body.innerHTML += '<p>Pokračujte k platbě</p>';
} else {
  document.body.innerHTML += '<p>Bohužel máte nízký věk</p>';
}
```

Toto je příklad velmi jednoduché podmínky se dvěm větvemi. V závorkách po klíčovém slovu `if` musí vždy být výraz, který vrací pravdivostní hodnotu. Podle toho, jestli je výsledek výrazu `true` nebo `false`, se buď vykoná kód v prvních složených závorkách, nebo kód v závorkách za slovem `else`. Tady se proprvé potkáváme s takzvanými <em>bloky kódu</em>, které jsou téměř nezbytnou ingrediencí všech programů.

### Bloky kódu

Pokud nějaké řádky kódu uzavřeme do složených závorek, vytváříme takzvaný blok. JavaScript každý blok chápe jako samostatnou jednotku, která se vykoná za určité situace. Taková situace může být například splnění nebo nesplnění výrazu v podmínce. Později uvidíme další situace, kde se nám budou bloky kódu hodit.

Aby se nám kód dobře četl, odsazujeme řádky uvnitř bloku o kus doprava. V tomto kurzu budeme používat dvě mezery. Pokud máte prostředí VS Code nastavené podle naších doporučení, při psaní se vám řádky budou automaticky odsazovat. Stisknutím tabulátoru :kbd[Tab] pak můžete odsazení vložit sami. Stisknutím :kbd[Shift]+:kbd[Tab] jej naopak zrušíte. To se hodí pokud chcete například odsadit velký kus kódu najednou. Stačí jej vybrat myší a stiknout :kbd[Tab] nebo :kbd[Shift]+:kbd[Tab].

Je dobré mít na paměti, že odsazování a obecně většina bílých znaků, je především pro nás pro lidi, tedy pro čtenáře kódu. Počítači, tedy přesnějí JavaScript runtimu, jsou bílé znaky jedno. Můžeme si je tady dávat kam chceme. Následující dva zápisy jsou z hlediska runtimu zcela stejné.

```js
if (age >= 18) {
  document.body.innerHTML += '<p>Pokračujte k platbě</p>';
} else {
  document.body.innerHTML += '<p>Bohužel máte nízký věk</p>';
}
```

<!-- prettier-ignore -->
```js
if(age>=18){document.body.innerHTML+='<p>Pokračujte k platbě</p>';}
else{document.body.innerHTML+='<p>Bohužel máte nízký věk</p>';}
```

Věřím, že uznáte, že první varianta je mnohem čitelnější než druhá. Způsobů, jak formátovat kód existuje vícero a můžete se tak účastnit nekonečných hospodských disputací o tom, jestli odsazovat pomocí dvou mezer nebo čtyř, jestli otvírací složenou závorku psát na konec řádku nebo na začátek nového a tak dále.

<!-- prettier-ignore -->
```js
if (age >= 18)
{
    document.body.innerHTML += '<p>Pokračujte k platbě</p>';
}
else
{
    document.body.innerHTML += '<p>Bohužel máte nízký věk</p>';
}
```

Ať už vzájemné spory dopadnou jakkoliv, nakonec je důležité si nějaká pravidla stanovit a ta pak svorně dodržovat. V tomto směru existuje [několik manuálů](https://codeburst.io/5-javascript-style-guides-including-airbnb-github-google-88cbc6b2b7aa), kterým se říká _style guide_. Ty kodifikují určitá pravidla formátování kódu tak, abyste je nemuseli vždy od nuly vymýšlet sami. Ve firmě nebo v programátorském týmu pak stačí říct, že používáme takový nebo onaký style guide, a předejít tak nekonečným diskuzím o tom, kde mají být mezery a kde ne. V tomto po dohodě kurzu používáme [AirBnB style guide](https://github.com/airbnb/javascript).

### Podmínky s více větvemi

Zatím jsme viděli podmínky se dvěma větvemi. Není ovšem problém mít podmínku například jen s jednou větví.

```js
if (age >= 18) {
  document.body.innerHTML += '<p>Pokračujte k platbě</p>';
}
```

Pokud je výraz v podmínce `false`, blok kódu se prostě přeskočí. Občas ale naopak potřebujeme podmínky s vícero větvemi. Uvažte například situaci, kdy se snažíme ohodnotit písemku známkami A až F podle dosaženého počtu budů.

```js
let znamka = '';
if (body >= 90) {
  znamka = 'A';
} else if (body >= 80) {
  znamka = 'B';
} else if (body >= 70) {
  znamka = 'C';
} else if (body >= 60) {
  znamka = 'D';
} else if (body >= 50) {
  znamka = 'E';
} else {
  znamka = 'F';
}
```

V takto rozvětvené podmínkce JavaScript runtime prochází jednotlivé výrazy dokud nenarazí na ten, který se vyhodnotí jako `true`. Vykoná příslušný blok a kódu a **zbylé větve přeskočí.** Vykoná se tak pouze první větev, která se vyhodnotí jako `true`. Pokud by byly všechny výrazy `false`, vykoná se větev `else`. Jak už víme, větev `else` přítomná být nemusí. Výše udovedný kód bychom tedy mohli malinko zkrátit takto.

```js
let znamka = 'F';
if (body >= 90) {
  znamka = 'A';
} else if (body >= 80) {
  znamka = 'B';
} else if (body >= 70) {
  znamka = 'C';
} else if (body >= 60) {
  znamka = 'D';
} else if (body >= 50) {
  znamka = 'E';
}
```

### Vnořené podmínky

Každý blok kódu může obsahovat libovolné příkazy, tedy i další podmínky. Můžeme tak snadno vnořovat podmínky do sebe.

```js
if (age >= 18) {
  document.body.innerHTML += '<p>Pokračujte k platbě</p>';
} else {
  const remains = 18 - age;
  if (remains < 2) {
    document.body.innerHTML += '<p>Ještě si chvíli počkejte</p>';
  } else if (remains < 5) {
    document.body.innerHTML += '<p>Co to tady zkoušíš?</p>';
  } else {
    document.body.innerHTML += '<p>Utíkej za mamkou!</p>';
  }
}
```

Takto můžeme vytvářet relativně komplikované rozhodování. Se zanořováním podmínek je ale dobré to příliš nepřehánět. Málokdo se dokáže snadno zorientovat v temných hlubínách pětkrát zanořené podmínky. Později se naučíme strategie, jak se takovým hlubokým zanořením vyhnout.
