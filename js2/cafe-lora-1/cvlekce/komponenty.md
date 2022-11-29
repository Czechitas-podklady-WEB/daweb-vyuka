---
title: Komponenty
demand: 3
---

Jako první budeme chtít rozsekat hlavní stránku na následující komponenty:

- `Header` - hlavička stránky,
- `Banner` - uvítací obrázek,
- `Menu` - meníčko s nápoji,
- `Gallery` - obrázek kavárny a texty,
- `Contact` - kontakt a otvírací hodiny,
- `Footer` - patička.

1. Upravte `body` uvnitř `index.html` tak, aby osahoval pouze jeden `div` s id `app`. Celá DOM struktura naše aplikace se bude vytvářet v JavaScriptu pomocí komponent.
1. Ve složce `src` vytvořte složku `components` a v ní postupně vytvořte všechny výše zmíněné komponenty pro hlavní stránku. Rozsekejte HTML i CSS tak, aby každá komponenta měla vlastní styly i obrázky. Globální styly pro celou aplikaci, hlavičko a patičku najdete v souboru `style.css`. Styly ostatní komponenty hlavní stránky najdete v souboru `index.css`. Soubor `index.css` je strukturovaný tak, aby styly pro jednotlivé komponenty byly seskupené u sebe, nemusíte tak zoufale lovit styly po celém projektu. 
   
   Chceme dosáhnout toho, aby hlavní kód v `index.js` vaší aplikace vypadal takto:
   ```js
   const pageElement = document.createElement('div');
   pageElement.classList.add('page');
 
   const main = document.createElement('main');
   main.append(
     Banner(),
     Menu(),
     Gallery(),
     Contact(),
   );
 
   pageElement.append(
     Header(),
     main,
     Footer(),
   );
 
   document.querySelector('#app').append(pageElement);
   ```
1. Vyzkoušejte, že máte hotovou stránku, která vypadá stejně jako stránka ze zadání s funkční navigací. Proveďte commmit s hezky popisnou zprávou a pushněte do vzdáleného repozitáře.
