---
title: Zkracovací jednohubky
demand: 1
---

Následující funkce přepište do zkráceného zápisu. Vlastními slovy popište, k čemu asi funkce slouží.

1.  ```js
    const isEmail = (str) => {
      return str.includes('@');
    };
    ```
1.  ```js
    const roll = () => {
      return Math.floor(Math.random(6)) + 1;
    };
    ```
1.  ```js
    const getNumber = (id) => {
      return Number(document.querySelector(`#${id}`).value);
    };
    ```
1.  ```js
    const Searchbox = (props) => {
      return (
        <div className="searchbox">
          <label>
            {props.label}
            <input type="text" />
          </label>
        </div>
      );
    };
    ```
1.  ```js
    const isSafe = (password) => {
      if (password.length > 8) {
        return true;
      }

      return false;
    };
    ```

    **Nápověda:** Použijte ternární operátor.
