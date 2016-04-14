import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { Hours, Hour } from '../hours';

describe('components/clock', () => {
  describe('<Hour />', () => {
    it('The light is on', () => {
      const result = shallow(<Hour isOn/>);
      expect(result.props().style.backgroundColor).toBe('red');
    });
    it('The light is off', () => {
      const result = shallow(<Hour/>);
      expect(result.props().style.backgroundColor).toBe('grey');
    });
  });
});
