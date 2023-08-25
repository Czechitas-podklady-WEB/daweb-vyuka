---
title: Registrace
demand: 3
---

::fig[ukázka řešení]{src=assets/ukazka-reseni.gif}

1. Založte si novou React aplikaci dle klasického postupu.
1. Vytvořte komponentu `App` s jednoduchým textovým políčkem dle následujícího vzoru.

   ```jsx
   const App = () => {
     const handleSubmit = (event) => {
       event.preventDefault();
     };

     return (
       <form onSubmit={handleSubmit}>
         <label>
           Uživatelské jméno:
           <input type="text" />
         </label>
         <button type="submit">Registrovat</button>
       </form>
     );
   };
   ```

1. Na políčko přidejte událost `onChange`. V reakci na událost do konzole vypište obsah políčka pomocí vlastnosti `target.value`. Vyzkoušejte, že když do políčka píšete, v konzoli vidíte každou změnu jeho hodnoty.
1. Uvnitř komponenty `App` vytvořte stav `userName` s výchozí hodnotou prázdný řetězec. Vytvořte obousměrný (two-way) data binding mezi textovým políčkem a stavem `userName`.
1. V reakci na událost `onSubmit` pomocí funkce `alert` vypište jméno uživatele uložené ve stavu `userName`.
1. Na stránku vložte `div` se zprávou
   ```text
   Uživatelské jméno je povinný údaj
   ```
   Tato zpráva bude vidět pouze pokud je ve stavu `userName` prázdný řetězec. V opačném případě tento div nezobrazujte.
1. Vzpomeňte si na vlastnost `disabled` a zařiďte, aby registrační tlačítko bylo klikatelné pouze v případě, že ve stavu `userName` není prázdný řetězec.

:::solution

Řešení naleznete v samostatném [Codesanboxu zde](https://codesandbox.io/s/da-web-registrace-t1ogp1?file=/src/App.jsx).

:::
