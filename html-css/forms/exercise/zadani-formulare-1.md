---
title: Formulář 1
demand: 3
---

Stáhněte si [kód](https://codepen.io/SimonB87/pen/pojPpOj), který rozšiřte dle instrukcí .

## Proveďte následující úpravy:

- Rozšiřte atributy formuláře
  - Metoda formuláře bude POST
  - Formulář povede na soubor na webu "https://www.w3schools.com/action_page.php", kde pak bude serverem spracován
  - Odpověď po zaslání formuláře se otevře v novém okně (použijte atribut target="_blank")
- Upravte HTML kód a elementy input ve formuláři
  - Smažte nebo zakomentujte původní input a label "Přezdívka" (id="nname")
  - Upravte input "Celé jméno": přidejte placeholder "Jana Nováková"; input je povinný; input má autofucus (po načtení webu bude tento input vybrán a bude u něj blikat kurzor pro psaní textu)
  - Přidejte input pro "Email": input je povinný; v okně je předem vložen symbol "@" a tak uživatel může vložit svoji adresu bez hledání symbolu zavináče
  - Přidejte input pro "Telefonní číslo": typ inputu je text; input je povinný; přidejte placeholder "707-101-909"
  - Přidejte input pro "Oblíbená barva": input je typu text; input není povinný; placeholder má hodnotu růžová
  - Přidejte input pro "Oblíbené číslo": input je typu číslo; input není povinný; placeholder má hodnotu 7; číslo má minimum 1 a maximum 1000
  - Přidejte input s dnešním datem: input má atribut readonly, použijte JS kód, který v sobě má funkci na získání současného data, které vloží do inputu pro datum. Při volání funkce vložte do parametru funkce ID inputu pro datum

- Po kliku na tlačítko odeslat se objeví v nové záložce odpověď ze serveru s textem: "Submitted Form Data, Your input was received as: ..."

## Podoba hotového řešení:
[Hotová webová stránka](https://codepen.io/SimonB87/full/yLYbYMQ).