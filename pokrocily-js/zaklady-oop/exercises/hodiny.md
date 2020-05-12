---
title: Hodiny
demand: 2
---

Vytvořte prototyp `Clock`, který bude přestavovat digitální hodiny zobrazující hodiny a minuty. Metody prototypu pracují s vlastnostmi `this.hours` a `this.minutes`.

1. Přidejte do prototypu metodu `hourUp`, která zvýší čas na hodinách o jednu hodinu. Hodiny používají 24-hodinový formát, pod hodině 23 tedy následuje hodina 0.
1. Podobným způsobem vytvořte metodu `hourDown`, která sníží čas o jednu hodinu.
1. Přidejte metodu `minuteUp`, která zvýší čas na hodinách o jednu minutu. Dejte dobrý pozor na časy jako 9:59 a hlavně 23:59.
1. Přidejte metodu `minuteDown`, která sníží čas na hodinách o jednu minutu. Pozor na časy jako 9:00 a hlavně 0:00.
1. Přidejte metodu `show`, která vrátí řetězec s aktuláním časem na hodinách ve formátu H:MM, jedy alespoň jedna cifra pro hodinu a přesně dvě cifry pro minutu.
1. Vytvořte několik objektů hodin s různými časy a vyzkoušejte v konzoli svoje metody.
