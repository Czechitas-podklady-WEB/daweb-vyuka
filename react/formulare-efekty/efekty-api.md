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
https://worldtimeapi.org/api/timezone
```
