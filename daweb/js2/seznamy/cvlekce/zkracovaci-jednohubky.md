---
title: Zkracovací jednohubky
demand: 1
context: lekce
lead: Zkracujte funkce a vysvětlete, k čemu slouží.
solutionAccess: protected
---

Založte si obyčejnou stránku s JavaScriptem, bez Vite i JSX. Následující funkce přepište do zkráceného zápisu. Vlastními slovy popište, k čemu nejspíše funkce slouží.

1.  ```js
    const isEmail = (str) => {
      return str.includes('@');
    };
    ```
1.  ```js
    const roll = () => {
      return Math.floor(Math.random() * 6) + 1;
    };
    ```
1.  ```js
    const getNumber = (id) => {
      return Number(document.querySelector(`#${id}`).value);
    };
    ```
1.  ```js
    const weather = (temperature) => {
      if (temperature > 16) {
        return 'teplo';
      }

      return 'zima';
    };
    ```

    **Nápověda:** Použijte ternární operátor.

:::solution

```js
const isEmail = (str) => str.includes('@');

const roll = () => Math.floor(Math.random() * 6) + 1;

const getNumber = (id) => Number(document.querySelector(`#${id}`).value);

const weather = (temperature) => (temperature > 16 ? 'teplo' : 'zima');
```

:::
