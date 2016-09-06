describe('Oldercoaster', function () {
  before(function () {
    this.wrapper = enzyme.shallow(React.createElement(OlderCoaster));
  });

  it('should have been created using `React.createClass()`', function () {
    expect(OlderCoaster.name).toNotExist('The `Oldercoaster` component is being created using a ES2015 class.');
  });

  it('should have the right DOM markup', function () {
    expect(this.wrapper.html()).toEqual(`<div class="oldercoaster"><p>Two grannies having the time of their life!</p><p>Passengers:</p><ul><li>Agnes</li><li>Muriel</li></ul></div>`);
  });
});

describe('InFrontOfYou', function () {
  before(function () {
    this.wrapper = enzyme.shallow(React.createElement(InFrontOfYou));
  });

  it('should have been created using ES2015 class syntax`', function () {
    expect(InFrontOfYou.name).toExist('The `Oldercoaster` component is not being created using a ES2015 class.');
  });

  it('should have the right DOM markup', function () {
    expect(this.wrapper.html()).toEqual(`<div><p>You shouldn&#x27;t look too far.</p><p>Sometimes, the solution is <strong>right in front of you.</strong></p></div>`);
  });
});

describe('ButcherShop', function () {
  before(function () {
    this.wrapper = enzyme.shallow(React.createElement(ButcherShop));
  });

  it('should have been created using ES2015 class syntax`', function () {
    expect(ButcherShop.name).toExist('The `Oldercoaster` component is not being created using a ES2015 class.');
  });

  it('should have the right DOM markup', function () {
    expect(this.wrapper.html()).toEqual(`<div class="butcher-shop"><p>Hello! We have the following products for sale today:</p><ul><li>Tenderloin</li><li>Short ribs</li><li>Beef shin</li><li>Ribeye</li></ul></div>`);
  });
});

