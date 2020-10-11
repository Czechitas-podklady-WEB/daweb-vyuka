Vraťme se na chvíli k našemu příkladu s nákupním seznamem z předchozí lekce.

```js
const shoppingList = [
  'mrkev',
  'paprika',
  'cibule',
  'čínské zelí',
  'arašídy',
  'sojová omáčka',
];

const updateShoppingList = () => {
  const listElm = document.querySelector('#shopping-list');
  listElm.innerHTML = '';
  for (let i = 0; i < shoppingList.length; i += 1) {
    listElm.innerHTML += `<li>${shoppingList[i]}</li>`;
  }
};
```

Dejme tomu, že bychom chtěli uživateli umožnit nějakou položku ze seznamu odstranit, aby tak mohl sledovat, co už koupil a co ještě zbývá. Pro jednoduchost řekněme, že položku odstraníme prostě tak, že na ni klikneme. To znamená, že musíme na každou položku seznamu pověsit posluchač událost `click`. Otázka zní, jak to udělat? Zkuste se nad ní na chvíli zamyslet, než budete pokračovat dál.

Možností existuje jístě vícero. Jedna z nich je například vytvořit celý seznam tak, jako výše, a pak vybrat všechny `li` elementy a pomocí cyklu na každý z nich pověsit posluchač.

```js
const updateShoppingList = () => {
  const listElm = document.querySelector('#shopping-list');
  listElm.innerHTML = '';
  for (let i = 0; i < shoppingList.length; i += 1) {
    listElm.innerHTML += `<li>${shoppingList[i]}</li>`;
  }

  const listItems = document.querySelectorAll('#shopping-list li');
  for (let i = 0; i < listItems.length; i += 1) {
    listItems[i].addEventListener('click', () => {
      console.log('item click');
    }
  }
};
```

Pro větši programy však takovýto přístup začne být lehce neohrabaný a těžko čitelný. Problém v podstatě spočívá v tom, že necháváme prohlížeč, aby vytvářel DOM element za nás tím, že nastavujeme `innerHTML`. Velmi se nám však uvolní ruce, pokud budeme schopni si DOM elementy tvořit sami.

### Jak vytvořit vlastní DOM element

Do této chvíle naše programy vždy fungovaly tak, že všechny DOM elementy, se kterými jsme pracovali, byly vybrány ze stránky pomocí `document.querySelector`. Nyní si ukážeme, jak vytvořit DOM element tak říkajíc na zelené louce **mimo** naši stránku. Takto vytvořený element pak můžeme různě opracovávat a zpojit jej do stránky až ve chvíli, kdy je hotový.

Nový DOM element vytvoříme pomocí funkce `document.createElement`. Takto například vytvoříme prázdný `li` element.

```js
const liElm = document.createElement('li');
```

V tuto chvíli máme vytvořený zcela plnoprávný DOM element, se kterým můžeme dělat všechno, co jsme s DOM elementy byli zvyklí dělali doposud: nastavovat `textContent`, měnit styly, měnit CSS třídy apod. Vytvořme tedy element pro naši položku nákupního seznamu, který bud obsahovat i tlačíko na smazání položky.

```js
const shopItemElm = document.createElement('li');
shopItemElm.className = 'shop-item';
shopItemElm.innerHTML = '<span>Jablka</span><button>koupeno</button>';
```

Pozor na to, že tento element zatím existuje zcela mimo naši stránku. Máme jej uložen pouze v proměnné `shopItemElm`. Pokud jej chcene do naší stránky zapojit, musíme nejdříve vybrat rodičovský element, dovnitř kterého náš nový element zapojíme. Na rodiči pak zavoláme metodu `appendChild`, která náš nový element zapojí jako poslední dítě tohoto rodiče.

V našem případě chceme naši nákupní položku přidat dovnitř seznamu s id `shopping-list`.

```js
const shopItemElm = document.createElement('li');
shopItemElm.className = 'shop-item';
shopItemElm.innerHTML = '<span>Jablka</span><button>koupeno</button>';

const listElm = document.querySelector('#shopping-list');
listElm.appendChild(shopItemElm);
```

Výhoda tohoto přístupu spočívá v tom, že můžeme na tlačítko v nášem elementu snadno připojit posluchače. Zde můžeme využít toho, že metodu `querySelector` nemusíme volat jen na celém dokumentu. Pokud ji zavoláme na DOM elementu, vybíráme pouze zevnitř něj a nikoliv z celého dokumentu. Snadno tak vyberme naše tlačíkto a pověsíme na něj posluchače.

```js
const shopItemElm = document.createElement('li');
shopItemElm.className = 'shop-item';
shopItemElm.innerHTML = '<span>Jablka</span><button>koupeno</button>';
const btnElm = shopItemElm.querySelector('button');
btnElm.addEventListener('click', () => {
  console.log('klik');
});

const listElm = document.querySelector('#shopping-list');
listElm.appendChild(shopItemElm);
```

### Funkce render

Vidíte sami, že příprava elementu pro položku nákupu zabere už notný kus kódu. Zde by bylo vhodné si jej zabalit do funkce. Funkce, které vytvářejí nějaký DOM element, je zvykem pojmenovávat slovíčkem `render`.

```js
const renderShopItem = (item) => {
  const shopItemElm = document.createElement('li');
  shopItemElm.className = 'shop-item';
  shopItemElm.innerHTML = `<span>${item}</span><button>koupeno</button>`;

  const btnElm = shopItemElm.querySelector('button');
  btnElm.addEventListener('click', () => {
    console.log('klik');
  });

  return shopItemElm;
};
```

Pokaždé, když zavoláme funkci `renderShopItem` s nějakým názvem položky, obdržíme nový DOM element představující naši nákupní položku. Ten pak můžeme zapojit do našeho nákupního seznamu. Celý program pak bude vypadat takto.

```js
const renderShopItem = (item) => {
  const shopItemElm = document.createElement('li');
  shopItemElm.className = 'shop-item';
  shopItemElm.innerHTML = `<span>${item}</span><button>koupeno</button>`;

  const btnElm = shopItemElm.querySelector('button');
  btnElm.addEventListener('click', () => {
    console.log('klik');
  });

  return shopItemElm;
};

const updateShoppingList = () => {
  const listElm = document.querySelector('#shopping-list');
  listElm.innerHTML = '';
  for (let i = 0; i < shoppingList.length; i += 1) {
    const itemElm = renderShopElm(shoppingList[i]);
    listElm.appendChild(itemElm);
  }
};
```

### Implementace klikání

Zatím jsme se nezabývali tím, jak implementovat kliknutí na položku seznamu tak, aby se nám ji povedlo vymazat. V podstatě jediný problém zde je, že posluchač události musí znát index položky, kterou chceme z pole smazat. Tento si však můžeme šikovně uložit do datového atributu například s názvem `data-index`. Pak už nám stačí pouze si tento index přečíst a smazat prvek pole pomocí metody `splice`. Pozor na to, že pak musíme zase zavolat funkci `updateShoppingList`, neboť jsme změnili obsah pole.

```js
const renderShopItem = (item, index) => {
  const shopItemElm = document.createElement('li');
  shopItemElm.className = 'shop-item';
  shopItemElm.dataset.index = index;
  shopItemElm.innerHTML = `<span>${item}</span><button>koupeno</button>`;

  const btnElm = shopItemElm.querySelector('button');
  btnElm.addEventListener('click', (e) => {
    const index = e.target.dataset.index;
    shoppingList.splice(index, 1);
    updateShoppingList();
  });

  return shopItemElm;
};
```

Funkce `renderShopItem` začiná být malinko dlouhá a trošku nepřehledná především kvůli tomu, že uvnitř ní vytváříme další funkci pro kliknutí na tlačítko. Nejlepší bude si tuto funkci pojmenovat a vytáhnout ven. Kód celé aplikace pak bude vypadat takto.

```js
'use strict';

const shoppingList = [
  'mrkev',
  'paprika',
  'cibule',
  'čínské zelí',
  'arašídy',
  'sojová omáčka',
];

const deleteClick = (e) => {
  const index = e.target.dataset.index;
  shoppingList.splice(index, 1);
  updateShoppingList();
};

const renderShopItem = (item, index) => {
  const shopItemElm = document.createElement('li');
  shopItemElm.className = 'shop-item';
  shopItemElm.dataset.index = index;
  shopItemElm.innerHTML = `<span>${item}</span><button>koupeno</button>`;

  const btnElm = shopItemElm.querySelector('button');
  btnElm.addEventListener('click', deleteClick);

  return shopItemElm;
};

const updateShoppingList = () => {
  const listElm = document.querySelector('#shopping-list');
  listElm.innerHTML = '';
  for (let i = 0; i < shoppingList.length; i += 1) {
    const itemElm = renderShopElm(shoppingList[i], i);
    listElm.appendChild(itemElm);
  }
};
```

@exercises ## Cvičení - vlastní DOM elementy [

- podcasty-2
  ]@
