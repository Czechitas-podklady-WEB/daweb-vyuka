## Znovupoužitelnost

Když vytváříme nějakou větší a složitější aplikaci, vždy se na maximum snažíme udržet kód přehledný a srozumitelný. Jedním z hlavních postupů, které pomáhají udržet kód aplikace v dobrém stavum je takzvaná :term{cs=znovupoužitelnost en=reusability}. Znovupoužitelnost znamená, že kód, který napíšeme, můžeme použít na více místech v té samé aplikaci.

Princip znovupoužitelnosti využíváme vždy, když například píšeme nějakou funkci. Funkci píšeme většinou proto, aby šla použít na více různých místech. To nám pomáhá

- vyhnout se kopírování kódu po celé aplikaci,
- zvýšit spolehlivost kódu, protože danou funkčnost máme implementovanou jen na jednom místě, kde se o ni staráme, testujeme ji a opravujeme chyby,
- zvýšit přehlednost kódu, protože stavíme srozumitelné stavební bloky, které další programátoři mohou snadno pochopit a použít.

Abychom měli hezky pořádek i v Reactovém kódu, naučíme se vytvářet takzvané znovupoužitelné komponenty.

## Upozornění

Typickým příkladem znovupoužitelné komponenty je zobrazování různých druhů upozornění. Na webové stránce můžeme například chtít

- uživatele o něčem informovat, například o úspěšném odeslání formuláře,
- upozornit uživatele na chybu, například když se mu nepodaří přihlásit,
- zobrazit uživateli varování, například když se chystá provést nějakou akci, která může mít nevratné následky.

Pokud na projektu pracuje tým programátorů, je úplný nesmysl, aby si každý programátor psal upozornění po svém, když ho zrovna potřebuje. To by akorát způsobilo

- zbytečnou duplikaci kódu, který bude ve většině případů dělat to samé,
- nekonstantní vzhled upozornění, což kazí uživatelské pohodlí a může způsobit, že uživatelé budou mít problém se na stránce dobře orientovat,
- zbytečné problémy s údržbou, protože je těžké vůbec zjistit, kde všude se nějaká upozornění používají a kde všude by se měla změnit, pokud chceme například změnit vzhled upozornění.

### Základní komponenta `Alert`

Pojďme společně navrhnout komponentu `Alert`, která bude zobrazovat různé druhy upozornění. Náš UX designer nám poskytl následující návrh:

::fig{src="assets/alerts.png"}

Na obrázku vidíme 6 různých druhů upozornění. Musíme proto naši kompnentu navrhnout dostatečně obecně, aby dokázala zobrazit všechny tyto druhy upozornění. Například takto:

```jsx
<Alert type="warning" title="Warning!" body="This is a warning alert" />
```
