---
title: Nápoj jako komponenta
lead: Vytvořte komponentu pro zobrazení jednoho nápoje.
demand: 3
---

V komponentě `Menu` máme příklad tří napojů zatím jako natvrdo vytvořené HTML. Budeme chtít mít každý nápoj v menu jako komponentu. Připravujeme se tím na to, abychom později mohli seznam nápojů zobrazovat stažením dat z API.

Vytvoříme komponentu `Drink`, která zatím nebude mít funkční objednávací tlačítko a nebude ještě správně zobrazovat ingredience. Obojí doplníme později.

1.  Ve složce `components` vytvořte komponentu `Drink` s `index.jsx` a `style.css`. Do `style.css` přesuňte styly související s komponentou.
1.  V `index.jsx` vytvořte komponentu `Drink`, která očekává `props` v následujícím tvaru.

    ```jsx
    <Drink
      name="Romano"
      ordered={false}
      image="https://localhost:4000/assets/cups/romano.png"
      layers={[
        {
          color: '#fbdf5b',
          label: 'citrón',
        },
        {
          color: '#613916',
          label: 'espresso',
        },
      ]}
    />
    ```

1.  Komponenta `Drink` zatím nebude využívat ani vlastnost `layers`. Ingredience zatím nechte tak, jak jsou zobrazené ve stránce se zadáním. Komponentu pro ingredience vytvoříme v následujícím cvičení. Zatím na stránce klidně zobrazte pouze jeden nápoj, ať se moc nenadřete.
1.  Adresa obrázku, který se má zobrazit, je uložena ve vlastnosti `image`. Tato cesta se použije pro atribut `src` obrázku.
1.  Tlačítko zatím pouze zobrazte, funkčnost mu přidáme v dalším kroku.
1.  V této fázi si commitněte kód s užitečně napsanou commit zprávou a pushněte do vzdáleného repozitáře.
