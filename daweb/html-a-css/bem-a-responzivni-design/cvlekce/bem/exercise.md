---
title: Zájezdy
demand: 1
context: cvlekce
solutionAccess: protected
---

Použijte šablonu [cviceni-BEM](https://github.com/Czechitas-podklady-WEB/cviceni-BEM).
Naklonujte si repozitář a spusťte si `npx serve`.

Na stránce je připravený obsah stránky se zájezdy. Prohlédněte si strukturu HTML souboru a také soubor `style.css`.
Všechny styly už jsou připravené, jen je potřeba přiřadit v HTML správným prvkům správné CSS třídy. Zájezd má třídu `holiday` a následně elementy uvnitř mají odpovídající třídy jako `holiday__title` a další.

Podívejte se na výsledek:
::fig[výsledek]{src=assets/BEM_cviceni_result.png}

Pokud nevíte, odkud začít, ve složce se zadáním je soubor `BEM_cviceni_hint`, kde je nápověda, jak třídy přiřadit.

Pokud vám zbyde čas, můžete si odkomentovat obsah a nastylovat i další kartičky se zájezdy.

::fig[výsledek]{src=assets/BEM_cviceni_result.gif}

:::solution

V souboru `style.css` se nic neupravuje. Upravuje se poize souboru `index.html`, ve kterém se přidávají třídy (atribut `class`) elementu `article` a vnořeným elementům.

```html
<article class="holiday">
  <img
    src="img/norway.jpg"
    alt="norway polar lights"
    class="holiday__picture"
  />
  <div class="holiday__offer">
    <div>
      <h2 class="holiday__title">Norway</h2>
      <span class="holiday__stay"> 8 days (7 nights) </span>
      <p class="holiday__description">
        Skasgaden is perhaps best known for the intricate patterns in the sand
        where a small stream flows into the ocean. One could spend hours walking
        and seeing new patterns/angles the entire time. The rest of the beach is
        a beautiful golden-sand beach that makes for a nice walk.
      </p>
    </div>
    <div class="holiday__footer">
      <span class="holiday__price holiday__price--promo"> $ 1.499 </span>
      <button class="holiday__book-btn">Book now</button>
    </div>
  </div>
</article>
```

:::
