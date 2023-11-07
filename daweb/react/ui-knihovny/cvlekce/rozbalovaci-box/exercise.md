---
title: Rozbalovací box
demand: 3
---

1. Začněte s čistým projektem vytvořeným pomocí `create-czechitas-app`.
1. Vytvořte komponentu CollapseBox, která bude mít prop `title`, ve kterém bude titulek komponenty. Jakýkoliv obsah komponenty se zobrazí uvnitř boxu.
1. Komponenta by měla jít použít následujícím způsobem:
   ```jsx
   <CollapseBox title="Podrobnosti">
     <h2>Lorem ipsum dolor sit amet</h2>
     <p>Consectetuer adipiscing elit. Fusce nibh. In laoreet, magna id viverra tincidunt.</p>
   </CollapseBox>
   ```
1. Box bud standardně zavřený a bude se zobrazovat pouze záhlaví s titulkem a šipkou ukazující doprava. Kliknutím na záhlaví se šipka změní na šipku ukazující dolů a v boxu se zobrazí obsah. Opětovným kliknutím na záhlaví se box zase zavře.
1. Jako šipku lze použít např. symbol **›** tvořený HTML entitou `&rsaquo;`.

::fig[Ukázka výsledku]{src=assets/rozbalovaci-box.png size=80}
