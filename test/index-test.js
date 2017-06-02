import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react'
import ReactDOM from 'react-dom'
import { OlderCoaster, InFrontOfYou, ButcherShop } from '../src/index'

describe('OlderCoaster', () => {
  let wrapper;

  before(() => {
    wrapper = shallow(React.createElement(OlderCoaster));
  });

  it('renders withouth crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<OlderCoaster />, div);
  });

  it('should have the right DOM markup', () => {
    expect(wrapper.html()).to.equal(`<div class="oldercoaster"><p>Two grannies having the time of their life!</p><p>Passengers:</p><ul><li>Agnes</li><li>Muriel</li></ul></div>`);
  });
});

describe('InFrontOfYou', () => {
  let wrapper;

  before(() => {
    wrapper = shallow(React.createElement(InFrontOfYou));
  });

  it('renders withouth crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<InFrontOfYou />, div);
  });

  it('should have the right DOM markup', () => {
    expect(wrapper.html()).to.equal(`<div><p>You shouldn&#x27;t look too far.</p><p>Sometimes, the solution is right in front of you.</p></div>`);
  });
});

describe('ButcherShop', () => {
  let wrapper;

  before(() => {
    wrapper = shallow(React.createElement(ButcherShop));
  });

  it('renders withouth crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ButcherShop />, div);
  });

  it('should have the right DOM markup', () => {
    expect(wrapper.html()).to.equal(`<div class="butcher-shop"><p>Hello! We have the following products for sale today:</p><ul><li>Tenderloin</li><li>Short ribs</li><li>Beef shin</li><li>Ribeye</li></ul></div>`);
  });
});
