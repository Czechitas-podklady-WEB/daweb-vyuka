---
title: Převod měny
demand: 2
offerSolution: true
---

:::assign
Napište funkci `convertToCZK`, která převede částku zadanou v cízí měně na české koruny. Funkce bude podporovat následující měny a kurzy.

<table>
  <thead>
    <tr>
      <th>Měna</th>
      <th>Kód</th>
      <th>Kurz</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Euro</td>
      <td>EUR</td>
      <td>27.015</td>
    </tr>
    <tr>
      <td>Britská libra</td>
      <td>GBP</td>
      <td>29.615</td>
    </tr>
    <tr>
      <td>Americký dolar</td>
      <td>USD</td>
      <td>23.197</td>
    </tr>
  </tbody>
</table>

Výslednou částku zakrouhlete na celé koruny. Příklad použití:

```jscon
> convertToCZK(25, 'EUR')
675
```

Pokud funkce jako parametr dostane neznámý kód měny, vrátí jako výsledek `null`. Otestujte funkci v konzoli.
:::

:::solution
```js
const convertToCZK = (amount, currency) => {
  let rate;

  if (currency === 'EUR') {
    rate = 24.42;
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
:::
