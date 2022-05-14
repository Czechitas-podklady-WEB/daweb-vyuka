---
title: Kurzovní lístek, API
demand: 2
---

Jistě cítíte, že mít kurzy měn zadrátované přímo v kódu aplikace není zrovna užitečné. V tomto cvičení získáme kurzy z veřejného API jako praví profesionálové.

Chceme-li získat kurz amerického dolaru, můžeme využít následující API.

```
https://api.frankfurter.app/latest?from=USD&to=CZK
```

1. Prohlédněte si data, která API vrací. Zkuste do URL jako parametr `from` zadat nějakou jinou měnu, například GBP nebo CHF a podívejte se, jak se data změní.
1. Upravte komponentu `Rate` tak, aby si z API stáhla správny kurz pro měnu, kterou dostane v prop `from`.
1. Zařiďte, aby se správná data stáhla kdykoliv, když se změní hodnota uvniř prop `from`. K tomu budete potřebovat specializovaný `useEffect`.
