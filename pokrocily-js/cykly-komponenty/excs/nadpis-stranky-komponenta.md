---
title: Nadpis stránky jako komponenta
demand: 2
---

Vytvořte si HTML stránku s následující strukturu

```html
<body>
  <div id="app"></div>
  <script src="index.js"></script>
</body>
```

Vytvořte funkci `Heading`, s jedním parametrem `text`. Tato funkce vytvoří řetězec obashující HTML značku `h1` s obsahem zadným v parametru.

Ukázka použití:

```jscon
> Heading('ahoj')
'<h1>ahoj</h1>'
> Heading('Zítra ráno v pět')
'<h1>Zítra ráno v pět</h1>'
```

Vyberte ze stránky element `app` a pomocí vlastnosti `innerHTML` do něj zapojte výsledek volání funkce `Heading`. Vyzkoušejte si tento postup s různými vstupy pro tuto funkci.
