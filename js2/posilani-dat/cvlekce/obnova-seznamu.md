---
title: Obnova seznamu
demand: 3
---

Naše aplikace _Nákupy_ ještě neumí mazat položky seznamu. Když nám nákupní seznam příliš naroste, zatím to vyřešíme tak, že umožníme seznam vrátit do původní podoby tak, jak vypadal při prním přihlášení. Do komponenty `ShopList` přidáme tlačítko, které odešle požadavek na obnovu seznamu na server pomocí POST a překreslí komponentu.

1. Vyjděte z kódu aplikace vytvořené na lekci. Použijte repozitář [projekt-nakupy-post](https://github.com/Czechitas-podklady-WEB/projekt-nakupy-post) jako šablonu pro vytvoření vlastního repozitáře, který si naklonujte.
1. Do hlavičky v komponentě `ShopList` přidejte HTML pro panel s tlačítkem _obnovit_. Hlavička komponenty pak bude vypadat takto:
   ```html
   <div class="shoplist__head">
     <h2 class="shoplist__day">${dayName}</h2>
     <div class="shoplist__toolbar">
       <button class="reset-btn">obnovit</button>
     </div>
   </div>
   ```
1. Vytořte posluchač události `handleReset` a připojte jej na tlačítko. Je to velmi podobné tomu, jak je vytvořen posluchač `handleSubmit`. Do vašeho posluchače zatím dejte například `console.log`, a vyzkoušejte, že funguje.
1. Nyní je potřeba odeslat požadavek na server. Zkontrolujte si, že máte v local storage uložený správný token. Zavolejte funkci `fetch`, která na adresu
   ```
   https://nakupy.kodim.app/api/me/week/:day/actions
   ```
   odešle JSON ve tvaru
   ```json
   {
     "type": "reset"
   }
   ```
   Tento API endpoint vrátí obnovený obsah celého seznamu. Je tedy potřeba celou komponentu `ShopList` překreslit, podobně jako to děláme při přdávání nového prvku.
1. Vyzkoušejte, že vaše aplikace funguje a že je možné pomocí tlačítka _obnovit_ vrátit seznamy do půvdní podoby.
