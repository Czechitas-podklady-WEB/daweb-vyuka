## Užitečné metody na řetězcích

Na řetězcích máme v JavaScriptu spoustu metod, které nám umožňují provádět mnoho užitečných operací. Zde pro začátek vybereme pár z nich.

`toUpperCase()`
: Převede všechna písmena na velká.

```jscon
> 'popokatepetl'.toUpperCase()
'POPOKATEPETL'
```

`toLowerCase()`
: Převede všechna písmena na malá.

```jscon
> 'Popokatepetl'.toLowerCase()
'popokatepetl'
```

`trim()`
: Odstraní bílé znaky ze začátku a konce.

```jscon
> '  popokatepetl '.trim()
'popokatepetl'
```

`slice(start, end)`
: Vyřízne z řetězce kus podle zadaných pozic začátku a konce. U této metody poprvé narážíme na jednu programátorskou výstřednost, kterou budeme potkávat pořád znovu a znovu: **programátoři vždy počítají od nuly**, nikoliv od jedničky jako běžní lidé. V řetězci `'martin'` je tedy písmenko `'m'` na pozici nula, písmenko `'a'` na pozici 1 a tak dále. Metoda `slice` navíc bere dolní mez **včetně**, kdežto horní mez se bere **vyjma**.

```jscon
> 'popokatepetl'.slice(4, 7)
'kat'
> 'popokatepetl'.slice(0, 3)
'pop'
```

`indexOf(value)`
: Vyhledá řetězec zadaný v parametru `value` uvnitř řetězce, na kterém tuto metodu voláme. Vrací pozici prvního výskytu nebo -1 pokud se obsah `value` v řetězci nenachází.

```jscon
> 'popokatepetl'.indexOf('kat')
4
> 'popokatepetl'.indexOf('po')
0
> 'popokatepetl'.indexOf('t')
6
> 'popokatepetl'.indexOf('katka')
-1
```

`padStart(targetLength, padString)`
: Prodlouží řetězec na zadanou délku tak, že na začátek přidá opakování řetězce `padString`. Hodí se na zarovnávání nebo na formátování čísel.

```jscon
> '12'.padStart(4, '0')
'0012'
> '12'.padStart(4, ' ')
'  12'
> '12'.padStart(3, ' ')
' 12'
> '12'.padStart(2, ' ')
'12'
```

Možná vám nyní vrtá hlavou, jestli funkce `Math.round` nebo `console.log` nejsou náhodou metody, když používají tečkovou notaci. Je to skutečně tak. `Math` i `console` jsou speciální JavaScriptové objekty, která sdružují metody pro matematické výpočty nebo pro práci s konzolí.
