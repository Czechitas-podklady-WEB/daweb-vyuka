---
title: Jméno z emailu
demand: 3
---

Mějme emaily v následujícím formátu.

```
<jmeno>.<prijmeni>@<domena>
```

Tedy například:

- `petr.novak@gmail.com`
- `romana.nejedla@czechitas.cz`
- `slavomir.ponuchalek@yahoo.com`

Zpracujte každý email takovým způsobem, že na konci budete mit dvě proměnné :var[first] a :var[last], které budou obsahovat jméno a příjmení získané z emailové adresy se správnou velikostí písmen. Tedy například

```jscon
> first
'Petr'
> last
'Novak'
```
