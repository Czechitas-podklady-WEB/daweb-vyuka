---
title: Destrukturování
demand: 2
context: lekce
lead: Vyzoušejte si destrukturování objektů na jednoduchém příkladu.
---

Založte si JavaScriptový soubor s názvem `index.js` a vložte do něj následující objekt:

```js
const recipe = {
  name: 'Spicy Thai Basil Chicken',
  cuisine: 'Thai',
  difficulty: 'Intermediate',
  serves: 4,
  ingredients: {
    chicken: {
      type: 'Boneless, skinless chicken thighs',
      amount: '1 lb',
    },
    vegetables: [
      'Bell peppers',
      'Onion',
      'Thai bird chili',
      'Garlic',
      'Thai basil leaves',
    ],
    seasonings: ['Fish sauce', 'Soy sauce', 'Oyster sauce', 'Brown sugar'],
    others: ['Vegetable oil', 'Water'],
  },
  instructions: [
    'Slice the chicken into bite-sized pieces.',
    'Heat vegetable oil in a large skillet or wok over medium-high heat.',
    'Add minced garlic and Thai bird chili to the skillet. Stir-fry for 30 seconds.',
    'Add the sliced chicken to the skillet. Cook until browned and cooked through.',
    'Add sliced bell peppers and onion to the skillet. Cook until vegetables are tender-crisp.',
    'In a small bowl, mix together fish sauce, soy sauce, oyster sauce, brown sugar, and water.',
    'Pour the sauce over the chicken and vegetables in the skillet. Stir well to combine.',
    'Add Thai basil leaves to the skillet. Stir until the basil wilts.',
    'Remove from heat and serve hot with steamed rice.',
  ],
  notes:
    'Adjust the amount of Thai bird chili according to your spice preference. Serve with a wedge of lime for extra flavor.',
};
```

1. Pomocí destrukturování si vytvořte proměnnou `name`, do které uložte hodnota klíče `name` z objektu `recipe`.
2. Podobným způsobem si vytvořte proměnné `cuisine`, `ingredients` a `instructions`.
3. Z objektu `ingredients` si pomocí destrukturování vytvořte proměnné `chicken`, `vegetables`, `seasonings` a `others`.
