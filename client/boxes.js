import React from 'react';

export class Boxes extends React.Component {

  render() {
    let fiveBoxCount = Math.floor(this.props.val / 5);
    let oneBoxCount = this.props.val % 5;
    let boxes = [];

    for (var i = 0; i < this.props.total; i++) {
      boxes.push(
          (i < this.props.splitIndex) ?
            <div className={'box first-row row-of-' + this.props.splitIndex} style={{background: i < fiveBoxCount ?
              (this.props.colorChangeIndex && ((i + 1) % this.props.colorChangeIndex) !== 0 ? 'yellow' : 'red') : 'darkgrey'}}></div> :
            <div className={i - this.props.splitIndex === 0 ? 'box second-row first' : 'box second-row'} style={{background: (i - this.props.splitIndex) < oneBoxCount ? (this.props.colorChangeIndex ? 'yellow' : 'red') : 'darkgrey'}}></div>
          );
    }

    return <div className="boxes">{boxes}</div>;
  }
}

Boxes.propTypes = {
  val: React.PropTypes.number.isRequired,
  total: React.PropTypes.number.isRequired,
  splitIndex: React.PropTypes.number.isRequired,
  colorChangeIndex: React.PropTypes.number
}
