import React, { Component } from "react";
import "./App.css";
// import Position from "./components/position";

export default class App extends Component {
  // state = { positions: [] };
  componentDidMount() {
    this.initializeApp();
    //   this.refreshPositions();
    //   this.timerID = setInterval(() => this.refreshPositions(), 30000);
  }

  render() {
    return (
      <ul>
        <li> I am here </li>
        {/* {this.state.positions.map(position => (
          <Position
            key={position.symbol}
            className="flex-container"
            position={position}
          />
        ))} */}
      </ul>
    );
  }
  initializeApp() {
    console.log("Authenticating..");
    fetch("/login")
      // .get("https://electro-finance.herokuapp.com/login", {
      //   headers: { crossorigin: true }
      // })
      .then(response => console.log(response));
    //ping the heroku deployed backend
    //get rerouted to the tdameritrade 0auth service
    //get rerouted back to callback URL
  }

  refreshPositions() {
    // axios
    //   .get(
    //     "https://api.tdameritrade.com/v1/marketdata/quotes?apikey=MICHAEL&symbol=AMZN%2CEA%2CFB%2CGOOG%2C%20NVDA"
    //   )
    //   .then(response => {
    //     let result = Object.values(response.data);
    //     this.setState({ positions: result });
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }
}
