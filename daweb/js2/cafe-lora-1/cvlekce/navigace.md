---
title: Zprovoznění navigace
lead: Rozchoďte navigaci, aby fungovala i na úzkých displejích.
demand: 3
---

Jako další úkol rozchodíme zatím nefunkční navigaci a zařídíme, aby se na úzkých displejích navigace zobrazovala po kliknutí na hamburger ikonku.

1. Nejdříve do příslušných komponent přidejte attributy `id` tak, aby odkazy v navigaci po kliknutí přesunuly uživatele na správnou část stránky.
1. Zobrazování a skrývání navigačního menu uděláme tak, že budeme prvku `.rollout-nav` přidávat nebo odebírat třídu `nav-closed`. V hlavním `index.jsx` vyberte ikonku `.nav-btn` a připojte k ní posluchač události `click`. Tento posluchač bude přepínat třídu `nav-closed` na prvku `.rollout-nav`. Klikáním na ikonku tak můžeme zobrazovat nebo skrývat navigaci.
1. Navigaci budeme chtít schovat i po kliknutí na odkaz na nějakou sekci. Připojte tedy další posluchač události přímo na prvek `.rollout-nav`. V posluchači události zařiďte, aby se navigace při kliknutí na libovolnou její položku schovala (tj. prvku `.rollout-nav` přidáte třídu `nav-closed`, obdobně, jako v předchozím kroku při přepínání).
1. Jakmile je váš kód funkční, proveďte commit se zodpovědně napsanou zprávou a pushněte do vzdáleného repozitáře.
