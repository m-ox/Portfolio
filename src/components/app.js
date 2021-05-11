import React, { Component } from 'react';
import moment from "moment";

// best practice to keep importing modules and your own components separated
import PortfolioContainer from './portfolio/portfolio-container'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Maudlin's Portfolio</h1>
        <div> {moment().format('MMMM Do YYYY, h:mm:ss a')} </div>
        <PortfolioContainer/>
      </div>
    );
  }
}
