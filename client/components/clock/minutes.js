import React from 'react';


const minuteFiveCellStyle = {
  width: '18px',
  height: '70px',
  display: 'inline-block',
  border: '4px solid black',
  borderRadius: '5px',
  margin: '0 1px'
};

const minuteCellStyle = {
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

export class MinuteFive extends React.Component {
  render() {
    const onColor = this.props.isThird ? 'yellow' : 'red';
    const tempStyle = Object.assign({}, minuteFiveCellStyle, { backgroundColor: this.props.isOn ? onColor : 'grey' });
    return <div style={tempStyle}></div>
  }
}

export class Minute extends React.Component {
  render() {
    const tempStyle = Object.assign({}, minuteCellStyle, { backgroundColor: this.props.isOn ? 'red' : 'grey' });
    return <div style={tempStyle}></div>
  }
}


export class Minutes extends React.Component {
  render() {
    const minutes = this.props.time.getMinutes();
    return <div>
      <div style={rowStyle}>
        <MinuteFive isOn={minutes >=5}/>
        <MinuteFive isOn={minutes >=10}/>
        <MinuteFive isOn={minutes >=15} isThird/>
        <MinuteFive isOn={minutes >=20}/>
        <MinuteFive isOn={minutes >=25}/>
        <MinuteFive isOn={minutes >=30} isThird/>
        <MinuteFive isOn={minutes >=35}/>
        <MinuteFive isOn={minutes >=40}/>
        <MinuteFive isOn={minutes >=45} isThird/>
        <MinuteFive isOn={minutes >=50}/>
        <MinuteFive isOn={minutes >=55}/>
      </div>
      <div style={rowStyle}>
        <Minute isOn={minutes % 5 === 1 || minutes % 5 === 2 || minutes % 5 === 3 || minutes % 5 === 4}/>
        <Minute isOn={minutes % 5 === 2 || minutes % 5 === 3 || minutes % 5 === 4}/>
        <Minute isOn={minutes % 5 === 3 || minutes % 5 === 4}/>
        <Minute isOn={minutes % 5 === 4}/>
      </div>
    </div>
  }
}
