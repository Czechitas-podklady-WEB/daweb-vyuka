---
title: Zprovoznění navigace
demand: 3
---

Chceme zařídit, aby se na úzkých displejích po kliknutí na hamburger ikonku zobrazovala navigace – zatím se to neděje. Nyní přichází ke slovu JavaScript.

1. V JavaScriptu vyberte ze stránky ikonku `#nav-btn`. Připojte k ní posluchač události `click`. Tento posluchač prvku `nav` odebere nebo přidá třídu `nav-closed`. Klikáním na ikonku tak můžeme zobrazovat nebo skrývat navigaci.
1. Navigaci budeme chtít schovat i po kliknutí na odkaz na nějakou sekci. Připojte tedy posluchač události také na všechny položky navigace (elementy `a`). Zařiďte, aby se navigace při kliknutí na libovolnou její položku schovala. Zde se vám jistě bude hodit metoda `querySelectorAll`.
1. Jakmile je váš kód funkční, proveďte commmit s hezky popisnou zprávou a pushněte do vzdáleného repozitáře.
