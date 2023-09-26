## Efekty a volání API

Pokud chceme v naší aplikaci zobrazovat data z nějakého API, musíme si tato data stáhnout pomocí nám již známé funkce `fetch`. Tuto funkci je nejlepší zavolat právě ve chvíli, kdy se naše komponenta poprvé objeví na stránce.

Naše poslední aplikace zatím zobrazovala, že svátek má Jiří. To je však pravda pouze jeden den v roce. Pojďme aplikaci vylepšit tak, aby si stáhla aktuální jméno z API.

```js
const App = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    fetch('https://svatky.adresa.info/json')
      .then((response) => response.json())
      .then((data) => setName(data[0].name));
  }, []);

  return (
    <>
      <h1>Svátky</h1>
      <div className="nameday">Svátek má {name}</div>
    </>
  );
};
```

Výsledný kód si můžete prohlédnout v [Codesandboxu zde](https://codesandbox.io/s/da-web-svatky-ndwfg2?file=/src/App.jsx).
