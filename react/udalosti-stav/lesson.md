Práce se stavem je hlavní téma celého React frameworku. Porozumění tomu, jak stav v Reactu funguje je základem pro tvorbu interaktivních komponent. Porozumět stavovému mechanizmu v Reactu může být ze začátku výzva, proto jsme si dali v této kapitola na čas a ke stavu se dostáváme až nyní, kdy už umíme pracovat s komponentami i JSX.

## Události

Základem veškeré interaktivity na webu jsou události. Do této chvíle jsme si již mnohokrát zkusili, jak na události reagovat v čistém JavaScriptu. V Reactu máme díky JSX život opět o kus snadnější, neboť již nemusíme používat ani `querySelector` ani `addEventListener`. Funkci pro reakci na událost nastavíme vždy danému JSX elementu přímo jako atribut.

Takto například zobrazíme upozornění při kliknutí na tlačítko.

```js
const Pozdrav = () => (
  <button class="greet" onClick={alert('ahoj')}>
    pozdrav
  </button>
);
```
