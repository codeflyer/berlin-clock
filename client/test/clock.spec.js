import React from 'react';
import { render } from 'enzyme';
import { expect } from 'chai';
import { Clock } from './../clock.js';

describe('<Clock />', () => {

  it('should render properly', () => {
    const wrapper = render(<Clock />);
    expect(wrapper.find('.clock').length).to.equal(1);
  });
});
