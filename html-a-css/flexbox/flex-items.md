
### Vlastnosti flex-items

U položek (flex-items) můžeme upravovat pořadí a velikost. Pamatujme, že aby se následující vlastnosti projevily, prvek musí být potomkem prvku, který má nastavenou vlastnost `display:flex`!

**`order: 0 / number`**      

Pořadí u flex-items je defaultně **0** a položky jsou poskládány podle toho, jak jsou napsány v HTML. Pokud chceme položku posunout, nastavíme jí vlastnost `order` na číslo větší nebo menší než nula. Hodnota vlastnosti order je pouze číslo, bez jednotky. 

::codepen{user=marketaanezka id=xxPWjpx tab=html,result}  

Velikost flex-items můžeme nastavovat pomocí vlastností `flex-grow`, `flex-shrink` a `flex-basis`. 

**`flex-grow: 0 / number`**     

Flex-grow nám určuje, kolik volného prostoru položka zabere. Jako hodnotu má číslo (bez jednotky), nelze nastavit negativní čísla.    
**Defaultní hodnota je 0** – prvky se na volný prostor neroztahují, zabírají pouze takový prostor, jaký je jejich obsah.     
Pokud jednomu prvku nastavíme `flex grow: 1` zabere všechno volné místo, protože všechny ostatní prvky mají 0. 
Pokud jinému prvku nastavíme `flex-grow: 2`, **zabere dvakrát tolik volného místa**, než prvek s hodnotou flex-grow 1.    
*Není to tak, že prvek s hodnotou 2 je dvakrát tak veliký, jako prvek s hodnotou 1.*

::codepen{user=marketaanezka id=XWzEqVL tab=html,result}  

**`flex-shrink: 1 / number`**     

Flex-shrink definuje, zda se bude prvek smršťovat, a o kolik. Jako hodnotu má opět číslo (bez jednotky), nelze nastavit negativní čísla. 
Zde je defaultní hodnota **1**, prvek se defaultně smršťuje, aby se vešel do flex-containeru.     
Hodnota `flex-shrink: 2` neznamená, že prvek bude dvakrát menší, ale že se bude smršťovat dvakrát "rychleji". 
Pokud nastavíme hodnotu na `flex-shrink: 0`, prvek se nebude smršťovat.   

::codepen{user=marketaanezka id=PoOReRJ tab=html,result}  


**`flex-basis: auto/100px/20%/...`**     
Pokud nastavíme flex-items šířku, tedy `width`, bude se chovat jinak, pokud má flex-container nastaveno `flex-direction: row` nebo `flex-direction: column`. Stejně tak `height`.     
Protože můžeme střídat, která osa je hlavní (zda horizontální nebo vertikální) je tu možnost nastavovat místo toho `flex-basis`. 
U horizontální hlavní osy (flex-direction:row) znamená `flex-basis: 100px` šířka 100px a pokud je hlavní osa vertikální (flex-direction: column), tak to znamená, že výška bude 100px.     
Defaultní nastavení je auto – to znamená tolik, kolik má prvek obsahu. Je možné nastavit specifickou šířku, ale je důležité myslet na `flex-shrink` and `flex-grow`, takže se to dá spíš chápat jako „v ideálním případě“.     

::codepen{user=marketaanezka id=XWzEqEL tab=html,result}  

**`flex: 0 1 auto`**      
Vlastnost `flex` kombinuje vlastnosti `flex-grow`, `flex-shrink` a `flex-basis` ve zkráceném zápisu. Je důležité pořadí hodnot - první je vždy flex-grow, následně flex-shrink a poslední je flex-basis. Tento zápis je možné využívat, někdy je však lepší pro přehlednost jednotlivé vlastnosti vypsat samostatně. 
