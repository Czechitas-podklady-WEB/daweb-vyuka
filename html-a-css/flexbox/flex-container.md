Už víme, že se dá udělat rozložení na stránce nastavením css vlastnosti `position` u jednotlivých prvků. S tím jak se v čase kódování webů vyvíjí, tak se rozšiřují a zjednodušují možnosti, jak rozložení webů dělat. 
Například už není potřeba používat tabulky, nebo floaty. 
V současné době se pro rozložení prvků na stránce nebo v sekcích používá **flexbox** nebo **grid**.    
Flexbox je ideální pro rozložení prvků v sekcích (navbar, galerie fotek etc.), ale dá se s ním i udělat layout celého webu. Pro složitější webový layout se doporučuje použití gridu. Ten na daWeb probírat nebudeme, ale určitě se s ním v budoucnu setkáte, případně si nasdílíme zdroje, abyste se ho mohly v průběhu doučit. 

## Flexbox 
Flexbox je nástroj pro tvorbu layoutu (rozložení prvků) pomocí css.      
Pamatujme si základní pravidla:
- Rozlišujeme flex kontejner a flex položky
- Jednosměrný design
- Rozlišujeme hlavní osu a vedlejší osu - ale jejich směry se mohou měnit


Flexbox se vždy týká obalového elementu – **kontejneru** a jeho potomků – **položek**. V angličtině se jim říká **flex-container** a **flex-items**.      
Flexbox znamená, že položky v daném kontejneru jsou flexibilní, pružné a tak i vyplňují volný prostor v kontejneru. 
Při tvoření layoutu jiné vlastnosti nastavujeme kontejneru a jiné zase položkám. 
  

### Vlastnosti flex-containeru

**`display: flex`**
 
Pokud máme obsah, který chceme nastylovat jako flexbox, tak vždy musíme zajistit, že je obalený v kontejneru.      
Kontejneru potom nastavíme vlastnost `display:flex`. 
Toto nám zajistí, že se nám děti tohoto kontejneru poskládají vedle sebe (respektive podél jedné osy) a stanou se z nich flex-items. 

::codepen{user=marketaanezka id=bGYvMBY tab=html,result}

**`flex-direction: row/column/row-reverse/column-reverse`**

Flexbox je jednosměrný. Směr flexboxu je určený vlastností `flex-direction`. Flexbox má hlavní a vedlejší osu. Buď je hlavní osa horizontální (řádek) a vedlejší osa vertikální (sloupec), nebo naopak. Která osa je hlavní nám určují hodnoty `row / column / row-reverse/ column-reverse`.
Defaultní hodnota vlastnosti flex-direction je `row`.

::codepen{user=marketaanezka id=XWzEqpG tab=html,result}

**`flex-wrap: nowrap/wrap/wrap-reverse`**    

Pomocí vlastnosti `flex-wrap` určujeme, zda se položky ve flexboxu zalamují, nebo ne. Defaultní hodnota je `nowrap`. 

::codepen{user=marketaanezka id=yLPKjMx tab=html,result} 

Dále je na kontejneru možné nastavit, jak se prvky uvnitř něj zarovnají, a to pomocí justify-content a align-items.

**`justify-content: flex-start/flex-end/center/space-evenly/space-around/space-between`**       
     
`Justify-content` určuje, jak se položky zarovnají **podél hlavní osy**    
- Flex-start (defaultní hodnota) - na začátek osy
- Flex-end – na konec osy
- Center – do středu hlavní osy
- Space between – prvky jsou rozmístěny rovnoměrně na ose, první prvek úplně na začátku, poslední prvek úplně na konci
- Space around – prvky jsou rozmístěny rovnoměrně na ose, a kolem nich je vždy stejně volného prostoru na každé straně (pro každý prvek zleva i zprava) 
- Space evenly - prvky jsou rozmístěny rovnoměrně na ose a mezi dvěma prvky je vždy stejné místo 

::codepen{user=marketaanezka id=GROxdmW tab=html,result} 

**`align-items: stretch/flex-start/flex-end/center/baseline`**      
       
`align-items` určuje zarovnání prvků **podle vedlejší osy**. 
- Stretch (defaultní) - prvky se roztáhnou přes vedlejší osu
- Flex-start/start/self-start – začátek vedlejší osy 
- Flex-end - zarovnání na konec osy
- Center - zarovnání do středu osy 
- Baseline - zarovnání podle prvního řádku textu 

::codepen{user=marketaanezka id=qBVoYVd tab=html,result}  


