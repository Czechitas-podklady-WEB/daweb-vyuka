---
title: Zprovoznění navigace
demand: 2
---

Chceme zařídit, aby se na úzkých displejích po kliknutí na ikonku zobrazovala navigace. Zatím se to neděje a tím přichází ke slovu JavaScript.

1. V JavaScriptu vyberte ze stránky ikonku `#nav-btn`. Připojte k ní posluchač události `click`. Tento posluchač odebere nebo přidá třídu `nav-closed` na prvku `nav`. Klikáním na ikonku tak můžeme zobrazovat nebo skrývat navigaci.
1. Připojte posluchač události také na všechny položky navigace. Zařiďte, aby se navigace při kliknutí na libovolnou její položku schovala. Zde se vám jistě bude hodit metoda `querySelectorAll`.
1. Jakmile je váš kód funkční, proveďte commmit s hezky popisnou zprávou a pushněte do vzdáleného repozitáře.
