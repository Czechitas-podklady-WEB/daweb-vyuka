## Responzivní design

Responzivní design je design webových stránek, který se přizpůsobuje velikosti zařízení. Tedy design, který se přizpůsobí jak telefonu, tak ultraširokému monitoru. Vytvářet responzivní weby je důležité, protože stránka je potom přehledná, příjemná na používání, uživatel ji může používat na všech zařízeních. Předejdeme tak tomu, že uživatele otrávíme a už se na stránku nebude chtít vrátit.

Je potřeba myslet nejen na mobily, ale i na tablety, laptopy, desktopy, ultraširoké monitory, televize. Na stránce [statcounter](https://gs.statcounter.com/screen-resolution-stats#monthly-202002-202102-bar) je možné vidět, jaká velikost zařízení je nejčastější.

### Cíl responzivního webdesignu

Cílem responzivního webdesignu je **zajistit optimální uživatelskou zkušenost na jakémkoliv zařízení**. To znamená:

#### Stránka je dobře použitelná

- na všechno jde pohodlně “kliknout”
- nikde není obsah přes sebe nebo není něco schované “za rohem”
- na mobilu např. nevyžaduji stisknutí klávesy na klávesnici, apod.
- nespoléhám na stav “hover” např. pro otevírání menu - na mobilu neexistuje!

#### Přizpůsobený obsah

- upřednostňujeme obsah, který může být užitečný pro mobilní uživatele - např. kontaktní údaje, otevírací doba, moje letenka/jízdenka
- části textu můžeme “zabalit” - např. časté otázky/odpovědi
- na mobilu nemusíme vidět všechno - ubereme animace, “kudrlinky”

#### Přizpůsobená navigace

- Zjednodušená navigace
- Ideálně jsou viditelné hlavní odkazy, zbytek schovaný a dostupný po rozkliknutí
- Často se používá “hamburger” menu - ideálně ikonka plus popis

::fig[cesko digital responzivni]{src=assets/cesko-digital-responzivni.png}

### Devtools

Jak už víme, devtools je jeden ze základních nástrojů každého vývojáře. A u tvorby responzivního designu to platí obzvlášť. Je velice nepravděpodobné, že bychom při vývoji stránky u sebe měli celou škálu zařízení, od chytrých hodinek po televizi, proto pomocí vývojářských nástrojů můžeme velikost zařízení nasimulovat.

::fig[devtools responzivni]{src=assets/devtools-responsivity.gif}
