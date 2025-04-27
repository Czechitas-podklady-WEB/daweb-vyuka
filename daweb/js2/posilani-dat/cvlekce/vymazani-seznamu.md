---
title: Vymazání položky ze seznamu
demand: 3
context: lekce
lead: Přidejte do aplikace Nákupy možnost smazání položky ze seznamu.
solutionAccess: protected
---

Naše aplikace _Nákupy_ ještě neumí mazat položky seznamu. Do aplikace přidáme tlačítko, které odešle požadavek na smazání položky na server pomocí DELETE a překreslí komponentu.

1. Vyjděte z kódu aplikace vytvořené na lekci. Použijte repozitář [cviceni-nakupy-post](https://github.com/Czechitas-podklady-WEB/cviceni-nakupy-post) jako šablonu pro vytvoření vlastního repozitáře, který si naklonujte.
1. Nainstalujte závislosti příkazem `npm install` a pak spusťte vývojový server příkazem `npm run dev`.
1. V komponentě `ShopItem` je tlačítko, které bude sloužit ke smazání položky seznamu.
1. V hlavní stránce vytvořte posluchač události `handleDelete` a připojte jej na všechna tlačítka s třídou `btn-delete` (použijte `querySelectorAll` a `forEach`). Je to velmi podobné tomu, jak je vytvořen posluchač `handleSubmit`. Do vašeho posluchače zatím dejte například `console.log`, a vyzkoušejte, že funguje.
1. Udělejte posluchač rovnou `async`, ať jej máme připravený na volání `fetch`.
1. V posluchači si načtěte id položky nákupního seznamu uložené v atributu `data-id`. Získáte ho z property `dataset` na elementu tlačítka:
   ```javascript
   const id = event.target.dataset.id
   ```
1. Nyní je potřeba odeslat požadavek na server. Zavolejte funkci `fetch`, která pošle požadavek metodou `DELETE` na adresu:
   ```
   https://nakupy.czechitas.dev/api/:day/:id
   ```
   Tělo požadavku (`body`) bude prázdné, vůbec jej neuvádějte. Nezapomeňte použít při autentizace své jméno. Po odeslání požadavku zavolejte funkci `window.location.reload()`, pro obnovení stránky.
1. Vyzkoušejte, že vaše aplikace funguje a že je možné pomocí tlačítka _Smazat_ smazat některou položku seznamu.

:::solution
Kompletní řešení naleznete v branchi [reseni](https://github.com/Czechitas-podklady-WEB/ukazka-nakupy-fetch/tree/reseni).
:::