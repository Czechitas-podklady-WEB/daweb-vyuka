## BEM

BEM aneb Block - Element - Modifier je jedna z metodik pro pojmenovávání tříd při stylování stránek. BEM není technologie, preprocesor, ani knihovna na stylování. Je to spíš konvence a doporučení, jak je možné si organizovat CSS soubory, vytvářet znovupoužitelné komponenty a psát čitelné CSS.

Pro představu k čemu se BEM hodí, se podívejte na následující design a promyslete si, jak byste přistoupili ke stylování takové stránky.

::fig[BEM Block]{src=assets/page.png}

Všimněte si, že na stránce je mnoho sekcí, které se opakují, nebo mají velmi podobné stylování. Abychom zbytečně neopakovali stejný kód, je dobré si stránku rozvrhnout na jednolitvé komponenty/bloky, které lze stylovat pomocí stejných tříd. S tím nám pomůže právě metodika BEM.

Než se metodice ale dostaneme, připomeňme si, že při zápisu CSS tříd se používá tzv. **kebab case**. Pokud se název třídy skládá z více slov, píše se mezi nimi pomlčka. (Další druhy zápisu jsou snake case, camel case a pascal case).

```
.page-title ✅
.pageTitle  ❌
.PageTitle  ❌
```

### Block Element Modifier

Jak už bylo zmíněno, písmena v názvu BEM znamenají:

- B = block
- E = element
- M = modifier

Zápis CSS tříd podle konvence BEM je následovný:

`[block]__[element]--[modifier]`

#### Block

Blok je samostatná logická a fuknční jednotka na stránce. Má sama o sobě význam, může se na stránce objevit vícekrát s různým obsahem. Bloky se pojmenovávají jako klasické CSS třídy. Název bloku by měl být do určité míry vypovídající nebo popisný, podle toho, co blok obsahuje.

```
.navitem
.card
.transaction-listed
```

Prohlédněte si obrázek a vyznačené oblasti. Všimněte si, které prvky se na stránce opakují. Každý samostatný prvek, který je možné znovu použít, je blok. Na vrchu stránky například vidíme ukázkový příklad tří bloků - kartiček. Mají různé barvy a obsah, ale jinak mají stejný formát.

::fig[BEM Block]{src=assets/block.png}

#### Element

Elementy jsou jednotky, ze kterých je blok tvořen. Elementy samy o sobě nemají význam, **vždy jsou spojené s blokem**. Jako u bloků jejich název popisuje, co je daný element, ne jak vypadá, nebo jaký má stav. Zapisují se do tříd po názvu bloku s **dvojitým podtržítkem**.

```
.card__icon
.card__more
.card__title
.card__amount
.card__difference
.card__footer__amount ❌
.card__footer__difference ❌
```

Elementy se nezanořují, není to kopírování HTML struktury.

```
.card__footer__amount ❌
.card__footer__difference ❌
```

Na obrázku jsou vyznačené možné elementy v daném bloku.

::fig[BEM Block]{src=assets/element.png}

#### Modifier

Modifier neboli modifikátor dává možnosti variace stylu daného bloku nebo elementu. Na rozdíl od bloku a elementu popisuje vzhled nebo stav. Když se jednotlivé bloky a elementy liší pouze velikostí, barvou atp., není potřeba psát celý nový styl, stačí pouze přidat změnu do nové třídy. Modifikátory se píšou **na konec názvu třídy, za dvojitou pomlčku.** 

```
.navitem--active

.stock__difference--up
.stock__difference--down
```

::fig[BEM Block]{src=assets/modifier.png}

Třída `stock__difference` tady určuje styly, které jsou společné pro tento element - font, velikost fontu, paddingy, velikost šipky.
Ve třídě `stock__difference--up` bude pouze styl, který nějak upravuje výchozí styl elementu – v tomto případě by to byla pouze červená nebo zelená barva.

Proto pokud je element modifikovaný, je potřeba do HTML přidat všechny stylovací třídy (tj. nejen ty s modifikátorem, ale i základní třídu bez modifikátoru).

```
<div class="stock__difference stock__difference--up">...</div>
```

### Příklad

Na obrázku vidíte jeden z možných příkladů, jak využít metodiky BEM při stylování. Pokud máme takto nachystanou jednu kartičku s produktem, můžeme ji opakovat několikrát s jinými produkty. Díky stejným třídám budou mít všechny karty stejné stylování. 

::fig[BEM Block]{src=assets/BEM-example.png}

#### Výhody použití BEM

- můžeme recyklovat CSS na více komponentách
- rychle se zoritentujeme, jak na sobě prvky závisí
- píšeme „ploché“ CSS a nevznikají CSS konflikty ve specificitě

#### Nevýhody použití BEM

- třídy jsou sémantické, je potřeba stále vymýšlet názvy bloků a elementů
- CSS může nabobtnat s přidáváním dalších tříd
- špatně se definují hlouběji zanořené elementy
