---
title: Kurzovní lístek, základ
lead: Vytvořte aplikaci, která zobrazuje aktuální kurzy měn.
demand: 2
context: lekce
solutionAccess: protected
---

Rozhodně není od věci procvičit si také komunikaci směrem od rodiče k dítěti. To si vyzkoušíme na aplikaci, která převádí různé světové měny na české koruny. Vzhledem k tomu, že tento typ komunikace se odehrává prostě předáváním _props_, bude toto cvičení spíš opakování toho, co už znáte z minulách lekcí.

1. Vytvořte si repozitář ze šablony [cviceni-currencies](https://github.com/Czechitas-podklady-WEB/cviceni-currencies) obsahující React stránku s jednoduchým formulářem pro kurzy měn.
1. Pomocí `npm install` nainstalujte závislosti a spusťte vývojový server příkazem `npm run dev`.
1. Prohlédněte si připravený kód a strukturu projektu. Všimněte si komponmenty `Rate`, která zobrazuje kurz.
1. Do komponenty `Rate` přidejte prop `from`, která bude obsahovat kód měny, ze které chceme konvertovat na české koruny. Zařiďte, aby komponenta zobrazila kód měny, který uživatel vybere z nabídky. Toto bude komunikace od rodiče (komponenta `HomePage`) směrem k dítěti (komponenta `Rate`).
1. Upravate komponentu `Rate` tak, aby zobrazila správný kurz podle připravných dat v objektu `currencies`. Výsledná kurz zobrazte v elementu `.rate__value`.

:::solution
Řešení je spolu s řešeném následujícího cvičení v repository cvičení v branchi [reseni](https://github.com/Czechitas-podklady-WEB/cviceni-currencies/tree/reseni).
:::
