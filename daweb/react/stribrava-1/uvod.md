## Úvod

Následující dvě lekce jsou zaměřené na samostatnou tvorbu projektu dle zadání, které se snaží co nejvíce odpovídat realitě. V tomto projektu už vás nepovedeme tolik za ručičku a nebudeme do nejmenšího detailu vysvětlovat každý krok. Naopak vám dáme svobodu si projekt rozmyslet sami a vyzkoušet si své vlastní schopnosti, které jste během tohoto kurzy nabyli.

V následujících sekcích najdete zadání od fiktivního zákazníka, který po vás chce vytvořit webové stránky a poté rady vašeho mentora, který vám s projektem pomáhá.

Na projektu pracujte v týmech nejlépe po dvojicích. K týmové spoluprácí můžete využít následující postupy:

1. **Párové programování** - oba členové týmu sedí u jednoho počítače, projekt řeší společně, ale pouze jeden z nich píše kód. Druhý člen týmu je tzv. navigátor, který pomáhá řešit problémy, navrhuje řešení a iniciuje diskuze. Po určité době si členové role prohodí.
1. **Spolupráce na jedné větvi** - oba členové týmu pracují na projektu samostatně, ale pravidelně si vyměňují svůj kód pomocí Gitu. Výhodou je, že se oba členové mohou věnovat různým částem projektu a mohou si tak lépe rozdělit práci. Práci na projektu však může zkomplikovat řešení konfliktů, které vznikají při slučování kódu.

### Příprava před projektem

Ještě před sobotní lekcí si ve dvojicích (v týmech) připravte repository na GitHubu, se kterým budete pracovat.

Jedna z vás si vytvoří [nové repository](https://github.com/new) na GitHubu . V sekci _Initialize this repository with_ na stránce pro vytvoření repository ponechte výchozí nastavení (nevytvářet `README` a dále hodnoty **None**), které nevytváří žádné soubory v repository. Tak vznikne úplně prázdné repository, bez žádných souborů – takové repository ani nejde naklonovat.

Dále ta z vás, která má repository na GitHubu, založí na svém počítači nový projekt pomocí `kodim-app` a šablony `react`. Projekt pojmenujte stejně, jako se jmenuje repository na GitHubu.

S projektem zatím lokálně nic nedělejte, ale v terminálu spusťte příkazy, které napovídá GitHub na stránce s novým projektem v části **…or create a new repository on the command line**. Pozor na to, že nejde příkazy dodržet úplně doslova – první příkaz `echo…` slouží k vytvoření souboru `README.md`, ten zatím nepotřebujete. Místo něj máte v projektu už spoustu jiných souborů. Provedete tedy příkaz `git init`, kterým se zakládá nové repository. Dále je na GitHubu příkaz `git add README.md`, který přidává do Gitu soubor `README.md`. Ten vy ale nemáte, místo něj budete asi pomocí `git add .` chtít přidat všechny soubory z projektu. V `git commit` si pak vymyslete vlastní zprávu pro commit.

Zbytek příkazů (`git branch`, `git remote` a `git push`) proveďte tak, jak jsou napsané na stránce repository na GitHubu (raději je do terminálu kopírujte, ať v nich nemáte překlep). Příkaz `git branch` určuje, jak se bude jmenovat hlavní větev vašeho Git repository – používat branche jsme se neučili, branch `main` je dnes v Gitu standard. Příkaz `git remote` řekne vašemu lokálnímu Gitu, kde je jeho vzdálené repository – jeto vlastně takový opak příkazu `git clone`. Další parametru příkazy `git push` bylo potřeba přidat proto, aby se správně propojil váš lokální branch se vzdáleným na GitHubu. Dále už budete používat standardní `git push` bez dalších parametrů.

Po provedení příkazu `push` obnovte stránku repository v prohlížeči – měly byste v repository vidět soubory z vašeho projektu.

Nyní je čas přizvat k vašemu projektu vaši parťačku resp. zbývající členy týmu. *Použijte na GitHubu Settings → Collaborators*. Těm přijde e-mail s pozvánkou, kterou akceptují, a tím získají právo přispívat do vašeho repository. Pomocí `git clone …` si naklonují váš projekt k sobě a vyzkouší si, že jim vše funguje (nezapomeňte na `npm install`). Vyzkoušejte si, že vám oběma funguje commitovat a
pushovat do repository.
