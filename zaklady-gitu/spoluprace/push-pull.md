Abychom si vyzkoušeli spolupráci na jedné větvi na praktickém příkladu, budeme po zbytek lekce sledovat dva vývojáře **Aleše** a **Bedřicha**, jak společně vyvíjejí webovou stránku pro milovníky kaktusů jménem _Pichláci_. Projekt bude pro naše účely extrémně jednoduchý. Určitě se nám však bude hodit tento [obrázek kaktusu](assets/cactus.jpg).

Nejprve musí jeden z vývojářů, například Aleš, založit projekt na svém GitHubu jménem `pichlaci`. Do tohoto projektu pak musí pozvat Bedřicha jeko spolupracovníka. To se provede na stránce _Settings_ → _Collaborators_.

Poté si oba, Aleš i Bedřich, naklonují tento společný repozitář k sobě do počítače.

## Scénář 1: Push a pull

Aleš nyní na svém počítači vytvoří základní strukturu projektu

```sh
$ npm init kodim-app@latest . html-css-js
```

Takto založený projekt může rovnou commitnout.

Příkazy:

```
$ git push
$ git pull
```
