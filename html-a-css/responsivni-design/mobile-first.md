## Mobile first

Správný přístup jak navrhovat a kódovat webové stránky je nejprve na mobilní zařízení a teprve potom rozšiřovat. Proč bychom měli postupovat tímto způsobem?

### Nějaká ta čísla

::fig[Mobile traffic 2011-2021]{src=assets/Mobile-Traffic-2011-2021.png}
[Zdroj obrázku](https://www.broadbandsearch.net/blog/mobile-desktop-internet-usage-statistics)
<br/>

- až 70% návštěv webů pochází z mobilních zařízení
- 61% uživatelů se na stránku už nevrátí, pokud neměli dobrou zkušenost na telefonu
- 96% vyhledávání na Google pochází z mobilních zařízení
- 83% mobilních uživatelů předpokládá bezvadný přístup na stránky i pokud je navštíví z mobilního zařízení

[Zdroj](https://techjury.net/blog/what-percentage-of-internet-traffic-is-mobile/)

### Proč kódovat mobile first

Prostor na telefonu je omezený, proto je náročný na design. Vždycky je snazší věci přidávat, než je ubírat. Proto musíme prioritizovat to nejdůležitější. Na telefonu se uživatele potřebují co nejrychleji dostat k užitečným informacím.

::fig[Display comparison czechitas mapy cz]{src=assets/mobile-first-czechitas.png}
<br/>
::fig[Display comparison skyscanner]{src=assets/responsive-skyscanner.png}
<br/>

Zároveň na telefonu se uživatelé chovají jinak, nemají myš a klávesnici, ale většinou jen jeden palec. Proto při designu pro malé obrazovky mějme na paměti pár pravidel:

- content first: obsah je klíčový, nezahlcujte uživatele množstvím informací
- jasná vizuální hierarchie, přehledná navigace
- call-to-action tlačítka jsou viditelná mají velkou klikatelnou plochu
- pouze jeden sloupec pro obsah, vyhýbejte se horizontálnímu scrollování

::fig[Mobile reach]{src=assets/mobile-reach.png}
<br/>

### Jak rozšířit design na další zařízení

V dnešní době je důležité nepřemýšlet nad responzivním designem tak, že navrhuji stránku pro mobil - tablet - desktop, ale tak, že design musí fungovat na všech šířkách od 360px do 3840px. Design by měl být flexibilní a fluidní.

Dobrou stránkou pro inspiraci responzivními weby je třeba [mediaqueri.es](https://mediaqueri.es/).
