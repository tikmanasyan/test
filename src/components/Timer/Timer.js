import React from "react";
import "./Timer.css";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      startDisabled:false
    };
  }

  componentDidMount() {}

  start = () => {

    this.setState({
        ...this.state,
        startDisabled: true,
      });

    this.interval = setInterval(() => {
      if (this.state.seconds < 60) {
        this.setState({
          ...this.state,
          seconds: this.state.seconds + 1,
        });
      }

      if (this.state.seconds == 60) {
        this.setState({
          ...this.state,
          seconds: 0,
          minutes: this.state.minutes + 1,
        });
      }

      if (this.state.minutes == 60) {
        this.setState({
          ...this.state,
          seconds: 0,
          minutes: 0,
          hours: this.state.hours + 1,
        });
      }
    }, 1000);
  };

  pause = () => {
    this.setState({
      ...this.state,
      startDisabled: false,
    });
    clearInterval(this.interval);
  };

  stop = () => {
    this.setState({
      ...this.state,
      startDisabled: false,
    });
    clearInterval(this.interval);
    this.setState({
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  };

  render() { 
    return (
      <div>
        <div className="btn">
            <button disabled={this.state.startDisabled} onClick={this.start}>Start</button>
            <button onClick={this.pause}>Pause</button>
            <button onClick={this.stop}>Stop</button>
        </div>
        <br />
        <h1>
            {this.state.hours < 10 ? `0${this.state.hours}` : this.state.hours}:
            {this.state.minutes < 10 ? `0${this.state.minutes}` : this.state.hours}:
            {this.state.seconds < 10 ? `0${this.state.seconds}` : this.state.seconds}
        </h1>
      </div>
    );
  }
}

export default Timer;
