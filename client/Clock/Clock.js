import React, { Component } from 'react';
import moment from 'moment';
import Seconds from './Seconds';
import Hours from './Hours';
import Minutes from './Minutes';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      currentTime: new Date().getTime(),
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.updateTime();
    }, 1000)
  }

  componentWillUnmount() {
    this.clearInterval();
  }

  clearInterval(){
    clearInterval(this.timer);
  }

  updateTime(){
    this.setState({
      currentTime: new Date().getTime(),
    });
  }

  render() {
    return (<div className="clock">
      <Seconds time={this.state.currentTime} />
      <Hours time={this.state.currentTime} />
      <Minutes time={this.state.currentTime} />
    </div>);
  }

}

export default Clock;
