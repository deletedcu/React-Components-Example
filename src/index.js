// import React from 'react' // We need to import react so we can make use of its .component class
// import ReactDOM from 'react-dom' // ...and we need to import ReactDOM so we can create and test a virtual DOM with react!

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
]

// Define these exported classes
export class OlderCoaster extends React.Component {
  
  // this function should return the JSX we want the DOM to render
  // render() {
  //   return (
  //     <div>Hello!</div>
  //   )
  // }
  // 
}

export class InFrontOfYou extends React.Component {
  // your code here
}

export class ButcherShop extends React.Component {
  // your code here
}


export class App extends React.Component {
  render() {
    return (
      <div id="app">

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
