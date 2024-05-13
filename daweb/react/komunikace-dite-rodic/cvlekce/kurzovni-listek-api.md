---
title: Kurzovní lístek, API
lead: Získávejte kurzy měn z veřejného API.
demand: 2
context: lekce
solutionAccess: protected
---

Jistě cítíte, že mít kurzy měn zadrátované přímo v kódu aplikace není zrovna užitečné. V tomto cvičení získáme kurzy z veřejného API jako praví profesionálové. Opět zatím budeme používat komunikaci pouze směrem od rodiče k dítěti, tedy budeme spíše opakovat práci s _props_ a efekty.

Chceme-li získat kurz amerického dolaru, můžeme využít následující API.

```
https://api.frankfurter.app/latest?from=USD&to=CZK
```

1. Prohlédněte si data, která API vrací. Zkuste do URL jako parametr `from` zadat nějakou jinou měnu, například GBP nebo CHF, a podívejte se, jak se data změní.
1. Upravte komponentu `Rate` tak, aby si z API stáhla správný kurz pro měnu, kterou dostane v prop `from`. Zařiďte, aby se správná data stáhla kdykoliv, když se změní hodnota uvnitř _prop_ `from`. K tomu budete potřebovat `useEffect` se závislostí na _prop_ `from`.

:::solution
Řešení je v repository cvičení v branchi [reseni](https://github.com/Czechitas-podklady-WEB/cviceni-currencies/tree/reseni).
:::
