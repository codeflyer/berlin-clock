import React from 'react';
import { render } from 'enzyme';
import { expect } from 'chai';
import { Boxes } from './../boxes.js';

describe('<Boxes />', () => {

  it('should respect to given "total" number', () => {
    const wrapper = render(
      <Boxes total={10} val={1} splitIndex={1} />);
    expect(wrapper.find('.box').length).to.equal(10);
  });

  it('should respect to given "splitIndex"', () => {
    const wrapper = render(
      <Boxes total={5} val={1} splitIndex={3} />);
    expect(wrapper.find('.first-row').length).to.equal(3);
    expect(wrapper.find('.second-row').length).to.equal(2);
  });

  it('should respect to given "value"', () => {
    const wrapper = render(
      <Boxes total={8} val={13} splitIndex={4} />); // 13:00 (hours)

    // 2 of 5x boxes are red (10)
    [].slice.call(wrapper.find('.first-row')).forEach(function(node, index) {
      expect(node.attribs.style).to.equal(index < 2 ? 'background:red;' : 'background:darkgrey;');
    });

    // 3 of 1x boxes are red (3)
    [].slice.call(wrapper.find('.second-row')).forEach(function(node, index) {
      expect(node.attribs.style).to.equal(index < 3 ? 'background:red;' : 'background:darkgrey;');
    });
  });

  it('should respect to given "colorChangeIndex"', () => {
    const wrapper = render(
      <Boxes total={15} val={47} splitIndex={11} colorChangeIndex={3} />); // 13:47 (minutes)

    [].slice.call(wrapper.find('.first-row')).forEach(function(node, index) {
      expect(node.attribs.style).to.equal(index > 8 ? 'background:darkgrey;' :
        (index % 3 !== 2 ? 'background:yellow;' : 'background:red;'));
    });

    // completed 1x boxes are always yellow, when colorChangeIndex is defined
    [].slice.call(wrapper.find('.second-row')).forEach(function(node, index) {
      expect(node.attribs.style).to.equal(index < 2 ? 'background:yellow;' : 'background:darkgrey;');
    });
  });
});
