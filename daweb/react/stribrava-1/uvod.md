## Úvod

Následující dvě lekce jsou zaměřené na samostatnou tvorbu projektu dle zadání, které se snaží co nejvíce odpovídat realitě. V tomto projektu už vás nepovedeme tolik za ručičku a nebudeme do nejmenšího detailu vysvětlovat každý krok. Naopak vám dáme svobodu si projekt rozmyslet sami a vyzkoušet si své vlastní schopnosti, které jste během tohoto kurzy nabyli.

V následujících sekcích najdete zadání od fiktivního zákazníka, který po vás chce vytvořit webové stránky a poté rady vašeho mentora, který vám s projektem pomáhá.

Na projektu pracujte v týmech nejlépe po dvojicích. K týmové spoluprácí můžete využít následující postupy:

1. **Párové programování** - oba členové týmu sedí u jednoho počítače, projekt řeší společně, ale pouze jeden z nich píše kód. Druhý člen týmu je tzv. navigátor, který pomáhá řešit problémy, navrhuje řešení a iniciuje diskuze. Po určité době si členové role prohodí.
1. **Spolupráce na jedné větvi** - oba členové týmu pracují na projektu samostatně, ale pravidelně si vyměňují svůj kód pomocí Gitu. Výhodou je, že se oba členové mohou věnovat různým částem projektu a mohou si tak lépe rozdělit práci. Práci na projektu však může zkomplikovat řešení konfliktů, které vznikají při slučování kódu.

### Příprava před projektem

Ještě před sobotní lekcí si ve dvojicích (v týmech) připravte repository na GitHubu, se kterým budete pracovat.

Repository na GitHubu si vytvoří jen jedna z vás, druhá bude pracovat s repository té první.
Pokud bude druhá z vás chtít repository mít ve svém účtu na GitHubu (minimálně u závěrečného projektu asi bude chtít), může později udělat _fork_ repository, čímž si vytvoří klon ve svém vlastním GitHub účtu.
Doporučuji ale fork udělat až po skončení práce, aby se vám dvě repository na GitHubu nepletla.

#### Vytvoření repository

Jedna z vás si vytvoří [nové repository](https://github.com/new) na GitHubu.
Repository nazvěte třeba `projekt-Hotel-Stribrava`.
Repository vytvořte jako veřejné `Public`, aby do něj viděli i koučové (a v případě závěrečného projektu také porota).
(Pozor na to, že dodatečné změny mezi `Public` a `Private` nebo opačně jsou na GitHubu velmi problematické.)
Do _Description_ je zvykem psát stručný popis projektu, to ale můžete změnit později.

V sekci _Initialize this repository with_ na stránce pro vytvoření repository zvolte _Add a README file_, v dalších dvou výběrech _Add .gitignore_ a _Choose a license_ ponechte výchozí nastavení **None**.
Tím, že necháte vytvořit soubor _README_, se vytvoří plnohodnotné repository, které jde rovnou naklonovat.

#### Přizvání kolegyně k repository

V tuto chvíli můžete rovnou ke svému projektu přizvat vaši parťačku.
Jak už víte z lekce Git 2, pozvání spolupracovníka k projektu chvilku trvá, tak pozvánku pošleme hned – zatímco budeme dokončovat přípravu projektu, může si e-mail s pozvánkou někde putovat.

V nově vytvořeném projektu přejděte do _Settings → Collaborators_ a tam přes tlačítko _Add people_ přizvěte svou parťačku.
Je nutné zadat její e-mail na GitHubu nebo její login – pozor na překlepy, ať nepřizvete někoho jiného.
Až vaší parťačce přijde e-mail s pozvánkou, pozvánku musí akceptovat a tím získat přístup do repository.
Repository si však ještě nebude klonovat, s tím počká až na dokončení přípravy projektu.

#### Naklonování projektu

Majitelka repository ovšem nemusí čekat, až se parťačka připojí, a může mezi tím pokračovat v přípravě projektu.
Nejprve si známým příkazem `git clone …` naklonuje projekt k sobě na počítač.
Následně si projekt otevře ve VS Code – pozor, je potřeba otevřít složku `projekt-Hotel-Stribrava`, ne složku nad ní`.

V projektu otevřeném ve VS Code uvidíte jen jeden soubor `README.md`.
Ten mimochodem slouží jako popis repository – zobrazuje se na GitHubu na úvodní stránce repository.
Později tedy do tohoto souboru můžete přidat popis projektu, aby návštěvníci vašeho repository věděli, o co se jedná, a třeba také to, jak si projekt u sebe spustit.
Soubor `README.md` je psán v jazyce Markdown.

#### Vytvoření úvodní struktury projektu

Nyní konečně nastal čas vytvořit úvodní strukturu projektu.
Zkontrolujte, že jste opravdu ve složce `projekt-Hotel-Stribrava` a v terminálu spusťte následující příkaz:

```shell
npm init kodim-app@latest . react
```

Jako předposlední parametr je uvedena pouhá tečka `.` – ta znamená _aktuální adresář_ a způsobí, že se projekt nezaloží v nové složce, ale ve složce naklonované z GitHubu.
Příkaz by měl skončit zeleným výpisem

> Project '.' created successfully.

Nastartujte lokální server příkazem

```shell
npm run dev
```

a v prohlížeči ověřte, že aplikace nastartovala.

Pokud je vše v pořádku, nezapomeňte přidat nově vytvořené soubory do Gitu, commitnout a pushnout na GitHub:

```shell
git add .
git commit -m "Úvodní struktura projektu vytvořená pomocí create-kodim-app s šablonou react."
git push
```

#### Zprovoznění projektu u kolegyně

Doufejme, že kolegyni mezi tím přišel e-mail s pozvánkou a získala přístup k repository.
Nyní si tedy repository pomocí `git clone …` naklonuje i ona.
Po naklonování nebude mít repository jen s jedním `README.md` souborem, ale bude tam už založená základní struktura projektu.
Protože si z GitHubu naklonuje repository s už hotovou strukturou, musí po naklonování (ve správné složce, uvnitř složky `projekt-Hotel-Stribrava`) spustit příkaz `npm install`.
Vzápětí si nastartuje lokální server příkazem `npm run dev` a také si ověří, že i u ní vše správně funguje.

Tím máte obě dvě lokálně zprvozněný projekt, který je napojený na jediné repository na GitHubu.
Vše tedy máte připraveno k tomu, abyste se v sobotu ráno hned mohly společně pustit do práce na webových stránkách Hotelu Stříbrava.

Stejným postupem si kdykoli můžete založit i repository pro svůj závěrečný projekt – pokud se s mentory nedomluvíte na jiném postupu.
