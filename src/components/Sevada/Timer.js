import React from "react";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      second: 0,
      minute: 0,
      hour: 0,
      start: false,
    };
  }  

  componentDidMount() {
  setInterval(() => {
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
        <button>Start</button>
        <button>Pause</button>
        <button>null</button>
        <br />
        {this.state.hour} : {this.state.minute} : {this.state.second}
      </div>
    );
  }
}
export default Timer;
