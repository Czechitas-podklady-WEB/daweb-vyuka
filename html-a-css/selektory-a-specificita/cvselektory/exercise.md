---
title: Kontakty podruhé
demand: 2
---

Použijte šablonu repozitáře [Kontakty](https://github.com/Czechitas-podklady-WEB/Kontakty-CSS-selektory).

Uvidíte podobnou stránku s kontakty jako ze cvičení flexboxu. V tomto cvičení ji budeme ještě vylepšovat. Finální verze bude vypadat takto:
::fig[Contact selectors result]{src=assets/selektory_result.gif}
<br/>

#### V první části nepoužívejte selektory podle třídy, pouze selektory typu element + kombinátory

- Každé druhé sekci nastavte bílé pozadí

- Fotografii přidejte `3px` silný rámeček barvy `lightblue` (dejte pozor, aby se rámeček nepřidal i ikonám)

#### Při následujícím stylování můžete použít třídy, ale jde to i bez nich

- Nastylujte ikonu `call` a `message` tak, aby se při najetí myši zvětšila.
  - Použijte pro to vlastnost a hodnotu
    `transform: scale(1.3)`
- Na najetí myši také nastavte kurzor na pointer/ručičku (vlasnost `cursor`)

#### Bonus

Pro plynulé zvětšení si můžete najít použití CSS vlastnosti `transition`.

---solution

```css
/*
Každé druhé sekci přidej bílé pozadí.
*/
section:nth-child(2n) {
  background-color: white;
}

/*
Fotografii přidej 3px silný rámeček barvy lightblue.
Dej pozor, aby se rámeček nepřidal i ikonám.
*/
section > img {
  border: 3px solid lightblue;
}

/*
Nastyluj ikony, tak aby se při najetí myši ikonka zvětšila.
Použij pro to vlasnost a hodnotu transform: scale(1.3).
Na najetí myši také nastavte kurzor na pointer/ručičku.
Dej pozor, aby se nezvětšovala i fotografie.
*/
div img:hover {
  transform: scale(1.3);
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
```
