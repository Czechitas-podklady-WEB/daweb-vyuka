---
title: Úprava položky
demand: 3
context: lekce
---

Navážeme na předchozí cvičení a umožníme u každé položky upravit název, množství nebo jednotku. K tomu bude potřeba do detailu položky přidat formálář a odeslat data z něj na server pomocí dotazu PATCH.

1. Pokračujte v projektu z předchozího cvičení. Upravíme DOM element komponenty `ListItem` tak, že do detailu položky přidáme formulář pro editaci názvvu, množství a jednotky. Jde o téměř stejný formulář jako jsme už vytvořili při přidání nové položky.
   ```html
   <div class="list-item__detail">
     <form>
       <div class="form-fields">
         <input class="field-input product-input" value="${product}" />
         <input class="field-input amount-input" value="${amount}" />
         <input class="field-input unit-input" value="${unit}" />
       </div>
       <div class="form-controls">
         <button class="btn-confirm">Potvrdit</button>
       </div>
     </form>
   </div>
   ```
1. Vytvořte posluchač události obsluhující odeslání formuláře. Nejdříve si jen do konzole vypište data sebraná z formuláře.
1. Do obsluhy události přidejte `fetch`, který pomocí metody PATCH odešle na server upravená data položky. Adresa položky je stejná jako při změně zaskřtnutí
   ```
   https://nakupy.kodim.app/api/me/week/:day/items/:id
   ```
   Budeme odesílat JSON _body_ ve stejném formátu, jako když jsme přidávali novou položku. Podívejte se do komponenty `ShopList` jaký tvar má mít _body_ a odešlete jej stejným způsobem. Při aktualizaci položky si dejte pozor, abyste jí poslali všechny _props_, které potřebuje.
1. Nyní byste měli být schopní měnit obsah položky pomocí vytovřeného formuláře.
