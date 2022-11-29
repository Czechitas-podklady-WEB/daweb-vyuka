---
title: Zprovoznění navigace
demand: 3
---

Chceme zařídit, aby se na úzkých displejích po kliknutí na hamburger ikonku zobrazovala navigace – zatím se to neděje.

1. V komponentě `Header` vyberte ze ikonku `.nav-btn`. Připojte k ní posluchač události `click`. Tento posluchač prvku `.rollout-nav` odebere nebo přidá třídu `nav-closed`. Klikáním na ikonku tak můžeme zobrazovat nebo skrývat navigaci.
1. Navigaci budeme chtít schovat i po kliknutí na odkaz na nějakou sekci. Připojte tedy posluchač události na prvek `.rollout-nav` a zařiďte, aby se navigace při kliknutí na libovolnou její položku schovala (prvku `nav` přidáte třídu `nav-closed`).
1. Jakmile je váš kód funkční, proveďte commmit se zodpovědně napsanou zprávou a pushněte do vzdáleného repozitáře.
