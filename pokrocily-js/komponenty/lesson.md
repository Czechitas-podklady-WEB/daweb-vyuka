## Tvorba komponent

Nástřel komponenty.

```js
'use strict';

const Clock = {
  constructor(hours, minutes) {
    this.hours = hours;
    this.minutes = minutes;
    this.element = document.createElement('div');
    this.template = document.querySelector('#clock-templ').innerHTML;
  },

  render() {
    this.element.innerHTML = Mustache.render(this.template, this);
  },

  mount(parent) {
    this.render();
    parent.appendChild(this.element.children[0]);
  },
};
```
