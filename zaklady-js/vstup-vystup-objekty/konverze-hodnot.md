## Konverze hodnot

Úplně na začátku je šikovné všimnout si rozdílu mezi hodnotami jako `12` a `'12'`. Jedna představuje číslo dvanáct, druhá představuje řetězec obsahující znaky 1 a 2. Proto můžeme čekat, že aritmetické operace s těmito hodnotami dopadnou jinak podle toho, zda jde o číslo nebo o řetězec.

```jscon
> 12 + 5
17
> '12' + '5'
'125'
```

JavaScript se nám (občas k naší škodě) snaží udělat život jednodušší a tak za nás v určitých případech provádí automatickou konverzi.

```jscon
> '12' + 5
'125'
> 12 + '5'
'125'
> 1 + 2 + 3 + '4'
'64'
> '1' + 2 + 3 + 4
'1234'
```

Tato konverze funguje i pro jiné operátory, napříkad násobení.

```jscon
> 12 * 5
60
> '12' * 5
60
> 12 * '5'
60
> '12' * '5'
60
```

Dokonce takto funguje i zbytek po dělení.

```jscon
> 12 % 5
2
> '12' % 5
2
> 12 % '5'
2
> '12' % '5'
2
```

Vybaveni touto zkušeností můžeme začít rozplétat, co se nám pokazilo na našem ultramaratonském programu. To nejdůležitější k zapamatování je, že funkce `prompt` **vždycky vrací vstup od uživatele jako řetězec**. I když uživatel do políčka nakrásně napíše číslo, funkce `prompt` pro nás žádnou konverzi automaticky nedělá. Pokud tedy uživatel zadal jako délku závodu číslo 10, do proměnné délka se nám uložila hodnota `'10'`. V konzoli si pak můžeme vyzkoušet, co se dělo pak.

```jscon
> const start = 15
> const delka = '10'
> start + delka
'1510'
> '1510' % 24
22
```

Abychom si s touto situací poradili, budeme potřebovat možnost provést konverzi hodnot sami, aniž by nám do toho JavaScript kecal.

### Explicitní konverze

Pokud chceme konvertovat číslo na řetězec, použijeme funkci `String`.

```jscon
> String(12)
'12'
> String(-2.48)
'-2.48'
```

Když potřebujeme obrácenou konverzi, tedy řetězec na číslo, použijeme funkci `Number`.

```jscon
> Number('12')
12
> Number('-2.48')
-2.48
> Number('-2,48')
NaN
```

Všimněte si, co se stane, když se pokusíme zkonvertovat nějaký řetězec, který na číslo převést nejde. V takovém případě obdržíme speciální hodnotu `NaN`, což je zkratka pro :i[Not a Number - Není číslo].

Nyní už můžeme náš program přepracovat tak, aby fungoval správně.

```js
const start = 15;
const delka = Number(prompt('Zadej délku závodu:'));
const konec = (start + delka) % 24;
document.body.innerHTML = konec;
```

Z tohoto příkladu plyne do budoucna velmi důležité poučení. Vždycky si dávejte dobrý pozor na to, s jakými typy hodnot pracujete. Pokud například chcete používat výstup funkce `prompt` jako číslo, vždy jej explicitně převeďte na číslo. Dáte tak i čtenářům vašeho programu najevo, co je vaším záměrem, a oni tak nebudou muset smysl vašeho programu rozplétat jako detektivní zápletku.

Fakt, že JavaScript pro nás některé konverze dělá automaticky, můžeme využít k tomu, abychom uživateli vypsali nějakou hezčí zprávu, než jen holé číslo.

```js
document.body.innerHTML = '<p>Běžec dorazí v ' + konec + 'h</p>';
```