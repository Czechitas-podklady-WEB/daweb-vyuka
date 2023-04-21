## Nákupy: nová položka

Abychom si procvičili dotaz POST s autentizací, rozšíříme naši aplikaci _Nákupy_ o možnost přidání nové položky do seznamu. To znamená, že už nebudeme pracovat s veřejnými daty na adrese https://nakupy.kodim.app/api/sampleweek, neboť ta se nedají nijak měnit. Pokud máte účet na kodim.cz, máte automaticky účet i v aplikaci _Nákupy_, pod kterým máte svá data, která můžete libovolně upravovat. 

Nejprve si vyzkoušíme získat informace o vašem účtu pomocí dotazu GET s autentizací. Nejprve si vyzvedněte svůj autentizační token pro aplikace. Potom si založte čistý JavaScriptový projekt a vyzkušejte přístup k vašemu účtu v aplikaci _Nákupy_.

```js
fetch('https://nakupy.kodim.app/api/me', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer váš-token',
  },
}).then((resp) => resp.json());
  .then((data) => console.log(data.result));
```

Pokud jste vše provedli správně, měli byste získat data o svém účtu.

### Přidání položky
