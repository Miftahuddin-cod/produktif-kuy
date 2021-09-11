import React from "react";
import BreakLength from "./breakLength";
import SessionLength from "./sessionLength";
import Timer from "./timer";

class Pomodoro extends React.Component {
  constructor() {
    super();
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerMinute: 25,
      isPlay: false,
    }

    this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
    this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);
    this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this);
    this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this);
    this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this);
    this.onToggleInterval = this.onToggleInterval.bind(this);
    this.onResetTimer = this.onResetTimer.bind(this);
    this.onPlayStopTimer = this.onPlayStopTimer.bind(this);
  }

  onIncreaseBreakLength() {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength + 1
      }
    })
  }

  onDecreaseBreakLength() {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength - 1
      }
    })
  }

  onIncreaseSessionLength() {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength + 1,
        timerMinute: prevState.sessionLength + 1
      }
    })
  }

  onDecreaseSessionLength() {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength - 1,
        timerMinute: prevState.sessionLength - 1
      }
    })
  }

  onUpdateTimerMinute() {
    this.setState((prevState) => {
      return {
        timerMinute: prevState.timerMinute - 1
      }
    })
  }

  onToggleInterval(isSession) {
    if (isSession) {
      this.setState({
        timerMinute: this.state.sessionLength
      })
    } else {
      this.setState({
        timerMinute: this.state.breakLength
      })
    }
  }

  onResetTimer() {
    this.setState({
      timerMinute: this.state.sessionLength
    })
  }

  onPlayStopTimer(isPlay) {
    this.setState({
      isPlay: isPlay
    })
  }

  render() {
    return (
      <div className="absolute w-full h-full flex justify-center items-center">
        <div>
          <div className="mb-5">
            <Timer isPlay={this.state.isPlay} timerMinute={this.state.timerMinute} breakLength={this.state.breakLength} updateTimerMinute={this.onUpdateTimerMinute} toggleInterval={this.onToggleInterval} resetTimer={this.onResetTimer} playStopTimer={this.onPlayStopTimer} />
          </div>
          <div className="flex">
            <SessionLength isPlay={this.state.isPlay} sessionLength={this.state.sessionLength} increaseSession={this.onIncreaseSessionLength} decreaseSession={this.onDecreaseSessionLength} />
            <BreakLength isPlay={this.state.isPlay} breakLength={this.state.breakLength} increaseBreak={this.onIncreaseBreakLength} decreaseBreak={this.onDecreaseBreakLength} />
          </div>
        </div>
      </div >
    )
  }
}

export default Pomodoro;