---
title: Rozbalení položky
demand: 3
---

Ještě než se pustíme do dotazů typu PATCH, procvičíme si samotné překreslování komponenty `ListItem`. Budeme chtít přídat možnost položku seznamu rozbalit a zobrazit další ovládací prvky. Se serverem v tomto cvičení zatím komunikovat nebudeme.

1. Založte si vlastní repozitář, který vyrobte ze šablony [projekt-nakupy-patch](https://github.com/Czechitas-podklady-WEB/projekt-nakupy-patch), tedy z aktuální verze naší aplikace _Nákupy_.
1. Upravte vytváření hlavního DOM elementu v komponentě `ListItem` tak, že přidáme tlačítko pro rozbalení položky, tlačítka panelu nástrojů a panel pro zobrazení detailu.
   ```
   const element = document.createElement('div');
     element.classList.add('list-item');
     element.classList.add('list-item--expanded');
     element.innerHTML = `
       <div class="list-item__toolbar">
         Tlačítka
       </div>
       <button class="icon-btn btn-tick${tickClass}"></button>
       <div class="list-item__body">
         <div class="list-item__product">${product}</div>
         <div class="list-item__amount">${amount} ${unit}</div>
       </div>
       <div class="list-item__panel">
         Panel položky
       </div>
       <div class="list-item__menu">
         <button class="icon-btn btn-menu"></button>
       </div>
     `;
   ```
   Takto vytvoříme položku, která je rovnou rozbalená. Všechny položky ve všech seznamech budou nyní rozbalené.

   ::fig[Rozbalené položky]{src=assets/rozbaleno.png}
1. Do komponenty `ListItem` přidejte _prop_ `expanded`, pomocí které budeme chtít ovládat rozbalení položky. Když bude tato _prop_ mít hodnotu `true`, vytvořte hlavní element se třídou `.list-item--expanded`. V případě hodnoty `false` tuto třídu nepřidávejte. 
1. Nyní stačí vytvořit posluchač události pro tlačítko `.btn-menu`, který překreslí celou komponentu pomocí funkce `replaceWith` s opačnou hodnotou _prop_ `expanded`.
1. Nyní by mělo být možné každou položku individuálně rozbalit nebo sbalit. Obsah panelu nástrojů a panel s detaily naplníme později.
