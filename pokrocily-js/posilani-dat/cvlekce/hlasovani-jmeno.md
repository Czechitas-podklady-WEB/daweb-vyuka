---
title: Hlasování, jméno
demand: 2
---

Pokračujte v aplikaci s předchozího příkladu. Mít jméno hlasujícího přímo v kódu je nepraktické. Umožníme tedy uživateli zadat si jméno dle libosti.

⚠ Pro připomenutí: když vložíte tlačítko do HTML formuláře `<form>`, prohlížeč sám zajistí po kliknutí na tlačítko odeslání formuláře. To způsobí znovu načtení stránky – z pohledu uživatele to vypadá, jako by hned po kliknutí obnovil stránku klávesou F5. Pokud JavaScript něco vypsal do konzole, po obnově stránky se výpis ztratí. Protože k obnově dojde rychle, vypadá to, že se nic nestalo.

Aby k odeslání formuláře nedošlo, je potřeba prohlížeči říci, že nemá provádět výchozí akci – k otmu slouží metoda `preventDefault` na události. Tuto metodu byste měli zavolat hned na začátku zpracování události, třeba takhle:

```javascript
addButton.addEventListener('click', (event) => {
  event.preventDefault();
  // pokračování kódu zpracování události 'click'…
});
```

1. V programu z minulého cvičené nahraďte hlasovací tlačíko formulářem, který bude obsahovat jedno textové políčko pro zadání jména.
1. Při odeslání formuláře zahlasujte pro jednu možnost jménem, které zadal uživatel. Číslo možnosti, pro niž se hlasuje, bude stále natvrdo v kódu.
1. Vypište si do konzole, co API endpoint vrátí, pokud se pokusíte zahlasovat dvakrát stejným jménem. Upravte stránku tak, aby v takovém případě zobrazila hlášku ve smyslu :i[Nelze hlasovat dvakrát se stejným jménem].
