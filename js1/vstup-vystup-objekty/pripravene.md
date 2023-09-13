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

1. Jakou má uživatel šířku a výšku okna prohlížeče:
   ```js
   const width = window.innerWidth;
   const height = window.innerHeight;
   ```
2. Jaký má aktuálně nastavený jazyk:
   ```js
    const language = window.navigator.language;
   ```
3. Název prohlížeče:
   ```js
   const browser = window.navigator.userAgent;
   ```

