---
title: Nápoj jako komponenta
lead: Vytvořte komponentu pro zobrazení jednoho nápoje.
demand: 3
context: lekce
---

V komponentě `Menu` máme příklad tří napojů zatím jako natvrdo vytvořené HTML. Budeme chtít mít každý nápoj v menu jako komponentu. Připravujeme se tím na to, abychom později mohli seznam nápojů zobrazovat stažením dat z API.

Vytvoříme komponentu `Drink`, která zatím nebude mít funkční objednávací tlačítko a nebude ještě správně zobrazovat ingredience (layers). Obojí doplníme později.

1.  Ve složce `components` vytvořte komponentu `Drink` s `index.jsx` a `style.css`. Do `style.css` přesuňte styly související s komponentou.
1.  V `index.jsx` vytvořte komponentu `Drink` podle vzoru nápojů z `Menu`. Bude očekávat tyto `props` v následujícím tvaru.

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

1.  Komponentou `Drink`nahraďte příklad tří nápojů v `Menu`. Zatím na stránce klidně zobrazte pouze jeden nápoj, ať se moc nenadřete. Komponenta zatím nebude využívat vlastnosti `id`, `ordered` ani `layers. Přes props jí předejte pouze `name`a`image`. Data si můžete vymyslet nebo využít příklad výše.
1.  Adresa obrázku, který se má zobrazit, je uložena ve vlastnosti `image`. Tato cesta se použije pro atribut `src` obrázku uvnitř komponenty `Drink`. Adresa v příkladu nahoře využívá lokální API, takže se vám obrázek zatím nebude zobrazovat – to zprovozníme až později. Pokud chcete obrázky vyzkoušet hned, zprovozněte si dopředu API postupem popsaným v druhé části projektu v úkolu [Zprovoznění API](/vyvoj-webu/daweb/js2/cafe-lora-2/projekt/napoje-api). **Nezapomeňte**, že z API vám přijde pouze relativní cesta souboru, které musí předcházet url adresa, kde běží váš backend server, např. `http://localhost:4000`.
1.  Tlačítko zatím pouze zobrazte, funkčnost mu přidáme v dalším kroku.
1.  V této fázi si commitněte kód s užitečně napsanou commit zprávou a pushněte do vzdáleného repozitáře.
