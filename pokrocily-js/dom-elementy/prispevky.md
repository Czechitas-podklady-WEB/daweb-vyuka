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
  element.classList.add('post');
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
  element.classList.add('post');
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
