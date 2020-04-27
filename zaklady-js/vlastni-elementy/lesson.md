Díky JavaScritpu a práci s DOMem už dokážete vašim stránkám vdechnout hodně života a zprostředkovat tak uživateli interaktivní zážitek. Zatím jsme však pracovali pouze s elementy, které už na stránce existují. Dnes si ukážeme, jak zapojit do stránky elementy vytvořené celé přímo v JavaScriptu. Tímto postupně nastupujeme cestu, která skončí až u toho, kdy budeme vytvářet v JavaScriptu úplně celou stránku a žádné HTML soubory už vytvářet nebudeme. To však až za několik lekcí.

## Interpolace řetězců

Chceme se vyhnout nepřehledným konstrukcím typu

```js
'Spolubydlící ' + name + ' utratil ' + amount + ' kč za ' + product + '.';
```

Proto napíšeme řaději

```js
`Spolubydlící ${name} utratil ${amount} kč za ${product}.`;
```

Ve složených závorkách máme jakési JavaScriptové okno uvnitř řetězce, do kterého můžeme vepsat nejen proměnnou, ale zcela libovolný výraz, jehož výsledek bude automaticky zkonvertován na řetězec.

## Tvorba HTML pomocí JavaScriptu

Z předchozích lekcí už dávno umíme změnit obsah nějakého DOM elementu pomocí vlastnosti `textContent`. U složitějších aplikací však narazíme na situace, kdy nechceme měnit jen text už existujícího elementu, ale chceme vytvořit úplně nový element. Na začátku nám k tomu poslouží vlastnost `innerHTML`. Pomocí této vlastnosti můžeme nějakému elementu nastavit obsah jako HTML. Můžeme tak uvnitř elementu vyrobit úplně novou HTML strukturu.

Mějme následující jednoduchou HTML strukturu.

```html
<body>
  <div class="card">Produkt</div>
</body>
```

### Ukázkový příklad - nákupní seznam

Mějme následující pole obsahující položky, které zítra nechceme zapomenout koupit při návštěvě supermarketu.

```js
const shoppingList = [
  'mrkev',
  'paprika',
  'cibule',
  'čínské zelí',
  'arašídy',
  'sojová omáčka',
];
```

Takto můžeme naše pole převést na hezký HTML seznam.

```js
const listElm = document.querySelector('ul');
for (let i = 0; i < shoppingList.length; i += 1) {
  listElm.innerHTML += `<li>${shoppingList[i]}</li>`;
}
```

## Vlastní DOM elementy

Při práci s `innerHTML` narazíme na jeden velký problém. Při každé změně této vlastnosti se celý DOM uvnitř elementu zkonstruuje zcela znova. Tím přijdeme o všechny posluchače událostí. Způsob, jak toto obejít, je vytvořit si DOM element mimo dokument.

`document.createElement`
