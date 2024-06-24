## Komunikace mezi sourozenci

Komunikace mezi sourozenci je potřeba ve chvíli, kdy si potřebují nějaká data vyměnit komponenty, které mají společného rodiče.

Tuto situaci si opět ilustrujeme na našem příkladu s volbou nového prezidenta. V minulé lekci jsme skončili v situaci, kdy komponenta `Candidate` dokáže svému rodiči `HomePage` poslat jméno kandidáta pomocí callbacku `onVote`. Naše aplikace však byla napsaná stále dosti jednoduše. V realitě bychom nejspíše narazili na složitější situaci. Podívejme se na začátek komponenty `HomePage`.

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

export const Castle = ({ president }) => {
  return (
    <div className="castle">
      <div className="castle__image"></div>
      <div className="castle__body">
        <h1>Nový prezident</h1>
        <p className="castle__president">
          {president === null ? 'Vyberte svého kandidáta' : president}
        </p>
      </div>
    </div>
  );
};
```

Naše komponenta `HomePage` pak může komponentu `Castle` použít jako svoje dítě.

```jsx
return (
  <div className="container">
    <Castle president={president} />

    <h2>Kandidátí</h2>
);
```

Všimněte si, že komponenta `Candidate` a komponenta `Castle` jsou sourozenci. Jejich společným rodičem je komponenta `HomePage`. Komponenta `Candidate` už neposílá jméno kandidáta svému rodiči jako dříve. Nyní jej posílá svému sourozenci `Castle`. Všimněte si však, že tato komunikace probíhá skrze rodiče `HomePage`. Jakmile komponenta `Candidate` zavolá callback `handleVote`, tento callback uloží jméno prezidenta do stavu komponenty `App`. Tímto se vyvolá překreslení komponenty `Home`, čímž se hodnota stavu `president` předá do props komponenty `Castle`.

Z této ukázky plyne pravidlo pro komunikaci mezi sourozenci:

> Komponenta může poslat informaci svému sourozenci tak, že změní stav svého rodiče. Tento stav pak bude předán jako props jinému dítěti.
