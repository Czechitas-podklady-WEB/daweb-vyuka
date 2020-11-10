Práce se stavem je hlavní téma celého React frameworku. Porozumění tomu, jak stav v Reactu funguje je základem pro tvorbu interaktivních komponent. Porozumět stavovému mechanizmu v Reactu může být ze začátku výzva, proto jsme si dali v této kapitola na čas a ke stavu se dostáváme až nyní, kdy už umíme pracovat s komponentami i JSX.

## Události

Základem veškeré interaktivity na webu jsou události. Do této chvíle jsme si již mnohokrát zkusili, jak na události reagovat v čistém JavaScriptu. V Reactu máme díky JSX život opět o kus snadnější, neboť již nemusíme používat ani `querySelector` ani `addEventListener`. Funkci pro reakci na událost nastavíme vždy danému JSX elementu přímo jako atribut.

Takto například zobrazíme upozornění při kliknutí na tlačítko.

```js
const App = () => {
  const handleClick = () => {
    alert('ahoj');
  };

  return (
    <button class="greet" onClick={handleClick}>
      pozdrav
    </button>
  );
};
```

Náš kód funguje tak, že si uvnitř komponenty `App` nejdříve vyrobíme funkci `handleClick`, která bude reagovat na kliknutí na tlačítko. Tuto funkci pak vložíme do atributu `onClick`. Všechny atributy pro nám už známé události začínají předponou `on`. Pro další události tedy máme atributy jako `onKeyDown`, `onMouseEnter` apod.

Podobně jako v čistém JavaScriptu mohou mít naše posluchače jeden parametr, který představuje událost, která právě nastala. Můžeme tak například používat vlastnost `target` podobně, jako jsme to dělali doposud.

Takto například můžeme sledovat obsah textového políčka.

```js
const App = () => {
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return <input type="text" onChange={handleChange} />;
};
```

### Přímá manipulace s obsahem stránky

V Reactu se téměř nikdy nepoužívá přímá manipulace s obsahem stránky. Nepoužíváme tedy `querySelector` pro výběr elementů ani jim sami nenastavujeme vlastnosti jako `textContent`, `className` apod. Naše události jsou tedy zatím omezeny pouze na zobrazování vyskakovacích oken a vypisování do konzole. Jak správně měnit obsah stránky Reactovým způsobem se naučíme v druhé části lekce.

@exercises ## Cvičení [

- udalosti
  ]@

## Práce se stavem

V komponentách můžeme používat proměnné. Ty se ale po renderu zahodí. Pokud si nějakou proměnnou chceme uchovat, abychom ji mohli později měnit, nabízí nám React hook `useState`. Jedná se o speciální funkci, která vrací pole o dvou prvcích. První položka reprezentuje hodnotu stavu a druhá funkci pro jeho změnu. `useState` přijímá jeden vstup, který použije pro počáteční hodnotu stavu. V praxi se pomocí destructuringu zkracuje použití celého hooku na `const [stav, setStav] = useState('výchozí hodnota')`. V tomto případě můžeme dále v komponentě pracovat s proměnnou `stav`, která bude mít při prvním renderu hodnotu `'výchozí hodnota'`. Hodnotu `stav` můžeme třeba při nějaké události měnit voláním `setStav('nová hodnota')` a tím spustit přerenderování komponenty s novým stavem, kde ve `stav` bude uloženo `nová hodnota`.

`useState` můžeme použít v komponentě vícekrát pro několik různých stavových proměnných. Platí však pravidlo, že se při každém renderu musí volat ve stejném pořadí, aby si React mohl vše interně správně propojit. Nemužeme je tedy použít například uvnitř podmínky `if`. Proměnnou pro stav si můžete pojmenovat libovolně. Je však zvykem, že funkce pro změnu stavu se pojmenovává s prefixem `set` a názvem stavu s prvním velkým písmenem podle pravidel camelCase. Například pro stavovou proměnnou `jeVesely` by se funkce pro změnu pojmenovala `setJeVesely`, pro `teplota` pak `setTeplota` apod.

```js
import React, { useState } from 'react';

const App = () => {
  const [pocet, setPocet] = useState(0);

  return (
    <button onClick={() => setPocet(pocet + 1)}>Počet kliků: {pocet}</button>
  );
};
```

@exercises ## Cvičení [

- stav
  ]@
