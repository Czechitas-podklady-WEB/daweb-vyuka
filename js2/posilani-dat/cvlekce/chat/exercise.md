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

---solution

`script.js`:

```javascript
const sendFormElement = document.querySelector('#send');
const messageElement = document.querySelector('#message');
const nameElement = document.querySelector('#name');

const handleSendMessage = (event) => {
  event.preventDefault();
  const apiPayload = {
    message: messageElement.value,
    name: nameElement.value,
  };

  fetch('https://czechichat.deno.dev/api/send-message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(apiPayload),
  }).then((response) => {
    if (response.status === 200) {
      messageElement.value = '';
      nameElement.value = '';
    } else {
      alert(`Odeslání zprávy se nezdařilo.\n${response.statusText}`);
    }
  });
};

sendFormElement.addEventListener('submit', handleSendMessage);

// -------------- bonus --------------
const messagesElement = document.querySelector('#messages');

const loadMessagesHistory = () => {
  fetch('https://czechichat.deno.dev/api/list-messages')
    .then((response) => response.json())
    .then(showMessagesHistory);
};

const showMessagesHistory = (data) => {
  const messagesHTML = data.messages
    .map(
      (message) =>
        `<li><small>${message.date}</small> <strong>${message.name}</strong>: ${message.message}</li>`
    )
    .join('');
  messagesElement.innerHTML = messagesHTML;
};

loadMessagesHistory(); // zobrazit historii hned po načtení stránky
setInterval(loadMessagesHistory, 3000);
```

Obsah elementu `body` v souboru `index.html`:

```html
  <div class="container">
    <h1>Czechichat</h1>
    <h2>Poslat zprávu</h2>
    <form id="send">
      <div class="inputs">
        <label for="name">Jméno:</label>
        <input id="name" type="text" autofocus>
      </div>
      <div class="inputs">
        <label for="message">Zpráva:</label>
        <input id="message" type="text">
      </div>
      <div class="controls">
        <button>➤ Odeslat</button>
      </div>
    </form>

  <!-- bonus -->
  <h2>Historie zpráv</h2>
  <ul id="messages"></ul>
</div>
```

`style.css`:

```css
/* Používáme intuitivní výpočet rozměrů prvků. */
*,
*:before,
*:after {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

.container {
  max-width: 40rem;
  margin-right: auto;
  margin-left: auto;
}

#send > div {
  margin-bottom: 1rem;
}

#send .inputs {
  display: flex;
}

.inputs label {
  flex: 0 0 4rem;
}

.inputs input {
  flex: 1 1 auto;
}

#name {
  width: 15rem;
  flex-grow: 0;
}

.controls {
  display: flex;
  justify-content: right;
}

.controls button {
  padding: 0.5rem 1rem;
  font-size: 120%;
  cursor: pointer;
}

/* ---- bonus ---- */
ul {
  padding: 0;
  margin: 0;
}

li {
  display: block;
  margin-bottom: 1rem;
}

#messages small {
  display: block;
  background-color: #eee;
  border-radius: 8px;
  padding: 2px 4px;
  margin-bottom: 5px;
}
```
