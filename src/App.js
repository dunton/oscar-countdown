import React, { Component } from 'react';
import SoundBar from './components/sound'
import Clock from './components/clock';
class App extends Component {

  constructor() {
    super();

    this.state = {
      appClass: 'theatre'
    }
  }
   
  componentDidMount() {

    //open curtains after 2 seconds

    this.animator = () => {
      setTimeout(() => {
        this.setState({ appClass: 'theatre open' })
      }, 2000);
    }

    this.animator();
    
  }

  render() {
    return (
      <div className="background">
        <div className={this.state.appClass}>
          <em className="curtain-left"></em>
          <em className="curtain-right"></em>
          <p className="header-text">COUNTDOWN TO THE OSCARS!!!</p>
          <Clock />
        </div>
        <div>
          <SoundBar />
        </div>
      </div>

      
    );
  }
}

export default App;
