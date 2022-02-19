## Stylování JSX elementů

V základech HTML a CSS jste se učili, že není dobré stylovat HTML elementy pomocí atributu `style`. Místo toho se vždy snažíme vytvořit nějakou dobře pojmenovanou CSS třídu. Stejné pravidlo platí i v Reactu. Stejně jako v čistém HTML však občas narazíme na výjimky. 

Vzpomeňte si například na náš projekt Café Lóra, kde jsme stylovali barvy jednotlivých ingrediencí v nápoji. Vzhledem k tomu, že kódy barev byly součástí dat stažených z API, nemohli jsme mít dopředu připravené třídy se všemi možnými barvami. V takovém případě je stylování pomocí atributu `style` oprávněné.

V JSX ke změne individuálních stylů použijeme prop jménem `style`. Obsahem této prop musí být JavaScriptový objekt, kde jednotlivé CSS vlastnosti mají jména v camel case formátu. Takto například v Reactu nastavíme barvu pozadí, barvu písma a výšku elementu.

```js
<div style={{ height: '5rem', color: 'white', backgroundColor: '#ff0000' }} />
```

Zde narážíme na situaci, kdy do nějaké prop předáváme objekt. Je proto třeba dát si dobrý pozor na složené závorky. Takovýto kód nám fungovat nebude.

```js
<div style={ height: '5rem', color: 'white', backgroundColor: '#ff0000' } />
```

Druhý důležitý fakt je, že všechny hodnoty pro naše styly musí být řetězce. Proto nám rozhodně nebude fungovat například takovýto kód.

```js
<div style={{ height: 5rem, color: white, backgroundColor: #ff0000 }} />
```

Naopak co si snadno dovolit můžeme, je nastavit hodnotu stylu pomocí podmíněného operátoru.

```js
<div
  style={{
    height: '5rem',
    color: 'white',
    backgroundColor: podminka ? '#ff0000' : '#0000ff',
  }}
/>
```

Na konci této části opět zdůrazněme, že stylování pomocí atributu `style` děláme pouze ve výjimečných a odůvodněných případech. 
