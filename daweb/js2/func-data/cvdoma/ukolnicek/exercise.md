---
title: Úkolníček
demand: 3
context: cvdoma
---

Založte si JavaScriptový program a vložte do něj následujicí [datovou strukturu](assets/tasks.js), pole `tasks`. Pole představuje seznam úkolů v tomto formátu:

```js
{
  name: 'Jít si zaběhat',
  due: {
    time: 2,
    unit: 'day',
  },
  notify: {
    time: 1,
    unit: 'hour',
  },
  done: true,
}
```

Každý objekt obsahuje tyto položky

- `name` - název úkolu,
- `due` - za jak dlouho má být úkol splněn (buď ve dnech, hodinách, nebo minutách),
- `notify` - jako dlouho předem se má úkol připomenout (buď ve dnech, hodinách, nebo minutách),
- `done` - jestli už byl úkol splněn.

Splňte následující zadání za použití metod na poli `tasks`.

1. Vytvořte pole `taskNames`, které obsahuje pouze názvy všech úkolů.
1. Vytvořte pole `finishedTasks`, které obsahuje objekty pouze těch úkolů, které již byly splněny.
1. Vytvořte pole `upcomingTasks`, které obsahuje objekty pouze těch úkolů, které mají být splněný během následujících tří dnů.
1. Zjistěte, zda jsou všechny úkoly z pole `upcomingTasks` již splněny. Uložte si hodnotu do proměnné `areUpcomingTasksDone`.

:::solution

```js
const taskNames = tasks.map((task) => {
  return task.name;
});
const finishedTasks = tasks.filter((task) => {
  return task.done;
});
const upcomingTasks = tasks.filter((task) => {
  return (
    task.due.unit === 'minute' ||
    task.due.unit === 'hour' ||
    (task.due.unit === 'day' && task.due.time <= 3)
  );
});
const areUpcomingTasksDone = upcomingTasks.every((task) => {
  return task.done;
});
```

:::
