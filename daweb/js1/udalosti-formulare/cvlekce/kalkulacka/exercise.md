---
title: Kalkulačka
lead: 'Oživte kalkulačku.'
demand: 2
context: lekce
solutionAccess: protected
---

Vytvořte si repozitář ze šablony [cviceni-kalkulacka](https://github.com/Czechitas-podklady-WEB/cviceni-kalkulacka) se stránkou, která obsahuje číselník a displej jednoduché kalkulačky.

Cílem je vytvořit zadávání číslic na klávesnici kalkulačky. Když uživatel klikne na některé tlačítko na klávesnici kalkulačky, odpovídající číslice se zobrazí na displeji kalkulačky. 

::fig[Kalkulačka]{src=assets/kalkulacka.gif}

1. Připravte si globální proměnnou `displayElm`, ve kterém bude uložen element reprezentující displej kalkulačky.
1. Zápisem do vlastnosti `textContent` můžete měnit, co je na displeji kalkulačky zobrazeno. Vyzkoušejte si zobrazit na kalkulačce třeba číslo `42`.
1. Vyrobte funkci s názvem `handleDigitClick`. Do funkce `handleDigitClick` si přidejte výpis `console.log("Uživatel klikl na tlačítko")`, ať si můžete později ověřit, že se funkce volá. Volání funkce přidáte hned v dalším kroku.
1.  Nyní funkci `handleDigitClick` navěste voláním `addEventListener` jako posluchač události `click` na jedno tlačítko. Ověřte v prohlížeči, že se při klikání na vámi vybrané tlačítko vypisuje uvedený text do konzole.
1. Navěste funkci `handleDigitClick` jako posluchač události `click` i na všechna ostatní tlačítka. Funkce `addEventListener` tedy bude celkem volána desetkrát.
1. Nyní začnete s úpravou funkce `handleDigitClick`, aby se do konzole vypsala číslice, na kterou uživatel kliknul.
1. Přidejte do funkce `handleDigitClick` parametr `event`, do kterého vám prohlížeč vloží informace o události (kliknutí). V `event.target` je odkaz na element, na který uživatel kliknul, je v něm tedy příslušné tlačítko (což si můžete ověřit vypsáním do konzole pomocí `console.log`).
1. Z tlačítka můžete přečíst z vlastnosti `textContent` nápis na tlačítku – v našem případě to bude číslice uvedená na tlačítku. Uložte si tuto číslici do proměnné `digit` a tu si vypište do konzole pomocí `console.log`. Ověřte si v prohlížeči, že se při klikání na tlačítka objevují odpovídající číslice v konzoli.
1. Číslici z proměnné `digit` nyní přidejte na displej kalkulačky – přidejte ji do `textContent` elementu `displayElm`. Cifry na displeji kalkulačky mají přibývat jako na běžné kalkulačce (tj. nově přidaná cifra se přidá doprava, jako je na animaci výše).
1. Nyní by mělo jít klikáním na jednotlivá tlačítka s číslicemi přidávat číslice na displej. 
1. Uživateli nyní nic nebrání, aby zadal třeba dvaceticiferné číslo, které vyteče z displeje. Přidejte do funkce `handleDigitClick` na správné místo podmínku, která zařídí, že pokud už je na displeji 9 číslic, žádná další číslice se nepřidá.
1. Odstraňte z kódu pomocné výpisy `console.log`, pokud tam ještě nějaké zbyly.

:::solution

```js
const displayElm = document.querySelector('.display');

const handleDigitClick = (event) => {
  if (displayElm.textContent.length === 9) {
    return; // Na displeji už máme 9 číslic, žádná další se tam nevejde – rovnou skončíme.
  }
  const digit = event.target.textContent;
  displayElm.textContent += digit;
};

document.querySelector('#btn-0').addEventListener('click', handleDigitClick);
document.querySelector('#btn-1').addEventListener('click', handleDigitClick);
document.querySelector('#btn-2').addEventListener('click', handleDigitClick);
document.querySelector('#btn-3').addEventListener('click', handleDigitClick);
document.querySelector('#btn-4').addEventListener('click', handleDigitClick);
document.querySelector('#btn-5').addEventListener('click', handleDigitClick);
document.querySelector('#btn-6').addEventListener('click', handleDigitClick);
document.querySelector('#btn-7').addEventListener('click', handleDigitClick);
document.querySelector('#btn-8').addEventListener('click', handleDigitClick);
document.querySelector('#btn-9').addEventListener('click', handleDigitClick);
```
:::

#### Bonus

1. Je zvykem zobrazovat čísla na kalkulačce bez úvodní nuly. Nula na začátku tedy bude zobrazena pouze tehdy, když je na displeji nula jako taková.
1. Uvědmote si, že výše uvedené pravidlo znamená, že když je na displeji zobrazena nula, uživatelem zadanou číslici nechceme na displej přidat, ale chceme celý obsah displeje (tj. zobrazenou nulu) nahradit číslicí, na kterou uživatel klinul.
1. Do `handleDigitClick` přidáte podmínku, která podle obsahu displeje (zda je na něm zobrazena jen nula) rozhodne, zda chceme číslici na displej přidat, nebo zda chceme obsah displeje zadanou číslicí přepsat.
1. Díky výše uvedené podmínce už se nikdy nemůže stát, že by na displeji bylo zobrazeno jiné číslo začínající nulou, třeba `01`. Tyto případy tedy nemusíme ošetřovat a komplikovat kód dalšími podmínkami.
1. Když je na displeji zobrazena nula a uživatel klikne na nulu, nahradí se nula nulou. Z lidského pohledu je to nelogické, práce navíc. Pro počítač to ale není skoro žádná práce. Kdybychom to chtěli řešit, kód bude jenom složitější – proto to takto necháme. Přehlednost kódu má přednost před tím, že bychom počítači ušetřili pár nanosekund práce.

:::solution

```js
const displayElm = document.querySelector('.display');

const handleDigitClick = (event) => {
  if (displayElm.textContent.length === 9) {
    return;
  }
  const digit = event.target.textContent;
  if (displayElm.textContent === '0') {
    displayElm.textContent = digit; // Na displeji je nula, chceme ji tedy nahradit zadanou číslicí.
  } else {
    displayElm.textContent += digit;
  }
};
```

:::
