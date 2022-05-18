## Volitelné čtení na doma - uzávěry

Když JavaScript runtime vykonává blok kódu, po celou dobu si pamatuje všechny proměnné, které v něm byly vytvořeny. Jakmile vykonávání bloku skončí, všechny takto zapamatované proměnné se z paměti uvolní. Toto může představovat problém ve chvíli, kdy uvnitř nějakého bloku vytváříme vlastní funkci. Prohlédněte si následující kód, který požádá uživatele o počet vteřin a poté postupně odpočítává každou vteřinu směrem dolů.

```js
const seconds = prompt('Zadejte cas:');

if (seconds > 0) {
  const timeElm = document.querySelector('#name');

  const countDown = () => {
    seconds -= 1;
    timeElm.textContent = seconds;
  };

  setInterval(countDown, 1000);
}
```

Všimněte si lokální proměnné `timeElm`. Tato je vytvořena v bloku `if`. Její životnost je tak spjata s tímto blokem. Funkce `countDown` tuto proměnou používá k nastavení času na stránce. Blok této funkce se však poprvé spustí až za vteřinu. To už bude blok `if` dávno u konce a proměnná `timeElm` tak už bude dávno uvolněná z paměti. Funkce by se tak pokusila přistoupit k již neexistující proměnná a náš program by spadnul.

JavaScript runtime však tuto prekérní situaci vyřeší za nás. Ve chvíli, kdy nějaká funkce používá proměnnou z nadřazeného bloku, runtime si zapamatuje, že takovou proměnnou nemá na konci jejího bloku mazat. Funkce si potom tuto proměnnou nese s sebou po celý svůj život. Říkáme pak, že proměnná se do funkce uzavře a vzniká tak :term{cs="uzávěr" en="closure"}. V našem případě se tedy proměnná `timeElm` uzavřela do funkce `countDown`.

Uzávěr takto zkraje možná zní jako velmi technická záležitost. V JavaScriptu ale budeme uzávěry používat na každém kroku. Většinou je použijeme a ani si to neuvědomíme. Hloubavější povahy ovšem jistě budou chtít vědět, co se v takovém případě děje.
