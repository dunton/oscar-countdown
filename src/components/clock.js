import React, { Component } from 'react';


import moment from 'moment';


class App extends Component {
  constructor() {
  	super();
    
  	this.state = {
  		timeDays: 'waiting',
      timeHours: 'waiting',
      timeMins: 'minutes',
  	  timeSecs: 'seconds'
    }

    //this.findDiff = this.findDiff.bind(this);

    
  }

  componentDidMount() {

    this.timerID = setInterval(
      () => {
        let now = moment(new Date()) //todays date
        let end = moment("2018-03-04 20:00");
        let duration = moment.duration(now.diff(end));

        console.log(duration);

        // define variables
        let days, hours, minutes, seconds;

        // find days
        let exactDays = Math.floor(Math.abs(duration.asDays()));
        if (exactDays < 10) {
          days = '0' + exactDays
        } else {
          days = exactDays;
        }

        // find hours
        let hoursToMinus = exactDays * 24;
        let exactHours = Math.floor(Math.abs(duration.asHours())) - hoursToMinus;
        if (exactHours < 10) {
          hours = '0' + exactHours
        } else {
          hours = exactHours;
        }

        // find minutes make sure to include already subtracted time
        let minutesToMinus = (exactHours + hoursToMinus) * 60;

        let exactMinutes = Math.floor(Math.abs(duration.asMinutes())) - minutesToMinus;
        if (exactMinutes < 10) {
          minutes = '0' + exactMinutes
        } else {
          minutes = exactMinutes
        }

        // find seconds
        let secondsToMinus = (minutesToMinus + exactMinutes) * 60;

        let exactSeconds = Math.floor(Math.abs(duration.asSeconds())) - secondsToMinus;
        
        if (exactSeconds < 10) {
          seconds = '0' + exactSeconds
        } else {
          seconds = exactSeconds;
        }


        this.setState({
      
          timeDays: exactDays,
          timeHours: hours,
          timeMins: minutes, 
          timeSecs: seconds
        })
      },  1000);

  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }


  render() {
    return (
      <div className="timer">
        <p>{this.state.timeDays}:{this.state.timeHours}:{this.state.timeMins}:{this.state.timeSecs}</p>
      </div>
    );
  }
}

export default App;