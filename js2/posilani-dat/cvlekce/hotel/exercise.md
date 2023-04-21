---
title: Hotel
demand: 4
---

V tomto cvičení budete ovládat hotelové osvětlení vašich dvou pokojů.

::fig[ilustrační obrázek]{src=assets/hotel.jpg}

1.  Pro rychlejší vytvoření základní struktury použijte příkaz níže:

    ```bash
    npm init kodim-app hotel html-css-js
    ```

1.  Rozsviťe vaše dvě led světla ve virtuálním hotelu.

    1.  Zjistěte, které dvě světla vám patří. Z vývojářské konzole zavolejte jednorázově následující kód a poznamenejte si identifikátory svou vašich světel.

        ```js
        fetch('https://chytra-domacnost.onrender.com/api/things', {
          headers: {
            Authorization: 'Bearer XXX',
          },
        });
        ```

        ::fig[id]{src=assets/id.png}

        Za `XXX` dosaďte váš osobní token z [vašeho Kódím.cz účtu](https://kodim.cz/ucet), aby vám server umožnil přístup k vašim zařízením.

    1.  Vyberte si vaši oblínebou barvu v hexadecimálním zápisu (třeba bílou `#ffffff`).

    1.  V Javascriptovém souboru pomocí volání `fetch` hned po načtení stránky pošlete informaci na server, že chcete rozsvítit první světlo.

        #### Parametry

        - Endpoint: `https://chytra-domacnost.onrender.com/api/thing/{ID_ZAŘÍZENÍ}`
        - Metoda: `POST`
        - Hlavička: `Content-Type: application/json` a `Authorization: Bearer XXX`
        - Tělo: JSON objekt s vlastností `color` a hodnotou v hexadecimálním zápisu

        ```js
        fetch('https://chytra-domacnost.onrender.com/api/thing/{ID_ZAŘÍZENÍ}', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer XXX',
          },
          body: JSON.stringify({
            color: '#ffffff',
          }),
        });
        ```

        Za `{ID_ZAŘÍZENÍ}` dosaďte identifikátor příslušného světla. Místo `XXX` dosaďte token.

    1.  Po načtení stránky přidejte i instrukci pro rozsvícení druhého světla.

#### Bonus

Přidejte do stránky formulář s dvěma políčky typu `color` a odesílacím tlačítkem. Po odeslání formuláře předejte barvy jednotlivým světlům na server.
