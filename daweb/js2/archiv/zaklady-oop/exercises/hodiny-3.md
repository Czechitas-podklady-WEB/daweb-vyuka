---
title: Hodiny 3
demand: 3
---

1. Přidejte do prototypu hodin metodu `render`, která vytvoří a vrátí DOM element hodin podle následujícího vzoru.
   ```html
   <div class="clock">
     <span class="clock__hours">12</span>
     :
     <span class="clock__minutes">24</span>
   </div>
   ```
1. Přidejte do prototypu metodu `mount` se vstupem `parent`, což bude nějaký DOM element. Pomocí metody `render` vytvořte v metodě `mount` DOM element hodin a pomocí `appendChild` jej zapojte na konec elementu `parent`.
1. V koznoli vytvořte nějaké digitální hodiny a pomocí metody `mount` je zapojte do stránky. Zkuste do stránky zpojit více různých hodin za sebou.
