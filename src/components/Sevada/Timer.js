import React from "react";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      second: 0,
      minute: 0,
      hour: 0,
    };
  }

<<<<<<< HEAD
  componentDidMount() {
  
  }
=======
  pauseTime = () => {
    clearInterval(this.interval);
  };

  nullTime = () => {
    this.setState({
      ...this.state,
      second: 0,
      minute: 0,
      hour: 0,
    });
  };

  start = () => {
    this.interval = setInterval(() => {
      if (this.state.second < 5) {
        this.setState({ ...this.state, second: this.state.second + 1 });
      } else if (this.state.second === 5) {
        this.setState({
          ...this.state,
          second: 0,
          minute: this.state.minute + 1,
        });
        if (this.state.minute === 2) {
          this.setState({
            ...this.state,
            minute: 0,
            hour: this.state.hour + 1,
          });
        }
      }
    }, 1000);
  };
>>>>>>> afab05439cf46e9455591443030d1ad9024f9d7e

  start = () => {
    this.interval = setInterval(() => {
          if (this.state.second < 5) {
            this.setState({ second: this.state.second + 1 });
          } else if (this.state.second === 5) {
            this.setState({ second: 0 });
            this.setState({ minute: this.state.minute + 1 });
            if (this.state.minute === 2) {
              this.setState({ minute: 0 });
              this.setState({ hour: this.state.hour + 1 });
            }
          }
        }, 1000);
  }

  

  render() {
    return (
      <div>
        <button onClick={this.start}>Start</button>
<<<<<<< HEAD
        <button>Pause</button>
        <button>null</button>
=======
        <button onClick={this.pauseTime}>Pause</button>
        <button onClick={this.nullTime}>null</button>
>>>>>>> afab05439cf46e9455591443030d1ad9024f9d7e
        <br />
        {(this.state.hour < 10) ? `0${this.state.hour}` : this.state.hour} : {this.state.minute} : {this.state.second}
      </div>
    );
  }
}
export default Timer;
