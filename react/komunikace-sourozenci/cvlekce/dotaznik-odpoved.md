---
title: Dotazník s odpovědí
demand: 3
---

Pokračujme v příkladu z předchozího cvičení. Nyní budeme chtít místo fajfky zobrazovat přímo uživatelem vybranou odpověd.

1. Stav `answered` uvnitř komponenty `Question` přejmenujte na `answer`. Nýní bude obsahovat řetězec s typem ikonky pro `QuestionBody`. Výchozí hodnota stavu bude `symbolQuestion`.
1. Zařiďte, aby komponenta QuestionBody zobrazovala místo `symbolQuestion` nebo `iconTick` ikonku odpovědi, na kterou uživatel kliknul.
1. Nyní budeme potřebovat, aby nám komponenta `Option` skrze callback předala typ ikonky, na kterou uživatel kliknul. Komponenta `Option` tedy musí callbacku `onSelected` předat typ ikony, kterou zobrazuje.
1. Funkce `handleSelect` v komponentě `Question` bude pak mít jeden parametr, který nazveme `iconType`. Jakmile se tato funkce zavolá, nastavíme náš stav `answer` na hodnotu získanou v tomto parametru.

Tímto jsem zařídili, že komponenta `Option` předá svému sourozenci `QuestionBody` informaci o tom, kterou ikonku uživatel vybral.
