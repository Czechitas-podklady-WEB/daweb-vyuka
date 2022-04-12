---
title: Generátor hesel
demand: 3
---

Vyrobíme stránku, která pomůže uživateli vygenerovat upravdu silné a neprůstřelné heslo. Použijeme k tomu [tréningové API](https://apps.kodim.cz/daweb/trening-api/docs/heslo) na generování hesel. 

1. Prohlédněte si dokumentaci API pro generování hesla a vyzkoušejte si jej "na sucho" v prohlížeči. Zkuste vygenerovat hesla různých délek a prohlédněte si, jak vypadá struktura dat, která API vraci. 
1. Vytvořte stránku s jedním tlačítkem. Když na něj uživatel klikne, zobrazí se mu vygenerované heslo délky 16.
1. Bonus: Přepracujte stránku tak, aby obsahovala formulář s textovým políček, do kterého uživatel může zadat délku hesla. Po odeslání formuláře se mu zobrazí heslo zadané délky.

---solution

1. ```js
    const buttonElm = document.querySelector('#password-generator');
    buttonElm.addEventListener('click', () => {
      fetch('https://apps.kodim.cz/daweb/trening-api/apis/passwords?length=16')
        .then(response => response.json())
        .then(json => {
          document.querySelector('.show-password').textContent = json.password;
        })
    });
   ```
1. ```js
    //BONUS
    const formElm = document.querySelector('#password-form');
    formElm.addEventListener('submit', (e) => {
      e.preventDefault();
      const inputElm = document.querySelector('#password-length');
      fetch(`https://apps.kodim.cz/daweb/trening-api/apis/passwords?length=${inputElm.value}`)
        .then((response) => response.json())
        .then((json) => {
          document.querySelector('.show-password').textContent = json.password;
        });
    });
   ```

