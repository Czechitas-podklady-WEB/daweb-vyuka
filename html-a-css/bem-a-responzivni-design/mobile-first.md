## Mobile first

Správný postup, jak navrhovat a kódovat responzivní webové stránky je začít od mobilních zařízení, a teprve potom přidávat styly pro větší zařízení. Proč bychom měli postupovat tímto způsobem?

### Nějaká ta čísla

::fig[Mobile traffic 2012-2023]{src=assets/Mobile-Traffic-2012-2023.png}
[Zdroj obrázku](https://www.oberlo.com/statistics/mobile-internet-traffic)
<br/>

- 60 % návštěv webů pochází z mobilních zařízení
- 61 % uživatelů se na stránku už nevrátí, pokud neměli dobrou zkušenost na telefonu
- 96 % vyhledávání na Google pochází z mobilních zařízení
- 83 % mobilních uživatelů předpokládá bezvadný přístup na stránky i pokud je navštíví z mobilního zařízení

[Zdroj](https://techjury.net/blog/what-percentage-of-internet-traffic-is-mobile/)

### Proč kódovat _mobile first_

Prostor na telefonu je omezený a náročný na design. Je lepší tedy začít tím těžším, vymezit si ty nejdůležitější informace a akce. Poté už bude snadnější přidávat další věci pro větší zařízení. Jde o dobrou praxi, protože se zaměřujeme primárně na obsah a dobrou použitelnost. Animace a sekundární obsah řešíme až v druhém kroku.

::fig[Display comparison czechitas mapy cz]{src=assets/mobile-first-czechitas.png}
<br/>
::fig[Display comparison skyscanner]{src=assets/responsive-skyscanner.png}
<br/>

### Jak postupovat při designu pro mobilní zařízení? 

- _content first_: obsah je klíčový, nezahlcujte uživatele množstvím informací a vyberte jen to nejdůležitější
- jasná vizuální hierarchie, přehledná navigace
- _call-to-action_ tlačítka jsou dobře viditelná, mají velkou klikatelnou plochu a nespoléhají na _hover_
- pouze jeden sloupec pro obsah, vyhýbejte se horizontálnímu scrollování
- dosažitelnost elementu při držení telefonu v jedné ruce 

::fig[Mobile reach]{src=assets/mobile-reach.png}
<br/>

 Kromě devtools si můžete otestovat, zda je web mobile-friendly pomocí [Google nástroje](https://search.google.com/test/mobile-friendly). 

### Jak rozšířit design na další zařízení

Jak už jsme zmiňovali v úvodu, v dnešní době nemůžeme přemýšlet nad responzivním designem tak, že navrhuji stránku pro mobil - tablet - desktop, ale tak, že design musí fungovat na všech šířkách od `360px` do `3840px` (a více). Design by měl být _flexibilní_ a _fluidní_.

Dobrou stránkou pro inspiraci responzivními weby je třeba [mediaqueri.es](https://mediaqueri.es/).
