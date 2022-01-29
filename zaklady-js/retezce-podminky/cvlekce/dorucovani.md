---
title: Doručování
demand: 2
---

Vytvořte webovou stránku, kde uživatel zadá svoji adresu například pro účely doručení objednaného zboží. Požaduje ulici, číslo domu, město a PSČ. 

1. Uložte všechny údaje do vhodně pojmenovaných proměnných.
1. Ze zadanách údajů sestavte pomocí interpolace řetězec obsahující HTML ve formátu jako níže
   ```html
   <div class="address">
     <p>Pod Stájemi 67<p>
     <p>12754 Klysnov</p>
   </div>
   ```
1. Pomocí `document.body.innerHTML` vložte sestavené HTML do stránky. 

