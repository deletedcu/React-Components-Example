# React Components Lab

## Overview

In this lab, you'll write React components and render them into the DOM.

**Note: there is already a bit of code in `index.js`. Don't remove it: you'll need it to complete the exercise!**

## First Things First
Make sure to import `React` and `ReactDOM` into your `/src/index.js` file. For now, we will program all of our React components in this one file.

As mentioned above, there is some starter code in this file to mount the components. In addition, there are three classes in this file that are extending the `React.Component` class. These will be our components! In this lab, will be writing all of our components using the ES6 `class` syntax: `class YourComponent extends React.Component {}`

If the `export` keyword on our components raised an eyebrow, with you thinking: "If we are going to use the classes in the same file they are defined in, why do we need to export them?", then you are spot on! The reason we are exporting them here is so that our testing suite will have access to them.

# Deliverables

## The Oldercoaster
![Grannies having fun](https://media.giphy.com/media/MMQrQQ87G2MmY/giphy.gif)

In `index.js`, implement your `OlderCoaster`. It should render the following HTML:

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

With this component, we want to render the products from the `BUTCHER_PRODUCTS` array already at the top of the `index.js` file. React supports the rendering of arrays filled with valid JSX, i.e.:

```JavaScript
const products = [<li>Tenderloin</li>, <li>Short ribs</li>, etc...]
render() {
  return (
    <div>
      { products }
    </div>
  )
}
```

Whenever we want to pass a variable into JSX, we need to wrap it in `{}`. The brackets tell React to resolve everything within the `{}` with JavaScript and fill in whatever it returns. This is similar to when we have used string interpolation (i.e. `#{@doge.name}`, `${choux.hobbies}`).

What higher order iterate could we use on `BUTCHER_PRODUCTS` to return that kind of array structure? When a JSX filled array is passed into a `render` method, React will automatically unpack it to JSX!

## Resources

- [React Documentation: Components](https://reactjs.org/docs/react-component.html)

<p class='util--hide'>View <a href='https://learn.co/lessons/react-components-lab'>Components Lab</a> on Learn.co and start learning to code for free.</p>
