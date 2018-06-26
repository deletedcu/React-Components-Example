// import React, { Component } from 'react' // We need to import react so we can make use of its .component class
// import ReactDOM from 'react-dom' // ...and we need to import ReactDOM so we can create and test a virtual DOM with react!

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
]

// Define these exported classes
export class OlderCoaster extends Component {

  // this function should return the JSX we want the DOM to render
  // render() {
  //   return (
  //     <div>Hello!</div>
  //   )
  // }
  //
}

export class InFrontOfYou extends Component {
  // your code here
}

export class ButcherShop extends Component {
  // your code here
}


export class App extends Component {
  render() {
    return (
      <div id="app">

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
