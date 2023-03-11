---
title: Kočičí domeček
demand: 1
---

Použijte šablonu [Kočičí domeček](https://github.com/Czechitas-podklady-WEB/kocici-domecek).
Vytvořte a naklonujte si repozitář a spusťte si stránku pomocí `npx serve`.

V kočičím domečku máte připravené kočičky, které budeme pozicovat. Podívejte se na výsledný obrázek.

::fig[Kocici domecek result]{src=assets/vysledek.png}

Každá z pěti kočiček si musí najít svoje místo.

- Kočička s dopisy v levém dolním rohu,
- kočička s motýlem přesně uprostřed domečku,
- kočička s knihou sedí tak, že na levém horním rohu je přesně její střed (vyčuhuje z domečku),
- kočka se sluchátky tančí přesně `30px` od horního a `30px` od pravého okraje
- kočka s myší spí v pravém dolním rohu.

V souboru style.css je také přímo u daných tříd návod. Na počítání některých vzdáleností se bude hodit použití funkce [calc](https://www.vzhurudolu.cz/prirucka/css3-calc).

---solution

Níže jsou uvedené pouze přidané styly. Mohou však být klidně přidané přímo k původním stylům.

```css
.domecek {
  /*
  Tady asi budeš muset něco přidat, abys
  pak mohla pozicovat kočky v rámci domečku
  a ne celé stránky.
  */
  position: relative;
}

.dopis {
  /*
  Kočka si svoje zamilované dopisy
  nejraději čte v levém dolním rohu domečku.
  */
  position: absolute;
  bottom: 0;
}

.motyl {
  /*
  Kočka nejraději honí motýly přesně
  uprostřed domečku, protože tam má na
  dovádění nejvíc místa
  */
  position: absolute;
  top: calc(50% - 118px / 2);
  left: calc(50% - 170px / 2);

  /*
  Tohle nestačí:

  top: 50%;
  left: 50%;
  
  Pokud by se totiž použily pouze hodnoty 50%, bude
  uprostřed domečku levý horní roh obrázku kočky.
  My ale chceme, aby byl uprostře obrázek, tzn.
  jeho střed. Proto musíme levý horní roh posunout
  ze středu o polovinu šířky obrázku doleva
  a o polovinu výšky nahoru.
  */
}

.kniha {
  /*
  Kočka si ráda čte svoje knihy v klidu,
  proto sedí v levém horním rohu domečku,
  ale nejraději tak, aby v rohu domečku
  nebyl její levý horní roh, ale její střed
  (tj. vyčuhuje z domečku ven)
  */
  position: absolute;
  top: calc(-140px / 2);
  left: calc(-120px / 2);
}

.sluchatka {
  /*
  Tahle kočka poslouchá hudbu a na tancování
  si vybrala místo v pravém horním rohu domečku,
  ale tak, aby byla vzdálená 30px od pravé strany
  domečku a 30 px od horní hrany domečku - potřebuje
  totiž na svůj tanec trochu prostoru
  */
  position: absolute;
  top: 30px;
  right: 30px;
}

.spanek {
  /*
  kočka s myší je unavená, a proto chce jít
  spát do pravého dolního rohu domečku
  */
  position: absolute;
  right: 0;
  bottom: 0;
}
```
