## Aktualizace po POST

Vybaveni schopností změnit data na serveru požadavkem typu POST můžeme konečně sestavit aplikaci, která korektně aktualizuje data na stránce. Předvedeme si to na naší aplikaci _Nákupy_. Její aktuální verzi najdeme v repozitáři [ukazka-nakupy-fetch](https://github.com/Czechitas-podklady-WEB/ukazka-nakupy-fetch).

Podívejte se na [dokumentaci API](https://nakupy.czechitas.app/doc/), které se používá v aplikaci Nákupy. Základní adresa API je `https://nakupy.czechitas.app/api`.

Endpointy API vyžadují autentizaci, aby backend poznal, že nám má poslat naše data a ne data někoho jiného. Jde o to stejnou autentizaci, jsme používali u _Hlasování_, stačí přidat hlavičku `Authorization` a do ní vložit nějaké uníkátní jméno, například svůj GitHub login.

```js
const response = await fetch('https://nakupy.czechitas.app/api', {
  headers: {
    Authorization: 'lektor',
  },
});
```

## Odeslání dat z formuláře

V aplikaci máme připraven formulář pro přidání nové položky do seznamu. Pověsíme si na něj posluchač události `submit` a v něm zatím pouze získáme data z formuláře a vypíšeme je do konzole.

```js
document.querySelector('.newitem-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const nameInput = document.querySelector('#input-name');
  const amountInput = document.querySelector('#input-amount');
  const unitInput = document.querySelector('#input-unit');

  const body = {
    product: nameInput.value,
    amount: Number(amountInput.value),
    unit: unitInput.value,
    done: false,
  };

  console.log(body);
});
```

Pro připomenutí: když vložíte tlačítko do HTML formuláře `<form>`, prohlížeč sám zajistí odeslání formuláře po kliknutí na tlačítko. Odeslání formuláře způsobí znovunačtení stránky – z pohledu uživatele to vypadá, jako by hned po kliknutí obnovil stránku (třeba klávesou F5). Pokud JavaScript mezi tím něco vypsal do konzole, po obnově stránky se výpis ztratí. Protože k obnově stránky dojde rychle, vypadá to, že se v konzoli nic nestalo.

Aby k odeslání formuláře nedošlo, je potřeba prohlížeči říci, že nemá provádět výchozí akci. K tomu slouží metoda `preventDefault` na události. Tuto metodu byste měli zavolat hned na začátku zpracování události, třeba takhle:

Nyní nám stačí pomocí požadavku POST odeslat data na server a obnovit stránku.

```js
document
  .querySelector('.newitem-form')
  .addEventListener('submit', async (e) => {
    e.preventDefault();

    const nameInput = document.querySelector('#input-name');
    const amountInput = document.querySelector('#input-amount');
    const unitInput = document.querySelector('#input-unit');

    const body = {
      product: nameInput.value,
      amount: Number(amountInput.value),
      unit: unitInput.value,
      done: false,
    };

    await fetch('https://nakupy.czechitas.app/api/mon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'lektor',
      },
      body: JSON.stringify(body),
    });

    window.location.reload();
  });
```

Všimněte si, že nám u funkce pro obsluhu události přibylo slovo `async`, protože uvnitř funkce používáme `await`.
