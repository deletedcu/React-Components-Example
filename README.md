# React Components Lab

## Overview

In this lab, you'll write React components and render them into the DOM.

**Note: there is already a bit of code in `index.js`. Don't remove it; you'll need it to complete the exercise!**

## First Things First
Make sure to import `React` and `ReactDOM` into your `/src/index.js` file. As mentioned above, there is some starter code in this file to mount the components. In addition, there are three classes in this file that are extending the `React.Component` class. These are the classes with which you will define your components. They are also being exported so that you can run tests against them.

We will be writing all of our components using the ES6 `class` syntax: `class YourComponent extends React.Component {}`

## The Oldercoaster
![Grannies having fun](https://media.giphy.com/media/MMQrQQ87G2MmY/giphy.gif)

In `index.js`, create a React component called `OlderCoaster` using the ES6 `class` syntax. It should render the following HTML:

```html
<div class="oldercoaster">
  <p>Two grannies having the time of their life!</p>
  <p>Passengers:</p>
  <ul>
    <li>Agnes</li>
    <li>Muriel</li>
  </ul>
</div>
```

## Don't look too far
In `index.js`, create another React component called `InFrontOfYou`. It should render the following HTML:

```html
<div>
  <p>You shouldn't look too far.</p>
  <p>Sometimes, the solution is right in front of you.</p>
</div>
```

## Ye Olde Meat Shoppe
In `index.js`, create one more React component called `ButcherShop`. It should render the following HTML:

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

To render the `<li>` elements, use `.map()` on the `BUTCHER_PRODUCTS` array already defined in the `index.js` file, and return the appropriate React element.

## Resources

- [React without JSX](http://jamesknelson.com/learn-raw-react-no-jsx-flux-es6-webpack/)
- [Khan Academy: React Components](https://khan.github.io/react-components/)

<p class='util--hide'>View <a href='https://learn.co/lessons/react-components-lab'>Components Lab</a> on Learn.co and start learning to code for free.</p>
