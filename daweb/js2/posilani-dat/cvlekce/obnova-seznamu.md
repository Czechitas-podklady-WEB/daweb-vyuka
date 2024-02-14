---
title: Obnova seznamu
demand: 3
lead: Přidejte do aplikace Nákupy možnost obnovy seznamu.
solutionAccess: protected
---

Naše aplikace _Nákupy_ ještě neumí mazat položky seznamu. Když nám nákupní seznam příliš naroste, zatím to vyřešíme tak, že umožníme seznam vrátit do původní podoby tak, jak vypadal při prním přihlášení. Do aplikace přidáme tlačítko, které odešle požadavek na obnovu seznamu na server pomocí POST a překreslí komponentu.

1. Vyjděte z kódu aplikace vytvořené na lekci. Použijte repozitář [ukazka-nakupy-post](https://github.com/Czechitas-podklady-WEB/ukazka-nakupy-post) jako šablonu pro vytvoření vlastního repozitáře, který si naklonujte.
1. Předejte do aplikace tlačítko, které bude sloužit k obnově seznamu. Tlačítko může mít například název _Obnovit_. Vložte ho mezi formulář a seznam položek.
1. Vytořte posluchač události `handleReset` a připojte jej na tlačítko. Je to velmi podobné tomu, jak je vytvořen posluchač `handleSubmit`. Do vašeho posluchače zatím dejte například `console.log`, a vyzkoušejte, že funguje.
1. Udělejte posluchač rovnou `async`, ať jej máme připravený na volání `fetch`.
1. Nyní je potřeba odeslat požadavek na server. Zavolejte funkci `fetch`, která na adresu
   ```
   https://nakupy.kodim.app/api/me/week/:day/actions
   ```
   odešle JSON ve tvaru
   ```json
   {
     "type": "reset"
   }
   ```
   Nezapomeňte použít pri autentizace své jméno. Po odeslání požadavku zavolejte funkci `window.location.reload()`, pro obnovení stránky.
1. Vyzkoušejte, že vaše aplikace funguje a že je možné pomocí tlačítka _obnovit_ vrátit seznamy do půvdní podoby.
