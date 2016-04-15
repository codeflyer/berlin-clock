import React from 'react';

import {Seconds} from './seconds';
import {Boxes} from './boxes';

export class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      time: Date.now()
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: Date.now()
      });
    }, 1000);
  }

  render() {
    return (
      <div className="clock">
        <Seconds value={new Date(this.state.time).getSeconds()} />
        <Boxes
          val={new Date(this.state.time).getHours()}
          total={8}
          splitIndex={4} />
        <Boxes
          val={new Date(this.state.time).getMinutes()}
          total={15}
          splitIndex={11}
          colorChangeIndex={3} />
      </div>
    );
  }
}
