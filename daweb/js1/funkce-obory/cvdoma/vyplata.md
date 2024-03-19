---
title: Výplata
demand: 2
context: nadoma
lead: Spočítejte si svoji měsíční výplatu pomocí funkcí.
solutionAccess: protected
---

Vytvořte funkci `salary` se třemi parametry

- `wage` - hrubá mzda v korunách za hodinu
- `hours` - kolik hodin denně průměrně pracujete
- `days` - kolik dní v měsící průměrně pracujete

Funkce spočítá vaši hrubou měsíční mzdu v celých korunách.

Dále vytvořte funkci `taxed`, která na vstupu obdrží částku a procento zdanění, a vrátí částku v celých korunách zdaněnou podle zadaných procent.

Použítím funkcí `salary` a `taxed` spočítejte svoji měsíční mzdu po 15% zdanění.

:::solution

```js
const salary = (wage, hours, days) => {
  return Math.round(wage * hours * days);
};

const taxed = (salary, taxPercentage) => {
  return Math.round((salary * (100 - taxPercentage)) / 100);
};

const wage = 400;
const hours = 6;
const days = 21;
const beforeTaxation = salary(wage, hours, days);
const afterTaxation = taxed(beforeTaxation, 15);

document.body.innerHTML += `
	<p>Wage: ${wage} Kč</p>
	<p>Hours: ${hours}</p>
	<p>Days: ${days}</p>
	<p>Before taxation: ${beforeTaxation} Kč</p>
	<p>After taxation: ${afterTaxation} Kč</p>
`;
```

:::
