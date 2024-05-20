## Diagram komponent

Pokud máme zadání naprogramovat nějakou webovou aplikaci, začínáme většinou tak, že si uděláma představu o tom, jak má aplikace vypadat a jakým způsobem ji bude uživatel používat. Většinou pak uděláme nějaké skicy, wireframy, mockupy ve Figmě apod. Všechny tyto pojmy označují nějakou formu návrhu, který nám pomůže udělat si před začátkem programování představu o tom, jak má aplikace vypadat a jaké funkce má mít.

Jako programátoři si také potřebujeme umět dopředu rozmyslet, jak aplikaci naprogramovat.
Potřebujeme vědět jaká data bude naše aplikace potřebovat, jaké komponenty budeme vytvářet a jak budou spolu komunikovat. Ideálně bychom z tohoto proceu chtěli také nějaký výstup, který nám pomůže zaznamenat si naše myšlenky. K tomuto účelu budeme používat takzvaný _diagram komponent_.

:::box{type=warning}
Diagram komponent není žádný standardní nástroj používaný v praxi. Je to systém vymyšlený pro potřeby tohoto kurzu, který nám pomůže lépe si představit strukturu aplikace. Zkušenější programátoři si většinou umí strukturu komponent představit bez nějakého diagramu pouze v své hlavě.
:::

Abychom mohli začít kreslit hezké diagramy, je potřeba si do VS Code nainstalovat rozšíření `Draw.io Integration`. Toto rozšíření nám umožní rychle kreslit diagramy přímo v editoru a ukládat je do souborů. Tyto soubory pak můžeme commitnout do gitu a sdílet s ostatními.

::fig{src=assets/drawio.png}

## Strom komponent

Nejzákladnější struktura aplikace může být jednoduše strom komponent. Mějme například takovýto návrh aplikace pro přehled počasí:

::fig{src=assets/weather.png}

Takto si můžeme znázornit stromovou strukturu pomocí diagramu komponent:

::fig{src=assets/component-tree.png}

## Stavy a props

Už základní strom komponent nám může dobře posloužit a stačit k tomu, abychom si udělali představu o struktuře aplikace. Můžeme však zajít ješte do většího detailu a pokusit se znázornit také props a stavy jednotlivých komponent. To nám pomůže lépe pochopit, jak budou jednotlivé komponenty spolu komunikovat a jaké data budou potřebovat.

Stavy a props do komponenty zaznamenáme tímto zppůsobem:

```
Komponenta
props = prvni, druha
state = prvniStav, druhyStav
```

Stavy a props v naší aplikaci s počasím by mohly vypadat takto:

::fig{src=assets/props-state.png}

Schválně říkáme **mohly vypadat**, protože opravdu vyčerpávajícím způsobem do diagramu zaznamenat, jaké přesně props a state bude každá komponta mít, je takto od stolu téměř nemožné. U menších aplikací jako je počasí by to s jistým vypětím sil ještě nějak šlo. Pro větší aplikace si ale ani seniorní vývojáři nedokážou celou strukturu představit takto precizně a do hloubky bez toho, aby napsali jediný řádek kódu.

Diagrmay nám tedy neslouží k tomu, abychom si dokonale zaznamenali strukturu aplikace. Jejich smysl je v tom, udělat si nějakou hrubou představu co bude potřeba naprogramovat, čímž se naučíme nad strukturou aplikace přemýšlet bez programování a neztratit se ihned v detailech toho, jak přesně napsat nějakou konkrétní komponentu.

Diagramy také slouží k tomu, abychom se dokázali v týmu bavit o struktuře programů, aniž bychom museli hned vyrábět kód, který většinou řeší už zbytečné technické detaily, které nás na začátku tolik nezajímají.

## Datové toky

Třetí věc, kterou si do diagramu komponent můžeme zaznamenat je, jakým způsobem se do našich stavu dostanou data a na základě čeho se stav bude měnit. V základu existuje několik zdrojů, ze kterých mohou do stavu přitéct data:

- skrze nějakou událost, například kliknutí na tlačítko, změna ve formuláři, atd., Tomuto zdroji budeme říkat `event`,
- stažením dat z API, zdroj: `fetch`,
- skrze callback od některého z potomků, zdroj: `callback`,

Toto určitě není vyčerpávající seznam všech možných způsobů, jak změnit stav. Pro naše aplikace ale zatím bohatě stačí.

Datové toky můžeme do diagramu zaznamenat takto:

```
Komponenta
props = prvni, druha
state = prvniStav, druhyStav
event -> prvniStav
fetch -> druhyStav
callback -> prvniStav
```

V případě naší aplikace by mohly datové toky vypadat například takto:

::fig{src=assets/data-flow.png}

Opět předesíláme, že tento popis nemusí být dokonale přesný. Až kdybychom aplikaci programovali, zjistili bychom, že by bylo potřeba diagram trochu upravit, některé stavy posunout do jiných komponent, někde zařídit složitější komunikací, která nám na začátku unikla, apod.
