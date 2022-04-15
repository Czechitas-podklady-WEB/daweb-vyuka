## Navigování mezi složkami

Terminál budete při své práci používat od nynějška každý den až do konce své úspěšsné programátorské kariéry. Pojďme si jej tedy ještě lépe osahat a naučit se první užitečné příkazy.

Na začátek je velmi důležité si uvědomit, že terminál je vždy otevření uvnitř nějaké složky na disku. Název nebo celou adresu této složky většinou vidíte před kurzorem, abyste vždy věděli, kde se nacházíte. Pokud se v terminálu chcete přesunou do jiné složky, slouží k tomu příkaz `cd` (zkratka z _change directory_).

Já jsem si pro účely této lekce otevřel terminál ve složce `daweb`.

::fig[Terminál]{src=assets/terminal.png}

Vím, že uvnitř této složky je složka s názvem `projekty`. Do této složky se přesunu příkazem

```sh
$ cd projekty
```

Text před kurzorem se změní, abych věděl, že nyní se nacházím uvnitř složky `projekty`.

::fig[Složka projekty]{src=assets/terminal-projekty.png}

Pokud se naopak potřebuji přesunout zpět do nadražené složky `daweb`, napíšu příkaz

```sh
$ cd ..
```

::fig[Složka projekty]{src=assets/terminal-cd.png}

Umět se v terminálu pohybovat mezi složkami je do začátku velmi důležité zkušesnot. Vyzkoušejte si příkaz `cd` na svém počítači, abyste měli jistotu, že víte, co se děje. Zatím používejte jen složky, které neobsahují mezery.

### Tabulátor a historie

Občas jsou názvy složek dlouhé a nechce se nám je celé vypisovat. Obzblášť nepříjmná je situace, kdy složka obsahuje mezery, protože pak její název musíme psát do uvozovek. Například

```sh
$ cd "Moje projekty"
```

V tomto nám pomůže klávesa tabulátor. Zkuste při použití příkazu `cd` napsat jen prvních pár písmenek z názvu složky a stiskněte klávesu :kbd[Tab]. Terminál by měl sám doplnit zbytek názvu. Pokud se tak neděje, buď daná složka neexistuje nebo na daných prvních pár písmenek začíná více složek. V takovím případě musíte napsat písmenek více.

Často se nám také hodí vrátit se k příkazům, které jsme napsali před chvíli. Pokud v terminálu stisknete šipku nahoru :kbd[↑], můžete postupně procházet všechny příkazy, které jste do terminálu napsali. Tento postup velmi urychluje práci, protože často v terminálu opakujeme stejný příkaz mnohorkát po sobě.
