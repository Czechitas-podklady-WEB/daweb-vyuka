## Komunikace dítě → rodič

Nyní bychom chtěli zařídit, aby se uživatelem vybraný kandidát zobrazit vedle obrázku hradu. Jakmile tedy uživatel vybere nějakého kandidáta v některé z komoponent `Candidate`, potřebujeme jeho jméno poslat rodičovské komponentě `App` aby si jej tato mohla uložit do stavu `president`. 

Zde však narážíme na zásadní problém. Komponenta `Candidate` nemá nejmenší tušení, kdo je její rodič. Zevnitř této komponenty tato informace není nijak dostupná. Musíme si tedy pomoct malým trikem. 

### Callbacky

Náš trik bude spočívat v tom, že komponentě `Candidate` skrze props předáme takzvaný <em>callback</em>. Tímto pojmem se v JavaScriptu často označuje funkce, kterou někomu předáváme proto, aby ji tento někdy později zavolal. Anglický název tohoto postupu vzniká právě ze slovního spojení "zavolat zpátky", tedy "call back". 

S callbacky už jsme se ve skutečnosti setkali dávno, jen jsme jim tehdy říkali posluchače událostí. Každý posluchač události je ve skutečnosti callback. Tlačítku například předáváme funkci, která se má zavolat (call back) ve chvíli, kdy na tlačítku klikneme. V minulé lekci jste viděli, že v Reactu se takové věc zařídí poměrně jednoduše. 

```js
const SensitiveButton = (props) => {
  const handleClick = () => {
    console.log('Au');
  };

  return (
    <Button onClick={handleClick}>{props.caption}</Button>
  );
};
```

### Použití callbacků ke komunikaci

V našem příkladu však callback nebudeme používat k poslouchání událostí. Budeme jej volat sami zevnitř komponenty `Candidate` ve chvíli, kdy chceme rodiči předat jméno zvoleného kandidáta.
