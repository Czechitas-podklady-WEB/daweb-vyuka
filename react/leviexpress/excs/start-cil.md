---
title: Výběr startu a cíle
demand: 2
---

V tomto cvičení vytvoříme hlavní komponentu pro výběr startu a cíle. 

1. Ve svém projektu vyvořte komponentu s názvem `JourneyPicker`. Ta bude součástí naší komponenty `Home`. Zatím v ní vracejte pouze statické JSX. To si můžete zkopírovat z dodaného designu. Vytvořte také soubor `style.css` a do něj vložte styly týkající se pouze této komponenty.
1. Obrázek `map.svg` si vložte do složky `img` v komponentě `JourneyPicker.` Nejlepší způsob jak jej na stránce zobrazit je provést import
   ```js
   import mapImage from './img/map.svg';
   ```

   a vložit jej jako atribut obrázku

   ```html
   <img src={mapImage} />
   ```
1. Zkontrolujte, že komponenta vypadá stejně jako v dodaném designu a proveďte commit.