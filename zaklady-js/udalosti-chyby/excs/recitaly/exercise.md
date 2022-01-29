---
title: Recitály
demand: 2
---

U všech následujících úryvků kódů vytvořte technický popis jejich fungování a zároveň zkuste odhadnout záměr daného kódu. Obě dvě části si skutenčně napište například do textového souboru.

1.  ```js
    const average = (a, b) => {
      return (a + b) / 2;
    };
    ```
1.  ```js
    const titleElm = document.querySelector('.title');
    titleElm.textContent = 'Nadpis';
    ```
1.  ```js
    let time = 0;
    setTimeout(() => {
      time += 1;
      console.log('time', time);
    }, 1000);
    ```
1.  ```js
    btnOk.addEventListener('click', () => {
      document.body.innerHTML = '<p>Everything ok</p>');
    });
    ```
1.  ```js
    document.addEventListener('keyup', (e) => {
      if (e.code === 'KeyP') {
        console.log('paused');
      }
    });
    ```
