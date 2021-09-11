import React from "react";

class Timer extends React.Component {
  constructor() {
    super();

    this.state = {
      isSession: true,
      timerSecond: 0,
      intervalId: 0,
    }

    this.playTimer = this.playTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
    this.decreaseTimer = this.decreaseTimer.bind(this)
  }

  playTimer() {
    let intervalId = setInterval(this.decreaseTimer, 1000)
    this.props.playStopTimer(true)
    this.setState({
      intervalId: intervalId
    })
  }

  decreaseTimer() {
    switch (this.state.timerSecond) {
      case 0:
        if (this.props.timerMinute === 0) {
          if (this.state.isSession) {
            this.setState({
              isSession: false
            })

            this.props.toggleInterval(this.state.isSession)
          } else {
            this.setState({
              isSession: true
            })

            this.props.toggleInterval(this.state.isSession)
          }
        } else {
          this.props.updateTimerMinute()
          this.setState({
            timerSecond: 59
          })
        }
        break;

      default:
        this.setState((prevState) => {
          return {
            timerSecond: prevState.timerSecond - 1
          }
        })
        break;
    }
  }

  stopTimer() {
    clearInterval(this.state.intervalId)
    this.props.playStopTimer(false)
  }

  resetTimer() {
    this.stopTimer();
    this.props.resetTimer();
    this.props.playStopTimer(false)
    this.setState({
      timerSecond: 0,
      isSession: true
    })
  }

  render() {
    return (
      <section className="text-center">
        <h4 className="text-4xl font-bold">{this.state.isSession === true ? "Session" : "Break"}</h4>
        <div className="text-9xl font-bold mb-5">
          <span>{this.props.timerMinute < 10 ? "0" + this.props.timerMinute : this.props.timerMinute}</span>
          <span>:</span>
          <span>{this.state.timerSecond < 10 ? "0" + this.state.timerSecond : this.state.timerSecond}</span>
        </div>
        <div>
          <button hidden={this.props.isPlay} onClick={this.playTimer} className="rounded-md w-40 py-2 border border-gray-900 font-bold text-lg mx-2">Play</button>
          <button hidden={!this.props.isPlay} onClick={this.stopTimer} className="rounded-md w-40 py-2 border border-gray-900 font-bold text-lg mx-2">Pause</button>
          <button onClick={this.resetTimer} className="rounded-md w-40 py-2 border border-gray-900 font-bold text-lg mx-2">Refresh</button>
        </div>
      </section>
    )
  }
}

export default Timer;