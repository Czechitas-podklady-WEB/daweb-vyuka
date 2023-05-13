## Pokračování

Budeme pokračovat v projektu _Café Lóra_ z předchozí lekce. Tentokrát se budeme soustředit především na napojení frontendu na backendové API. Přidáme také klient routování a zobrazíme stránku s detailem objednávky.

V [dokumentaci](https://cafelora.kodim.app/apidoc) k API _Café Lóra_ najdete popsané endpointy pro získání seznamu nápojů a objednání či zrušení objednávku nápoje.

API vyžaduje autentizaci pomocí kodim.cz tokenu pro aplikace ve formátu

```
Bearer vas-app-token
```

odeslanou v `Authorization` hlavičce. Při první autentizaci vám server vytvoří účet, ve kterém můžete spravovat vlastní objednávku. Bez autentizace vás API k datům nepustí.
