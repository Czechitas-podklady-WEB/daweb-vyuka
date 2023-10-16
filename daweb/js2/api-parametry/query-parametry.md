## Query Parametry

Ve vícestránkových aplikacích si často budeme chtít předávat informace z jedné stránky na druhou. Například při přechodu z přehledu produktů na detail produktu budeme chtít předat ID produktu, který chceme zobrazit. Už jsme se s podobnou situací setkali před několika lekce, kde jsme k podobnému účelu používali `window.location.hash`. Tento přístup má však několik nevýhod:

- Location hash je určený pro navigaci uvnitř jedné stránky. Takže jsem jej vlastně trochu zneužívali pro účely, pro které nebyl vymyšlen.
- Do hashe se obtížně vkládá více informací. Museli bychom vymýšlet nějaké způsoby, jak je oddělit, například pomocí znaku `,` nebo `;`. To je však zbytečně složité.

Pro předávání informací z jedné stránky na druhou se standardně používají takzvané _query parametry_. Ty už jsem několikrát viděli například při práci s API pro východ a západ slunce. 

```
https://api.sunrise-sunset.org/json?lat=50&lng=14.5
```

Zde vidíme dva query parametry `lat` a `lng` oddělené znakem `&`. Každý z nich má svou hodnotu, kterou vidímze za znakem `=`.

Naším hlavím cílem je naučit se query parametry přečíst pomocí JavaScriptu. 

## Query parametry v JavaScriptu

Query parametry se v JavaScriptu čtou pomocí objektu `URLSearchParams`. Ten je součástí JavaScript runtimu uvnitř prohlížeče. Kdybychom například chtěli mít stránku e-shopu, do ktéré si pošleme `id` produktu, jehož detail chceme zobrazit, mohli bychom v URL použít následující adresu.

```
http://localhost:3000/produkt.html?id=123
```

Abychom pak získali `id` produktu pomocí JavaScirput, použijeme následující kód.

```js
const params = new URLSearchParams(window.location.search);
const id = params.get('id');
```
