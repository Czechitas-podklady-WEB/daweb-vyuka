## Ověření instalace

Naistalovat a správně nastavit všechny vývojářské nástroje je občas docela boj. Připravili jsme proto malý prográmek, který ověří, že máte správně nainstalované všechny programy, a pomůže vám nastavit několik důležitých věcí v gitu. Jako bonus si také procvičíte práci s terminálem / příkazovou řádku.

Postupujte dle následujicích kroků.

1. Otevřete terminál / příkazovou řádku. (To okno, které znáte z instalace Gitu [czechitas-podklady.cz/git-instalace/](https://czechitas-podklady.cz/git-instalace/).)
1. Spusťte v něm následující příkaz.

   ```sh
   npx -y @czechitas/nastaveni-nastroju
   ```

   Tento příkaz spustí dotazník, který se vás zeptá na váš e-mail a jméno. E-mail zadejte ten, který jste použili při vytváření účtu na GitHubu.

   ::fig[ukázka běhu ověření]{src=assets/overeni.gif}

1. Pokud program zahlásí, že všechno proběhlo v pořádku, slavte úspěch. Pokud se cestou cokoliv pokazilo, napište do kanálu `#04_otazky` na Slacku, lektoři a koučové s vámi problém vyřeší.

   Například se může stát, že se po spuštění výše uvedeného příkazu program nebude na nic ptát, vypíše následující chybu a ukončí se:

   ```
   npm ERR! code ENOENT
   npm ERR! syscall lstat
   npm ERR! path C:\Users\uzivatel\AAppData\Roaming\npm
   npm ERR! errno -4058
   npm ERR! enoent ENOENT: no such file or directory, lstat 'C:\Users\uzivatel\AppData\Roaming\npm'
   npm ERR! enoent This is related to npm not being able to find a file.
   npm ERR! enoent

   npm ERR! A complete log of this run can be found in: C:\Users\uzivatel\AppData\Local\npm-cache\2023-…-debug-0.log

   ```

   To je přesně ten případ, kdy se *něco pokazilo* a napište na Slack 😎

