## Pravdivostní hodnoty

Ve zbývající části lekce se vrhneme na takzvané **podmínky** a umožníme tím naším programům dělat rozhodnutí. Před tím si ale musíme trošku připravit půdu a ukázat si nový typ hodnoty. Zatím jsme viděli čísla, řetězce a objekty. Nyní přichází takzvané :term{cs="pravdivostní hodnoty" en="boolean values"}. Čísel a řetězců je nekonečně mnoho, pravdivostní hodnoty jsou však jen dvě: `true` a `false`. Používají se k tomu, abychom vyjádřili, zda je něco pravda nebo není. Například:

```js
const pristupPovolen = false;
const vstupJeCislo = true;
const mobilniProhlizec = true;
```

Abychom mohli v našich programech činit rozhodnutí, budeme také potřebovat výrazy vracející pravdivostní hodnoty. Ty můžeme sestavit pomocí takzvaných :term{cs="porovnávacích operátorů" en="comparison operators"}.

```js
const age = 21;
age > 18; // ⟶ true
age > 21; // ⟶ false
age >= 21; // ⟶ true
age === 21; // ⟶ true
age !== 21; // ⟶ false
```

Kompletní sada porovnávacích operátorů vypadá takto:

| Operátor  | Popis            |
| --------- | ---------------- |
| **`>`**   | větší než        |
| **`>=`**  | větší nebo rovno |
| **`<`**   | menší než        |
| **`<=`**  | menší nebo rovno |
| **`===`** | rovno            |
| **`!==`** | nerovno          |

:::warn
V JavaScriptu můžete narazit i na operátory `==` a `!=`. Ty však nebudeme nikdy používat! Jde o zastaralé operátory, které v některých případech mohou zanést do našeho programu nechtěné chyby a zmatky.
:::
