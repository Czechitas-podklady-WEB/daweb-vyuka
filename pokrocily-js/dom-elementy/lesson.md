Přestože už dokážeme díky komponentám vytvářet vcelku hezké webové stránky, pořád to ještě nejsou opravdové aplikace. Naše komponenty totiž zatím vytvářejí pouze statické HTML a chybí jim interaktivita. V této lekci tuto situaci napravíme tím, že se naučímte vytvářet vlastní DOM elementy.

## Vytváření vlastních DOM elementů

Do této chvíle naše programy vždy fungovaly tak, že všechny DOM elementy, se kterými jsme pracovali, byly vybrány ze stránky pomocí `document.querySelector`. Nyní si ukážeme, jak vytvořit DOM element tak říkajíc na zelené louce **mimo** naši stránku. Takto vytvořený element pak můžeme různě opracovávat a zapojit jej do stránky až ve chvíli, kdy je hotový.

Nový DOM element vytvoříme pomocí funkce `document.createElement`. Takto například v konzoli vytvoříme prázdný `h1` element a uložíme si jej do proměnné.

```jscon
> const h1Elm = document.createElement('h1');
```

V tuto chvíli máme vytvořený zcela plnoprávný DOM element, se kterým můžeme dělat všechno, co jsme s DOM elementy byli zvyklí dělat doposud: nastavovat `textContent`, měnit styly, měnit CSS třídy apod.

```jscon
> h1Elm.textContent = 'Nadpis'
> h1Elm.className = 'title'
```

Důležité je, že tento element není zapojen do naší stránky. Je zatím uložen pouze v proměnné `h1Elm` a na stránce jej tedy není vidět. Pokud jej chceme do stránky vložit, můžeme jej například zapojit na konec nějakého elementu, který už na stránce je.

Mějme například následujicí HTML.

```html
<body>
  <div id="app"></div>
</body>
```

Nyní v konzoli vybereme element `#app` a poté použijeme metodu `appendChild`, která zapojí zadaný element na konec elementu `#app`.

```jscon
> const appElm = document.querySelector('#app');
> appElm.appendChild(h1Elm)
```

Po spuštění těchto příkazů bychom měli na stránce uvidět náš nadpis.

### Obsah vlastních elementů

DOM elementy, které si vytvoříme pomocí `document.createElement` jsou zcela plnohodnotné DOM elementy. Kromě stylů a textového obsahu můžeme taky měnit jejich vnitřní obsah pomocí vlastnosti `innerHTML`. Takto například přidáme složitější obsah do našeho nadpisu.

```jscon
> h1Elm.innerHTML = '<span class="bold">Nadpis</span><span>mojí stránky</span>'
```

Vidíte tedy, že si tak říkajíc na vlasním písečku můžeme vytvářet i velmi složité a obsáhldé DOM elementy a zapojit je do stránky až ve chvíli, kdy je máme správně zkonstruované. Toto se nám bude velmi hodit při vytváření komponent. O tom však až v druhé části.

[[[ excs Cvičení: Vlastní DOM elementy
- tlacitko
- kontakty
]]]

## Interaktivní komponenty

Vytváření vlastních DOM elementů nám velmi pomůže pro přidání interaktivity do našich komponent. Začněme s jednoduchým příkladem, kdy bychom chtěli aplikaci podobnou například Facebooku, která zobrazuje příspěvky a k nim možnost je olajkovat. Základ takové aplikace si můžete [stáhnout zde](assets/lajky.zip).

Podívejme se, jak vypadá HTML kód jednoho příspěvku.

```html
<div class="post">
  <div class="post__text">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quasi
    architecto, quos ea eos nihil nobis fugiat eveniet aperiam iste?
  </div>
  <button id="like-btn" class="like-btn">
    <div class="like-icon"></div>
    <div>Olajkovat</div>
  </button>
</div>
```

Pokud bychom chtěli vytvořit pro příspěvek komponentu, dle našich současných znalostí by mohla vypadat například takto.

```js
const Post = (props) => {
  return `
    <div class="post">
      <div class="post__text">${props.text}</div>
      <button class="like-btn">
        <div class="like-icon"></div>
        <div>Olajkovat</div>
      </button>
    </div>
  `;
};
```

Nyní bychom chtěli na naše tlačíko pověsit funkci reagující na kliknutí. Jak to ale udělat, když příspěvků může být na naší stránce mnoho a není snadné se k nim odstat mimo komponentu? Zde přichází ke slovu vytváření DOM elementů. Naši komponentu přepíšeme tak, že nebude vracet řetězec obsahující HTML, nýbrž hotový DOM element.

```js
const Post = (props) => {
  const element = document.createElement('div');
  element.className = 'post';
  element.innerHTML = `
    <div class="post__text">${props.text}</div>
    <button class="like-btn">
      <div class="like-icon"></div>
      <div>Olajkovat</div>
    </button>
  `;

  return element;
};
```

Díky tomu, že uvnitř funkce vytvářím DOM element, můžeme se díky němu dostat k tlačítku a napojit na něj posluchač události. Ten si vytvoříme přímo uvnitř komponenty.

```js
const Post = (props) => {
  const element = document.createElement('div');
  element.className = 'post';
  element.innerHTML = `
    <div class="post__text">${props.text}</div>
    <button class="like-btn">
      <div class="like-icon"></div>
      <div>Olajkovat</div>
    </button>
  `;

  const likeBtn = element.querySelector('.like-btn');
  likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('like-btn--on');
  });

  return element;
};
```

Všimněte si, že metodu `querySelector` voláme nikoliv na dokumentu, ale na našem novém elementu. Pokud tuto metodu zavoláme na DOM elementu, vybíráme pouze zevnitř tohoto elementu a nikoliv z celého dokumentu. Snadno tak vybereme naše tlačíkto a pověsíme na něj posluchače. Každý DOM element naší komponenty tak má svoje tlačíko se svým vlastním posluchačem. Veškerou logiku tak mám zabalenou uvnitř komponenty a můžene si jich na stránce vytvořit kolik chceme. Nyní však musíme použít metodu `appendChild`, protože naše komponenta už nevrací řetězec, ale hotový DOM element.

```js
const post1 = Post({ text: 'Zrovna drtím JavaScript!' });
const post2 = Post({ text: 'Digitální akademie je nejvíc cool' });
const post3 = Post({ text: 'Bude ze mě velká programátorka' });

const appElm = document.querySelector('#app');
appElm.appendChild(post1);
appElm.appendChild(post2);
appElm.appendChild(post3);
```

### Označení položek v nákupním seznamu

Díky tomu, že už umíme psát interaktivní komponenty, můžeme uživateli umožnit nějakou položku ze seznamu označit jako koupenou, aby uživatel mohl sledovat, co už koupil a co ještě zbývá. Ke každé položce tedy přidáme tlačíko pro označení. Kvůli tomu bude potřeba přepsat naše komponenty tak, aby vracely DOM elementy.

Kód naší aplikace pro nákupní seznam si můžete [stáhnout zde](assets/nakupni-seznam.zip). Máme zde vytvořeny dvě komponenty `ShoppingItem` a `ShoppingList`.

```js
const ShoppingItem = (props) => {
  return `
    <div class="item">
      <span class="item__name">${props.name}</span>
      <span class="item__amount">${props.amount}</span>
    </div>
  `;
};

const ShoppingList = (props) => {
  let result = '<div class="shopping-list">';

  for (let i = 0; i < props.items.length; i += 1) {
    result += ShoppingItem(props.items[i]);
  }

  result += '</div>';
  return result;
};
```

Komponentu `ShoppingItem` převedeme na DOM element a přidáme do ní tlačítko.

```js
const ShoppingItem = (props) => {
  const element = document.createElement('div');
  element.className = 'item';
  element.innerHTML = `
    <span class="item__name">${props.name}</span>
    <span class="item__amount">${props.amount}</span>
    <button class="btn-done">koupeno</button>
  `;

  return element;
};
```

Nyní chceme přidat funkci pro kliknutí, která na náš element přidá CSS třídu `item--done`.

```js
const ShoppingItem = (props) => {
  const element = document.createElement('div');
  element.className = 'item';
  element.innerHTML = `
    <span class="item__name">${props.name}</span>
    <span class="item__amount">${props.amount}</span>
    <button class="btn-delete">koupeno</button>
  `;

  const deleteBtn = element.querySelector('.btn-delete');
  deleteBtn.addEventListener('click', () => {
    element.classList.add('item--done');
  });

  return element;
};
```

Nyní musíme upravit komponentu `ShoppingList`.

```js
const ShoppingList = (props) => {
  const element = document.createElement('div');
  element.className = 'shopping-list';

  for (let i = 0; i < props.items.length; i += 1) {
    element.appendChild(ShoppingItem(props.item));
  }

  return element;
};
```

Nakonec musíme ještě upravit použití komponenty `ShoppingList`, protože už nevrací řetězec ale DOM element.

```js
mainElm.innerHTML = '';
mainElm.appendChild(ShoppingList({ items: list }));
```

Všimněte si, že je třeba nejdříve vyprázdnit element `mainElm`, abychom do něj mohli vložit nový obsah pomocí `appendChild`.

[[[ excs Cvičení: Interaktivní komponenty
- zarovky
- kostky-1
]]]
