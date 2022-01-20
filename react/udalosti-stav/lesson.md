Práce se stavem je hlavní téma celého React frameworku. Porozumění tomu, jak stav v Reactu funguje je základem pro tvorbu interaktivních komponent. Porozumět stavovému mechanizmu v Reactu může být ze začátku výzva, proto jsme si dali v této kapitole na čas a ke stavu se dostáváme až nyní, kdy už umíme pracovat s komponentami i JSX.

## Události

Základem veškeré interaktivity na webu jsou události. Do této chvíle jsme si již mnohokrát zkusili, jak na události reagovat v čistém JavaScriptu. V Reactu máme díky JSX život opět o kus snadnější, neboť již nemusíme používat ani `querySelector` ani `addEventListener`. Funkci pro reakci na událost nastavíme vždy danému JSX elementu přímo jako atribut.

Takto například zobrazíme upozornění při kliknutí na tlačítko.

```js
const App = () => {
  const handleClick = () => {
    alert('ahoj');
  };

  return (
    <button className="greet" onClick={handleClick}>
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

[[[ excs Cvičení
- udalosti
]]]

## Stav

Pokud chceme udělat naše React komponenty skutečně interaktivní, je potřeba naučit se pracovat s takzvaným <term cs="stavem" en="state" />. Porozumět tomu, jak stav v Reactu funguje, je občas výzva i pro zkušenější programátory. Naštěstí význam slova :i[stav] v Reactu vychází z významu tohoto slova v realitě. Můžeme proto začít příkladem přímo ze života.

### Stav kolem nás

Představte si, že někde přes inzerát prodáváte svoji starou pohovku. V takovém inzerátu se sluší zmínit její :i[stav], tedy například, že je mírně vybledlá, na některých místech odřená apod. Zde se můžeme zamyslet, o čem to vlastně mluvíme, když říkáme :i[stav pohovky]. Mohli bychom říct, že stav je nějaká sada vlastností, které se mohou během života pohovky měnit. Stavem pohovky například není její váha nebo to, zda je rozkládací. To jsou vlastnosti, které se během života pohovky nemění. Pohovka však snadno může časem vyblednout nebo se na některých místech odřít.

Dalším příkladem může být stav vašeho auta. Během používání auta se průběžně mění stav nádrže, počet najetých kilometrů, počet pasažérů v autě a další vlastnosti. U některých aut je možné přidat nebo ubrat sedadla, takže se může například změnit i počet míst v autě. Rozhodně se však nemění například obsah nádrže, počet kol apod.

Uvnitř webové aplikace samozřejmě také nalezneme mnoho stavů. Zaškrtávácí políčko může být zaškrtnuté nebo nezaškrtuné, vyjížděcí menu může být otevřené nebo zavřené. Stavem je však také například počet objednaných produktů v košíku, počet nepřečtených emailů ve schránce, jméno právě přihlášeného uživatele, text, který uživatel vyplnil do nějakého formuláře a tak dále.

### Stav v JavaScriptu

V JavaScriptu každou vlastnost představující stav reprezentujeme jednou proměnnou. Můžeme mít například proměnnou udávající stav nádrže v autě.

```js
let tankLevel = 'full';
```

Po dlouhé cestě autem se nejspíš stav nádrže změní takto.

```js
tankLevel = 'almost empty';
```

a pokud dlouho ignorujeme blikající kontrolku, můžeme se dostat do velmi napříjemného stavu

```js
tankLevel = 'empty';
```

Takto bychom mohli se stavem pracovat v čistém JavaScriptu. React však pro práci se stavem nabízí speciální konstrukci. Pokud bychom chtěli například vytvořit komponentu `Auto`, která pracuje se stavem nádrže, napsali bychom toto.

```js
import React, { useState } from 'react';

const Auto = () => {
  const [tankLevel, setTankLevel] = useState('full');

  return <div className="auto">Tank level: {tankLevel}</div>;
};
```

Pomocí specální funkce `useState` říkáme Reactu, že chceme vytvořit proměnnou, která se během života komponenty bude měnit. Jedná se o speciální funkci, která vrací pole o dvou prvcích. První položka reprezentuje hodnotu našeho stavu. V našem případě budeme používat `'full'`, `'almost empty'` nebo `'empty'`. Druhá položka je funkce pro změnu hodnoty našeho stavu. Funkce `useState` navíc přijímá jeden vstup, který použije pro počáteční hodnotu stavu.

V našem případě tedy můžeme v komponentě pracovat s proměnnou `tankLevel`, která bude mít při prvním renderu hodnotu `'full'`. Hodnotu `tankLevel` však můžeme například v reakci na nějakou událost změnit. To provedeme voláním

```js
setTankLevel('almost empty')
```

Tím spustíme přerenderování komponenty s novým stavem, kde v `tankLevel` bude uloženo `'almost emmpty'`.

## Pravidla pro práci se stavem

Funkci `useState` můžeme použít v komponentě vícekrát pro několik různých stavových proměnných. Platí však pravidlo, že se při každém renderu musí volat ve stejném pořadí, aby si React mohl vše interně správně propojit. Nemužeme je tedy použít například uvnitř podmínky `if`. Proměnnou pro stav si můžete pojmenovat libovolně. Je však zvykem, že funkce pro změnu stavu se pojmenovává s prefixem `set` a názvem stavu s prvním velkým písmenem podle pravidel camelCase. Například pro stavovou proměnnou `jeVesely` by se funkce pro změnu pojmenovala `setJeVesely`, pro `teplota` pak `setTeplota` apod.

```js
import React, { useState } from 'react';

const App = () => {
  const [pocet, setPocet] = useState(0);

  return (
    <button onClick={() => setPocet(pocet + 1)}>Počet kliků: {pocet}</button>
  );
};
```

[[[ excs Cvičení
- stav
]]]
