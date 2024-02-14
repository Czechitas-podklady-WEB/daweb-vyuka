---
title: Pexeso
demand: 3
lead: Oživte pexesové kartičky.
solutionAccess: protected
---

Oživte pexesové kartičky. Kliknutí na libovolnou kartičku by ji mělo obrátit. Další kliknutí by ji mělo vrátit do původního stavu.

::fig[kartičky pexesa]{src=assets/karticky.png}

1. Vycházejte ze šablony na GitHubu [cviceni-pexeso](https://github.com/Czechitas-podklady-WEB/cviceni-pexeso).
1. Upravte soubor `app.js` tak, aby pomocí metody `querySelectorAll` prošel všechny prvky se třídou `karticka` a přidal jim posluchač události na kliknutí.
1. Pokud událost nastane odeberte nebo přidejte kartičce třídu `otocena`. Styly už máte nachystané. Kartička s třídou `otocena` uživateli obrázek skrývá. Po odebrání této třídy se obrázek ukáže.

#### Bonusy

1. Pokud jsou dvě kartičky otočené tak, že ukazují obrázek, zařiďte, aby se po jedné sekundě vrátily do původního stavu.

2. Neotáčejte zpět kartičky, u kterých uživatel našel celý pár. Kartičkám přidejte vlastnost `disabled`, aby na ně ani nešlo znovu kliknout.

   - Že jsou kartičky ze stejného páru poznáte tak, že mají uvnitř obrázek `<img>` se stejnou hodnotou v atributu `src`.

:::solution

[app.js](https://github.com/Czechitas-podklady-WEB/cviceni-pexeso/blob/reseni/app.js)

:::
