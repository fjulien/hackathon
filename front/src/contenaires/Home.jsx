import React, { Component } from 'react';
import './Home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="home">
        <div className="titretransparent">
          <div className="intermediaire">
            <h1>EMISSIONS MONDIALES DE CO2</h1>
            <h2>DEPUIS LE 1<sup>ER</sup> JANVIER 2018 </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;