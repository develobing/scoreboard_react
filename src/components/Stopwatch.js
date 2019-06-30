import React from 'react';

export class Stopwatch extends React.Component {
  tickRef;

  state = {
    isRunning: false,
    timer: 0
  }

  handleStopwatch = () => {
    this.setState(prevState => ({isRunning: !prevState.isRunning}))
  }

  handleReset = () => {
    this.setState(prevState => ({timer: 0}))
  }


  render() {
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{this.state.timer}</span>
        <button onClick={this.handleStopwatch}>{this.state.isRunning ? 'Stop' : 'Start'}</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }

  // DOM이 렌더링 된 직후
  componentDidMount() {
    this.tickRef = setInterval(this.tick, 1000)
  }

  // 파괴되기 직전
  componentWillUnmount() {
    clearInterval(this.tickRef)
  }

  tick = () => {
    if(this.state.isRunning) {
      this.setState(prevState => ({timer: prevState.timer + 1}))
    }
  }
}