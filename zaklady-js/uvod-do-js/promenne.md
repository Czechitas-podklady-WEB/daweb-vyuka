## Proměnné

Při složitějších operacích a výpočtech často vyvstane potřeba si nějaký mezivýpočet uložit pro pozdější použití. K tomu nám poslouží takzvané :term{cs="proměnné" en="variables"}. Proměnná je jakási pojmenovaná krabička nebo šuplík, do kterého si můžeme uložit nějakou hodnotu, abychom ji neztratili a mohli ji používat v dalších výpočtech. Abychom si procvičili proměnné a zajímavé operátory, zkusíme vyřešit následující úlohu.

Mějme čas v hodinách zadaný ve 24-hodinovém formátu. Tři hodiny odpoledne tedy píšeme jako 15h. Nyní chceme spočítat, kolik hodin uvidíme na hodinách po uplynutí zadané doby. Například jaký bude čas po uplynutí 15 hodin?

```js
const cas = 13;
const novyCas = (cas + 15) % 24;
document.body.innerHTML = novyCas;
```

V tomto kusu kódu jsme vytvořili hned dvě proměnné: :var[cas] a :var[novyCas]. Každá proměnná v JavaScriptu musí mít své jméno. To by mělo dobře vystihovat, co je v proměnné uloženo. Pokud chceme v programu používat nějakou proměnnou, musíme ji vždy nejdříve vytvořit. To se dělá pomocí klíčového slova `const`. Takovou proměnnou pak můžeme použít v libovolném výrazu tak, že prostě uvedeme její jméno.

Proměnná :var[document.body.innerHTML] je trochu speciální. Tuto proměnnou vytvářet nemusíme, protože už ji pro nás vytvořil prohlížeč při načtení stránky. Nepíšeme tedy před ni `const`.

Většinu proměnných budeme používat tak, že jim při vytvoření přiřadíme nějakou hodnotu a tato hodnota už v proměnná zůstane až do konce jejího života. Občas se však stane, že potřebujeme hodnotu uloženou v nějaké proměnné změnit. V takovém případě musíme proměnnou vytvořit pomocí slovíčka `let`.

Takto můžeme například zkusit spočítat svou budoucí výplatu, pokud budeme pracovat na plný úvazek 21 dní v měsíci za 500 Kč na hodinu.

```js
let sazba = 500;
let vyplata = 8 * 21 * sazba;
document.body.innerHTML = vyplata;
```

Pokud chceme spočítat výplatu pro jinou sazbu, můžeme hodnotu v proměnné změnit. V takovém případě už **nepoužíváme** `const` ani `let`.

```js
let sazba = 500;
let vyplata = 8 * 21 * sazba;
sazba = 600;
document.body.innerHTML = vyplata;
```

Zde si však musíme všimnout jedné velmi důležité věci.

### JavaScript není Excel

Dejte pozor na to, že do proměnné se jako do šuplíku ukládá pouze hodnota a nikoliv celý výraz. Všimněte si, že v příkladu výše jsem změnili hodnotu proměnné :var[sazba]. Po této změně bude v proměnné :var[vyplata] pořád původní hodnota. Pokud chceme obsah této proměnné aktualizovat, musíme příkaz spustit znova.

```js
let sazba = 500;
let vyplata = 8 * 21 * sazba;
document.body.innerHTML = vyplata;

sazba = 600;
vyplata = 8 * 21 * sazba
document.body.innerHTML = vyplata;
```

### Změna na základě předchozí hodnoty

Často se nám stane, že novou hodnotu v proměnné chceme zkonstruovat na základě předchozí hodnoty. Například můžeme chtít hodinovou sazbu navýšit o sto korun.

```js
sazba = sazba + 100;
vyplata = 8 * 21 * sazba
document.body.innerHTML = vyplata;
```

Nebo ji můžeme chtít navýšit třeba o 15 %.

```js
sazba = sazba * 1.15;
vyplata = 8 * 21 * sazba
document.body.innerHTML = vyplata;
```

Tyto případy jsou tak časté, že pro ně JavaScript zavedl speciální operátory. Místo

```js
sazba = sazba + 100;
```

můžeme psát

```js
sazba += 100;
```

Místo 

```js
sazba = sazba * 1.15;
```

píšeme

```js
sazba *= 1.15;
```

Tyto operátory se nám budou hodit také u řetězců. Takto například můžeme k uživatelskému jménu přidat e-mailovou doménu. 

```js
let email = 'alzbeta.zelena';
email += '@gmail.com';
document.body.innerHTML = email;
```
