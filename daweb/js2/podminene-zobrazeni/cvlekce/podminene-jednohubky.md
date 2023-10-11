---
title: Podmíněné jednohubky
demand: 2
lead: Přepište kódu aby používal operátor pro podmíněný výraz.
solutionAccess: lock
---

Přepište následující úryvky kódu tak, aby místo podmínek používaly operátor pro podmíněný výraz. Pracujeme v čistém JavaScriptu, není tedy potřeba zakládat ani React ani Webpack projekt.

1.  ```js
    const password = prompt('Zadejte heslo:');
    let valid = null;
    if (password.length > 8) {
      valid = 'Heslo je v pořádku';
    } else {
      valid = 'Heslo není bezpečné';
    }
    ```
1.  ```js
    const grade = prompt('Počet bodů z písemky:');
    let passed = null;
    if (grade >= 50) {
      passed = '<span>prošel</span>';
    } else {
      passed = '<span class="red">neprošel</span>';
    }
    ```
