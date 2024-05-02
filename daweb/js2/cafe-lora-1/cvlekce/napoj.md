---
title: Nápoj jako komponenta
lead: Vytvořte komponentu pro zobrazení jednoho nápoje.
demand: 3
context: lekce
---

V komponentě `Menu` máme příklad tří napojů zatím jako natvrdo vytvořené JSX. Budeme chtít mít každý nápoj v menu jako komponentu. Připravujeme se tím na to, abychom později mohli seznam nápojů zobrazovat stažením dat z API.

Vytvoříme komponentu `Drink`, která zatím nebude mít funkční objednávací tlačítko a nebude ještě správně zobrazovat ingredience (layers). Obojí doplníme později.

1.  Ve složce `components` vytvořte komponentu `Drink` s `index.jsx` a `style.css`. Do `style.css` přesuňte styly související s komponentou.
1.  V `index.jsx` vytvořte komponentu `Drink` podle vzoru nápojů z `Menu`. Připravte komponentu, aby očekávala _props_ viz níže. Nebojte se použít destrukturování. 

    ```jsx
    <Drink
      id={0}
      name="Romano"
      ordered={false}
      image="http://localhost:4000/assets/cups/romano.png"
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

1.  Uvnitř JSX komponenty použijte pouze 2 ze seznamu _props_: `name` a `image`. První bude sloužit jako název nápoje, druhá jako adresa obrázku (atribut `src`). Ostatní _props_ můžete zatím nechat nepoužité. 
1.  Nyní máte komponentu připravenou. Vraťte se do komponenty `Menu`, smažte ukázkové příklady nápojů a místo nich použijte komponentu `Drink`. Zatím na stránce klidně zobrazte pouze jeden nápoj, ať se moc nenadřete. Předejte `Drink` _props_ podle příkladu výše, nebo si vymyslete vlastní data, ať můžete otestovat, že komponenta funguje. (Nevadí že předáte všechny _props_, i když komponenta zatím používá jenom `name` a `image`).
1.  Po předání _props_ by komponenta měla minimálně správně zobrazovat vámi zadané jméno přes `name` a případně i obrázek, pokud jste např. použily adresu obrázku, který máte uložený u sebe na počítači. Adresa obrázku v příkladu nahoře využívá lokální API, které zatím nemáme zprovozněné, takže se vám tento obrázek zobrazovat nebude.
1.  Tlačítko objednání zatím pouze zobrazte, funkčnost mu přidáme později.
1.  V této fázi si commitněte kód s užitečně napsanou commit zprávou a pushněte do vzdáleného repozitáře.
