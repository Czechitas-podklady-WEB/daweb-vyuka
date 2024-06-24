## Efekty a volání API

Pokud chceme v naší aplikaci zobrazovat data z nějakého API, musíme si tato data stáhnout pomocí nám již známé funkce `fetch`. V čistém JavaScriptu jsme byli zvyklí tuto funkci volat ve chvíli, kdy se načítá naše stránka – načetli jsme si všechna data pro celou stránku najednou. V Reactu však můžeme načítat data jen pro každou komponentu zvlášť. Funkci `fetch` tak budeme chtít volat ve chvíli, kdy se naše komponenta poprvé objeví na stránce. To zní jako případ pro použití efektů.

Naše poslední aplikace zatím zobrazovala, že svátek má Jiří. To je však pravda pouze jeden den v roce. Pojďme aplikaci vylepšit tak, aby si stáhla aktuální jméno z API.

```js
const HomePage = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchName = async () => {
      const response = await fetch('https://nameday.abalin.net/api/V1/today');
      const data = await response.json();
      setName(data.nameday.cz);
    };

    fetchName();
  }, []);

  return (
    <>
      <h1>Svátky</h1>
      <div className="nameday">Svátek má {name}</div>
    </>
  );
};
```

Povšimněte si funkce `fetchName`, kterou jsme si vytvořili přímo uvnitř efektu k tomu, aby získala jméno z API a nastavila jej do stavu. Funkci `fetchName` jsme museli vytvořit, neboť efekt sám o sobě nemůže být asynchronní. V Reactu nemůžeme udělat toto:

```js
useEffect(async () => {
  const response = await fetch('https://nameday.abalin.net/api/V1/today');
  const data = await response.json();
  setName(data.nameday.cz);
}, []);
```

Z tohoto důvodu si vždy pro fetchování dat vytvoříme pomocnou funkci, kterou pak v efektu ihned zavoláme. V našem případě jsme funkci nazvali `fetchName`, protože stahuje jméno z API.
