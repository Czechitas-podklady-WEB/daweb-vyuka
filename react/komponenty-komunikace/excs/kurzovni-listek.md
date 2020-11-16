---
title: Kurzovní lístek
demand: 2
---

1. Naklonujte si [repozitář](https://github.com/Czechitas-podklady-WEB/currencies) obsahující React stránku s jednoduchým formulářem pro kurzy měn. Prohlédněte si připravený kód.
1. Do komponenty `Rate` přidejte prop `from`, která bude obsahovat kód měny, ze které chceme konvertovat na české koruny. Zařiďte, aby komonenta zobrazila kód měny, který uživatel vybere z nabídky.
1. Chceme-li získat kurz amerického dolaru, můžeme využít následující API.
   ```
   https://api.frankfurter.app/latest?from=USD&to=CZK
   ```
   Prohlédněte si data, která API vrací. Zkuste do URL jako parametr `from` zadat nějakou jinou měnu, například CHF a podívejte se, jak se data změní.
1. Upravte komponentu `Rate` tak, aby si z API stáhla správny kurz pro měnu, kterou dostane v prop `from`. Výslední kurz zobrazte v elementu `.rate__value`.
1. Zařiďte, aby se správná data stáhla kdykoliv, když se změní hodnota uvniř prop `from`.
