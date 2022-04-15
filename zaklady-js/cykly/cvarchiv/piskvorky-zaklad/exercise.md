---
title: Piškvorky základ
demand: 2
---

Hrát piškvorky 3x3 rychle přestane být zábava, neboť brzy objevíme, že pokud oba hráči hrají dobře, nemůže žádný z nich vyhrát. Pokud však herní plán zvětšíme na 4x4 a přidáme dvě nová pravidla, začínající hráč může vždy vyhrát. A pokud zrovna první hráč nehraje dokonalou hru, i druhý hráč má slušnou naději na vítězství.

V našich piškvorkách vyhraje ten hráč, který na libovolném místě hracího plánu vytvoří ze svých symbolů jeden z následujících vzorů.

::fig[Piškvorky]{src=assets/piskvorky.svg size=80}

**Reprezentace hracího plánu**

Než vůbec začneme programovat, je třeba si rozmyslet, jak budeme reprezentovat hrací plán. Inspirováni myšlenkou popsanou v této lekci bychom mohli plán reprezentovat jako pole polí například takto.

```js
const gamePlan = [
  [' ', ' ', ' ', ' '],
  ['o', 'x', 'x', 'x'],
  [' ', ' ', 'o', ' '],
  [' ', 'o', ' ', ' '],
];
```

Když však začneme aplikaci skutečně psát, po čase zjistíme, že se nám mnohem více hodí reprezentace, která nepoužívá pole polí, nýbrž pouze jedno dlouhé pole čísel. Křížek pak reprezentujeme jako 1, prázdné políčko jako 0 a kolečko jako -1. Hrací plán uvedený výše pak bude vypadat takto.

<!-- prettier-ignore -->
```js
const gamePlan = [0, 0, 0, 0, -1, 1, 1, 1, 0, 0, -1, 0, 0, -1, 0, 0];
```

Pozor na to, že bílé znaky jako mezery a nové řádky jsme sem vložili pouze pro lepší čitelnost kódu. Z hlediska JavaScriptu náš hrací plán vypadá takto.

```js
const gamePlan = [0, 0, 0, 0, -1, 1, 1, 1, 0, 0, -1, 0, 0, -1, 0, 0];
```

Nyní už jsme připravení začít psát naši aplikaci.

**Aplikace piškvorky**

Stáhněte si [základ webové aplikace](assets/piskvorky-zadani.zip) pro naše piškvorky a postupujte dle následujících kroků.

1. Vytvořte funkci `squareClick`, která bude reagovat na kliknutí na čtverec na hracím plánu. Uvnitř této funkce získejte odkaz na element, na který bylo kliknuto, a vypište do konzole hodnotu atributu `data-index`.
1. Vyberte z dokumentu všechny elementy s třídou `square` a na každý z nich pověste funkci `squareClick` jako reakci na kliknutí. Po spuštení aplikace pozorujte, zda se v konzoli po kliknutí na jeden čtverec zobrazí jeho správný index.
1. Zařiďte, aby funkce `squareClick` kromě zobrazení indexu přidala na element čtverce CSS třídu `square--cross`. Po kliknutí na čtverec byste měli uvidět křížek.
1. Vytvořte globální proměnnou `onTurn`, která obsahuje číslo 1 nebo -1 podle toho, zda je zrovna na tahu křížek nebo kolečku. Při kliknutí na čtverec zobrazte symbol, který je zrovna na tahu a nastavte proměnnou `onTurn` na opačný symbol. CSS Třída pro kolečko se jmenuje `square--circle`.
1. Všimněte si, že nyní je možné táhnout na poličko, na které už bylo před tím taženo. Abyste tomu zabránili, vytvořte globální proměnnou `gamePlan` obsahující hrací plán nastavený na samé nuly. Pokaždé, když uživatel klikne na políčko, nastavte příslušnou hodnotu v hracím plánu na správný symbol. Dovolte táhnout pouze na ta políčka, pro které je v hracím plánu uložena nula.

Nyní už si piškvorky můžete zahrát. Hurá!! Chybí nám však možnost, aby program sám poznal, kdo vyhrál. Zkuste se zamyslet nad tím, jak byste podle toho, co je zrovna uloženo v proměnné `gamePlan` rozhodli, kdo vyhrál.

Vymyslet program tak, aby korektně rozpoznal všechny možné výherní kombinace, a zároveň neobsahoval obrovské nepřehledné množství podmínek, není jednoduchý úkol. S trochou vedení lze však vyřešt poměrně elegantně. Tuto číst si však necháme do nepovinné sekce, abychom netrápili ty, komu po tomto úkolu již piškvorky lezou i ušima.
