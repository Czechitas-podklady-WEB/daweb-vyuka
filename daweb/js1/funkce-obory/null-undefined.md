Do této chvíle jsme z jazyka JavaScript již poznali mnoho věcí. Věcí, které často potřebují čas na strávení a zažití, aby se v hlavě dobře usadily na ta správná místa. Pokud se něco nového a náročného snažíme naučit příliš rychle, snadno se stane, že nám v hlavách nové pojmy lítají jak splašené a není jasné, co souvisí s čím a co kam patří. V této lekci tedy vrhneme více světla na věci, které jste už v minulých lekcích použili, ale možná ještě nebyl čas se nad nimi pořádně zamyslet.

## Hodnoty null a undefined

Občas se nám stane, že si potřebujeme nějakou proměnnou připravit, ale zatím ještě nevíme, jaká v ní bude hodnota. Chceme tedy, aby na začátku v proměnné byla nějaká neutrální hodnota, která jakoby nic neznamená. To můžeme zařídit pomocí speciální hodnoty `null`. Můžeme si představit, že hodnota `null` je jakási prázdná výplň, taková vata, která zabírá místo tam, kde zatím nic skutečného není. Jde zároveň o nový typ hodnoty vedle čísel, řetězců, objektů, funkcí apod.

```js
const password = prompt('Zadejte heslo: ');
let message = null;

if (password === 'swordfish') {
  message = 'Access granted';
} else {
  message = 'Access denied';
}

const msgElm = document.querySelector('#msg');
msgElm.textContent = message;
```

Explicitnímu ukládání hodnoty `null` do proměnných jako výše, bychom se měli spíše vyhýbat. Uvedený program se dá bez problému přepsat bez použití `null`.

```js
let message = 'Access denied';

if (password === 'swordfish') {
  message = 'Access granted';
}

const msgElm = document.querySelector('#msg');
msgElm.textContent = message;
```

Často se však stane, že hodnotu `null` vrací nějaké funkce v situaci, kdy se něco nepovedlo. Velmi častý případ je to právě u funkce `document.querySelector`, která vrací `null`, pokud se jí na stránce nezdaří najít element podle zadaného selektoru.

Pojďme zkusit omylem vybrat element pro naši zprávu pomocí CSS třídy, která však v HTML vůbec není.

```js
const msgElm = document.querySelector('.msg');
document.body.innerHTML += msgElm; // při dá konec stránky text „null“
```

Když se k `innerHTML` přidává speciální hodnota `null`, musí si JavaScript s touto hodnotou nějak poradit a převést ji na text. Udělá to tak, že ji převede na text `'null'`, který následně přidá do stránky.

Vidíme, že v proměnné `msgElm` máme místo očekávaného elementu uložena hodnota `null`. Z toho si domyslíme, že metoda `querySelector` kýžený element nenašla a můžeme začít zkoumat, kde jsme v programu udělali chybu.

Pokud to v programu potřebujeme, můžeme proměnnou na hodnotu `null` otestovat pomocí jednoduché podmínky:

```js
if (msgElm === null) {
  document.body.innerHTML += 'Element nenalezen';
}
```

Pozor na to, že `null` je speciální hodnota, v JavaScriptu ji zapisujeme pomocí klíčového slova `null`. Nepleťte si ji s textovým řetězcem `'null'`. Porovnání `null === "null"` vyjde jako nepravda (`false`)!

### Hodnota undefined

Kromě celkem užitečné hodnoty `null` JavaScript také obsahuje zákeřnou hodnotu `undefined`. Pokud `null` je jakási neutrální výplň, hodnota `undefined` v podstatě znamená „prázdno“. Pokud bychom přirovnali proměnné k šuplíkům, mohli bychom si představovat, že hodnota `null` znamená šuplík vyplněný vatou nebo molitanem. Hodnota `undefined` by pak znamenala, že šuplík je úplně prázdný.

Hodnotu `undefined` potkáme v mnoha situacích, ale nejčastěji ve chvíli, kdy se snažíme u nějakého objektu přistoupit k vlastnosti, která neexistuje. Je například velmi snadné udělat překlep v anglickém slově `length`.

```js
const name = 'Martin';
document.body.innerHTML += name.lenght; // úmyslný překlep, vypíše do stránky „undefined“
```

Při přidávání do `innerHTML` se speciální hodnota `undefined` převede na text `'undefined'`, podobně jako se převádí `null`.

Hodnotu `undefined` najdeme také v proměnných, do kterých nepřiřadíme žádnou hodnotu. Toto je však možné provést pouze s proměnnými vytvořenými pomocí `let`.

```js
let name;
document.body.innerHTML += name; // vypíše do stránky „undefined“
```

Podobně jako u hodnoty `null` můžeme přítomnost hodnoty `undefined` ověřit podmínkou:

```js
if (name === undefined) {
  document.body.textContent = 'Něco se pokazilo';
}
```

Podobně jako `null` je i ` undefined`` speciální hodnota, není to řetězec  `'undefined'`.

Hodnota `undefined` nám v budoucnu způsobí ještě hodně nepříjemností, je tedy dobré se již teď obrnit trpělivostí.
