---
title: DOM elementy a forEach
demand: 1
---

Založte JavaScriptový program se stránkou a pěti odstavci `<p>`. Pomocí `document.querySelectorAll` vyberte všechny odstavce na stránce a pomocí cyklu `forEach` obarvěte text všech odstavců na červenou barvu.

---solution

1. ```js
   const paragraphs = document.querySelectorAll('p');

   paragraphs.forEach((paragraph) => {
     paragraph.style.color = 'red';
   });
   ```
