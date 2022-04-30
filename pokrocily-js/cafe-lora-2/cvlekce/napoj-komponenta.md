---
title: Nápoj jako komponenta
demand: 3
---

Abychom nakonec mohli zobrazit celou nabídku nápojů, budeme potřebovat, aby každý nápoj byl jedna komponenta. Podívejte se do `index.html` nebo do devtools na strukturu jednoho nápoje. Tento obsah si v `index.html` zakomentujte. Zakomentujte si také přidávání ingrediencí capuccina pomocí komponenty `Layer` v hlavním `index.js`. Zakomentujte také kód, který oživuje tlačítko pro objednání `.order-btn` – komponentu `Drink` nejprve vytvoříme bez funkčního tlačítka a tlačítko oživíme až v dalším cvičení, 

1. Jak už jsme zvyklí, vytvořte pro komponentu složku `Drink` s `index.js` a `style.css`. Do `style.css` přesuňte styly související s komponentou. Pozor na to, že tentokrát ke stylu komponenty patří také obrázek `cup-selected.png`. Abychom měli vše hezky pohromadě, vytvořte ve složce komponenty složku `img`, do které tento obrázek přesuňte. (Dané styly musíte smazat nebo zakomentovat v hlavním `style.css`, protože tam bude obrázek `cup-selected.png` teď chybět).
1. V `index.js` vytvořte komponentu `Drink`, která očekává `props` v následujícím tvaru. Vlastnost `id` se v komponentě v tuto chvíli nebude používat, hodila by se třeba při volání API pro objednání.

   ```js
   {
     id: 'romano',
     name: 'Romano',
     ordered: false,
     image: 'https://apps.kodim.cz/daweb/cafelora/assets/cups/romano.png',
     layers: [
       {
         color: '#fbdf5b',
         label: 'citrón',
       },
       {
         color: '#613916',
         label: 'espresso',
       },
     ]
   };
   ```

   Komponentu napište tak, aby vracela DOM element (vytvořený pomocí `document.createElement()`). Vnitřek komponenty můžete nastavit jako `innerHTML` tohoto prvku.

1. Uvnitř komponenty bude potřeba použít komponentu `Layer`. Dejte si pozor, abyse ji správně importovali.
1. Komponentu `Layer` v komponentě `Drink` vložíte do `innerHTML`, stejně jako jsme to dělali v hlavním `index.js` – nezapomeňte, že metoda `querySelector` se nemusí volat jen na `document`u, ale může se volat i na konkrétním DOM elementu.
1. Adresa obrázku, který se má zobrazit, je uložena ve vlastnosti `image`. Tato cesta se použije pro atribut `src` obrázku.
1. Tlačítko zatím pouze zobrazte, fuknčnost mu přidáme v dalším kroku.
1. Zobrazte na stránce nápoj dle dat uvedených výše. V hlavním `index.js` na správný prvek použijte funkci `appendChild`, neboť naše komponenta vrací DOM element. Měli byste teď vidět jeden nápoj, _Romano_.
1. V této fázi si commitněte kód s užitečně napsanou commit zprávou a pushněte do vzdáleného repozitáře.
