---
title: Seznam filmů
demand: 2
---

V tomto cvičení si vyzkoušíte:

- načíst seznam filmů ze serveru,
- postupně projít získaná data,
- vypsat jednotlivé filmy do stránky.

Vytvořte si repozitář ze šablony [projekt-Filmy](https://github.com/Czechitas-podklady-WEB/projekt-Filmy), ve kterém máte připravený prázdný projekt se vzorovým HTML a CSS.

::fig[Seznam filmů]{src=assets/result.png}

Ve cvičení budete načítat filmy ze serverového API. K API existuje jednoduchá [dokumentace](https://apps.kodim.cz/daweb/trening-api/docs/filmove-api), kde se dozvíte vše potřebné.

Nám pro toto cvičení bude stačit získat přehled filmů z adresy:

```
https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies
```

1. Z adresy uvedené výše načtěte seznam filmů pomocí funkce `fetch` a výsledek si uložte do proměnné.
1. Vypište proměnnou do konzole prohlížeče a podívejte se, jak data vypadají. Jde o pole objektů, kde každý objekt představuje jeden film, který vypadá následovně:
   ```json
   {
     "id": 1,
     "title": "Vykoupení z věznice Shawshank",
     "url": "https://www.csfd.cz/film/2294-vykoupeni-z-veznice-shawshank",
     "posterUrl": "https://image.pmgstatic.com/cache/resized/w360/files/images/film/posters/162/505/162505167_735db9.jpg",
     "genres": ["drama", "krimi"],
     "year": 1994
   }
   ```
1. Vidíte, že každý film má id, název, odkaz na popis filmu na ČSFD, obrázek filmu, rok vydání a také pole, které obsahuje seznam žánrů, do kterých film patří.
1. Vytvořte funkci `showMovies`, která bude vypisovat seznam filmů. Ve funkci pomocí metody pole `forEach` projděte postupně seznam filmů a vypište do konzole prohlížeče vždy jenom název filmu. Pokud vše funguje, měli byste pod sebou vidět názvy všech filmů v seznamu.
1. Když nyní víme, že se nám filmy správně načetli ze serveru a že je umíme projít, můžeme přistoupit k jejich vypsání do stránky místo do konzole prohlížeče.
1. Když se podíváte do připraveného HTML, uvidíte v něm `<div id="movies"></div>`. Uvnitř tohoto divu najdete zakomentovaný kus HTML kódu pro jeden film. Tento HTML kód budeme do stránky přidávat pro každý film místo vypisování jeho názvu do konzole uvnitř funkce `showMovies`.
1. Pomocí `document.querySelector` najděte ve stránce prvek s `id="movies"` a uložte si ho do proměnné s názvem `movieList`.
1. V cyklu `forEach` uvnitř funkce `showMovies` si do proměnné uložte HTML kód pro jeden film (zakomentovaný vzor z HTML souboru) a doplňte do něho na příslušných místech název filmu, adresu obrázku a rok vydání. Řádek s žánrem filmu můžete zatím ignorovat nebo úplně vynechat.
1. Obsah proměnné přidejte do `innerHTML` elementu uloženého v proměnné `movieList`.
1. Na stránce byste měli vidět přehled filmů, kde je vždy obrázek filmu a pod ním jeho název a rok vydání.

## Bonusy

1. Udělejte z názvu filmu odkaz, který povede na recenzi na ČSFD. V datech je adresa uložená ve vlastnosti `url`.
1. Vypište ke každému filmu i žánry, do kterého patří. Nezapomeňte, že žánry jsou v datech u každého filmu uloženy do pole.
1. Vytvořte ve vašem kódu komponentu `Movie`. To bude funkce pro zobrazení jednoho filmu. Funkce bude na vstupu přijímat objekt filmu, který chceme zobrazit. Na výstupu bude funkce vracet jako text HTML kód pro jeden film. Upravte funkci `showMovies`, aby komponentu používala pro přidání filmu do stránky.
1. Destrukturujte objekt na vstupu komponenty na jednotlivé vlastnosti a upravte komponentu, aby používala takto vytvořené proměnné.
1. Seřaďte filmy abecedně podle názvu.
1. Přidejte do stránky 2 tlačítka. Na tlačítka přidejte událost při kliknutí tlačítkem myši. Jedno tlačítko seřadí filmy na stránce vzestupně a druhé sestupně podle roku vydání.

---solution

Vypracované řešení najdete v původním repozitáři ve větvi [reseni](https://github.com/Czechitas-podklady-WEB/projekt-Filmy/tree/reseni).

Živý náhled pak na adrese [czechitas-podklady.cz/projekt-Filmy/](https://czechitas-podklady.cz/projekt-Filmy/).
