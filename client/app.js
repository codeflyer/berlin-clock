import 'babel-polyfill';

import React, { Component, PropTypes } from 'react';
import times from 'lodash/times';
import ReactDOM from 'react-dom';
import Otto from './otto';
import Kompanie from './kompanie';
import Panzerwagen from './panzerwagen';
import Sturmtruppe from './sturmtruppe';

class Uhr extends Component {
  constructor(props) {
    super(props);
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    this.state = {
      otto: this.isOttoLooking(date),
      panzerwagens: [
        this.firstRow(hours),
        this.secondRow(hours)
      ],
      sturmtruppen: [
        this.firstRow(minutes),
        this.secondRow(minutes)
      ],
      start: 0,
    };

    this.step = this.step.bind(this);
  }

  componentDidMount() {
    window.requestAnimationFrame(this.step);
  }

  step(timestamp) {
    if (this.state.start === 0) {
      this.setState({
        start: timestamp,
      });
    }
    const progress = timestamp - this.state.start;
    if (progress >= 1000) {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();

      this.setState({
        start: timestamp,
        otto: this.isOttoLooking(date),
        panzerwagens: [this.firstRow(hours), this.secondRow(hours)],
        sturmtruppen: [this.firstRow(minutes), this.secondRow(minutes)],
      });
    }

    window.requestAnimationFrame(this.step);
  }

  isOttoLooking(time) {
    return Boolean(time.getSeconds() % 2);
  }

  firstRow(time) {
    return Math.floor(time / 5);
  }

  secondRow(time) {
    return time % 5;
  }

  render() {
    return (
      <div className="uhr">
        <Otto isLooking={this.state.otto} />
        <Kompanie>
          {times(this.state.panzerwagens[0], i => <Panzerwagen key={i} />)}
        </Kompanie>
        <Kompanie>
          {times(this.state.panzerwagens[1], i => <Panzerwagen key={i} />)}
        </Kompanie>
        <Kompanie>
          {times(this.state.sturmtruppen[0], i => <Sturmtruppe key={i} />)}
        </Kompanie>
        <Kompanie>
          {times(this.state.sturmtruppen[1], i => <Sturmtruppe key={i} />)}
        </Kompanie>
      </div>
    );
  }
}

ReactDOM.render(
  <Uhr />, document.getElementById('app')
);
