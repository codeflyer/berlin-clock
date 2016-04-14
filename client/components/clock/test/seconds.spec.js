import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { Seconds } from '../seconds';

describe('components/clock', () => {
  describe('<Seconds />', () => {
    it('Check with the even second 1', () => {
      const definedTime = new Date('December 17, 1995 03:24:00');
      const result = shallow(<Seconds time={definedTime}/>);
      expect(result.props().style.backgroundColor).toBe('grey');
    });
    it('Check with the even second 2', () => {
      const definedTime = new Date('December 17, 1995 03:24:24');
      const result = shallow(<Seconds time={definedTime}/>);
      expect(result.props().style.backgroundColor).toBe('grey');
    });
    it('Check with the odd second 1', () => {
      const definedTime = new Date('December 17, 1995 03:24:01');
      const result = shallow(<Seconds time={definedTime}/>);
      expect(result.props().style.backgroundColor).toBe('yellow');
    });
    it('Check with the odd second 2', () => {
      const definedTime = new Date('December 17, 1995 03:24:13');
      const result = shallow(<Seconds time={definedTime}/>);
      expect(result.props().style.backgroundColor).toBe('yellow');
    });
  });
});
