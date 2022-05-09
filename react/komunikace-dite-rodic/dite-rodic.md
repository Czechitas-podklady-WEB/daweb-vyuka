## Komunikace dítě → rodič

Nyní bychom chtěli zařídit, aby se uživatelem vybraný kandidát zobrazil vedle obrázku hradu. Jakmile tedy uživatel vybere nějakého kandidáta v některé z komoponent `Candidate`, potřebujeme jeho jméno poslat "nahoru" rodičovské komponentě `App` aby si jej tato mohla uložit do stavu `president`.

Zde však narážíme na zásadní problém. Komponenta `Candidate` nemá nejmenší tušení, kdo je její rodič. Zevnitř této komponenty tato informace není nijak dostupná. Musíme si tedy pomoct malým trikem.

### Callbacky

Náš trik bude spočívat v tom, že komponentě `Candidate` skrze props předáme takzvaný <em>callback</em>. Tímto pojmem se v JavaScriptu často označuje funkce, kterou někomu předáváme proto, aby ji tento někdy později zavolal. Anglický název tohoto pojmu vzniká právě ze slovního spojení "zavolat zpátky", tedy "call back".

S callbacky už jsme se ve skutečnosti setkali dávno, jen jsme jim tehdy říkali posluchače událostí. Každý posluchač události je ve skutečnosti callback. Tlačítku `button` například předáváme funkci, která se má zavolat (call back) ve chvíli, kdy na tlačítku klikneme. V minulé lekci jste viděli, že v Reactu se takové věc zařídí poměrně jednoduše.

```js
const SensitiveButton = (props) => {
  const handleClick = () => {
    console.log('Au');
  };

  return <button onClick={handleClick}>{props.caption}</Button>;
};
```

### Použití callbacků ke komunikaci

V našem příkladu však callback nebudeme používat k poslouchání událostí. Budeme jej volat sami zevnitř komponenty `Candidate` ve chvíli, kdy chceme rodiči předat jméno zvoleného kandidáta.

Nejprve tedy přidáme do komponenty `Candidate` novou prop s názvem `onVote`. Abychom dali najevo, že do této prop budeme posílat funkci, volíme jméno podobně jako to známe u událostí, tedy `onClick`, `onMouseMove` apod. Jménem chceme naznačit, že tuto funkci zavoláme ve chvíli, kdy uživatel zahlasuje (anglicky :i[vote]) pro daného kandidáta.

```js
const Candidate = ({ name, avatar, onVote }) => (
```

Nyní potřebujeme funkci `onVote` zavolat se jménem kondidáta ve chvíli, když uživatel klikne na tlačítko. Použijeme tedy událost `onClick` a naše výsledná komponenta bude vypadat takto.

```js
const Candidate = ({ name, avatar }) => (
  <div className="candidate">
    <h3 className="candidate__name">{name}</h3>
    <img className="candidate__avatar" src={avatar} />
    <button
      className="btn-vote"
      onClick={() => {
        onVote(name);
      }}
    >
      Vybrat
    </button>
  </div>
);
```

Na straně komponenty `Candidate` máme hotovo. Nyní potřebujeme pořešit komponentu `App`. V té si vytvoříme funkci (callback), kterou budeme posílat do prop `onVote`. Pokud prop začíná slovíčkem `on`, je zvykem příslušný callback začínat slovíčkem `handle`. Náš callback se tedy bude jmenovat `handleVote` a bude mít jeden parametr `name`. To bude jméno kandidáta, na kterého uživatel kliknul.
Toto jméno nastavíme jako příslušný stav v komponentě `App`.

```js
const handleVote = (name) => {
  setPresident(name);
};
```

Tento callback pak předáme všem komponentám `Candidate`.

```js
const App = () => {
  const [candidates, setCandidates] = useState([]);
  const [president, setPresident] = useState(null);

  useEffect(
    () =>
      setCandidates([
        { name: 'Ferdinand Mravenec', avatar: '/assets/candidate01.png' },
        { name: 'Markéta Smetana', avatar: '/assets/candidate02.png' },
        { name: 'Beáta Skočdopolová', avatar: '/assets/candidate03.png' },
        { name: 'Lubomír Poňuchálek', avatar: '/assets/candidate04.png' },
      ]),
    []
  );

  const handleVote = (name) => {
    setPresident(name);
  };

  return (
    <div className="container">
      <div className="castle">
        <div className="castle__image"></div>
        <div className="castle__body">
          <h1>Nový prezident</h1>
          <p className="castle__president">
            {president === null ? 'Vyberte svého kandidáta' : president}
          </p>
        </div>
      </div>

      <h2>Kandidátí</h2>
      <div className="candidate-list">
        {candidates.map((c) => (
          <Candidate
            key={c.name}
            name={c.name}
            avatar={c.avatar}
            onVote={handleVote}
          />
        ))}
      </div>
    </div>
  );
};
```

V tuto chvíli už naše aplikace bude správně fungovat.

### Hlubší vysvětlení callbacků

Komunikace pomocí callbacků může za začátku působit děsivě složitě a nepřístupně. Je tedy zapotřebí si v hlavě udělat jasný obrázek o tom, jak tento mechanizmus funguje. Pojďme shrnout, co přesně se děje ve výše uvedeném příkladu.

Rodičovská komponenta `App` vytváří funkci `handleVote` a tu posilá skrze prop `onVote` komponentě `Candidate`. Dceřinná komponenta `Candidate` obdrží v prop `onVote` funkci, kterou zavolá se jménem vybraného kandidáta. Vzhledem k tomu, že v prop `onVote` je funkce `handleVote` vytvořená rodičem, komponenta `Candidate` tak propašuje do rodiče název zvoleného kandidáta.

Situaci můžene znázornit následujícím diagramem.

::fig{src=assets/dite-rodic.png}

Z tohoto diagramu vydíme, že komunikace od rodiče k dítětí probíhá skrze props a komunikace od dítěte k rodiči probíhá skrze callbacky.
