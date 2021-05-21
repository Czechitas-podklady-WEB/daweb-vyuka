---
title: Hlavní stránka
demand: 2
---

1. Prohlédněte si připravený [design webu](https://czechitas-podklady-web.github.io/leviexpress-zadani/). Jde o statické stránky, které nemají žádnou funkčnost. Obsahují pouze HTML a CSS. Zdrojové kódy nejdete v tomto [repozitáři](https://github.com/Czechitas-podklady-WEB/leviexpress-zadani/settings/pages). Odsud můžete vzít všechny potřebné styly a HTML pro váš projekt.
1. Do hlavního `style.css` vašeho projektu zkopírujte styly, které se týkají celé stránky. Jsou to všechny styly až po stylování hlavičky. Pro tu už budeme mít separátní komponentu. 
1. Jako první ve vašem webu vytvořte komponenty `Header` a `Footer`. Jako vždy pro každou z ních udělejte samostatnou složku a vytvořte pro ně samostatný styl. Komponenty jsou jednoduché, neobsahují žádné props, pouze přímo vracejí JSX.
1. Pozor na obrázek `banner.png`. Ten je potřeba vložit do složky `img` v komponentě `Header`. 
1. Komponenty `Header` a `Footer` udělejte jako děti komponenty `App`. Vyzkoušejte, že vaše stránka správně zobrazuje hlavičku i patičku a commitněte změny.