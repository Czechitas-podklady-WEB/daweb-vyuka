## Cykly

Pole a cykly jsou jakýmsi svatým grálem začátečníckého programování. Otvírají cestu k mnohem zajímavějším a komplexnějším programům a aplikacím. Cykly slouží k tomu, abychom mohli nějaký kus kódu provádět opakovaně. Síla počítačů spočívá právě v tom, že dokážou extrémně rychle provádět opakovanou činnost a tím nám ušetřit mnoho práce. V JavaScriptu existuje vícero typů cyklů a v této lekci se zatím představíme pouze ty hlavní a základní.

### Cyklus WHILE

Na nejpřímočařejší použití cyklu narazíme ve chvíli, kdy chceme provést nějaký kus kódu vícekrát po sobě. Pro jednoduchost zečněme tím, že budeme chtít do konzole vypsat čísla od 1 do 10. Toho dosáhneme následujícím kódem.

```js
let num = 1
while (num <= 10) {
	console.log(num)
	num += 1
}
```

Na začátku si vytváříme proměnnou `num`, která bude obsahovat naše čísla. Poté následuje cyklus, který vypadá velmi podobně jako podmínka `if`. Podobně jak u podmínek, i zde se do kulatých závorek píše výraz, který vrací pravdivostní hodnotu. Pokud tento výraz vrátí `true`, vykoná se zadaný blok kódu. Jakmile však blok kódu skončí, výraz v kulatých závorkách se vyhodnotí znovu. Pokud opět vrátí `true`, blok kódu se vykoná znova. Takto se cyklus opakuje tak dlouho, dokud výraz v závorkách nevrátí `false`.

Protože v bloku kódu vždy přičteme k proměnné `num` jedničku, cyklus se nám zopakuje dohromady desetkrát.

Cyklus nemusíme použít jen k počítání. Můžeme například nechat uživatele zadávat heslo tak dlouho, dokud nezadá to správné.

```js
let pass = prompt('Enter your password:')
while (pass !== 'fatboyslim') {
	pass = prompt('Wrong password. Try again:')
}
```

Tento program je na uživatele zbytečně zlý. Lepší by nejspíš bylo, kdybychom počet opakování omezili například na maximálně pět.

```js
let attempt = 1
let pass = prompt('Enter your password:')
while (pass !== 'fatboyslim' && attempt < 6) {
	pass = prompt('Wrong password. Try again:')
	attempt += 1
}
```

Pozor na to, že stačí malá nepozornost a vyrobíme cyklus, který se opakuje do nekonečna.

```js
let num = 1
while (num <= 10) {
	console.log(num)
	num + 1
}
```

V praxi se nám občas nekonečný cyklus hodí, ale většinou vzníká jako chyba v programu. Jistě se vám již mnohokrát stalo, že počítač takzvaně zamrznul. Většinou je to právě proto, že nějaký program se omylem dostal do nekonečné smyčky.

### Procházení pole

Velmi často budeme používat cyklus k tomu, abychom prošli nejaké pole prvek po prvku a s každým prvkem něco udělali. V takovém případě si vyrobíme cyklus, který prochází jednotlivé indexy pole a tyto indexy pak používáme k přístupu k jednotlivým prvkům. Zkusme například vypsat na obrazovku naše pole známek.

```js
const marks = [2, 4, 1, 3, 4, 3]

let i = 0
while (i < marks.length) {
	console.log(marks[i])
	i += 1
}
```

Aby cyklus správně fungoval, musíme si dát dobrý pozor jednak na to, abychom s indexem `i` začínali od nuly a abychom nepřekročili délku pole.

Všimněte si, že už po několikáté vidíme cyklus, kde používáme nějakou proměnnou, kterou postupně navyšujeme dokud nedojdeme k nějakému limitu. Protože tato proměnná vlastně řídí, jak dlouho se celý cyklus bude opakovat, říkáme jí :term{cs="řídící proměnná" en="control variable"}.

### Cyklus FOR

Cyklus s řídící proměnnou je v programování tak častý, že si pro něj programátoři vytvořili speciální syntax, která se jmenuje FOR cyklus. V cyklech FOR jsou všechny příkazy s řídící proměnnou na jednom místě a kód je pak lépe čitelný.

Ukažme si ještě jednou cyklus WHILE pro výpis známek do konzole.

```js
const marks = [2, 4, 1, 3, 4, 3]

let i = 0
while (i < marks.length) {
	console.log(marks[i])
	i += 1
}
```

Nyní pohlédněte na tutéž funkčnost zapsanou pomocí cyklu FOR.

```js
const marks = [2, 4, 1, 3, 4, 3]

for (let i = 0; i < marks.length; i += 1) {
	console.log(marks[i])
}
```

Vidíte nyní všechny příkazy pro práci s řídící proměnnou pěkně na začátku cyklu a nemusíme se rozlížet po celém kódu, abychom je našli.

## Složitejší cykly

K zajímavějším programům se dostaneme ve chvíli, kdy uvnitř cyklů začneme pracovat s proměnnými mimo cyklus. Takto například spočítáme průměrnou známku.

```js
const marks = [2, 4, 1, 3, 4, 3]

let sum = 0
for (let i = 0; i < marks.length; i += 1) {
	sum += marks[i]
}

const averageMark = sum / marks.length
```

Tímto způsobem se můžeme propracovat až k velmi složitým algoritmům, cyklům uvnitř cyklů apod. V této lekci se však budeme zatím držet při zemi.

[[[ excs Cvičení: Cykly

- pocitani-while
- pocitani-for
- uzivatele
- pohyby-na-uctu
  ]]]

## Povinné čtení na doma

Díky tomu, že už rozumíme polím, si můžeme představit funkci `document.querySelectorAll`. Tato funguje podobně jako už známá funkce `document.querySelector`. Vrátí nám však **všechny** elementy, které najde pomocí zadaného selektoru. Výsledek obdržíme jako pole DOM elementů. To pak můžeme zpracovat pomocí nějakého cyklu.

V lekci o událostech jsme si slíbili, že díky cyklům dokážeme zjednodušít kód naší aplikace se smajlíky. Připomeňme si HTML kód našich tlačítek.

```html
<button id="btn-smiley1" class="btn-smiley">😀</button>
<button id="btn-smiley2" class="btn-smiley">😍</button>
<button id="btn-smiley3" class="btn-smiley">😜</button>
<button id="btn-smiley4" class="btn-smiley">😢</button>
<button id="btn-smiley5" class="btn-smiley">😱</button>
```

Náš výsledný učesaný JavaScriptový kód vypadal takto.

```js
const selectSmiley = (event) => {
	event.target.classList.add('btn-smiley--selected')
}

document.querySelector('#btn1').addEventListener('click', selectSmiley)
document.querySelector('#btn2').addEventListener('click', selectSmiley)
document.querySelector('#btn3').addEventListener('click', selectSmiley)
document.querySelector('#btn4').addEventListener('click', selectSmiley)
document.querySelector('#btn5').addEventListener('click', selectSmiley)
```

Všimněte si, že kód pro nasazení posluchače na událost `click` jsme museli opakovat pětkrát. Díky `document.querySelectorAll` můžeme nyní posluchače nasadit na všechna tlačítka jedním cyklem.

```js
const selectSmiley = (event) => {
	event.target.classList.add('btn-smiley--selected')
}

const buttons = document.querySelectorAll('.btn-smiley')
for (let i = 0; i < buttons.length; i += 1) {
	buttons[i].addEventListener('click', selectSmiley)
}
```

<!-- ### Datové atributy

Všimněte si, že funkce `btnClick` používá `textContent` k tomu, aby získala číslo, které má tlačítko vlažit na displej. Snadno bychom se však mohli ocitnout v situaci, kdy by naše tlačítka neobsahovala ten správný `textContent`. Například bychom mohli chtít mít tlačítka jako obrázky, které žádný `textContent` nemají. I tak bychom si ale potřebovali někam uložit cifru, která k tlačítku patří. K tomu můžeme použít takzvané datové atributy.

Do jakéhokoliv HTML elementu můžeme přídat libovolný atribut, jehož jméno začíná předponou `data-`. Cifry si tak můžeme uložit například do atributu `data-digit`.

```html
<div class="numpad">
  <div class="display">0</div>
  <img id="btn7" data-digit="7" class="num-btn" src="img/digit7.png" />
  <img id="btn8" data-digit="8" class="num-btn" src="img/digit8.png" />
  <img id="btn9" data-digit="9" class="num-btn" src="img/digit9.png" />
  <img id="btn4" data-digit="4" class="num-btn" src="img/digit4.png" />
  <img id="btn5" data-digit="5" class="num-btn" src="img/digit5.png" />
  <img id="btn6" data-digit="6" class="num-btn" src="img/digit6.png" />
  <img id="btn1" data-digit="1" class="num-btn" src="img/digit1.png" />
  <img id="btn2" data-digit="2" class="num-btn" src="img/digit2.png" />
  <img id="btn3" data-digit="3" class="num-btn" src="img/digit3.png" />
  <img
    id="btn0"
    data-digit="0"
    class="num-btn num-btn--wide"
    src="img/digit0.png"
  />
</div>
```

K datovým atributům se pak v JavaScriptu snadno dostaneme pomocí vlastnosti `dataset`. Funkci `btnClick` bychom tak mohli přepsat takto.

```js
const btnClick = (event) => {
  const displayElm = document.querySelector('.display');
  displayElm.textContent += event.target.dataset.digit;
};
```

Pomocí datových atributů si můžeme k elementům uložit libovolné informace, se kterými pak můžeme v JavaScriptu snadno pracovat. -->

[[[ excs Doporučené úložky na doma

- pocitani-hodin
- cekani-na-sestku
- male-algoritmy
  ]]]

[[[ excs Nepovinné úložky na doma

- registrace
- tezsi-algoritmy
- algoritmy-fajnsmekri
  ]]]
