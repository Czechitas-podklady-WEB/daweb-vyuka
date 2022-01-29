## Druhy událostí

Jak už bylo řečeno, událostí je mnoho typů a mohou nastat na různých elementech. My jsme zatím reagovali na kliknutí na tlačítko. Kliknutí však může nastat na jakémkoliv elementu. Takto například zareagujeme na kliknutí na celé stránce.

```js
const handleClick = () => {
  console.log('klik');
};

document.addEventListener('click', handleClick);
```

Takto přidáme posluchače události k celé naší stránce. Na celé stránce také můžeme použít událost `scroll`, která nastave pokaždé, když uživatel na stránce zascrolluje.

```js
const handleScroll = () => {
  console.log('skrol');
};

document.addEventListener('scroll', handleScroll);
```

Často se nám také mohou hodit události `keydown` a `keyup`. Událost `keydown` nastane, když uživatel stiskne nějakou klávesu. Událost `keyup` nastane, když uživatel klávesu uvolní. To je velmi šikovné, protože pokud uživatel drží zmáčknutou nějakou klávesu, událost `keydown` nám bude chodit pořád dokola. Naopak událost `keyup` přijde vždy pouze jednou ve chvíli, kdy uživatel klávesu uvolní.

Událostí, na které můžete na stránce reagovat je nepřeberné množství. Seznam všech událostí si můžete pro inspiraci prohlédnout [na stránkách MDN](https://developer.mozilla.org/en-US/docs/Web/Events).
