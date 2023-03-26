## Kopírování projektů: fork a use template

Na GitHubu existují dva způsoby, jak se do svého účtu vytvořit kopii cizího projektu – fork a vytvoření projektu ze šablony.

::fig[Tlačítka pro forknutí a vytvoření ze šablony]{src=assets/fork-and-template.png}

### Fork

Fork (_vidlička_ nebo _rozvětvení_, ale český překlad se nepoužívá, místo toho se „fork“ počeštilo – programátor klidně řekne „forknul jsem ten projekt“) je velmi starý a velmi používaný způsob vytvoření kopie projektu. Fork znamená, že pod svým účtem budete mít plnohodnotnou kopii původního repository, včetně celé historie a všech větví. Co víc, váš fork bude stále provázán s původním repository, takže můžete své změny nabídnout vlastníkovi původního repository, odkud jste fork udělali (říká se tomu „pull request“ – požadujete přetažení vašich změn do jiného repository). To je klíčová vlastnost – díky tomu můžete přispívat do cizích projektů s otevřeným kódem a podílet se na vývoji všeho toho softwaru, který máme zadarmo.

Fork se na GitHubu dělá tak, že přejdete na stránku repository, které chcete _forknout_ (já jsem vám říkal, že to programátoři klidně takhle řeknou) a kliknete na tlačítko _Fork_ v záhlaví projektu. Po kliknutí se dostanete na stránku popsanou v části _Dokončení_.

Nicméně my v digitální akademii až na výjimečné případy nebudeme používat fork, ale vytvoření projektu na základě šablony.

### Šablony

Vytvoření projektu na základě šablony je nová funkce GitHubu stará jen pár měsíců. Málokdo o ní ví, zatím se moc nepoužívá. Nám se ale v digitální akademii bude hodit.

Založení projektu na základě šablony udělá to, že se vytvoří úplně nový projekt, který nijak není svázaný s projektem, který použijete jako šablonu. A pak se do projektu automaticky zkopírují všechny soubory ze šablony. Bez historie, bez cizích komentářů – vypadá to, jako byste všechny soubory vytvořili vy a nahráli je do prázdného repository.

Kopii ze šablony vytvoříte tak, že na stránce projektu kliknete na nepřehlédnutelné zelené tlačítko _Use this template_ a z nabídky zvolíte _Create a new repository_.

Vytváření kopie projektu s pomocí šablony má jednu _drobnou_ nevýhodu – vlastník původního projektu musí povolit, že projekt může sloužit jako šablona. Projekty v DA Web tak jsou nastavené, ale u cizích projektů vám obvykle nezbyde nic jiného, než forkovat. Ale tak je to správně, nechcete se chlubit cizím peřím – jenom si chcete na cizím projektu něco vyzkoušet či vylepšit (a ideálně pak vylepšení pull requestem nabídnout původnímu autorovi k začlenění. Takhle funguje opensource).

### Dokončení

V obou případech následuje obrazovka, kde zvolíte, do kterého účtu na GitHubu chcete vytvořit kopii projektu (obvykle máte zatím jen jeden účet). Dále zvolíte jméno projektu pod vaším účtem – nejlepší je použít stejné jméno, jako má původní projekt.

Dále můžete napsat stručný popisek projektu a zvolíte, že má být _Public_ (aby se k projektu dostali koučové, lektoři a zvídavé spolužačky). V případě použití šablony je k dispozici ještě volba _Include all branches_. Pokud se nikdo z lektorů nesplete, bude vždy nepřístupná. A pokud by se náhodou někdy někdo spletl, nechte volbu nezaškrtnutou – jedna větev z repository vám určitě bude stačit. A někdy v hospodě nebo při jiné příležitosti se můžete zeptat, co jsou to vlastně ty :term{cs="větve" en="branches"} (používá se i počeštěné „branche“, čti \[branče\]) v Gitu.

::fig[Nastavení parametrů kopie]{src=assets/kopie-dokonceni.png}

Pak už stačí jen kliknout na velké zelené tlačítko na konci, chvilinku počkat a máte pod svým účtem zbrusu nové repository (v případě forku s pořádnou porcí historie).

Když máte repository zkopírované ve svém GitHub účtu, můžete si jej starým známým `git clone` naklonovat na svůj počítač. Když uděláte změny, se kterými jste spokojeni, commitnete je a pushnete do svého repository. Což je hlavní důvod, proč jsme celou tu anabázi s vytvářením kopie absolvovali – protože do cizích repository obvykle pushovat nemůžete.
