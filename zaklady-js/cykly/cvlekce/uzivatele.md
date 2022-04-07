---
title: Uživatelé
demand: 2
offerSolution: true
---

:::assign

Založte JavaScriptový program s následujícím seznamem uživatelů.

```
const users = ['paja', 'kaja', 'vlasta', 'peta', 'alex', 'ja', 'misa'];
```

1. Pomocí cyklu FOR vypište všechna tato jména do konzole.
1. Do konzole vypište všechna jména jako emailové adresy z domény `gmail.com`. Uživatel 'paja' tak bude `paja@gmail.com`.
1. Vypište do konzole e-maily pouze těch uživatelů, jejichž jméno má nejvýše 4 znaky.

:::

:::solution

```js
const users = ['paja', 'kaja', 'vlasta', 'peta', 'alex', 'ja', 'misa']

for (let i = 0; i < users.length; i++) {
	const jmeno = users[i]
	if (jmeno.length <= 4) {
		const email = `${jmeno}@gmail.com`
		console.log(email)
	}
}
```

:::
