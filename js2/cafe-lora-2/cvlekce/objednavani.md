---
title: Objednání nápoje
demand: 3
---

Zprovozníme tlačítko pro objednávání nápoje.

1. Nejdříve si všimněte, že data pro jeden nápoj obsahují vlastnost `ordered`, která udává, zda je nápoj zrovna objednaný či nikoliv. Toto je zároveň _prop_ v komponentě `Drink`. Upravte tuto komponentu tak, aby v závislosti na hodnotě této _prop_ zobrazila na tlačíku text _Objednat_ nebo _Zrušit_.
1. Na objednávací tlačítko také přidejte třídu `.order-btn--ordered` v případě, že nápoj je objednaný.
1. V [dokumentaci k API](https://cafelora.kodim.app/apidoc/) si nastudujte, jak se dělá pomocí HTTP metody PATCH objednání nebo zrušení objednávky nápoje.
1. V komponentě `Drink` pověste na tlačítko `.order-btn` posluchač události, který pošle na server příslušný požadavek. API endpoint vrací vždy aktualizavaná data pro daný nápoj. Jakmile dorazí data ze serveru, stačí komponentu `Drink` aktualizovat s novými daty pomocí `replaceWith`.
1. Vyzkoušejte si na stránce, že objednávání nápojů funguje.
1. Commitněte váš kód se zodpovědně napsanou commit zprávou a pushněte do vzdáleného repozitáře.
