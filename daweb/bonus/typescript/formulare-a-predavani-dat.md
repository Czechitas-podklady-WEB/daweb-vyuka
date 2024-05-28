## Formuláře a předávání dat mezi komponentami

V naší aplikaci budeme chtít aby si uživatel nechal vygenerovat vhodnou volnočasovou aktivitu na základě jeho preferencí. Pro začátek nám bude stačit, když ho necháme vybrat si, o jaký typ aktivity by měl zájem. A aby jsme mohli tuto informaci získat, musíme si na to vytvořit formulář, který bude uživatel vyplňovat.

Vytvoříme si novou složku `Form`, kde si v `index.tsx` vytvoříme komponentu `Form`, která bude vracet jsx ve formátu:

```js
<form onSubmit={() => {}}>
  <label>
    <p>Your Name: </p>
    <input name="name" />
  </label>
  <label>
    <p>Select type of Activities: </p>
    <select name="type">
      <option value=""></option>
      <option value="education">Education</option>
      <option value="relaxation">Relaxation</option>
    </select>
  </label>
  <button type="submit">Submit</button>
</form>
```

Komponenta má jediný úkol. Bude předávat vstup od uživatele do nadřazené komponenty. V jejím inteface bude tedy jediná props, která bude očekávat callback funkci, prostřednictvím, které předá data ven.

```js
interface FormProps {
  onSubmitForm: () => void;
}

export const Form: React.FC<FormProps> = ({ onSubmitForm }) => {
  return <form onSubmit={onSubmitForm}>...</form>;
};
```

Od uživatele dostaneme dva údaje, jeho jméno a preferovaný typ aktivity. Budete tedy potřebovat stav, do kterého tyto údaje uložíme a bude potřeba aby jsme určili, jakého datového typu tyto data jsou. Opět k tomu použijeme interface.

```js
interface FormDataStructure {
  name: string;
  type: string;
}

export const Form: React.FC<FormProps> = ({
  onSubmitForm
}) => {
  const [formData, setFormData] = useState<FormDataStructure>({
    name: '',
    type: ''
  });
  ...
}
```

Vytvoříme si funkci `handleChange`, která nám bude poslouchat změny na formuláři, které provede uživatel a bude je ukládat do stavu. Taková funkce očekává vstup, který by měl být typu `event`, ale jaký přesně typ to je? S tím nám poradí vlastnost `onChange` u inputu. Stačí, když na ní najedem myší a typescript nám správný datový typ prozradí.

```js
<input
  name="name"
  onChange={(e) => {
    console.log(e);
  }}
  // (parameter) e: React.ChangeEvent<HTMLInputElement>
/>
```

Teď už víme, jaký datový typ potřebujeme a naše funkce `handleChange` bude vypadat takto:

```js
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
```

Ovšem ve formuláři máme ještě jiný element a to je `<select>`. Když se budeme snažit použít stejnou funkci i na něj, Typescript se bude zlobit a řekne nám, že datový typ `ChangeEvent<HTMLSelectElement>`, který má element `<select>` neodpovídá datovému typu `ChangeEvent<HTMLInputElement>`, který očekává naše funkce `handleChange` jako vstup. V takovém případě nám nezbývá nic jiného než říci, že vstup u naší funkce, může být jeden nebo druhý datový typ. V řeči Typescriptu se jedná o Union types. Jednotlivé typy od sebe oddělujeme vertikální čárou `|`.

```js
const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
```

Teď už nám zbývá jen při odeslání formuláře předat data od uživatele ven z komponenty. Budeme tedy potřebovat funkci `handleSubmit`, která se o to postará. Protože budeme předávat do callback funkce stav `formData`, potřebujeme také upravit interface tak, aby props `onSubmitForm` očekávala vstup ve správném datovém typu.

Výsledná komponenta `Form` bude vypadat takto:

```js
import { useState } from "react";

interface FormProps {
  onSubmitForm: (data: FormDataStructure) => void;
}

interface FormDataStructure {
  name: string;
  type: string;
}

export const Form: React.FC<FormProps> = ({ onSubmitForm }) => {
  const [formData, setFormData] = useState<FormDataStructure>({
      name: "",
      type: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitForm(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>Your Name: </p>
        <input name="name" onChange={handleChange} />
      </label>
      <label>
        <p>Select type of Activities: </p>
        <select name="type" onChange={handleChange}>
          <option value=""></option>
          <option value="education">Education</option>
          <option value="relaxation">Relaxation</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
```
