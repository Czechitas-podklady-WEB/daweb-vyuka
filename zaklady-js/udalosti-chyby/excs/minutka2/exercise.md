---
title: Minutka 2
demand: 3
---

Stáhněte si [základ aplikace](assets/minutka2-zadani.zip) pro vylepšenou kuchyňskou minutku.

Umožněte uživateli zadat počet vteřin skrze připravené textové poličko. K získání hodnoty z políčka použijte vlastnost `value`. Nezapomeňte obsah políčka zkonvertovat na číslo. Minutku spusťte tlačítkem :i[Start].

Zařiďte, aby minutka správně odpočítávala vteřiny a začala zvonit ve chvíli, kdy dosáhne nuly. Pokud si věříte, zkuste celý program napsat rovnou bez nápovědy. Pokud malinko ztrácíte půdu pod nohama, následujte tyto kroky.

1. Vytvořte si proměnou `time`, do které uložíte počáteční počet vteřin zadaný uživatelem.
1. Při kliknutí na :i[Start] nastavte časovač pomocí `setInterval`. Ten se bude opakovat každou vteřinu a pokaždé sníží hodnotu v proměnné `time` o jedna.
1. Jakmile proměnná `time` dosáhne nuly, zapněte zvonění a zrušte časovač aby nezačal počítat do mínusu.
