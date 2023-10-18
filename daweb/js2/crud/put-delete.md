## Dotazy PUT a DELETE

Abychom mohli různými způsoby měnit data na serveru, potřebujeme několik dalších metod pro naše HTTP požadavky. V předchozí částí jsme viděli metodu POST. Běžně se dále používají metody PUT a DELETE. Jejich významy jsou následující:

- GET: slouží k načtení dat (seznamu nebo detailu jedné položky)
- POST: slouží k přidání nového prvku do kolekce,
- PUT: slouží ke změně (přepsání) už existujícího prvku,
- DELETE: slouží k odstranění prvku z kolekce.

Většina backendových API funguje tak, že když nějakým požadavkem změníme data na serveru, jako odpověď dostaneme potvrzení, že se operace povedla. Na nás je pak, abychom si v naší aplikaci zobrazili nová data například načtením celé stránky znovu.
