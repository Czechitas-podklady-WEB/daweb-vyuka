---
title: Chat
demand: 3
---

V tomto cvičení si vytvoříte vlastní chatovací aplikaci.

::fig[ukázka výsledku]{src=assets/vysledek.png}

1.  Pro rychlejší vytvoření základní struktury použijte příkaz níže:

    ```bash
    npm init kodim-app chat html-css-js
    ```

1.  Do HTML přidejte formulář s jedním textovým políčkem pro uživatelovu zprávu a tlačítkem pro odeslání.

1.  V JavaScriptu přijdejte posluchač události `submit` na formulář. V jeho obsluze zamezte výchozímu odeslání formuláře (`preventDefault`).

    1.  Obsah textového políčka zašlete na chatovací server.

        #### Parametry pro zaslání zprávy

        - Endpoint: `https://czechichat.deno.dev/api/send-message`
        - Metoda: `POST`
        - Hlavička: `Content-Type: application/json`
        - Tělo: JSON objekt s vlastností `message` obsahující text zprávy

        V JavaScriptu by odeslání zprávy mohlo vypadat následovně:

        ```js
        fetch('https://czechichat.deno.dev/api/send-message', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: 'Ahoj. Toto je moje první zpráva.',
          }),
        });
        ```

    1.  Ověřte si, že vaše zpráva se propsala i do chatovacího serveru na adrese [czechichat.deno.dev](https://czechichat.deno.dev/).

1.  Po odeslání formuláře uživateli vymažte obsah políčka, aby měl prostor pro zprávu novou.

1.  K formuláři do HTML přidejte ještě jedno textové políčko na jméno. Nezapomeňte obě políčka označit štítkem `<label>`.

1.  Při odesílání formuláře přidejte do požadavku na server do těla zprávy ještě jméno jako vlastnost `name`.

    Tělo by mohlo vypadat takto:

    ```js
    {
    	name: 'Karel',
    	message: 'Toto je moje první zpráva.',
    }
    ```

    Obsah políčka se jménem uživateli nemažte. Pravděpodobně ho bude chtít použít i pro další zprávu.

1.  Opět si ověřte, že se zpráva propisuje do serveru a tentokrát i se jménem.

#### Bonusy

1.  Přidejte výpis zpráv ze serveru například jako odrážkový seznam ve tvaru `Jméno: text zprávy (datum)`.

    #### Parametry pro získání historie zpráv

    - Endpoint: `https://czechichat.deno.dev/api/list-messages`
    - Metoda: výchozí `GET`
    - Hlavičky: výchozí
    - Tělo: žádné

    Stahujte zprávy v pravidelných intervalech každé tři sekundy, aby uživatel viděl, když dorazí nová.

1.  Stránku nastylujte.
