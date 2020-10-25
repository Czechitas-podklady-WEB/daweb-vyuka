---
title: Úkolníček
demand: 2
---

Stáhněte si [připravený Webpack projekt](../assets/check.zip), který zobrazuje jedno zaškrtávací tlačítko. Prohlédněte si strukturu projektu.

1. Upravte komponentu `CheckButton` tak, aby se tlačítko při kliknutí měnilo na křížek a zpět. To můžete provést například tak, že vy vytvoříte datovou položku, která se bude při kliknutí měnit z `true` na `false` a zpět.
1. Vložte do aplikace několik takovýchto tlačítek. 
1. Vytvořte komponentu `TodoItem`, která bude představovat nějaký úkol v úkolníčku. Tato komponenta bude používat tyto props
   - název úkolu,
   - čas, do kdy má být úkol splněn,
   - zaškrtávací tlačítko indikující, zde je zrovna úkol splněn či nikoliv.
1. Vložte do vaší aplikace několik úkolů a vyzkoušejte, že lze používat zaškrtávací tlačítka.
1. V datech komponenty `App` vytvořte pole obsahující objekty pro jednotlivé úkoly. Použijte direktivu `v-for` a zobrazte pro každý prvek pole odpovídající komponentu `TodoItem`. 