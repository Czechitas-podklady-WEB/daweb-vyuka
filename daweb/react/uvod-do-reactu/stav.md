## Stav

Pokud chceme udělat naše React komponenty skutečně interaktivní, je potřeba naučit se pracovat s takzvaným :term{cs="stavem" en="state"}. Porozumět tomu, jak stav v Reactu funguje, je občas výzva i pro zkušenější programátory. Naštěstí význam slova :i[stav] v Reactu vychází z významu tohoto slova v realitě. Můžeme proto začít příkladem přímo ze života.

### Stav kolem nás

Představte si, že někde přes inzerát prodáváte svoji starou pohovku. V takovém inzerátu se sluší zmínit její :i[stav], tedy například, že je mírně vybledlá, na některých místech odřená apod. Zde se můžeme zamyslet, o čem to vlastně mluvíme, když říkáme :i[stav pohovky]. Mohli bychom říct, že stav je nějaká sada vlastností, které se mohou během života pohovky měnit. Stavem pohovky například není její váha nebo to, zda je rozkládací. To jsou vlastnosti, které se během života pohovky nemění. Pohovka však snadno může časem vyblednout nebo se na některých místech odřít.

Dalším příkladem může být stav vašeho auta. Během používání auta se průběžně mění stav nádrže, počet najetých kilometrů, počet pasažérů v autě a další vlastnosti. U některých aut je možné přidat nebo ubrat sedadla, takže se může například změnit i počet míst v autě. Rozhodně se však nemění například obsah nádrže, počet kol apod.

Uvnitř webové aplikace samozřejmě také nalezneme mnoho stavů. Zaškrtávácí políčko může být zaškrtnuté nebo nezaškrtnuté, vyjížděcí menu může být otevřené nebo zavřené. Stavem je však také například počet objednaných produktů v košíku, počet nepřečtených emailů ve schránce, jméno právě přihlášeného uživatele, text, který uživatel vyplnil do nějakého formuláře a tak dále.

### Stav v JavaScriptu

V JavaScriptu každou vlastnost představující stav reprezentujeme jednou proměnnou. Můžeme mít například proměnnou udávající stav nádrže v autě.

```js
let tankLevel = 'full';
```

Po dlouhé cestě autem se nejspíš stav nádrže změní takto:

```js
tankLevel = 'almost empty';
```

a pokud dlouho ignorujeme blikající kontrolku, můžeme se dostat do velmi nepříjemného stavu

```js
tankLevel = 'empty';
```

Takto bychom mohli se stavem pracovat v čistém JavaScriptu. React však pro práci se stavem nabízí speciální konstrukci. Pokud bychom chtěli například vytvořit komponentu `Auto`, která pracuje se stavem nádrže, napsali bychom toto:

```js
import { useState } from 'react';

const Auto = () => {
  const [tankLevel, setTankLevel] = useState('full');

  return <div className="auto">Tank level: {tankLevel}</div>;
};
```

Pomocí speciální funkce `useState` říkáme Reactu, že chceme vytvořit proměnnou, která se během života komponenty bude měnit. Jedná se o speciální funkci, která vrací pole o dvou prvcích. První položka reprezentuje hodnotu našeho stavu. V našem případě budeme používat `'full'`, `'almost empty'` nebo `'empty'`. Druhá položka je funkce pro změnu hodnoty našeho stavu. Funkce `useState` navíc přijímá jeden vstup, který použije pro počáteční hodnotu stavu.

V našem případě tedy můžeme v komponentě pracovat s proměnnou `tankLevel`, která bude mít při prvním renderu hodnotu `'full'`. Hodnotu `tankLevel` však můžeme například v reakci na nějakou událost změnit. To provedeme voláním

```js
setTankLevel('almost empty');
```

Tím spustíme přerenderování komponenty s novým stavem, kde v `tankLevel` bude uloženo `'almost emmpty'`.

### Stav a události

Nejčastěji měníme stav komponenty v reakci na nějakou událost. Například v komponentě `Auto` můžeme mít tlačítko, které při kliknutí sníží stav nádrže, což sice není příliš realistické, ale pro ilustraci nám to zatím bude stačit.

```js
import { useState } from 'react';

const Auto = () => {
  const [tankLevel, setTankLevel] = useState('full');

  const handleClick = () => {
    setTankLevel('almost empty');
  };

  return (
    <div className="auto">
      Tank level: {tankLevel}
      <button onClick={handleClick}>Drive</button>
    </div>
  );
};
```

Po zavolání `setTankLevel` se komponenta takzvaně _překreslí_, též se říká _přerenderuje_. To znamená, že se znovu vykreslí na stránce, tentokrát s novou hodnotou stavu. Takto můžeme zařídit, že se obnoví jen ta část stránky, která se opravdu změnila a nemusíme ji celou znovu načítat, jak jsme byli zvyklí v čistém JavaScriptu s JSX.
