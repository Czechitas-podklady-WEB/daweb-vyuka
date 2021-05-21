---
title: Výběr sedadla
demand: 3
---

V tomto cvičení vytvoříte komponentu pro výběr sedadla. Komponenta zobrazí plánek autobusu se sedadly. Obsazená sedadla budou zobrazena šedě a nepůjde na ně
kliknout. API vrací seznam sedadel po řadách – nemusíte tedy řešit rozmístění sedadel, zobrazíte jednoduše každou řadu zvlášť a v ní sedadla zleva doprava.

1. Ve svém projektu vyvořte komponenty `Seat` a `SeatPicker`. Do komponenty `SeatPicker` přidejte style pro třídy `seat-picker` a `seats`. Do komponenty `Seat`
   přidejte styly pro ostatní třídy začínající `seat`.
1. Do komponenty `SeatPicker` zkopírujte ze zadání celý element div s třídami `seat-picker` a `container`. Samotné tlačítko pro sedadlo – element `button` s
   obrázkem `svg` uvnitř přesuňte do komponenty `Seat`. Na místě původního tlačítka v  `SeatPicker` použijte komponentu `Seat`.
1. Přidejte komponentu `SeatPicker` do komponenty `Home`. Bude umístěna pod `JourneyDetail`. Finálně se bude zobrazovat stejně jako `JourneyDetail` jen v
   případě, kdy stav `journey` není prázdný. Pro vývoj komponenty ale bude rychlejší, když se prozatím bude zobrazovat stále.
1. Zkontrolujte v prohlížeči, že se zobrazuje nadpis „Vyberte sedadlo“ a pod ním jedno modré sedadlo s číslem 33.
1. Komponenta `Seat` bude očekávat čtyři properties: `number`, `isOccupied`, `isSelected` a `onSelect`. V komponentě `SeatPicker` upravte vloženou
   komponentu `Seat` tak, že jí nastavíte číslo sedadla a boolean hodnoty `isOccupied` a `isSelected`. Property `onSelect` zatím ignorujte. Vložte si do
   komponenty několik sedadel, nastavte jim různá čísla a některé hodnoty `isOccupied` nastavte na `true`. Jednomu neobsazenému sedadlu nastavte `isSelected`
   na `true`. Nyní zprovozníte komponentu `Seat`, tato ručně vložená sedadla použijete pro testování.
1. V komponentě `Seat` použijte property `number` pro zobrazení čísla sedadla. To se zobrazuje uvnitř elementu `svg` v elementu `text`. Ověřte v prohlížeči, že
   se zobrazují sedadla s různými čísly.
1. Dále nastavte třídy pro tlačítko v komponentě `Seat`. Tlačítko vždy musí mít třídu `seat`. Pokud je sedadlo obsazené, musí mít navíc třídu `seat--occupied`.
   Pokud je sedadlo vybrané (property `iSelected` je nastavena na `true`), bude mít nastavenu vedle `seat` také třídu `seat--selected`. Zkontrolujte v
   prohlížeči, že se jednotlivá sedadla zobrazují správně – obsazená sedadla jsou šedá, vybrané sedadlo má červený text.
1. Tlačítku ještě nastavte atribut `disabled` – pokud je sedadlo obsazené, nepůjde na tlačítko kliknout. Zkontrolujte chování v prohlížeči.
1. Nastal čas pro zprovoznění komunikace mezi potomkem a rodičem, mezi `Seat` a `SeatPicker`. Komponenta `Seat` očekává property `onSelect`. V této property
   bude funkce, kterou `Seat` zavolá, když uživatel klikne na tlačítko. Jako parametr funkci předejte číslo sedadla.
1. Vraťte se do komponenty `SeatPicker` a vytvořte zde funkci `handleSeatSelect`. Funkce dostane na vstupu číslo sedadla – zatím číslo sedadla vypište do
   konzole. Předejte tuto funkci do property `onSelect` u všech testovacích sedadel. Vyzkoušejte v prohlížeči, že při klikání na sedadla se v konzoli logu
   zobrazují jejich čísla. Styl sedadla (červená barva textu) se zatím měnit nebude.
1. V komponentě `SeatPicker` vytvořte pomocí `useSelect` stav `selectedSeatNumber`. Výchozí hodnota bude `null`. Ve funkci `handleSeatSelect` nastavujte tento
   stav na číslo sedadla, které uživatel vybral.
1. Na vložených komponentách `Seat` změňte atribut `isSelected`. Místo statické hodnoty `true` nebo `false` nastavujte jeho hodnotu v závislosti na tom, zda
   číslo sedadla je shodné s číslem uloženým ve stavu `selectedSeatNumber`. Čísla zatím opíšete z atributu `number` ručně. Nyní si v prohlížeči vyzkoušejte, že
   při klikání na jednotlivá neobsazená sedadla se vypisuje číslo sedadla do konzole ale také se mění barva textu vybraného sedadla na červenou. Výpis do
   konzole pak můžete smazat.
1. Nyní je potřeba údaje o sedadlech předat z komponenty `Home` do komponenty `SeatPicker`. Zároveň se bude později hodit i identifikátor spoje. Do komponenty
   `SeatPicker` tedy přidejte dvě props – `seats` a `journeyId`. Zatím si tyto props vypisujte do konzole prohlížeče.
1. Teď už je potřeba upravit komunentu `Home` tak, že komponentu `SeatPicker` bude zobrazovat jedině v případě, že je stav `journey` jiný, než `null` – stejně,
   jako se zobrazuje komponenta `JourneyDetail`. V komponentě SeatPicker také nastavte atributy `seats` (vloží se do něj `journey.seats`) a `journeyId` (do
   kterého přijde `journey.id`). Ověřte v prohlížeči, že po vyhledání spoje se zobrazí podrobnosti cesty a také komponenta pro výběr sedadel – zatím s vašimi
   testovacími sedadly. V konzoli prohlížeče se vypíše pole s údaji o sedadlech a také identifikátor spoje.
1. Konečně nastává čas pro zobrazení správného plánku sedadel. Pracovat budete v komponentě `SeatPicker` uvnitř `div`u s třídou `seats` – tam, kde máte
   testovací sedadla. Ta si zatím můžete v kódu nechat pro inspiraci.
1. Plánek sedadel bude vypadat tak, že v HTML bude pro každou řadu sedadel jeden `div` a teprve uvnitř tohoto `div`u budou jednotlivá sedadla –
   komponenty `Seat`. Třeba plánek pětimístného osobního auta jedoucího vpravo by vypadal takhle:
   ```html
   <div className="seats">
     <div>
        <Seat number="3" />
        <Seat number="1" />
     </div>
     <div>
        <Seat number="4" />
     </div>
     <div>
        <Seat number="2" />
        <Seat number="5" />
     </div>
   </div>
   ```
   Když se podíváte do konzole na výpis, co je uložené v property `seats`, uvidíte, že máte velké štěstí. V `seats` je pole, které představuje jednotlivé řady v
   autobusu. Můžete tedy toto pole projít pomocí funkce `map`, a pro každý řádek pole vypsat jeden `div`. Tím vytvoříte řady (zatím bez sedadel) v autobusu. Pro
   otestování si do `div`u vypište text „řada 0“, „řada 1“ apod. Nezapomeňte, že funkce vložená do funkce `map` může mít dva parametry, druhý parametr je právě
   pořadové číslo aktuálního prvku. To použijete pro výpis čísla řady a také se bude hodit pro atribut `key`, který po vás Reat bude chtít. Vyzkoušejte v
   prohlížeči, že se vám po vyhledání spojení zobrazí pět řad, zatím bez sedadel. Očíslované jsou 0–4, ale to už vás určitě nerozhází :-)
1. Nyní v jednotlivých řadách zobrazíme sedadla. V datech získaných ze `seats` je v každé položce představující řadu sedadel další pole, prvky v něm představují
   jednotlivá sedadla. Každé sedadlo je reprezentováno objektem, ve kterém je číslo sedadla a údaj, zda už je obsazené. Uvnitř divu představujícího řadu sedadel
   tedy pomocí další funkce map budete procházet jednu řadu sedadel. Pro zobrazení sedadla použijete komponentu `Seat`. Můžete se inspirovat testovacími
   sedadly, pokud jste si je v kódu nechaly. Bude potřeba nastavit properties `number`, `isOccupied` (ty získáte z údajů o sedadle), `isSelected` (zjistíte, zda
   číslo sedadla z údajů o sedadle je shodné s číslem ve stavu `selectedSeatNumber`) a `onSelected` necháte stejně, jako to bylo u testovacích sedadel (zavoláte
   funkci `handleSeatSelect`). Když kód otestujete v prohlížeči, bude React protestovat, že chybí autribut `key` – ten můžete nastavit také na číslo sedadla.
   Vyzkoušejte v prohlížeči, že se po vyhledání spoje správně zobrazuje plánek sedadel, zobrazují se volná a obsazená sedadla, kliknutím můžete volné sedadlo
   vybrat.
1. Smažte různé pomocné výpisy do konzole, případně testovací sedadla, pokud v kódu zůstala, a změny commitněte.
