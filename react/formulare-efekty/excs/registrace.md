---
title: Registrace
demand: 2
---

1. Založte si novou React aplikaci podle klasického [starteru](https://github.com/Czechitas-podklady-WEB/project-starter/archive/react-starter.zip)
1. Vytvořte komponentu `App` s jednoduchým textovým políčkem dle následujícího vzoru.

   ```js
   const App = () => {
     const handleSubmit = (e) => {
       e.preventDefault();
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
1. Uvnitř komponenty `App` vytvořte stav `userName` s výchozí hodnotou prázdný řetězec. Vytvořte oboucestný (two-way) data binding mezi textovým políčkem a stavem `userName`.
1. V reakci na událost `onSubmit` do konzole vypište jméno uživatele uložené ve stavu `userName`.
1. Na stránku přidejte `div`, který bude vidět pouze pokud ve stavu `userName` bude jméno a nikoliv prázdný řetězec. Obsahem prvku by měla být zpráva
   ```
   Registrován nový uživatel jaroslav
   ```
   Za jméno <i>jaroslav</i> dosaďte obsah stavu `userName`.
1. Pokud je ve stavu `userName` uložen prádný řetězec, zobrazte ve vašem `divu` zprávu ve smyslu
   ```
   Uživatelské jméno je povinný údaj
   ```
1. Vzpomeňte si na vlastnost `disabled` a zařiďte, aby registrační tlačítko bylo dostupné pouze v případě, že ve stavu `userName` není prázdný řetězec.
