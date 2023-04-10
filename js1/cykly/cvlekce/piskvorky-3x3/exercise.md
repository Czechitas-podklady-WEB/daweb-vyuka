---
title: Piškvorky 3x3
demand: 4
---

Na chvilku se z vás stane rozhodčí na turnaji v piškvorkách. Vytvořte JavaScriptový program, který vyhodnotí výsledky všech zápasů a vypíše výsledky.

1. Vycházejte ze šablony na GitHubu [cviceni-piskvorky-3x3](https://github.com/Czechitas-podklady-WEB/cviceni-piskvorky-3x3).

1. Upravte soubor `app.js` tak, aby vyhodnotil pouze první zápas v prvním prvku se třídou `.hra`. Styly a HTML už máte předchystané. Výsledek by měl vypadat jako na obrázku níže.

   ::fig[první výsledek]{src=assets/prvni-vysledek.png}

   1. První řádek začínající na `import` v kódu nechte. Zbytek berte pouze jako inspiraci.

   1. Najděte všechny důležité prvky týkající se prvního zápasu.

      ```js
      const hra = document.querySelector('.hra');
      const policka = hra.querySelectorAll('.policko');
      const vysledek = hra.querySelector('.vysledek');
      ```

   1. Pomocí funkce `Array.from` převeďte seznam prvků políček na pole a pomocí metody `map` vytvořte pole řetězců `o`, `x` nebo `_`.

      - `'o'` je náhrada za políčko se třídou `kolecko`.
      - `'x'` je náhrada za políčko se třídou `krizek`.
      - `'_'` je náhrada za políčko, které není ani jedno.

      Pro první hru by vám mělo vzniknout pole:

      <!-- prettier-ignore -->
      ```js
      ['o', 'o', 'o', 'x', '_', '_', '_', 'x', '_']
      ```

   1. Nově vytvořené pole předejte předpřipravené funkci `findWinner`, kterou pro vás už napsal jiný programátor. Funkce vám vrátí jednu ze čtyř možností.

      - `'o'`, pokud vyhrálo kolečko.
      - `'x'`, pokud vyhrál křížek.
      - `'tie'`, pokud hra skončila nerozhodně.
      - `null`, pokud hra ještě není u konce.

   1. Podle navrácené hodnoty z funkce `findWinner` vypište do prvku se třídou `vysledek` jeden z následujících textů.

      ```text
      Vyhrálo kolečko!
      Vyhrál křížek!
      Remíza!
      Hra ještě probíhá
      ```

#### Bonus

- Poupravte kód z předchozích kroků, který řeší jen první zápas tak, aby pomocí metody `forEach` prošel všechny zápasy a vypsal jim příslušné výsledky.

  ::fig[celkový výsledek]{src=assets/vysledek.png}

---solution

[app.js](https://github.com/Czechitas-podklady-WEB/cviceni-piskvorky-3x3/blob/reseni/app.js)
