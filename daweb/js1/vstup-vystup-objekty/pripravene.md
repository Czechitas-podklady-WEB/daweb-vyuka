## Připravené objekty

Po zkušenosti s objekty jste jistě odhalili, že `document.body.innerHTML` není tak úplně název proměnné, jak jsme se vám snažili do této chvíle namluvit. Z tečkové notace je poznat, že máme co dočinění se zanořenými objekty.

V prohlížeči máme k dispozici celou řadu dopředu připravených objektů, které nám usnadňují práci se stránkou. Jeden takový je uložen v proměnné `document` a poskytuje různé informace o naší stránce.

Například vlastnost `document.title` obsahuje název naší stránky z tagu `<title>`. Snadno jej tak můžeme změnit.

```js
document.title = 'Objekty v JavaScriptu | Můj blogísek';
```

Jak už víme, vlastnost `document.body` obsahuje objekt reprezentující element `<body>`. A pomocí jeho vlastnosti `innerHTML` můžeme měnit obsah tohoto elementu.

### Objekt `window`

Další zajímavý objekt je uložen v proměnné `window`. Zde se dozvíme informace o okně prohlížeče, ve kterém stránku spouštíme.

Můžeme například zjistit:

1. Jakou má stránka v prohlížeči šířku a výšku:
   ```js
   const siteWidth = window.innerWidth;
   const siteHeight = window.innerHeight;
   ```
1. Jakou má výšku a šířku úplně celé okno prohlížeče.
   ```js
   const browserWidth = window.outerWidth;
   const browserHeight = window.outerHeight;
   ```
1. Jaký má uživatel aktuálně nastavený jazyk:
   ```js
   const language = window.navigator.language;
   ```
