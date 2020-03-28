---
title: Profil herce
demand: 1
---

Vytvořte HTML stránku s profilem herce **Rowana Atkinsona** jen za použití běžných HTML tagů, podle [vzoru](https://codepen.io/SimonB87/full/gOpdZpY). Smyslem tohoto úkolu je si zopakovat psaní HTML kódu, nikoliv vytvořit skvostnou stránku.

Text stránky můžete vykopírovat přímo ze vzorové stránky. Jako zdroj dalších informací můžete použít Wikipedii. Stránka bude rozdělena na tyto části.

#### Hlavička

- Obrázek herce. Můžete si jej stáhnout z [tohoto odkazu](https://raw.githubusercontent.com/podlomar/daweb/master/assets/html-css/prvni-stranka/atkinson.jpg).
- Nadpis (použijte tag `<h1>`)
- Popis s původem a povoláním pod obrázkem.
- Menu s očíslovaným seznamem (použijte tag `<ol>`). Každá položka představuje odkaz, který vede k přislušnému nadpisu, který je značen pomocí id

```html
<a href="#obecneUdaje">Obecné údaje</a>
<a href="#zivot">Život</a>
<a href="#odkazy">Odkazy</a>
```

#### Obsah

- **Část 1: Obecné údaje**

  - Zde použijeme HTML **tabulku**, kde budou údaje:
  - Pro **nadpis** použijte tag `<h2>`, který obsahuje atribut `id="obecneUdaje"`

    | Celé jméno   | Rowan Sebastian Atkinson                          |
    | ------------ | ------------------------------------------------- |
    | Narození     | 6. ledna 1955, Spojené království Consett, Anglie |
    | Aktivní roky | 1978 - dosud                                      |
    | Hlavní žánr  | komedie                                           |

- **Část 2: Život**

  - Pro **nadpis** použijte tag `<h2>`, který obsahuje atribut `id="zivot"`
  - obsahuje text dostupný na vzorové stránce v **odstavcích** (použijte tagy `<p>`).

- **Část 3: Odkazy a zdroje**
  - Pro **nadpis** použijte tag `<h2>`
  - Obsahuje **nečíslovaný seznam** (tag `<ul>`) s odkazy, které po kliku otevřou stránku na nové záložce, pomocí atributu `target="_blank"`
  - Článek [Rowana Atkinsona](https://cs.wikipedia.org/wiki/Rowan_Atkinson) z Wikipedie
  - Oficiální youtube kanál [Mr. Beana](https://www.youtube.com/channel/UCkAGrHCLFmlK3H2kd6isipg)

#### Patička s údaji o stránce

- Pro **nadpis** použijte tag `<h2>`
- Zde napište své jméno a datum vytvoření stránky a další vhodné infromace :blush:

**Doporučení:**

Pro konec řádku a prázdný řádek zatím můžete použít tag `<br>`
