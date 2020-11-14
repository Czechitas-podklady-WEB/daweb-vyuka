Díky tomu, že jsem se v minulé lekci naučili pracovat se stavem, otvírají se nám v Reactu mnohé nové možnosti.

## Formulářové prvky

Formulářové prvky jako textová polížka, zaškrtávací tlačítka apod. jsou jedním z hlavních způsobů, jak získat vstup o uživatele. V čístém JavaScritpu jsme zvyklí získávat hodnoty z těchto prvků tak, že je vybereme pomocí `querySelector` a použijme například vlastnost `value`.

```js
const inputElm = document.querySelector('input');
const value = inputElm.value;
```

V Reactu však k DOM elementům na stránce přístup nemáme. Hodnotu uvnitř textového políčka se tak musíme uložit do stavu.

Představme si jednoduchou komponentu, kde uživatel zadá svůj věk.

```js
const AgeField = () => {
  return (
    <label>
      Zadej svůj věk:
      <input type="text" />
    </label>
  );
};
```

Hodnotu uvnitř elementu `input` si chceme uložit do stavu pokaždé, když dojde k její změně. Vytvoříme si proto stav `age` a budeme jej měnit v reakci na událost `onChange`.

```js
const AgeField = () => {
  const [age, setAge] = useState(null);

  return (
    <label>
      Zadej svůj věk:
      <input type="text" onChange={(e) => setAge(e.target.value)} />
    </label>
  );
};
```

### Data binding

One-way (jednocestný), two-way (oboucestný).

@exercises ## Cvičení - formulářové prvky [

- registrace
- vyber-zeme
- podminky-registrace
  ]@

## Efekty

V mírně komplikovanějších React aplikacích brzy narazíme na potřebu zareagovat na určité situace, které nastávají během vykreslování (renderování) komponenty. Budeme chtít například spustit nějaký kód ve chvíli, kdy se komponenta poprvé objeví na stránce. Čas od času také budeme chtít v komponentě provést něco ve chvíli, kdy se změní hodnota v props nebo ve stavu. K tomuto nám v Reactu slouží takzvané <term cs="efekty" en="effects" />.

Efekty jsou v podstatě velmi podobné událostem. Ve chvíli, kdy uvnitř komponenty něco nastane, budeme chtít zavolat naši funkci. Jako příklad si vyrobíme jednoduchou aplikaci, která řiká, kdo má zrovna svátek.

```js
import React from 'react';
import { render } from 'react-dom';
import './index.html';

const App = () => {
  return (
    <>
      <h1>Svátky</h1>
      <div className="nameday">Svátek má Jiří</div>
    </>
  );
};

render(<App />, document.querySelector('#app'));
```

Pokud bychom chtěli spustit kousek kódu ve chvíli, kdy se naše komponenta `App` objeví na stránce, použijeme funkci `useEffect` a té předáme námi vytvořenou funkci.

```js
import React, { useEffect } from 'react';
import { render } from 'react-dom';
import './index.html';

const App = () => {
  useEffect(() => console.log('jsem tady'), []);

  return (
    <>
      <h1>Svátky</h1>
      <div className="nameday">Svátek má Jiří</div>
    </>
  );
};

render(<App />, document.querySelector('#app'));
```

Funkce `useEffect` má dva parametry. Prvním je funkce, která se má zavolat a druhý parametr říká, za jakých okolností se má naše funkce volat. Prázdné pole `[]` znamená, že se efekt spustí pouze ve chvíli, kdy se komponenta poprvé objeví na stránce.

## Efekty a volání API

Pokud chceme v naší aplikaci zobrazovat data z nějakého API, musíme si tato data stáhnout pomocí nám již známé funkce `fetch`. Tuto funkci je nejlepší zavolat právě ve chvíli, kdy se naše komponenta poprvé objeví na stránce.

Naše poslední aplikace zatím zobrazovala, že svátek má Jiří. To je však pravda pouze jeden den v roce. Pojďme aplikace vylepšit tak, aby si stáhla aktuální jméno z API.

```js
import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import './index.html';

const App = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    fetch('https://api.abalin.net/today?country=cz')
      .then((resp) => resp.json())
      .then((json) => setName(json.data.namedays.cz)
  }, []);

  return (
    <>
      <h1>Svátky</h1>
      <div className="nameday">Svátek má {name}</div>
    </>
  );
};

render(<App />, document.querySelector('#app'));
```

V tomto případě jsme si do stavu ukládali pouze obyčejný řetězec. Naše data však budou často zobrazovat seznamy, takže budeme chtít mít ve stavu uložené nějaké pole.

```
http://worldtimeapi.org/api/timezone
```

@exercises ## Cvičení - Efekty a volání API [

- prazsky-cas
- vyber-zony
  ]@
