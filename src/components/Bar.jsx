import React from 'react';

export default class Bar extends React.Component{
  constructor(props){
    super(props);
    this.state = {value: 5 };
    this.increaseValue = this.increaseValue.bind(this)
    this.decreaseValue = this.decreaseValue.bind(this)
  }
  increaseValue() {
    this.setState({value: this.state.value + this.props.step});
  }
  decreaseValue() {
    this.setState({value: this.state.value - this.props.step });
  }
  render() {
    let roundedValue = Math.round(this.state.value * 10) / 10;

    if (roundedValue != roundedValue){
      return <div></div>
    }

    let barWidth = {width: roundedValue * this.props.size + 'px', backgroundColor: this.props.getColor(roundedValue)};
    let labelPosition ={left: roundedValue * this.props.size + 'px', backgroundColor: this.props.getColor(roundedValue)};

    let label;
    if (this.props.showLabel){
      label = <div className="bar-label" style={labelPosition}>{roundedValue}</div>
    }

    let buttons;
    if (this.props.buttons){
      buttons = <div className="bar-buttons">
          <button className="fa fa-plus-circle" onClick={this.increaseValue}></button>
          <button className="fa fa-minus-circle" onClick={this.decreaseValue}></button>
        </div>;
    }

    return (
      <div className={this.props.className + ' bar-button-container'} style={{width: this.props.size * 2 + 'px'}}>
        {buttons}
        <div className="bar-container-grey" >
          <div className="bar-bar" style={barWidth}></div>
          {label}
        </div>
      </div>
    );
  }
}

Bar.defaultProps = { step: 0.2, size: 10, showLabel: true, getColor: (c) => '#FF0000' };
