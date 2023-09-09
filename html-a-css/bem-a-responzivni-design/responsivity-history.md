## Responzivní design

Responzivní design je design webových stránek, který se přizpůsobuje velikosti zařízení. Tedy design, který se přizpůsobí jak telefonu, tak ultraširokému monitoru (a všemu mezi tím). Vytvářet responzivní weby je důležité, protože dnešní uživatel předpokládá příjemné uživatelské prostředí na jakémkoliv zařízení. Pokud zjistí, že stránka dobře nefunguje např. na telefonu nebo tabletu, může se stát, že se na ni už nikdy nevrátí. 

Typicky se dělí velikosti obrazovek na tři skupiny: mobil, tablet a desktop. Tato tři rozmezí pixelů slouží jako dobrý základ k testování a vývoji.

::fig[3 základní breakpointy]{src=assets/screen-sizes.png}

 Pokud má být stránka plně responzivní, měla by být použitelná a uživatelsky přívětivá ve všech rozlišeních uvnitř těchto rozmezí. Pro představu, kolik  rozlišení může být a která jsou nejčastější slouží statistika na stránce [statcounter](https://gs.statcounter.com/screen-resolution-stats#monthly-202301-202309-bar).

#### Hardwarové pixely versus CSS pixely
Je dobré mít na paměti, že když hovoříme o rozlišení a pixelech, nemluvíme o těch hardwarových, ale o referenční jednotce CSS pixelů. U zařízení s displeji s vysokým rozlišením (např. retina displej u Apple zařízení) může být jejich hardwarové rozlišení třeba 2x nebo i 4x větší. Nás vývojáře ale zajímá velikost v CSS pixelech, která odpovídá velikosti viewportu na daném zařízení. Nicméně je dobré mít na paměti, že tyto hodnoty nejsou 1:1 např. při používání bitmapových obrázků, jejichž kvalita se bude napříč zařízeními lišit. O tvorbě responzivních obrázků budeme mluvit v přístí lekci. 

### Cíl responzivního webdesignu

Cílem responzivního webdesignu je **zajistit optimální uživatelskou zkušenost na jakémkoliv zařízení**. To znamená:

#### Stránka je dobře použitelná

- na všechno jde pohodlně „kliknout“, např. tlačítka jsou dostatečně velké na palec 
- nikde není obsah přes sebe nebo není něco schované „za rohem“
- na mobilu např. nevyžadujeme stisknutí klávesy na klávesnici 
- nespoléháme na stav `hover` např. pro otevírání menu - na mobilu neexistuje

#### Přizpůsobený obsah

- upřednostňujeme obsah, který může být užitečný pro mobilní uživatele - např. kontaktní údaje, otevírací doba, moje letenka/jízdenka
- části textu můžeme „zabalit“ - např. menu schováme pod ikonku hamburgeru
- na mobilu nemusíme vidět všechno - ubereme animace, „kudrlinky“ (výkon mobilních zařízení je nižší a také nechceme uživateli _vyždímat_ baterii)
- mobilním uživatelům nechceme ani _vyždímat_ data, a tak volíme menší obrázky 

::fig[cesko digital responzivni]{src=assets/cesko-digital-responzivni.png}

### Devtools

Jak už víme, devtools je jeden ze základních nástrojů každého vývojáře. U tvorby responzivního designu to platí obzvlášť. Je velice nepravděpodobné, že bychom při vývoji stránky u sebe měli celou škálu zařízení, od chytrých hodinek po televizi, proto pomocí vývojářských nástrojů můžeme velikost zařízení nasimulovat.

::fig[devtools responzivni]{src=assets/devtools-responsivity.gif}
