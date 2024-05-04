## Search parametry

Ve vícestránkových aplikacích si často budeme chtít předávat informace z jedné stránky na druhou. Když například máme nějaký e-shop, určitě bychom chtěli, aby šlo z přehledu produktů přejít na detail vybraného produktu. Už jsme se s podobnou situací setkali před několika lekcemi, kde jsme k podobnému účelu používali `window.location.hash`. Tento přístup má však několik nevýhod:

- Location hash je určený pro navigaci uvnitř jedné stránky. Takže jsme jej vlastně trochu zneužívali pro účely, pro které nebyl určen.
- Do hashe se obtížně vkládá více informací. Museli bychom kostrbatě vymýšlet nějaké způsoby, jak je oddělit, například pomocí znaku `,` nebo `;`. To je však zbytečně složité.

Pro předávání informací z jedné stránky na druhou se standardně používají takzvané _search parametry_. Ty už jsme několikrát viděli například při práci s API pro východ a západ slunce.

```
https://api.sunrise-sunset.org/json?lat=50&lng=14.5
```

Zde vidíme dva search parametry `lat` a `lng` oddělené znakem `&`. Každý z nich má svou hodnotu, kterou vidíme za znakem `=`.

Naším hlavním cílem je naučit se search parametry přečíst v naší stránce pomocí JavaScriptu.

## Search parametry v JavaScriptu

Search parametry se v JavaScriptu čtou pomocí objektu `URLSearchParams`. Ten je součástí JavaScript runtimu uvnitř prohlížeče. Vraťme se například k našemu seznamu postav se seriálu Simpsonovi. Chtěli bychom mít hlavní stránku se seznamem postviček a pak možnost si rozkliknout detail postivay.

Evidentně tedy budeme potřebovat dvě stránky. Jednu s přehledem postav a druhou s detailním zobrazením jedné postavy. Když budeme chtít z jedné stránky přejít na druhou, budeme potřebovat předat `id` postavy, kterou chceme zobrazit.

Na stránce s přehledem postav budeme mít u každé postavy odkaz. Budeme tak mít například takovýto seznam:

```html
<ul>
  <li><a href="postava.html?id=0">Homer Simpson</a></li>
  <li><a href="postava.html?id=1">Marge Simpson</a></li>
  <li><a href="postava.html?id=2">Bart Simpson</a></li>
</ul>
```

Abychom pak získali `id` produktu pomocí JavaScriptu, použijeme následující kód.

```js
const params = new URLSearchParams(window.location.search);
const id = params.get('id');
```

Tento kód potřebujeme vložit na stránku `postava.html`. Vyrobíme si proto nové soubory `postava.html` a `postava.js`.
