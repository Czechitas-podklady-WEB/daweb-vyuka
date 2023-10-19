---
title: Délka filmu
demand: 2
lead: Spočítejte, kolik hodin a minut trvá film Pán prstenů.
solutionAccess: lock
---

V programu kin se často uvádí délka filmu v minutách. Například rozšířená verze filmu :i[Pán prstenů: Dvě věže] trvá **223 minut**. My bychom ovšem délku filmu raději věděli **v hodinách a minutách**.

1. Za použití funkcí a operátorů z této lekce spočítejte, kolik **hodin a minut trvá film** :i[Pán prstenů: Dvě věže].
1. Obě hodnoty vypište do stránky.

:::solution

#### Počet celých hodin

```js
document.body.innerHTML += Math.floor(223 / 60);
```

#### A počet zbývajících minut

```js
document.body.innerHTML += '<br>';
document.body.innerHTML += 223 % 60;
```

:::
