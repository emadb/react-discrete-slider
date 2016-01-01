import React from 'react';
import ReactDOM from 'react-dom';
import Bar from '../src/components/Bar'

require('../src/sass/style.scss');

let Colors = {
  get: function(value){
    return '#00FF00';
  }
};

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {value: 5 };
  }

  render() {
    return (
      <div>
        <Bar value={this.state.value} showLabel buttons getColor={Colors.get}/>
      </div>
    );
  }
};


ReactDOM.render(( <App /> ), document.getElementById('container'))
