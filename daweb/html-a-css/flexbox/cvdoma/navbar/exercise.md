---
title: Hlavička
demand: 2
context: nadoma
solutionAccess: protected
---

Vytvořte si repozitář na základě šablony [cviceni-navbar](https://github.com/Czechitas-podklady-WEB/cviceni-navbar).

Nastylujte hlavičku s navigací podle výsledku:

::fig[Navbar result]{src=assets/cviceni_navbar_result.gif}

- Název webu v hlavičce je na levé straně a navigace na pravé
- Název webu má padding 10px nahoře a dole a 20px po stranách. Velikost písma je 30px, tučně a velkým písmem (toto udělejte v CSS, ne změnou HTML obashu)
- Položky v navigaci jsou vedle sebe, mají margin 1px, žadný padding
- Odkazy v seznamu zabírají celou výšku rodiče a jsou vertikálně vycentrované

:::solution

```css
.hlavicka {
  display: flex;
  justify-content: space-between;
}

.navbar {
  display: flex;
}

.logo {
  padding: 10px 20px;
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  display: flex;
  align-items: stretch;
  list-style-type: none;
  margin: 1px;
  padding: 0;
}

a {
  display: flex;
  justify-content: center;
  align-items: center;
  /*
    height: calc(55px - 2px);
    Není vhodné nastavovat výšku elementu <a>
    napevno. Kdyby se změnila výška celé lišty,
    ať už pozdější změnou CSS kódu nebo nastavením
    uživatele, bude pevně zadaná výška špatně
    a stránka bude vypadat rozbitě. Proto se
    vždy snažíme nastavovat CSS vlastnosti tak,
    aby velikosti, které může prohlížeč nastavit
    sám, nebyly v CSS kódu napevno.
    */
}
```

:::
