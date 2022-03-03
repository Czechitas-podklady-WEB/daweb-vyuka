## Ověření instalace

Naistalovat a správně nastavit všechny vývojářské nástroje je občas docela boj. Připravili jsme proto malý prográmek, který ověří, že máte správně nainstalované všechny programy, a pomůže vám nastavit několik důležitých věcí v gitu. Jako bonus si také procvičíte práci s terminálem. 

Postupujte dle následujicích kroků.

1. Zapněte VS Code a otevřete si v něm vaši složku `daweb`.
1. Otevřete terminál. Všimněte si, že ten se rovnou spustí uvnitř složky, kterou máte otevřenou ve VS Code.
1. Spusťte následující příkaz. Pozor na dolary. Jak už víme, ty nejsou součástí příkazu.
   ```sh
   $ git clone https://github.com/Czechitas-podklady-WEB/nastaveni-nastroju
   ```
   Tímto se stáhne složka `nastaveni-nastroju` s naším malým prográmkem.
1. V terminálu se pomocí příkazu `cd` přesuňte do této nové složky.
1. Uvnitř složky spusťte příkaz
   ```sh
   $ npm install
   ```
1. Počkeje, až se nainstalují závislosti a pak spusťte
   ```sh
   $ npm start
   ```
   Tento příkaz spustí dotazník, který se vás zeptá na váš e-mail a jméno. E-mail zadejte ten, který jste použili při vytváření účtu na GitHubu. 
1. Pokud program záhlásí, že všechno proběhlo v pořádku, slavte úspěch. Pokud se cestou cokoliv pokazilo, pomohou vám naši lektoři a kouči.