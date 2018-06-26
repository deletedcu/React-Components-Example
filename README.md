# React Components Lab

## Overview

In this lab, you'll write React components and render them into the DOM.

**Note: there is already a bit of code in `index.js`. Don't remove it: you'll need it to complete the exercise!**

## First Things First

Make sure to import `React` and `ReactDOM` into your `/src/index.js` file. The
code is provided in this lesson, all you need to do is uncomment the lines.
Using `import`, we can access the two necessary node modules for React apps.

```JavaScript
import React from 'react' // We need to import react so we can make use of its .component class
import ReactDOM from 'react-dom' // ...and we need to import ReactDOM so we can create and test a virtual DOM with react!
```

For now, we will program all of our React components in this one file.

As mentioned above, there is some starter code in this file to mount the
components. In addition, there are three classes in this file that are extending
the `React.Component` class. These will be our components! In this lab, we will
be writing all of our components using the ES6 `class` syntax: `class
YourComponent extends React.Component {}`

The components in this lab are in a particular order. The `OlderCoaster`, `InFrontOfYou`, and `ButcherShop`

The reason we are exporting them
here is so that our testing suite will have access to them.

# Deliverables

## The OlderCoaster

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

In `index.js`, create another React component called `InFrontOfYou`. It should
render the following HTML:

```html
<div>
  <p>You shouldn't look too far.</p>
  <p>Sometimes, the solution is right in front of you.</p>
</div>
```

## Ye Olde Meat Shoppe

In `index.js`, create one more React component called `ButcherShop`. It should
render the following HTML:

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

With this component, we want to render the products from the `BUTCHER_PRODUCTS`
array already at the top of the `index.js` file. React supports the rendering of
arrays filled with valid JSX, i.e.:

```JavaScript
const ROTTEN_MEAT_PRODUCTS = ["Old Fish", "Sweeney Todd", "Tomatoes?"]

const products = [<li>{ROTTEN_MEAT_PRODUCTS[0]}</li>, <li>ROTTEN_MEAT_PRODUCTS[1]</li>, etc...]
render() {
  return (
    <div>
      { products }
    </div>
  )
}
```

Whenever we want to pass a variable into JSX, we need to wrap it in `{}`. The
brackets tell React to resolve everything within the `{}` with JavaScript and
fill in whatever it returns. This is similar to when we have used string
interpolation (i.e. `#{@doge.name}`, `${choux.hobbies}`).

What higher order iterator could we use on `BUTCHER_PRODUCTS` to return that
kind of array structure? When a JSX filled array is passed into a `render`
method, React will automatically unpack it to JSX!

## Using Components Within Another Component

Finally, now that we have three functioning components, we want to display them
together in the browser.

To do this, we need to place our components together inside a 'parent'
component. Using JSX, we can include components within other components by
wrapping the class name in `< />`:

```JavaScript
class Example extends Component {
  render() {
    return <div> Hello, I am example </div>
  }
}

class Parent extends Component {
  render() {
    return (
      <div>
        <ExampleComponent />
      </div>
    )
  }
}
```

**Note:** Sometimes, we may also see the following structure:

```js
class Parent extends React.Component {
}
```

This is also valid.  We are importing in the Component module ({ Component }) at
the top of `src/index.js` , which allows us to just refer to Component directly,
and is done for readability.

In `src/index.js`, include the three components we've created inside the App
component to pass the remaining tests.

Near the bottom of the file, we see a unique statement:

```JavaScript
ReactDOM.render(<App />, document.getElementById('root'))
```

The `ReactDOM.render()` method takes the _top level_ component, `<App />`. Since
all the other components are included within `<App />`, they will be handled by
React's virtual DOM. The second argument in `ReactDOM.render()` is the location
within the _real_ DOM where React steps in on a web page.

## Look in the Browser!

Once you've got the four components written, run `learn` to confirm you've
passed the tests. With everything working, we can now take a look and see these
components in action.

While its important to get used to reading React code and asserting its
functionality directly, (it's just JavaScript, after all!), we should also make
sure our React application looks the way we would like in the browser. In order
to do this, serve our application by running `npm start`. Thereafter, we are
able to inspect our results in the browser at whatever port it announces it's
running on.

## Resources

- [React Documentation: Components](https://reactjs.org/docs/react-component.html)

<p class='util--hide'>View <a href='https://learn.co/lessons/react-components-lab'>Components Lab</a> on Learn.co and start learning to code for free.</p>
