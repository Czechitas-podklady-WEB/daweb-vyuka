## Komunikace mezi potomky

Náš příklad s volbami by ještě pořád mohl být o kus složitější. V reálných aplikacích se totiž setkáme s tím, že komponenty jsou do sebe zanořeny o několik úrovní hlouběji. V takovém případě se může stát, že komponenta, která potřebuje nějaká data, je od komponenty, která tato data má, vzdálena o několik svých předků. Pokud takovéto komponenty spolu potřebují komunikovat, mluvíme o komunikaici mezi potomky.

V takové situaci másíme data předávat přes několik komponent, které tato data nepotřebují, pouze je předávají dále. Tento postup se běžně nazývá _prop drilling_, česky bychom mohli říct _vrtání_.

Pro názorný příklad si představme, že bychom v naší aplikaci s volbami měli ještě další komponentu `CandidateList`, která by zobrazovala seznam všech kandidátů. To znamená, že komponenta `Candidate` je zanořena o jednu úrovně hlouběji a musíme k ní funkci `handleVote` provrtat přes komponentu `CandidateList`.

```jsx
const CandidateList = ({ candidates, onVote }) => {
  return (
    <div className="candidate-list">
      {candidates.map((c) => (
        <Candidate
          key={c.name}
          name={c.name} 
          avatar={c.avatar}
          onVote={onVote} 
        />
      ))}
    </div>
  );
};
```

JSX v komponentě `HomePage` pak vypadá takto:

```jsx
return (
  <div className="container">
    <Castle president={president} />
    <h2>Kandidátí</h2>
    <CandidateList candidates={candidates} onVote={handleVote} />
  </div>
);
```

Kdybychom si chtěli život ještě o kousek ztížit, mohli bychom si představit, že tlačítko pro volbu kandidáta je také nějaká složitější komponenta, například tlačítko s ikonou. V takovém případě bychom museli funkci `handleVote` provrtat ještě o jednu úroveň hlouběji.

```jsx
const Candidate = ({ name, avatar, onVote }) => {
  return (
    <div className="candidate">
      <h3 className="candidate__name">{name}</h3>
      <img className="candidate__avatar" src={avatar} />
      <VoteButton onVote={onVote} />
    </div>
  );
};
```

## Prop drilling v praxi

Prop driling nám slouží k tomu, aby spolu mohly komunikovat komponenty, které jsou od sebe vzdáleny o několik úrovní hlouběji. Tato technika má však také své nevýhody. Tak hluboké vrtání, jako jsme vidělí výše, je ještě v praxi únosné, ale hlubší prop driling začiná mít zásadní nevýhody:

1. **Horší přehlednost** – čtenář kódu musí složitě navigovat kódem a držet v hlavě, kudy všude proudí data.
1. **Nepohodlnost** – psát kód s hlubokým vrtáním je pro programátory otravné a zdlouhavé.
1. **Průchozí komponenty** – máme v kódu spoustu komponent, která data ve skutečnosti nepotřebují, jen je předávají dále, čímž se komplikuje jejich kód.
1. **Horší udržitelnost** – pokud se rozhodneme změnit strukturu komponent, musíme přepisovat i průchozí komponenty, která data vlastně nepotřebují.

V reálnách aplikacích se proto příliš agresivnímu prop drilingu snažíme vyhnout. Pokud to z hlediska struktury aplikace dává smysl, snažíme se předávání dat mezi komponentami řešit jinými způsoby, například pomocí _contextu_ nebo pomocí _state managementu_. To jsou však pro tento kurz příliš pokročilá témata. V následujících lekcích se proto omezíme na vrtání maximálně přes jednu komponentu, nebo se mu budeme vyhýbat úplně.
