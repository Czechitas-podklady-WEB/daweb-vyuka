## Pravidla pro práci se stavem

Funkci `useState` můžeme použít v komponentě vícekrát pro několik různých stavových proměnných. Platí však pravidlo, že se při každém renderu musí volat ve stejném pořadí, aby si React mohl vše interně správně propojit. Nemůžeme je tedy použít například uvnitř podmínky `if`.

Proměnnou pro stav si můžete pojmenovat libovolně. Je však zvykem, že funkce pro změnu stavu se pojmenovává s prefixem `set` a názvem stavu s prvním velkým písmenem podle pravidel camelCase. Například pro stavovou proměnnou `jeVesely` by se funkce pro změnu pojmenovala `setJeVesely`, pro `teplota` pak `setTeplota` apod.

```js
import { useState } from 'react';

const HomePage = () => {
  const [pocet, setPocet] = useState(0);

  return (
    <button onClick={() => setPocet(pocet + 1)}>Počet kliků: {pocet}</button>
  );
};
```
