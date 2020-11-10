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

@exercises ## Cvičení [

- stav
  ]@
