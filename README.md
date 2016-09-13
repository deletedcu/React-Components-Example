# React Components Lab

## Objectives

1. Practice writing React components
2. Practice rendering React components into the DOM

**Note: there is already a bit of code in `index.js`. Don't remove it, you'll need it to complete the exercise!**

## The Oldercoaster
![Grannies having fun](https://media.giphy.com/media/MMQrQQ87G2MmY/giphy.gif)

In `index.js`, create a React component called `OlderCoaster` using the `React.createClass()` syntax. It should render
the following HTML:

```html
<div class="oldercoaster">
  <p>Two grannies having the time of their life!</p>
  <p>Passengers:</p>
  <ol>
    <li>Agnes</li>
    <li>Muriel</li>
  </ol>
</div>
```

## Don't look too far
In `index.js`, create a React component called `InFrontOfYou` using the ES2015 class syntax. It should render the
following HTML:

```html
<div>
  <p>You shouldn't look too far.</p>
  <p>Sometimes, the solution is <strong>right in front of you.</strong></p>
</div>
```

## Ye Olde Meat Shoppe
In `index.js`, create a React component called `ButcherShop` using the ES2015 class syntax. It should render the
following HTML:

```html
<div class="butcher-shop">
  <p>Hello! We have the following products for sale today:</p>
  <ul>
    <li>Tenderloin</li>
    <li>Short ribs</li>
    <li>Beef shin</li>
    <li>Ribeye</li>
  </ul>
</div>
```

To render the `<li>` elements, use `.map()` on the `BUTCHER_PRODUCTS` array already defined in the `index.js` file, and
return the appropriate React element.

## Resources

- [React without JSX](http://jamesknelson.com/learn-raw-react-no-jsx-flux-es6-webpack/)
- [Khan Academy: React Components](https://khan.github.io/react-components/)
