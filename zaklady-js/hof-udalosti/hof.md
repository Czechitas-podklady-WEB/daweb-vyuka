V předchozích lekcích jsme si ukázali, jak můžeme pomocí JavaScriptu měnit obsah stránky a jak vyrábět vlastní funkce. Díky těmto nástrojům se postupně bližíme k tomu, abychom uměli naše stránky udělat skutečně interaktivní. Nakonec chceme umět změnit obsah stránky ve chvíli, kdy uživatel klikne na tlačítko nebo mu umožnit vložit vstup pomocí textového políčka a tak dále. K tomu potřebujeme porozumět takzvaným :term{cs="událostem" en="events"}. Abychom uměli dobře používat události, bude se nám hodit vědět něco více o tom, jak fungují funkce.

## Funkce vyššího řádu

Z minula už víme, že funkce jsou hodnoty podobně jako čísla, řetězce nebo DOM elementy. Vzpomeňte si, že při vytváření funkce ve skutečnosti vytváříme proměnnou, do které novou funkci ukládáme.

```js
const goodbye = (name) => {
  return `S pozdravem ${name}`;
};
```

Ohledně toho, co vše je možné s funkcemi dělat, jsme teprve na začátku. Je tedy čas pustit se králičí norou malinko hlouběji.

Jelikož každá funkce je zcela rovnoprávná hodnota, můžeme ji nejen uložit do proměnné, ale také předat jiné funkci jako vstup. Je tedy možné zavolat funkci a na vstup jí při tom předat jinou funkci jako hodnotu. Taková myšlenka může ze začátku působit dost odvážně a neuchopitelně. Postupujme tedy pomaličku a s rozvahou.

### Rozvoz jídla

Představme si Pražskou restauraci, která rozváží jídlo k jednotlivým zákazníkům. K rozvozu jídla máme k dispozici následující tři rozvozové služby, každou s jiným cenníkem a jinou úrovní kvality služeb.

**Hejsci na kolech**
: Šance, že zásilka bude skutečně doručena, je 90%. Pokud se doručení povede, je to vždy do 30 minut do okolí 5 km.

**Machři, co maj drony**
: Šance, že zásilka bude skutečně doručena, je 50%. Pokud se doručení povede, je to vždy do deseti minut po celé Praze.

**Borci v autech**
: Zásilka je doručena vždy. Doručení však může trvat až dvě hodiny.

Napišme si funkce, které simulují naše doručovací společnosti.

```js
const hejsci = (zasilka) => {
  if (Math.random() > 0.1) {
    return `Zásilka „${zasilka}“ doručena za 30 minut, kámo.`;
  }

  return `Zásilka „${zasilka}“ se ztratila. Kurýra přepadla smečka hladových bezdomovců.`;
};

const machri = (zasilka) => {
  if (Math.random() > 0.5) {
    return `Zásilka „${zasilka}“ doručena za 10 minut.`;
  }

  return `Zásilka „${zasilka}“ ztracena. Drona přepadlo hejno hladových holubů.`;
};

const borci = (zasilka) => {
  return `Zásilka „${zasilka}“ doručena s přehledem za dvě hodiny.`;
};
```

Tyto funkce si můžeme vyzkoušet například v konzoli.

```jscon
> machri('Cous cous se zeleninou')
'Zásilka „Cous cous se zeleninou ztracena“. Drona přepadlo hejno hladových holubů.'
```

Představme si nyní, že si jako zákazník objednáte jídlo a chcete si zvolit, jakou službou vám bude doručeno. Můžeme tedy napsat funkci `objednat`, které předáme objednané jídlo a funkci, která se má použít k doručení. Ve funkci `objednat` vygeneruje číslo objednávky a použije zadanou funkci k doručení balíčku.

```js
const objednat = (jidlo, doruceni) => {
  const cislo = Math.floor(Math.random() * 1000);
  const id = String(cislo).padStart(4, '0');
  const balicek = `${jidlo} (${id})`;
  return doruceni(balicek);
};
```

Všimněte si, že funkce `objednat` se chová k parametru `doruceni` jako by to byla funkce. Očekáváme tedy, že v tomto parametru skutečně obdržíme nějakou funkci, kterou poté můžeme zavolat. Zkusme třeba naši funkci `objednat` zavolat s funkcí `hejsci`.

```jscon
> objednat('Hovězí cheeseburger', hejsci)
'Zásilka „Hovězí cheeseburger (0397)“ doručena za 30 minut, kámo.'
```

Pokud si chceme být doručením opravdu jistí, můžeme použít Borce v autech.

```jscon
> objednat('Hovězí cheeseburger', borci)
'Zásilka „Hovězí cheeseburger (7354)“ doručena s přehledem za dvě hodiny.'
```

Všimněte si, že funkce `hejsci` a `borci` předáváme jako celek, tedy jako hodnotu. Nevoláme je tady my sami, nýbrž je předáváme funkci `objednat`, aby ta je zavolala dle svého vlastního uvážení.

Dejte si pozor na následující chybu, kdy funkci `hejsci` místo předávání omylem zavoláme a funkce `objednat` tak jako druhý vstup nedostane funkci `hejsci` ale její výsledek.

```jscon
> odeslat('6682', hejsci())
```

Způsob uvažování, na který si díky tomuto příkladu snažíme zvyknout je, že občas můžeme mít funkci jako například `objednat`, která očekává na vstupu nějako jinou funkci, kterou poté sama zavolá. Takových funkcí uvidíme během naší pouti JavaScriptovou krajinou docela dost a budeme je často používat.
