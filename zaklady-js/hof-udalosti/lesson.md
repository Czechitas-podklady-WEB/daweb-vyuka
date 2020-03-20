Předchozí lekce nám ukázala, jak můžeme pomocí JavaScriptu měnit obsah stránky. K plně interaktivním stránkám však potřebujeme také reagovat na akce uživatele. Chceme například něco zobrazit, když uživatel klikne na tlačítko, umožnit mu vložit nějaký vstup do textového políčka a tak dále. K tomu potřebujeme porozumět takzvaným událostem. K tomu, abychom uměli dobře používat události se však také potřebujeme dozvědět něco málo více o tom, jak fungují funkce.

## Funkce vyššího řádu

Z předchozí lekce už víme, že funkce jsou hodnoty podobně jako čísla, řetězce nebo DOM elementy a viděli jsme, že je díky tomu můžeme ukládat do proměnných. To je však pouze začátek toho, co je možné s funkcemi dělat a nyní se pustíme králičí norou malinko hlouběji. Funkce je totiž zcela rovnoprávná hodnota, a tak ji můžeme nejen uložit do proměnné, ale také předat jiné funkci na vstup. Můžeme tedy funkci předat jinou funkci. Taková myšlenka může ze začátku působit dost odvážně a možná až děsivě. Postupujme tedy pomaličku a s rozvahou.

### Chytřejší kalkulačka

Vraťme s na chvíli k příkladu [kalkulačka](dom-funkce#exrc-kalkula%C4%8Dka) z minulé lekce. Zadání bylo vytvořit funkci `calc`, která spočítá výsledek operace zadané jako řetězec. Přímočaré řešení mohlo vypadat například takto.

```js
const calc = (num1, op, num2) => {
  if (op === '+') {
    return num1 + num2;
  }
  if (op === '-') {
    return num1 - num2;
  }
  if (op === '*') {
    return num1 * num2;
  }
  if (op === '/') {
    return num1 / num2;
  }
};
```

Možná si říkáte, jestli by tato funkce nešlo napsat nějak šikovněji a úsporněji. Například předat funkci operaci tak nějak přímo a naše funkce by ji jen vykonala. Něco ve stylu

```jscon
> calc(2, +, 3)
5
```

Pokud přemýšlíte tímto směrem, jste na správné stopě. Jen na to musíme jít trošku od lesa. Nejprve si vyrobíme funkce, které provádějí jednotlivé operace.

```js
const plus = (num1, num2) => num1 + num2;
const minus = (num1, num2) => num1 - num2;
const times = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
```

Jelikož každá takováto funkce je hodnota, můžeme ji předat jako vstup do funkce `calc`. Ta pak obdrženou funkci pouze zavolá.

```js
const calc = (num1, op, num2) => op(num1 + num2);
```

Funkci `calc` pak pužijeme velmi přímočaře.

```jscon
> calc(2, plus, 3)
5
> calc(4, times, 5)
20
```

Ze začátku se vám možná z takovýchto triků malinko točí hlava. Projdětě si proto následující fakta, abyste získali zpět ztracenou rovnováhu.

1. V parametru `op` nyní není řetězec, jako tomu bylo dříve, nýbrž funkce.
1. Funkce `calc` funkci `op` zavolá, aniž by věděla, co je tato funkce vlastně zač. Prostě vezme cokoliv, co jí dáme na vstup, a zavolá to.
1. Když voláme funkci `calc` a na vstupu je například funkce `plus`, všimněte si, že funkci `plus` nevoláme. Za proměnnou `plus` nejsou kulaté závorky. Funkci pouze předáváme jako hodnotu, podobně, jako bychom předávali číslo, řetězec apod.

Funkcím, které berou jiné funkce jako vstup nebo vracejí funkce jako svůj výstup, se v teorii programování říká _funkce vyšších řádů_. Je to velmi důležitý koncept, který má spoustu využítí a budeme jej používat v mnoha různých situacích.

### Zpoždění a časovače

Jedna ze situací, kdy se nám velmi hodí funkce vyššího řádu, je chvíle, kdy chceme v JavaScriptu provedení nějaké funkce pozdržet nebo její volání pravidelně opakovat. Představme si, že programujeme nějakou kvízovou stránku, kde uživatel odpovídá na otázky a na každou otázku má čas například 5 vteřin. Když se mu otázka zobrazí, chceme počkat 5 vteřin a poté vypsat něco jako "čas vypršel". Vyrobíme si tedy funkci, který vypisuje naši zprávu, zatím pro jednoduchost pouze do konzole.

```js
const timeIsUp = () => {
  console.log('Čas vypršel');
};
```

Tuto funkci chceme spustit pět vteřin poté, co se otevře naše stránka. K takovému účelu JavaScript poskytuje funkci `setTimeout`. Ta jako svůj vstup bere funkci a počet milisekund, které mají uplynout před tím, než se tato funkce zavolá. Použití tak vypadá následovně.

```js
setTimeout(timeIsUp, 5000);
```

Všimněte si, že `setTimeout` je funkce vyššího řádu, neboť bere jako svůj první vstup funkci. Opět vidíme, že funkci `timeIsUp` nevoláme my, ale zavolá ji až JavaScript runtime po uplynutí 5000 milisekund. Celý program pak vypadá takto.

```js
'use strict';

const timeIsUp = () => {
  console.log('Čas vypršel');
};

setTimeout(timeIsUp, 5000);
```

Pokud chceme, aby se nějaká funkce volala opakovaně, například každých pět vteřín, stačí místo `setTimeout` použít `setInterval`.

```js
setInterval(timeIsUp, 5000);
```

### Anonymní funkce

V předchozíme programu je vidět, že funkci `timesIsUp` používáme pouze jednou. Je proto trochu zbytečné pro ni vytvářet proměnnou. Funkci můžeme vytvořit přímo na místě, kdy ji používáme.

```js
'use strict';

setTimeout(() => {
  console.log('Čas vypršel');
}, 5000);
```

Pokud nějakou funkci vytváříme přímo takto na místě místo toho, abychom ji nejdříve uložili do proměné, říkáme, že taková funkce je takzvaně _anonymní_. Takto napsaný program vám možná přijde hůř k přečtení. Anonymní funkce se ovšem v JavaScriptu používají zcela běžně a jakmile si na tento způsob zapisu zvyknete, budete jej radostně používat také.

Podobně jako u funkce `setTimout` bychonm mohli anonymní funkci předat i naší známé funkci funkci `calc`. Schválně zkuste odhanout, co bude výsledkem následujícího výrazu a proč.

```jscon
> calc(13, (x, y) => x % y, 7)
?
```

## Události
