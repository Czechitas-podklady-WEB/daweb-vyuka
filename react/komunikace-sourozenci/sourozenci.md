## Komunikace mezi sourozenci

Komunikaci mezi sourozenci si opět ilustrujeme na našem příkladu s volbou nového prezidenta. V minulé lekci jsme skončili v situaci, kdy komponenta `Candidate` dokáže svému rodiči `App` poslat jméno kandidáta pomocí `callbacku`. Naše aplikace však byla napsaná velmi jednoduše. V praxi bychom nejspíše narazili na složitější situaci. Podívejme se na začátek komponenty `App`.

```js
return (
  <div className="container">
    <div className="castle">
      <div className="castle__image"></div>
      <div className="castle__body">
        <h1>Nový prezident</h1>
        <p className="castle__president">
          {
            president === null ? 'Vyberte svého kandidáta' : president
          }
        </p>
      </div>
    </div>
```

Tento úsek představující náš hrad by si jistě zasloužil samostatnou komponentu. Pojmenujme ji `Castle` a vytvoříme pro ni separátní složku i styly. Kód komponenty pak bude vypadat takto.

```js
import React from 'react';
import './style.css';

const Castle = ({ president }) => {
  return (
    <div className="castle">
      <div className="castle__image"></div>
      <div className="castle__body">
        <h1>Nový prezident</h1>
        <p className="castle__president">
          {
            president === null ? 'Vyberte svého kandidáta' : president
          }
        </p>
      </div>
    </div>
  );
};

export default Castle;
```

Naše komponenta `App` pak může komponentu `Castle` použíjt jako svoje dítě. 

```jsx
return (
  <div className="container">
    <Castle president={president} />
    
    <h2>Kandidátí</h2>
);
```

Všimněte si, že komponenta `Candidate` a komponenta `Castle` jsou sourozenci. Jejich společným rodičem je komponenta `App`. Komponenta `Candidate` už neposílá jméno kandidáta svému rodiči jako dříve. Nyní jej posílá svému svému sourozenci `Castle`. Všimněte si však, že tato komunikace probíhá skrze rodiče `App`. Jakmile komponenta `Candidate` zavolá callback `handleVote`, tento uloží jméno prezidenta do stavu komponenty `App`. Tímto se vyvolá překreslení komponenty `App`, čimž se hodnota stavu `president` předá do props komponenty `Castle`. 

Tento princip možná na první pohled vypadá složitě. Výhodou však je, že zůstává vždy stejný. Vždy, když chceme předávat informace mezi sourozenci, předáváme je skrze stav rodiče. 
