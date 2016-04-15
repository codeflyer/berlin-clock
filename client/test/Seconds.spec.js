import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Seconds from '../Clock/Seconds';

describe('<Seconds />', () => {
  it('should have a class `on` when a even number is fed', () => {
    const seconds = shallow(<Seconds time={1460722296727} />);
    expect(seconds.find('.seconds-tick').hasClass('on')).to.equal(true);
  });
  it('should have a class `off` when a odd number is fed', () => {
    const seconds = shallow(<Seconds time={1460722527098} />);
    expect(seconds.find('.seconds-tick').hasClass('off')).to.equal(true);
  });
});
