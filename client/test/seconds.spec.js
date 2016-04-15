import React from 'react';
import { render } from 'enzyme';
import { expect } from 'chai';
import { Seconds } from './../seconds.js';

describe('<Seconds />', () => {

  it('should rendered properly', () => {
    const wrapper = render(<Seconds value="1" />);
    expect(wrapper.find('.box').length).to.equal(1);
  });

  it('should switch background-color', () => {
    let wrapper = render(<Seconds value="1" />);
    expect(wrapper.find('.box').css('background')).to.equal('yellow');

    wrapper = render(<Seconds value="2" />);
    expect(wrapper.find('.box').css('background')).to.equal('red');
  });
});
