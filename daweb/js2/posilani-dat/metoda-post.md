## Metoda POST – odesílání dat

Pokud ve své aplikaci používáme data z nějakého veřejného API, většinou je stahujeme pouze ke čtení. Málokterý veřejný server by nám jen tak dovolil na něm data upravovat. Pokud však píšeme aplikaci, ve které používáme vlastní backend, většinou si vytvoříme vlastní databázi a vlastní API, do kterého pak můžeme i zapisovat. V této lekci si proto ukážeme, jak můžeme pomocí dotazů na API měnit data na serveru.

V minulé lekci jsme posílali dotazy na API tímto způsobem.

```js
fetch('https://api.sunrise-sunset.org/json?lat=50&lng=14.5');
```

Takto se posílá základní typ dotazu, kterému říkáme GET. Tento dotaz má za úkol získat pro čtení nějaká data ze serveru. Typů dotazů však existuje více. Říkáme jim _HTTP metody_ a patří mezi ně například POST, PUT, DELETE a další. Tyto metody většinou slouží k zápisu či změně dat na serveru. Začneme dotazem POST, kterým slouží ke vkládání nových data.
