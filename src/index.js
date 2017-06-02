// Make sure to import React and ReactDOM

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

// Define these exported consts to be Components
export const OlderCoaster = undefined;
export const InFrontOfYou = undefined;
export const ButcherShop = undefined;

ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('root')
);