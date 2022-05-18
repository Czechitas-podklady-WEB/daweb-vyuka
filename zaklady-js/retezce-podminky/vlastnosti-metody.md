Přestože jsme se za poslední dvě lekce o JavaScriptu dozvěděli hodně, stačí nám to pouze na krátké přímočaré prográmky. S takovými ale dlouho nevystačíme. V této lekci proto do našeho arzenálu přidáme některé užitečné techniky pro práci s řetězci a naučíme se větvit běh programu pomocí podmínek.

## Vlastnosti a metody

Z předchozí lekce už víme jak vytvářet jednoduché objekty a jak do nich přidávat vlastnosti. Za velkou pozornost však stojí fakt, že ostatní hodnoty v JavaScriptu jsou samy o sobě také objekty. Například každý řetězec je pod pokličkou objekt a my můžeme přistupovat k jeho vlastnostem stejně jako u objektů, které jsme vytvářeli sami.

U řetězců je situace v celku jednoduchá, protože mají pouze jednu vlastnost. Jmenuje se `length` a udává počet znaků v řetězci.

```jscon
> 'martin'.length
6
> 'm'.length
1
> ''.length
0
```

V objektech však kromě vlastností najdeme i takzvané :term{cs="metody" en="methods"}. Metoda je funkce schovaná uvnitř objektu a je tak s ním pevně spjata. V praxi se totiž často stává, že některé funkce se hodí na práci pouze s jedním typem hodnoty. Například bychom mohli mít funkci `toUpperCase`, která by převedla všechna písmena v řetězci na velká. Kdyby taková funkce existovala, mohli bychom ji
volat třeba takto

```jscon
> toUpperCase('martin')
'MARTIN'
```

Je pochopitelné, že tato funkce funguje pouze pro řetězce. Pro ostatní
hodnoty nedává smysl. Těžko si představit, co by taková funkce měla vrátit
například v takovémto případě.

```jscon
> toUpperCase(3.14)
```

Funkce, které pracují pouze na jednom typu objektu, můžeme svázat přímo s tímto objektem. Můžeme tedy říct, že funkce `toUpperCase` patří pouze řetězcům. Máme-li funkci, která patří pouze typu řetězec, voláme ji pomocí už známé tečkové notace.

```jscon
> 'martin'.toUpperCase()
'MARTIN'
```

Funkce `toUpperCase` je prvním příkladem jednoduché metody. Výhoda je, že tato metoda v JavaScriptu skutečně existuje, takže výše uvedený kód bude fungovat. Podobně existuje například metoda
`toLowerCase`. Vyzkoušejte si ji!
