import React from 'react';
class Clock extends React.Component {
  constructor() {
    super();
    this.state = { date: new Date() };
    this.intervalId = undefined;
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    this.intervalId = undefined;
  }

  render() {
    return (
      <div className="clock">
        <div className="date"><h1>Date:</h1><h2>{this.state.date.toDateString()}</h2></div>
        <div className="date"><h1>Time:</h1><h2>{this.state.date.getHours()}:{this.state.date.getMinutes()}:{this.state.date.getSeconds()}</h2></div>
      </div>
    );
  }
}

export default Clock;
