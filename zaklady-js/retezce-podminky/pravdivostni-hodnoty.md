## Pravdivostní hodnoty

Ve zbývající části lekce se vrhneme na podmínky a umožníme naším programům dělat rozhodnutí. Před tím si ale musíme trošku připravit půdu a ukázat si nový typ hodnoty. Zatím jsme viděli čísla, řetězce a objekty. Nyní přichází takzvané :term{cs="pravdivostní hodnoty" en="boolean values"}. Čísel a řetězců je nekonečně mnoho, pravdivostní hodnoty jsou však jen dvě: `true` a `false`. Používají se k tomu, abychom vyjádřili, zda je něco pravda nebo není. Například:

```jscon
> const pristupPovolen = false
> const vstupJeCislo = true
> const mobilniProhlizec = true
```

K tomu, abychom mohli v našich programech činit rozhodnutí budeme také potřebovat výrazy, které vrací pravdivostní hodnoty. Ty můžeme sestavit pomocí takzvaných :term{cs="porovnávacích operátorů" en="comparison operators"}.

```jscon
> const age = 21
> age > 18
true
> age > 21
false
> age >= 21
true
> age === 21
true
> age !== 21
false
```

Kompletní sada porovnávacích operátorů vypadá takto.

<table>
  <thead>
    <th>Operátor</th>
    <th>Popis</th>
  </thead>
  <tbody>
    <tr><td><strong><code>></code></strong></td><td>větší než</td></tr>
    <tr><td><strong><code>>=</code></strong></td><td>větší nebo rovno</td></tr>
    <tr><td><strong><code><</code></strong></td><td>menší než</td></tr>
    <tr><td><strong><code><=</code></strong></td><td>menší nebo rovno</td></tr>
    <tr><td><strong><code>===</code></strong></td><td>rovno</td></tr>
    <tr><td><strong><code>!==</code></strong></td><td>nerovno</td></tr>
  </tbody>
</table>

V JavaScriptu můžete narazit i na operátory `==` a `!=`. Ty však nebudeme nikdy používat, protože v některých případech mohou zanést do našeho programu nechtěné chyby.
