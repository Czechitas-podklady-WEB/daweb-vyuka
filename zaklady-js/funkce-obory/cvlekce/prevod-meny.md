---
title: Převod měny
demand: 2
---

Napište funkci `convertToCZK`, která převede částku zadanou v cízí měně na české koruny. Funkce bude podporovat následující měny a kurzy.

| Měna           | Kód | Kurz    |
| -------------- | --- | ------- |
| Euro           | EUR | 24.42   |
| Britská libra  | GBP | 28.98   |
| Americký dolar | USD | 22.07   |
| Bitcoin        | BTC | 1010077 |

Výslednou částku zakrouhlete na celé koruny. Příklad použití:

```jscon
> convertToCZK(25, 'EUR')
675
```

Pokud funkce jako parametr dostane neznámý kód měny, vrátí jako výsledek `null`. Otestujte funkci v konzoli.

---solution

```js
const convertToCZK = (amount, currency) => {
  let rate;

  if (currency === 'EUR') {
    rate = 24.42;
  } else if (currency === 'GBP') {
    rate = 28.98;
  } else if (currency === 'USD') {
    rate = 22.07;
  } else if (currency === 'BTC') {
    rate = 1010077;
  } else {
    return null;
  }

  return Math.round(rate * amount);
};
```
