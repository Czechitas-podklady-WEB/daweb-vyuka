## Diagram komponent

Pokud máme zadání naprogramovat nějakou webovou aplikaci, začínáme většinou tak, že si uděláma představu o tom, jak má aplikace vypadat a jakým způsobem ji bude uživatel používat. Většinou pak uděláme nějaké skicy, wireframy, mockupy ve figmě apod. Všechny tyto pojmy označují nějakou formu návrhu, který nám pomůže udělat si před začátkem programování představu o tom, jak má aplikace vypadat a jaké funkce má mít.

Jako programátoři si také potřebujeme umět dopředu rozmyslet, jak aplikaci naprogramovat.
Potřebujeme vědět jaká data bude naše aplikace potřebovat, jaké komponenty budeme vytvářet a jak budou spolu komunikovat. Ideálně bychom z tohoto proceu chtěli také nějaký výstup, který nám pomůže zaznamenat si naše myšlenky. K tomuto účelu budeme používat _diagram komponent_.

:::warn
Diagram komponent není žádný standardní nástroj používaný v praxi. Je to systém vymyšlený pro potřeby tohoto kurzu, který nám pomůže lépe si představit strukturu aplikace. Zkušeněnšjí programátoři v praxi si většinou umí strukturu komponent představit bez nějakého diagramu pouze v hlavě.
:::

## Strom komponent

Nejzákladnější struktura aplikace může být jednoduše strom komponent. Mějme například takovýto návrh aplikace pro přehled počasí:

::fig{src=assets/weather.png}

Takto si můžeme znázornit stromovou strukturu pomocí diagramu komponent:

::fig{src=assets/component-tree.png}

## Stavy a props

Už základní strom komponent nám může dobře posloužit a stačit k tomu, abychom si udělali představu o struktuře aplikace. Můžeme však zajít ješte do většího detailu a pokusit se znázornit také props a stavy jednotlivých komponent. To nám pomůže lépe pochopit, jak budou jednotlivé komponenty spolu komunikovat a jaké data budou potřebovat.

1. Abychom si ještě před začátkem programování udělali představu o struktuře aplikace, vědělí jaké komponenty budeme potřebovat a jak budou spolu komunikovat.
1. Abychom se dokázali bavit o struktuře programů, aniž bychom museli psát skutečný kód.
