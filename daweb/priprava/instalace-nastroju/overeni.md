## Ověření instalace

Naistalovat a správně nastavit všechny vývojářské nástroje je občas docela boj. Připravili jsme proto malý prográmek, který ověří, že máte správně nainstalované všechny programy, a pomůže vám nastavit několik důležitých věcí v gitu. Jako bonus si také procvičíte práci s terminálem / příkazovou řádku.

Postupujte dle následujicích kroků.

1. Otevřete terminál / příkazovou řádku. (To okno, které znáte z instalace Gitu [czechitas-podklady.cz/git-instalace/](https://czechitas-podklady.cz/git-instalace/).)
1. Spusťte v něm následující příkaz.

   ```sh
   npx -y @czechitas/nastaveni-nastroju
   ```

   Tento prográmek ověří, že jsou správně nainstalované předchozí nástroje, a pak spustí dotazník, který se vás zeptá na váš e-mail a jméno. E-mail zadejte ten, který jste použili při vytváření účtu na GitHubu. Program vám zadané jméno a e-mail nastaví do Gitu, abyste se tím nemuseli trápit později.

   ::fig[ukázka běhu ověření]{src=assets/overeni.gif}

1. Pokud program zahlásí, že všechno proběhlo v pořádku, slavte úspěch. Pokud se cestou cokoliv pokazilo, napište do kanálu [#\_organizační/#\_otázky_a_odpovědi](https://discord.com/channels/1252875899066388481/1338852707082965042) na Discordu, lektoři a koučové s vámi problém vyřeší. Je dobré z terminálu do Discordu zkopírovat příkaz, který jste spustili, a celý jeho výstup. (Označte celý text myší, klikněte pravým tlačítkem myši a v kontextové nabídce najděte volbu pro kopírování. :kbd[Ctrl] + :kbd[C] v terminálu nebude fungovat.) Můžete poslat i snímek obrazovky, ale kopie textu hezky zformátovaná jako kód je lepší (jak na to se dozvíte o dvě kapitolky dál v [Sdílení kódu v textových zprávách](kod-ve-zpravach)).

   Například se může stát, že po spuštění výše uvedeného příkazu se program nebude na nic ptát, jen vypíše následující chybu a ukončí se:

   ```
   npm ERR! code ENOENT
   npm ERR! syscall lstat
   npm ERR! path C:\Users\uzivatel\AppData\Roaming\npm
   npm ERR! errno -4058
   npm ERR! enoent ENOENT: no such file or directory, lstat 'C:\Users\uzivatel\AppData\Roaming\npm'
   npm ERR! enoent This is related to npm not being able to find a file.
   npm ERR! enoent

   npm ERR! A complete log of this run can be found in: C:\Users\uzivatel\AppData\Local\npm-cache\2023-…-debug-0.log

   ```

   To je přesně ten případ, kdy se _něco pokazilo_ a napište na Discord do `#_otázky_a_odpovědi_` 😎

1. Pokud oveření dopadlo dobře, můžete terminál zavřít zadáním příkazu
   ```shell
   exit
   ```
