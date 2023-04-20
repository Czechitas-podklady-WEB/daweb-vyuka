---
title: Zprovoznění navigace
demand: 3
---

Jako další úkol rozchodíme zatím nefunkční navigaci a zařídíme, aby se na úzkých displejích navigace zobrazovala po kliknutí na hamburger ikonku.

1. Nejdříve do příslušných komponent přidejte attributy `id` tak, aby odkazy v navigaci po kliknutí přesunuly uživatele na správnou část stránky.
1. V komponentě `Header` vyberte ikonku `.nav-btn` a připojte k ní posluchač události `click`. Tento posluchač prvku `.rollout-nav` odebere nebo přidá třídu `nav-closed`. Klikáním na ikonku tak můžeme zobrazovat nebo skrývat navigaci.
1. Navigaci budeme chtít schovat i po kliknutí na odkaz na nějakou sekci. Připojte tedy posluchač události na prvek `.rollout-nav` a zařiďte, aby se navigace při kliknutí na libovolnou její položku schovala (prvku `nav` přidáte třídu `nav-closed`).
1. Jakmile je váš kód funkční, proveďte commit se zodpovědně napsanou zprávou a pushněte do vzdáleného repozitáře.
