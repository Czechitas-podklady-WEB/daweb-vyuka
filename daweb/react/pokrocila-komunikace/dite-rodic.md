## Pokročilejší komunikace od dítěte k rodiči

V předchozí lekci jsme se naučili jednoduchou komunikaci od dítěte k rodiči, která by se dala shrnout takto:

> Dítě může rodiči poslat informaci tak, že nastaví jeho stav. Rodič tak musí dítěti předat funkci, která mu umožní stav měnit.

My jsme proto dítěti vždycky posílali přímo funkci `setState`, tedy například `setPresident` v naší ukázce s volbami. Snadno ovšem narazíme na situace, kdy si s tímto postupem nevystačíme. Většinou to je ve chvíli, kdy chceme rodiči od dítěte předat nějakou informaci a rodič se má sám rozhodnout, jak s touto informací naloží. Zda například změní stav, jakým zůsobem jej změní nebo třeba udělá něco úplně jiného, například odešle data na server, zavolá nějaký API endpoint apod. 

Pro názornou ukázku s vraťme k našemu příkladu s volbami. V minulé lekci jsme si ukázali, jak může komponenta `Candidate` poslat informaci o tom, kdo byl zvolen, svému rodiči `HomePage`. Tato komunikace proběha srkze funkci předanou skrze prop `onVote`.

```jsx
export const Candidate = ({ name, avatar, onVote }) => {
  const handleClick = () => {
    onVote(name);
  }
  
  return (
    <div className="candidate">
      <h3 className="candidate__name">{name}</h3>
      <img className="candidate__avatar" src={avatar} />
      <button onClick={handleClick} className="btn-vote">Vybrat</button>
    </div>
  );
};
```

Této komponentě pak její rodič `HomePage` předával rovnou funkci `setPresident`, která nastaví stav `president` na jméno kandidáta.

```jsx
<div className="candidate-list">
  {candidates.map((c) => (
    <Candidate
      key={c.name}
      name={c.name} 
      avatar={c.avatar}
      onVote={setPresident} 
    />
  ))}
</div>
```

Co kdybychom však chtěli, aby se po kliknutí na kandidáta zobrazilo nejdříve nějaké upozornění a až po jeho potvrzení se změnil stav `president`? Nebo bychom zároveň se změnou stavu chtěli odeslat na server informaci o tom, kdo byl zvolen? 

V takovém případě musíme udělat krok navíc a v komponentě `HomePage` vytvořit novou funkci `handleVote`, která bude obsahovat veškerou logiku, která se má provést po kliknutí na kandidáta. Tato funkce pak bude předána komponentě `Candidate` skrze prop `onVote`.

```jsx
const handleVote = (name) => {
  if (window.confirm(`Opravdu chcete zvolit kandidáta ${name}?`)) {
    setPresident(name);
    // zde bychom mohli odeslat data na server
  }
};
```

```jsx
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
```

Komponenta `Candidate` se tedy chová stejně, jako prve, ale v `HomePage` máme o krok navíc.
