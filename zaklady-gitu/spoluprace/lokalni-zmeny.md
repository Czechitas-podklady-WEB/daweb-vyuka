## Scénář 4: lokální změny

Pokud máme v repozitáři lokální změny, může se stát, že by provedení `git pull` tyto změny přepsalo příchozími změnami. V takovém případě Git provedení `pull` nedovolí.

### Commitnuí změn

Běžnou cesou pomocí `git commit` a následný `git pull`.

### Smazání změn

**POZOR!!**, zde může dojít k nevratnému smazání vaší práce.

```
$ git reset --hard
```
