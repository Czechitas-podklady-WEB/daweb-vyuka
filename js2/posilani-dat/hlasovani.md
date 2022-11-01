## Hlasování

Pojďme si posílání POST dotazů ukázat na reálném API. Na adrese [apps.kodim.cz/daweb/hlasovani](https://apps.kodim.cz/daweb/hlasovani) najdete webovou aplikaci, která nabízí několik otázek, o kterých mohou uživatelé hlasovat. Tato aplikace nabízí API, pomocí kterého je možné zahlasovat v nějaké otázce. Dokumentaci k tomuto API najdete [zde](https://apps.kodim.cz/daweb/hlasovani/docs).

Chceme-li zahlasovat pro nějakou otázku, musíme na správný endpoint odeslat POST požadavek, který řekne pod jakým jménem a pro jakou volbu hlasujeme. Pokud chceme hlasovat v otázce s `id` 3, pošleme POST na endpoint `/api/poll/3`.

Na tento endpoint pošleme objekt, který říká, že hlasuje uživatel Zuzka pro volbu s `id` 2.

```js
{
  optionId: 2,
  voterName: 'Zuzka',
}
```

Celý kód pak bude vypadat takto:

```js
fetch('https://apps.kodim.cz/daweb/hlasovani/api/poll/3', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    optionId: 2,
    voterName: 'Zuzka',
  }),
});
```

Pokud se požadavek povede odeslat správně, měla by aplikace v reálném čase aktualizovat zobrazené výsledky.
