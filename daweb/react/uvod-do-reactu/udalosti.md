## Události

Základem veškeré interaktivity na webu jsou události. Do této chvíle jsme si již mnohokrát zkusili, jak na události reagovat v čistém JavaScriptu pomocí `addEventListener`. V Reactu máme však život o kus snadnější, neboť funkci pro reakci na událost nastavíme vždy danému JSX elementu přímo jako atribut.

Takto například zobrazíme upozornění při kliknutí na tlačítko.

```js
const HomePage = () => {
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

Náš kód funguje tak, že si posluchač `handleClick` vyrobíme rovnou uvnitř komponenty `HomePage`. Nemusíme už tak používat žádný `querySelector`, abychom se dostali k prvku, na který chceme událost pověsit. Tento posluchač pak vložíme do atributu `onClick`. Všechny atributy pro nám už známé události začínají předponou `on`. Pro další události tedy máme atributy jako `onKeyDown`, `onMouseEnter` apod.

Podobně jako v čistém JavaScriptu mohou mít naše posluchače jeden parametr, který představuje událost, která právě nastala. Můžeme tak například používat vlastnost `target` podobně, jako jsme to dělali doposud.

Takto například můžeme sledovat obsah textového políčka.

```js
const HomePage = () => {
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return <input type="text" onChange={handleChange} />;
};
```

### Přímá manipulace s obsahem stránky

V kurzu JavaScript 1 jsme obsah stránky měnili pomocí funkce `querySelector` a nastavování vlastností jako `textContent`, `className` apod. Později, v kurzu JavaScript 2 jsme přešli na JSX a obsah stránky jsmě změnili tak, že jsem ji celou načetli znova.

V Reactu se až na velké výjimky nepoužívá žádný ze zmíněných přístupů. K aktualizaci stránky se využije technika, kdy se aktualizuje pouze obsah komponenty, které se nějak změnila data. Všechny ostatní komponenty zůstávají nedotčené. Toto umožňuje opravdu rychlou odezvu stránky a je to hlavní a nejdůležitější myšlenka Reactu, kvůli které vlastně celý React vzniknul.

Abychom tento způsobn aktualizace mohli používat, budeme potřebovat pochopit nový pojem jménem _stav_.
