---
title: Hlasování, jméno
demand: 2
---

Pokračujte v aplikaci s předchozího příkladu. Mít jméno hlasujícího přímo v kódu je nepraktické. Umožníme tedy uživateli zadat si jméno dle libosti.

Pro připomenutí: když vložíte tlačítko do HTML formuláře `<form>`, prohlížeč sám zajistí odeslání formuláře po kliknutí na tlačítko. Odeslání formuláře způsobí znovunačtení stránky – z pohledu uživatele to vypadá, jako by hned po kliknutí obnovil stránku (třeba klávesou F5). Pokud JavaScript mezi tím něco vypsal do konzole, po obnově stránky se výpis ztratí. Protože k obnově stránky dojde rychle, vypadá to, že se v konzoli nic nestalo.

Aby k odeslání formuláře nedošlo, je potřeba prohlížeči říci, že nemá provádět výchozí akci. K tomu slouží metoda `preventDefault` na události. Tuto metodu byste měli zavolat hned na začátku zpracování události, třeba takhle:

```javascript
addButton.addEventListener('click', (event) => {
  event.preventDefault();
  // pokračování kódu zpracování události 'click'…
});
```

1. V programu z minulého cvičené nahraďte hlasovací tlačíko formulářem, který bude obsahovat jedno textové políčko pro zadání jména.
1. Při odeslání formuláře zahlasujte pro jednu možnost jménem, které zadal uživatel. Číslo možnosti, pro niž se hlasuje, bude stále natvrdo v kódu.
1. Vypište si do konzole, co API endpoint vrátí, pokud se pokusíte zahlasovat dvakrát stejným jménem. Upravte stránku tak, aby v takovém případě zobrazila hlášku ve smyslu :i[Nelze hlasovat dvakrát se stejným jménem].

---solution

Řešení naleznete v samostatném [Codesanboxu zde](https://codesandbox.io/s/da-web-hlasovani-jmeno-olxgk5?file=/index.js).
