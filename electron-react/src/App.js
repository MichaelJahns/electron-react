import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Position from './components/position'

export default class App extends Component {
  state={ positions: []}
  componentDidMount(){
    this.refreshPositions()
    this.timerID = setInterval(
      () => this.refreshPositions(), 30000
    );
  }
  render() {
    return (
      <ul>
        {this.state.positions.map(position => 
          <Position key={position.symbol} className="flex-container" position={position}/>
        )} 
       </ul>
      
    );
  }
  refreshPositions(){
    axios.get("https://api.tdameritrade.com/v1/marketdata/quotes?apikey=MICHAEL&symbol=AMZN%2CEA%2CFB%2CGOOG%2C%20NVDA")
    .then(response => {
      let result = Object.values(response.data)
      this.setState({positions: result})
    })
    .catch(error => {
      console.log(error)
    })
  }
}
