## Složitější funkce

Ne každá funkce je tak přímočará, jako výpočet obsahu. Často se stane, že potřebujeme ve funkci provést nějaké rozhodování, výpočet sestávají z více kroků apod. Mějme například funkci, která rozhodne, zda máme dostatečně bezpečné heslo. Heslo budeme považovat za bezpečné, pokud je delší než 12 znaků. V takovéto funkci tedy potřebujeme použít podmínky. Tělo funkce proto bude obsahovat více příkazů, které se nám už nevejdou na jeden řádek. V takovém případě bude tělo funkce blok kódu podobně jako to už známe u podmínek.

```js
const isSafe = (password) => {
  if (password.length >= 12) {
    return true;
  } else {
    return false;
  }
};
```

Všimněte si, že v této funkci máme vícero slovíček `return`, protože funkce v různých situacích vrací různé výsledky. Ve chvíli, kdy JavaScript runtime při vykonává funkce narazí na `return`, vykonávání funkce se ukončí a program se vrací na místo, odkud byla funkce volána. Vrácená hodnota pak bude na tomto místě výsledkem naší funkce. Ten si pak můžeme uložit třeba do proměné.

```js
const result = isSafe('popokatepetl');
```

Vzhledem k tomu, že příkazem `return` se průběh funkce ukončuje, můžeme funkci `isSafe` napsat také takto.

```js
const isSafe = (password) => {
  if (password.length >= 12) {
    return true;
  }
  return false;
};
```

Proč není `else` potřeba? Zde je nuté oprášit logické uvažování. Pokud byla délka hesla dostatečná, funkce skončila u prvního `return` a k druhému se vůbec nedostala. Pokud se tedy vykonávání funkce dostalo až k druhému `return`, znamená to, heslo kontrolou neprošlo. Jinak by totiž funkce skončila mnohem dřív a sem bychom se vůbec nedostali. Nemusíme už tedy říkat žádné `else` a prostě vrátíme `false`.

Této strategii se říká :term{cs="časný návrat" en="early return"} a zkušení programátoři jej používají velmi často. Je proto dobré si na tento způsob zápisu zvyknout už od samého začátku.
