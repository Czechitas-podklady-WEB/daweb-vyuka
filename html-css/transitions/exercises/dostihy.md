---
title: Dostihy
demand: 1
---

Vítejte na [dostihové dráze](https://codepen.io/ondrejzara/pen/WNQxoGL?editors=1100)! Závodiště v Chuchli je kvůli epidemii zavřené, koně fungují jen online.

Aktuálně jsou všichni závodníci – čtyři koně a jeden jednorožec – na startu. Cílem je vylepšit situaci tak, aby bylo možné závody uspořádat.

  1. Závodníci jsou na startu proto, že mají `margin-left: 100%`. Před závodem samotným ověřte, že se posunou do cíle, když budou mít `margin-left: 0`.

  1. Závodit se začne tak, že posuneme kurzor myši nad závodiště. Přidejte CSS tak, aby se všichni závodníci dostali do cíle, když bude myš nad prvkem `<ul>`.

  1. Pokud se má CSS vlastnost `margin-left` měnit plynule, musíme ji zmínit ve vlastnosti `transition`. Nechte závodníkům měnit `margin-left` plynule v průběhu tří vteřin.

  1. Každý kůň má jinou dynamiku běhu! Ať druhý kůň používá lineární interpolaci a třetí kůň třeba `transition-timing-function: ease-in`.

  1. Jednorožec je kouzelný! Do cíle se umí rovnou teleportovat.

  1. (Pro pokročilé) Ať se jednorožec teleportuje buď se zpožděním, nebo v několika postupných skocích.
