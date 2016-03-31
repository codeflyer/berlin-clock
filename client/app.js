import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import { Clock } from './components/clock';

class Container extends React.Component {
  constructor(options) {
    super(options);
    this.state = {
      time: new Date()
    }
  }

  componentWillMount() {
    const that = this;
    setInterval(function() {
      that.setState({ time: new Date() })
    }, 1000);
  }

  render() {
    return <div>
      <Clock time={this.state.time}/>
        <div style={{fontSize: '23px', margin: '3px 45px'}}>
          {this.state.time.toLocaleTimeString()}
        </div>
      </div>
  }
}

ReactDOM.render(
  <Container/>
  , document.getElementById('app')
);
