## Pravdivostní hodnoty

Ve zbývající části lekce se vrhneme na podmínky a umožníme naším programům dělat rozhodnutí. Před tím si ale musíme trošku připravit půdu a ukázat si nový typ hodnoty. Zatím jsme viděli čísla, řetězce a objekty. Nyní přichází takzvané <term cs="pravdivostní hodnoty" en="boolean values">. Čísel a řetězců je nekonečně mnoho, pravdivostní hodnoty jsou však jen dvě: `true` a `false`. Používají se k tomu, abychom vyjádřili, zda je něco pravda nebo není. Například:

```jscon
> const pristupPovolen = false
> const vstupJeCislo = true
> const mobilniProhlizec = true
```

K tomu, abychom mohli v našich programech činit rozhodnutí budeme také potřebovat výrazy, které vrací pravdivostní hodnoty. Ty můžeme sestavit pomocí takzvaných <term cs="porovnávacích operátorů" en="comparison operators">.

```jscon
> const age = 21
> age > 18
true
> age > 21
false
> age >= 21
true
> age === 21
true
> age !== 21
false
```

Kompletní sada porovnávacích operátorů vypadá takto.

<table>
  <thead>
    <th>Operátor</th>
    <th>Popis</th>
  </thead>
  <tbody>
    <tr><td><strong><code>></code></strong></td><td>větší než</td></tr>
    <tr><td><strong><code>>=</code></strong></td><td>větší nebo rovno</td></tr>
    <tr><td><strong><code><</code></strong></td><td>menší než</td></tr>
    <tr><td><strong><code><=</code></strong></td><td>menší nebo rovno</td></tr>
    <tr><td><strong><code>===</code></strong></td><td>rovno</td></tr>
    <tr><td><strong><code>!==</code></strong></td><td>nerovno</td></tr>
  </tbody>
</table>

V JavaScriptu můžete narazit i na operátory `==` a `!=`. Ty však nebudeme nikdy používat, protože v některých případech mohou zanést do našeho programu nechtěné chyby.

## Podmínky

Nyní se konečně dostáváme k tématu, na které jsme se tak dlouho připravovali. Doposud všechny naše programy vypadaly jako sekvence příkazů vykonávané jeden za druhým. Pro komplikovanější problémy ale budeme potřebovat umožnit, aby se některé části programu vykonaly jen za určitých podmínek.

Pro jednoduchý příklad se opět vraťme k našemu ultramaratonskému běhu. Závod začiná ve tři hodiny odpoledne a počítáme s tím, že závodníci doběhnou někdy příští den ráno. Nebudeme ale v cíli čekat na každého dědulu, který to celé poběží 20 hodin. Řekněme, že organizátoři mají padla druhý den v poledne. Potřebujeme tedy do naší stránky zakomponovat informaci o tom, jestli trasu dokážeme uběhnout do 12 hodin.

```js
'use strict';

const start = 15;
const delka = Number(prompt('Zadej délku závodu:'));
const konec = (start + delka) % 24;

if (konec > 12) {
  document.write('Překročena maximální délka závodu!');
} else {
  document.write('Konec závodu ve ' + konec + ' hodin');
}
```

Toto je příklad velmi jednoduché podmínky se dvěm větvemi. V závorkách po klíčovém slovu `if` musí vždy být výraz, který vrací pravdivostní hodnotu. Podle toho, jestli je výsledek výrazu `true` nebo `false`, se buď vykoná kód v prvních složených závorkách, nebo kód v závorkách za slovem `else`. Tady se proprvé potkáváme s takzvanými <em>bloky kódu</em>, které jsou téměř nezbytnou ingrediencí všech programů.

### Bloky kódu

Pokud nějaké řádky kódu uzavřeme do složených závorek, vytváříme takzvaný blok. JavaScript každý blok chápe jako samostatnou jednotku, která se vykoná za určité situace. Taková situace může být například splnění nebo nesplnění výrazu v podmínce. Později uvidíme další situace, kde se nám budou bloky kódu hodit.

Aby se nám kód dobře četl, odsazujeme řádky uvnitř bloku o kus doprava. V tomto kurzu budeme používat dvě mezery. Pokud máte VS Code nastavené podle naších doporučení, při psaní se vám řádky budou automaticky odsazovat. Stisknutím tabulátoru :kbd[Tab] pak můžete odsazení vložit sami. Stisknutím :kbd[Shift]+:kbd[Tab] jej naopak zrušíte. To se hodí pokud chcete například odsadit velký kus kódu najednou. Stačí jej vybrat myší a stiknout :kbd[Tab] nebo :kbd[Shift]+:kbd[Tab].

Je dobré mít na paměti, že odsazování a obecně většina bílých znaků je především pro nás lidi, tedy pro čtenáře kódu. Počítači, tedy přesnějí JavaScript runtimu, jsou bílé znaky jedno. Můžeme si je tady dávat kam chceme. Následující dva zápisy jsou z hlediska runtimu zcela stejné.

```js
if (age >= 18) {
  document.write('Nalej si');
} else {
  document.write('Žádné chlastání!');
}
```

<!-- prettier-ignore -->
```js
if(age>=18){document.write('Nalej si');} 
else{document.write('Žádné chlastání!');}
```

Věřím, že uznáte, že první varianta je mnohem čitelnější než druhá. Způsobů, jak formátovat kód existuje vícero a můžete se tak účastnit nekonečných hospodských disputací o tom, jestli odsazovat pomocí dvou mezer nebo čtyř, jestli otvírací složenou závorku psát na konec řádku nebo na začátek nového a tak dále.

<!-- prettier-ignore -->
```js
if ( age >= 18 ) 
{
    document.write('Nalej si');
} 
else 
{
    document.write('Žádné chlastání!');
}
```

Nakonec je však důležité hlavně si nějaká pravidla stanovit a ta pak dodržovat. V tomto směru existuje [několik manuálů](https://codeburst.io/5-javascript-style-guides-including-airbnb-github-google-88cbc6b2b7aa), kterým se říká _style guide_. Ty kodifikují určitá pravidla formátování kódu tak, abyste je nemuseli vždy od nuly vymýšlet sami. Ve firmě nebo v programátorském týmu pak stačí říct, že používáme takový nebo onaký style guide a předejít tak nekonečným diskuzím o tom, kde mají být mezery a kde ne. V tomto kurzu používáme [AirBnB style guide](https://github.com/airbnb/javascript).

### Podmínky s více větvemi

Zatím jsme viděli podmínky se dvěma větvemi. Není ovšem problém mít podmínku například jen s jednou větví.

```js
if (age >= 18) {
  document.write('Nalej si');
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
  document.write('Nalej si');
} else {
  const remains = 18 - age;
  if (remains < 2) {
    document.write('Ještě si chvíli počkej');
  } else if (remains < 5) {
    document.write('Co to tady zkoušíš?');
  } else {
    document.write('Utíkej za mamkou!');
  }
}
```

Takto můžeme vytvářet relativně komplikované rozhodování. Se zanořováním podmínek je ale dobré to příliš nepřehánět. Málokdo se dokáže snadno zorientovat v temných hlubínách pětkrát zanořené podmínky. Později se naučíme strategie, jak se takovým hlubokým zanořením vyhnout.

[[[ excs Cvičení: Podmínky
- registrace-na-ockovani
- cena-vstupenky
]]]

[[[ excs Doporučené úložky na doma
- fit-email
- slevy
- superhruba
]]]

## Povinné čtení na doma - logické operátory

V matematice jsme zvyklí na takzvané aritmetické operátory, tedy plus, mínus apod. Takové operátory obecně vyrábějí z čísel jiná čísla, například

```jscon
> 2 + 3
5
```

Logika má však také své operátory, kterým se (logicky) říká <em>logické operátory</em>. Tyto operátory místo čísel pracují s pravdivostními hodnotami. Můžeme tak použít například operátor `&&`.

```jscon
> true && true
true
> true && false
false
> false && true
false
> false && false
false
```

Tento operátor v podstatě znamená **a zároveň**. Tedy pokud jsou obě hodnoty `true`, výsledek je také `true`. Jinak je výsledek `false`.

Můžeme také použít operátor **nebo** který se píše jako dvě roury `||`.

```jscon
> true || true
true
> true || false
true
> false || true
true
> false || false
false
```

Operátor `||` vrací `true` v případě, že alespoň jedna z hodnot je `true`. Jako poslední máme operátor negace, který se píše jako vykřičník `!`. Ten jen vrací opak zadané pravdivostní hodnoty.

```jscon
> !true
false
> !false
true
```

Tyto logické operátory můžeme s výhodou využít v našich podmínkách. Například bychom mohli chtít zkontrolovat, že věk uživatele je mezi 15 a 18. Chceme tedy logicky říct že věk je :i[větší nebo roven 15] **a zároveň** :i[menší nebo roven 18]. Kombinujeme tak vlastně dva logické výrazy do jednoho.

```js
if (age >= 15 && age <= 18) {
  document.write('Jsi mladistvým intelektuálem');
}
```

V jiném případě můžeme chtít zkontrolovat, že věk uživatele je menší než 18 nebo větší či roven 65.

```js
if (age < 18 || age >= 65) {
  document.write('Nemusíš pracovat');
}
```

Tutéž podmínku bychom mohli napsat pomocí negace.

```js
if (!(age >= 18 && age < 65)) {
  document.write('Nemusíš pracovat');
}
```

Takovýto výraz už je však trochu hůře k přečtení. Logické operátory jsou užiteční pomocníci, v praxi je však dobré s nimi šetřit. Pokud výraz ve vaší podmínce obsahuje více než jeden logický operátor, váš kód se stává těžko čitelným a pochopitelným. Držte se proto při používání logickách operátor pri zemi. Vaši budoucí kolegová vás za to budou mít rádi.

[[[ excs Volitelné úložky na doma
- ruleta
- prestupny-rok
- prestupny-rok-2
- prestupny-rok-3
]]]

## Shrnutí

Po této lekci byste měli vědět a znát

* použítí vlastnosti `length` a metod řetězců:
  - `toUpperCase`, `toLowerCase`,
  - `trim`, `slice`,
  - `indexOf`,
  - `padStart`,
* interpolaci řetězců,
* booleovské hodnoty,
* porovnávací operátory,
* jednoduché podmínky `if`, `else`, 
* složitější podmínky `if`, `else if`, `else`,
* jak správně psát a formátovat bloky kódu,
* logické operátory `&&`, `||` a `!`.


