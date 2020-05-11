---
title: Lepší chat
demand: 3
---

1. Vycházejte z předchozí [úlohy](#cvi-chat).
1. Vymažte políčko na zadávání textu zprávy po jeho odeslání.
1. Zabraňte dvojímu odeslání formuláře, pokud uživatel omylem dvakrát za sebou rychle klikne na `Odeslat`.
1. Přidejte do stránky CSS, které problikne žlutě všemi zprávami při každém renderu. Vyžaduje úpravu `index.html`.
   ```css
   <style>
       @keyframes new-message {
           0% {
               background-color: #ffffd3;
           }
       }
       .card {
           animation: new-message 1s;
       }
   </style>
   ```
1. Při přijímání zpráv sledujte hodnotu `lastUpdate`, kterou posílá server společně s `messages`. Volejte `renderMessages` jen při změně `lastUpdate`. Server mění tuto hodnotu pouze při přijetí nové zprávy.
