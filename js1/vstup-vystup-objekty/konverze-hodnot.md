## Konverze hodnot

Úplně na začátku je šikovné všimnout si rozdílu mezi hodnotami jako `12` a `'12'`. Jedna představuje číslo dvanáct, druhá představuje řetězec obsahující znaky 1 a 2. Proto můžeme čekat, že aritmetické operace s těmito hodnotami dopadnou jinak podle toho, zda jde o číslo nebo o řetězec.

Tato operace například do stránky vypíše číslo 17:

```js
document.body.innerHTML += 12 + 5;
```

Naopak tato operace do stránky vypíše řetězec `125`:

```js
document.body.innerHTML += '12' + '5';
```

JavaScript se nám (občas k naší škodě) snaží udělat život jednodušší a tak za nás v určitých případech provádí automatickou konverzi čísel na řetězce nebo řetězců na čísla. Sami si vyzkoušejte následující příklady a zkuste dopředu odhadnout, co se objeví na stránce.

```js
document.body.innerHTML += '12' + 5;
```

```js
document.body.innerHTML += 12 + '5';
```

```js
document.body.innerHTML += 1 + 2 + 3 + '4';
```

```js
document.body.innerHTML += '1' + 2 + 3 + 4;
```

Konverze fungují i pro jiné operátory, napříkad násobení.

```js
document.body.innerHTML += 12 * 5;
```

```js
document.body.innerHTML += '12' * 5;
```

```js
document.body.innerHTML += 12 * '5';
```

```js
document.body.innerHTML += '12' * '5';
```

Dokonce takto funguje i zbytek po dělení.

```js
document.body.innerHTML += 12 % 5;
```

```js
document.body.innerHTML += '12' % 5;
```

```js
document.body.innerHTML += 12 % '5';
```

```js
document.body.innerHTML += '12' % '5';
```

Vybaveni touto zkušeností můžeme začít rozplétat, co se nám pokazilo na našem ultramaratonském programu. Nejdůležitější věcí k zapamatování je, že funkce `prompt` **vždycky vrací vstup od uživatele jako řetězec**. I když uživatel do políčka nakrásně napíše číslo, funkce `prompt` pro nás žádnou konverzi automaticky nedělá. Pokud tedy uživatel zadal jako délku závodu číslo 10, do proměnné délka se nám uložila hodnota `'10'`. V jednotlivých krocích si pak můžeme vyzkoušet, co se dělo pak.

```js
const start = 15;
const delka = '10';
document.body.innerHTML += start + delka; // Vypíše '1510'
document.body.innerHTML += '<br />'; // Odřádkujeme
document.body.innerHTML += '1510' % 24; // Vypíše 22
```

Abychom si s touto situací poradili, budeme potřebovat možnost provést konverzi hodnot sami, aniž by nám do toho JavaScript kecal.

### Explicitní konverze

Pokud chceme konvertovat číslo na řetězec, použijeme funkci `String`.

```js
String(12); // Vrátí řetězec '12'
String(-2.48); // Vrátí řetězec '-2.48'
```

Když potřebujeme obrácenou konverzi, tedy řetězec na číslo, použijeme funkci `Number`.

```js
Number('12'); // Vrátí číslo 12
Number('-2.48'); // Vrátí číslo -2.48
Number('-2,48'); // Vrátí hodnotu NaN
```

Všimněte si, co se stane, když se pokusíme zkonvertovat nějaký řetězec, který na číslo převést nejde. V takovém případě obdržíme speciální hodnotu `NaN`, což je zkratka pro :i[Not a Number - Není číslo].

Nyní už můžeme náš program přepracovat tak, aby fungoval správně.

```js
const start = 15;
const delka = Number(prompt('Zadej délku závodu:'));
const konec = (start + delka) % 24;
document.body.innerHTML += konec;
```

Z tohoto příkladu plyne do budoucna velmi důležité poučení: Vždycky si dávejte dobrý pozor na to, s jakými typy hodnot pracujete. Pokud například chcete používat výstup funkce `prompt` jako číslo, vždy jej explicitně převeďte na číslo. Dáte tak i čtenářům vašeho programu najevo, co je vaším záměrem, a oni tak nebudou muset smysl vašeho programu rozplétat jako detektivní zápletku.

Fakt, že JavaScript pro nás některé konverze dělá automaticky, můžeme také využít k tomu, abychom uživateli vypsali nějakou hezčí zprávu, než jen holé číslo.

```js
document.body.innerHTML += '<p>Běžec dorazí v ' + konec + 'h</p>';
```
