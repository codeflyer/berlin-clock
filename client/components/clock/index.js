import React from 'react';

import { Hours } from './hours';
import { Minutes } from './minutes';
import { Seconds } from './seconds';

export class Clock extends React.Component {
  render() {
    return <div>
      <Seconds time={this.props.time}/>
      <Hours time={this.props.time}/>
      <Minutes time={this.props.time}/>
    </div>
  }
}
