import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import moment from 'moment';
import Minutes from '../Clock/Minutes';

describe('<Minutes />', () => {
  describe('When given 00:00:00 as time', () => {
    const time = new Date('Januari 1, 2016 00:00:00');
    it('should have 0 filled minutes', () => {
      const wrapper = shallow(<Minutes time={time} />);
      expect(wrapper.find('.top').find('.on')).to.have.length(0);
    });
  });

  describe('When given 00:05:00 as time', () => {
    const time = new Date('Januari 1, 2016 00:05:00');
    it('should have 1 filled minutes', () => {
      const wrapper = shallow(<Minutes time={time} />);
      expect(wrapper.find('.on')).to.have.length(0);
    });
  });

  describe('When given 00:10:00 as time', () => {
    const time = new Date('Januari 1, 2016 00:10:00');
    it('should have 2 filled minutes', () => {
      const wrapper = shallow(<Minutes time={time} />);
      expect(wrapper.find('.on')).to.have.length(1);
    });
  });

  describe('When given 00:15:00 as time', () => {
    const time = new Date('Januari 1, 2016 00:15:00');
    it('should have 3 filled minutes', () => {
      const wrapper = shallow(<Minutes time={time} />);
      expect(wrapper.find('.on')).to.have.length(2);
    });
  });

  xdescribe('When given 00:20:00 as time', () => {
  });

  xdescribe('When given 00:25:00 as time', () => {
  });

  xdescribe('When given 00:30:00 as time', () => {
  });

  xdescribe('When given 00:35:00 as time', () => {
  });

  xdescribe('When given 00:40:00 as time', () => {
  });

  xdescribe('When given 00:45:00 as time', () => {
  });

  xdescribe('When given 00:50:00 as time', () => {
  });

  xdescribe('When given 00:55:00 as time', () => {
  });

  xdescribe('When given 00:56:00 as time', () => {
  });

  xdescribe('When given 00:57:00 as time', () => {
  });

  xdescribe('When given 00:58:00 as time', () => {
  });

  xdescribe('When given 00:59:00 as time', () => {
  });
});
