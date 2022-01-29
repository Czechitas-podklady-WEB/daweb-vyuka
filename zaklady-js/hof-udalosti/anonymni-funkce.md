## Anonymní funkce

V předchozíme programu je vidět, že funkci `timesIsUp` používáme pouze jednou. Je proto trochu zbytečné pro ni vytvářet proměnnou. Funkci můžeme vytvořit přímo na místě, kdy ji používáme.

```js
setTimeout(() => {
  console.log('Čas vypršel');
}, 5000);
```

Pokud nějakou funkci vytváříme přímo takto na místě místo toho, abychom ji nejdříve uložili do proměné, říkáme, že taková funkce je takzvaně :term{cs="anonymní" en="anonymous">. V teorii programování se místo pojmu anonymní funkce používá pojem <term cs="lambda funkce" en="lambda functions"}. V JavaScriptu se tento pojem až tolik nepoužívá, zato v jazyce Python je to zažitý termín.

Program napsaný pomocí lambda funkcí vám možná přijde hůř k přečtení. Anonymní funkce se ovšem v JavaScriptu používají zcela běžně a jakmile si na tento způsob zapisu zvyknete, budete jej radostně používat také.

Podobně jako u funkce `setTimout`, anonymní funkci můžeme předat i naší známé funkci `calc`. Schválně zkuste odhanout, co bude výsledkem následujícího výrazu a proč.

```jscon
> calc(13, (x, y) => x % y, 7)
?
```
