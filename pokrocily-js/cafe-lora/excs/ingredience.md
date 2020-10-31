---
title: Ingredience jako komponenty
demand: 2
---

Každý nápoj bude obsahovat seznam ingrediencí. Na stránce vidíme příklad pro cappuccino. Budeme chtít, aby ingredience byla komponenta.

1. Vytvořte komponentu `Layer`, která očekává `props` v následujícím tvaru.
   ```js
   {
     color: '#feeeca',
     label: 'mléčná pěna',
   }
   ```
   Komponenta nechť vrací řetězec obsahující výsledné HTML.
1. Použijte vaši komponentu a pomocí vlastnosti `innerHTML` zapojte do stránky tři ingredience pro cappuccino. Stránka by měla pro uživatele vypadat stejně jako na začátku.
1. Ve vašem projektu vytvořte pro vaši komponentu separátní složku s názvem `Layer`. Tato složka bude v soboru `index.js` obsahovat JavaScript kód vaší komponenty. Kompnentu správně exportujte a správně ji importujte v hlavním `index.js` celého projektu. Vyzkoušejte, že váš projekt funguje.
1. Do složky `Layer` vložte také soubor `style.css` a přesuňte do něj CSS styly, které se přímo týkají této komponenty. Nezapomeňte váš CSS soubor správně importovat aby jej Webpack zahrnul do výsledného sestavení.
1. Jakmile váš projekt funguje, commitněte váš kód s výborně napsanou commit zprávou a pushněte do vzdáleného repozitáře.
