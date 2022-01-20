## Navigování mezi složkami

Každý shell má mnoho příkazů, pomocí kterých můžete dělat věci jako kopírovat soubory, vytvářet složky, pracovat se sítí apod. My v tomto kurzu budeme shell používat jen málo, protože si chceme povídat především s JavaScriptem. V této části se tedy z shellu naučíme jen to nejdůležitější a to je přecházení mezi složkami.

Je dobré si zapamatovat, že shell je vždy otevřený uvnitř nějaké složky. Cestu ke složce, ve které se právě nacházíte byste měli vidět před kurzorem. Pokud se chcete přesunout do jiné složky, použijete příkaz `cd`, který zrovna náhodou funguje úplně ve všech shellech.

Já jsem si pro účely této lekce otevřel terminál ve složce `articles`. Pomocí příkazu `ls` nebo `dir` jsem zjistil, že uvnitř této složky je mimo jiné i složka `courses`. Přesunu se do ní tedy příkazem `cd` a nechám si vypsat její obsah.

```shell
$ ls
assets courses courses.json exercises
$ cd courses
$ ls
daweb python-data
```

Nyní se můžu příkazem `cd` přesunout opět do nějaké složky, kterou vidím na obrazovce, nebo se můžu rozhodnout vrátit do nadřazené složky takto

```shell
$ cd ..
$ ls
assets courses courses.json exercises
```

Tímto způsobem se můžu zcela svobodně přesouvat mezi složkami na pevném disku.

### Tabulátor a historie

Občas jsou názvy složek dlouhé a nechce se nám je celé vypisovat. Zkuste při použití příkazu `cd` napsat jen prvních pár písmenek z názvu složky a stiskněte klávesu :kbd[Tab]. Shell by měl sám doplnit zbytek názvu.

Často se nám také hodí vrátit se k příkazům, které jsme napsali před chvíli. Pokud v terminálu stisknete šipku nahoru :kbd[↑], můžete postupně procházet všechny příkazy, které jste do shellu napsali.

Všechny výše zmíneně postupy budeme používat především proto, abychom dokázali ovládat Git, případně interagovali s balíčkovacím systémem NPM.
