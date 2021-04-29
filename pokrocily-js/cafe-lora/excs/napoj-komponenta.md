---
title: Nápoj jako komponenta
demand: 2
---

Abychom nakonec mohli zobrazit celou nabídku nápojů, budeme potřebovat, aby každý nápoj byl jedna komponenta. Podívejte se do `index.html` nebo do devtools na strukturu jednoho nápoje (prvek `.drink` a jeho obsah). Tento obsah si v `index.html` zakomentujte. Zakomentujte si také přidávání ingrediencí capuccina pomocí komponenty `Layer` v hlavním `index.js`.

1. Jak už jsme zvyklí, vytvořte pro komponentu složku `Drink` s `index.js` a `style.css`. Do `style.css` přesuňte styly související s komponentou. Pozor, že tentokrát ke stylu komponenty patří také obrázek `cup-selected.png`. Abychom měli vše hezky pohromadě, vytvořte ve složce komponenty složku `img`, do které tento obrázek přesuňte. (Dané styly musíte smazat v hlavním `style.css`, protože tam bude obrázek `cup-selected.png` teď chybět).
1. V `index.js` vytvořte komponentu `Drink`, která očekává `props` v následujícím tvaru.

   ```js
   {
     id: 'romano',
     name: 'Romano',
     ordered: false,
     layers: [
       {
         color: '#fbdf5b',
         label: 'citrón',
       },
       {
         color: '#613916',
         label: 'espresso',
       },
     ],
   };
   ```

   Komponentu napište tak, aby vracela DOM element.

1. Uvnitř vaší komponenty bude potřeba použít komponentu `Layer`. Dejte si pozor, abyse ji správně importovali.
1. Komponentu `Layer` v naší komponentě `Drink` použijte pomocí `innerHTML`, stejně jako jsme to dělali v hlavním `index.js`.
1. Název obrázku, který se má zobrazit, můžete vzít z vlastnosti `id`. Je tak pouze potřeba sestavit správnou cestu pro atribut `src`.
1. Tlačítko zatím pouze staticky zobrazte, fuknčnost mu přidáme v dalším kroku.
1. Zobrazte na stránce nápoj dle dat uvedených výše. V hlavním `index.js` na správný prvek použijte funkci `appendChild`, neboť naše komponenta vrací DOM element. Měli byste vidět teď jeden nápoj, 'Romano'.
1. V této fázi si commitněte kód se užitečně napsanou commit zprávou a pushněte do vzdáleného repozitáře.
