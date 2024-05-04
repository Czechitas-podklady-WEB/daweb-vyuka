---
title: Objednání nápoje
lead: Zprovozněte tlačítko pro objednávání nápoje.
demand: 3
context: lekce
---

1.  Nejdříve si všimněte, že data pro jeden nápoj obsahují vlastnost `ordered`, která udává, zda je nápoj zrovna objednaný či nikoliv. Toto je zároveň _prop_ v komponentě `Drink`. Upravte tuto komponentu tak, aby v závislosti na hodnotě této _prop_ zobrazila na tlačíku text _Objednat_ nebo _Zrušit_.
1.  Na objednávací tlačítko také přidejte třídu `.order-btn--ordered` v případě, že nápoj je objednaný.
1.  Prop `id` předejte atributu `data-id`, který vložte na `<form>`.
1.  V hlavním souboru `index.jsx` pověste pomocí `querySelectorAll` posluchač události na každý objednávací formulář v nápojích. Zatím při kliknutí na tlačítko vypište do konzole `id` nápoje, abyste si ověřili, že váš posluchač události pracuje se správným prvkem pole. K `id` se dostanete pomocí vlastnosti `dataset.id`.
1.  Samotné objednání nápoje provedete pomocí `PATCH` požadavku na API endpoint `/api/drinks/:id`. `:id` zde představuje dynamickou část URL, kam vložíte `id` formuláře. Požadavek bude mít v těle JSON pole s objektem, tělo požadavku tedy bude vypadat takto:

    ```js
    [{ op: 'replace', path: '/ordered', value: true }];
    ```

    Proveďte tento požadavek pomocí `fetch` a zkontrolujte, že se vám v konzoli vypíše odpověď od API. Jakmile je váš kód funkční, proveďte refresh stránky, aby se vám zobrazila aktuální data.

1.  Vyzkoušejte si na stránce, že objednávání nápojů funguje.
1.  **Bonus**: Pokud vám toto cvičení přišlo jako pohodička, zkuste si zprovoznit zrušení objednávky. Stačí upravit vlastnost `value` v body požadavku, aby místo `true` posílala opak předchozího stavu nápoje. Přístup k `ordered` stavu nápoje máte díky datům z předchozího GET requestu. Budete muset najít nápoj, který odpovídá `id` použitého formuláře.
1.  Commitněte váš kód se zodpovědně napsanou commit zprávou a pushněte do vzdáleného repozitáře.
