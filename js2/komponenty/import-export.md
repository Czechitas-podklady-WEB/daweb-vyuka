Jak už jsme během tohoto kurzu dříve zjistili, soubor `index.js` vložený pomocí `type="module"` je izolovaný svět sám pro sebe a žádné proměnné ani funkce nejsou zvenčí tohoto souboru dostupné. To samé platí i pro ostatní JavaScriptové soubory v našem projektu. My však v našem hlavním `index.js` používáme komponentu `ListItem`, která sídlí v jiném souboru v jiné složce. Potřebujeme tedy prohlížeči nějak říct, kde se tento soubor na serveru nachází, aby si mohl stáhnout jeho kód. To zařídíme pomocí mechanizmu _import/export_.

## Import/Export

Pokud chceme nějakou proměnnou nebo funkci používat mimo soubor, ve kterém je vytvořená, musíme ji takzvaně exportovat pomocí slovíčka `export`. Takto exportujeme naši komponentu `ListItem`.

```js
export const ListItem = (props) => {
```

Od této chvíle je naše komponenta použitelná i mimo soubor, ve kterém je definována. My ji používáme v kódu komponenty `ShopList`, a tedy potřebujeme, aby prohlížeč správně našel její kód. Musíme ji proto v souboru `ShopList/index.js` takzvaně importovat. To provedeme tak, že na začátek souboru napíšeme:

```js
import { ListItem } from '../ListItem/index.js';
```

Všimněte si cesty za slovíčkem `from`. Tady si musíme dát pozor, aby to byla správná cesta k souboru, ve kterém sídlí `ListItem`, jinak naši komponentu prohlížeč nenajde a program skončí chybou.

Komponentu `ShopList` používáme v hlavním `index.js` celé aplikace. I tuto komponentu tedy musíme správně importovat na začátku souboru.

```js
import { ShopList } from './ShopList/index.js';
```

Výše popsaný postup stačí k tomu, abychom propojili náš program do jednoho funkčního celku. Celý výsledný projekt najdete v [tomto repozitáři](https://github.com/Czechitas-podklady-WEB/prvni-komponenta). Můžete jej do začátků používat jako tahák, dokud si nebudete zcela jistí strukturou projektů s oddělenými komponentami.
