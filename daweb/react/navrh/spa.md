## Mapa komponent

Zkušenjší programátoři si většinou umějí strukturu komponent představit v hlavě. My však v tomto kurzu takto daleko nejsme a proto si zde zavedeme způsob, jak strukturu komponent popsat pomocí jednoduchého textového formátu. Tento formát budeme nazývat _mapa komponent_ a budeme jej ukládat do textových souborů s příponou `.cmap`.

Hlavní věc, kterou si při návrhu každý komponenty musíme rozmyslet je, odkud komponenta bude získávat data. V podstatě máme na výběr ze čtyř možností:

1. **Žádná data** – komponenta žádná data nezískává a všechno, co zobrazuje, má uloženo rovnou uvnitř JSX.
1. **Data z props** – komponenta získává data od svého rodiče skrze _props_.
1. **Data z API** – komponenta si sama stahuje data z API pomocí `fetch`.
1. **Data od potomků** – komponenta získává data od svých potomků skrze callbacky.

Ukažme si všechny tyto případy na jednoduchém příkladu aplikace pro správu úkolů. Tato aplikace sestává z komponent `Header`, `Score`, `TaskList` a `Task`. Komponenta `Header` zobrazuje hlavičku stránky, komponenta `Score` zobrazuje počet splněných úkolů, komponenta `TaskList` zobrazuje seznam úkolů a komponenta `Task` zobrazuje jednu položku v seznamu úkolů.

### Komponenta bez dat

Toto je nejjednodušší případ, kde všechno, co komponenta zobrazuje, má uloženo rovnou uvnitř JSX. Příkladem takové komponenty může být například komponenta `Header`, která zobrazuje hlavičku stránky.

```jsx
const Header = () => {
  return (
    <header>
      <h1>xerotodo</h1>
      <p>Vaše úkoly na jednom místě</p>
    </header>
  );
};
```

Takovouto komponentu v naší mapě komponent napíšeme prostě takto:

```
Header
```

### Komponenta s daty z props

Tento případ je také vcelku jednoduchý. Komponenta získává data od svého rodiče skrze _props_. Příkladem takové komponenty je komponenta `Task`, která zobrazuje jednu položku v seznamu úkolů.

```jsx
const Task = ({ task }) => {
  return (
    <li>
      <input type="checkbox" checked={task.done} />
      {task.text}
    </li>
  );
};
```

Takovou komponentu v naší mapě komponent napíšeme takto:

```
Task
  :props task
```

### Komponenta s daty z API

Komponenta si sama stahuje data z API pomocí `fetch`. Příkladem takové komponenty `TaskList`, která zobrazuje seznam všech položek v seznamu úkolů.

```jsx
const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch('http://localhost:4000/api/tasks');
      const data = await response.json();
      setTasks(data);
    };
    fetchTasks();
  }, []);

  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
};
```

Komponenta `TaskList` si stahuje data z API pomocí `fetch` a ukládá je do stavu. V mapě komponent tedy napíšeme:

```
TaskList
  :api http://localhost:4000/api/tasks
```

### Komponenta s daty od potomků

Komponenta získává data od svých potomků skrze callbacky. Příkladem takové komponenty je komponenta `Score`, která zobrazuje počet splněných úkolů.

```jsx
const Score = () => {
  const [done, setDone] = useState(0);

  const handleTaskDone = () => {
    setDone(done + 1);
  };

  return (
    <p>
      Splněno úkolů: {done}
      <TaskList onTaskDone={handleTaskDone} />
    </p>
  );
};
```

Tuto komponentu v mapě komponent napíšeme takto:

```
Score
  :callback onTaskDone
```

Mapa komponent celé aplikace tedy bude vypadat náslendovně:

```
Header

Score
  :callback onTaskDone

TaskList
  :api http://localhost:4000/api/tasks
  
  Task
    :props task
```
