## Hlasování

Pojďme si posílání POST dotazů ukázat na reálném API. Na adrese [apps.kodim.cz/daweb/hlasovani](https://apps.kodim.cz/daweb/hlasovani) najdete webovou aplikaci, která nabízí několik otázek, o kterých mohou uživatelé hlasovat. Tato aplikace nabízí API, pomocí kterého je možné zahlasovat v jedné otázce. Dokumentaci k tomuto API najdete [zde](https://apps.kodim.cz/daweb/hlasovani/docs).

Chceme-li v nějaké otázce hlasovat, musíme na správný endpoint odeslat POST požadavek, který řekne, pod jakým jménem a pro jakou volbu hlasujeme. Pokud chceme hlasovat v otázce s `id` 3, pošleme POST na endpoint `/api/poll/3`.

Na tento endpoint pošleme objekt, který říká, že uživatel hlasuje pro volbu s `optionId` 2.

```js
{
  optionId: 2,
}
```

Zároveň chceme, aby server poznal, za jakého uživatele hlasujeme. Pošleme tedy hlavičku authorization s naším jménem, např. Zuzka. Pozor na to, že v HTTP hlavičkách nemohou být české znaky s diakritikou.

```js
fetch('https://apps.kodim.cz/daweb/hlasovani/api/poll/3', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Zuzka',
  },
  body: JSON.stringify({
    optionId: 2,
  }),
});
```

Pokud se požadavek povede odeslat správně, měla by aplikace v reálném čase aktualizovat zobrazené výsledky.

## Klíčové slovo `async`

Zatím jsme ještě funkci `fetch` nikdy nevolali uvnitř žádné funkce. Volání jsme vždy měli na samotném začátku kódu. Při posílání požadavku POST však budeme chtít `fetch` volat až při kliknutí na tlačítko nebo hlavně ve zpracování události `submit` formuláře. To znamená, že `fetch` bude volán uvnitř funkce, která je posluchačem události.

Pokud používáme uvnitř jakékoliv funkce `await`, musíme funkci vždy označit jako `async`.

```js
document.querySelector('button').addEventListener('click', async (e) => {
  await fetch();
  // ...
});
```

Kdybychom toto neudělali, obdržíme od JavaScript runtimu chybu. Problematika `async/await` může být dosti komplikovaná, proto se jí zde nebudeme hloubějí věnovat a omezíme pouze na toto jednoduché pravidlo, které budeme dodržovat.
