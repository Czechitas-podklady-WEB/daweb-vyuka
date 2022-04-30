---
title: Ingredience jako komponenty
demand: 3
---

Každý nápoj bude obsahovat seznam ingrediencí (jendotlivých vrstev v šálku). Na stránce vidíme příklad pro cappuccino. Budeme přepisovat kód tak, aby ingredience (vrstva) byla komponenta.

1. V hlavním souboru `index.js` vytvořte komponentu `Layer`, která očekává `props` v následujícím tvaru.
   ```js
   {
     color: '#feeeca',
     label: 'mléčná pěna',
   }
   ```
   Podívejte se do `index.html` na strukturu jednotlivých vrstev. Komponenta nechť vrací řetězec obsahující výsledné HTML pro jednu vrstvu. V `index.html` si jednotlivé ingredience pro capuccino (divy `.layer`) zakomentujte nebo smažte.
1. Použijte vaši komponentu a pomocí vlastnosti `innerHTML` zapojte do stránky tři dané ingredience pro cappuccino. Stránka by měla pro uživatele vypadat stejně jako na začátku.
1. Skvělá práce! Teď si komponentu `Layer` přesuneme do samostatné složky. Ve vašem projektu vytvořte pro komponentu separátní složku s názvem `Layer`. V této složce bude `index.js` a `style.css` V souboru `index.js` bude JavaScriptový kód vaší komponenty. Kompnentu správně exportujte a správně ji importujte v hlavním `index.js` celého projektu. Vyzkoušejte, že váš projekt funguje.
1. Z hlavního souboru `style.css` přesuňte do CSS styly, které se týkají komponenty `Layer` do nového `style.css` ve složce Layer. Nezapomeňte CSS soubor správně importovat do `index.js`, aby jej Webpack zahrnul do výsledného sestavení.
1. Jakmile váš projekt funguje, commitněte kód s výborně napsanou commit zprávou a pushněte do vzdáleného repozitáře.
