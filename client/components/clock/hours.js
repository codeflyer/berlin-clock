import React from 'react';

const cellStyle = {
  width: '51px',
  height: '70px',
  display: 'inline-block',
  border: '4px solid black',
  borderRadius: '5px',
  margin: '0 2px'
};

const rowStyle = {
  margin: '1px',
  padding: 0,
  height: '70px'
}

export class Hour extends React.Component {
  render() {
    const tempStyle = Object.assign({}, cellStyle, { backgroundColor: this.props.isOn ? 'red' : 'grey' });
    return <div style={tempStyle}></div>
  }
}


export class Hours extends React.Component {
  render() {
    const hours = this.props.time.getHours();
    return <div>
      <div style={rowStyle}>
        <Hour isOn={hours >=5}/>
        <Hour isOn={hours >=10}/>
        <Hour isOn={hours >=15}/>
        <Hour isOn={hours >=20}/>
      </div>
      <div style={rowStyle}>
        <Hour isOn={hours % 5 === 1 || hours % 5 === 2 || hours % 5 === 3 || hours % 5 === 4}/>
        <Hour isOn={hours % 5 === 2 || hours % 5 === 3 || hours % 5 === 4}/>
        <Hour isOn={hours % 5 === 3 || hours % 5 === 4}/>
        <Hour isOn={hours % 5 === 4}/>
      </div>
    </div>
  }
}
