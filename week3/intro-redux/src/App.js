import React, { Component } from "react";
import { connect } from "react-redux";
import { updateState } from "./redux/actions";
const styles = {
  timer: {
    textAlign: "center",
    fontSize: "20px",
    backgroundColor: "burlywood",
    padding: "15px"
  },
  header: { textAlign: "center", fontSize: "40px" },
  box: { backgroundColor: "grey" },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  start: { backgroundColor: "green", color: "white" },
  stop: { backgroundColor: "red", color: "white" },
  reset: { backgroundColor: "blue", color: "white" },
  lap: { backgroundColor: "yellow", color: "black" },
};
class App extends Component {
  constructor() {
    super();
    this.timeBegan = null;
    this.timeStopped = null;
    this.stoppedDuration = 0;
    this.started = null;
  }
  UNSAFE_componentWillUnmount() {
    this.handleStop();
  }
  startTimer = () => {
    const currentTime = new Date();
    const timeElapsed = new Date(
      currentTime - this.timeBegan - this.stoppedDuration
    );
    const hour = timeElapsed.getUTCHours();
    const min = timeElapsed.getUTCMinutes();
    const sec = timeElapsed.getUTCSeconds();
    const ms = timeElapsed.getUTCMilliseconds();
    const hours = hour > 9 ? `${hour}:` : hour === 0 ? "" : `0${hour}:`;
    const mins = min > 9 ? min : `0${min}`;
    const secs = sec > 9 ? sec : `0${sec}`;
    const mss = ms > 99 ? ms : ms > 9 ? `0${ms}` : `00${ms}`;
    const timer = `${hours}${mins}:${secs}.${mss}`;
    this.props.updateState({ key: "timer", value: timer });
  };
  handleStart = () => {
    if (this.timeBegan === null) {
      this.timeBegan = new Date();
    }
    if (this.timeStopped !== null) {
      this.stoppedDuration += new Date() - this.timeStopped;
    }
    this.started = setInterval(this.startTimer, 10);
  };
  handleStop = () => {
    this.timeStopped = new Date();
    clearInterval(this.started);
  };
  handleReset = () => {
    clearInterval(this.started);
    this.stoppedDuration = 0;
    this.timeBegan = null;
    this.timeStopped = null;
    this.props.updateState({ key: "timer", value: "00:00.000" });
  };
  handleLap = () => {
    const { updateState, laps, timer } = this.props;
    updateState({ key: "laps", value: [...laps, timer] });
    this.handleReset();
    this.handleStart();
  };
  render() {
    return (
      <div style={styles.box}>
        <header style={styles.header}>Stop Watch</header>
        <p style={styles.timer}>{this.props.timer}</p>
        <div style={styles.buttons}>
          <button style={styles.start} onClick={this.handleStart}>
            Start
          </button>
          <button style={styles.stop} onClick={this.handleStop}>
            Stop
          </button>
          <button style={styles.reset} onClick={this.handleReset}>
            Reset
          </button>
          <button style={styles.lap} onClick={this.handleLap}>
            Lap
          </button>
        </div>
        {this.props.laps.map((val, i) => (
          <ol>
            <li key={i}>
              Lap {i + 1}: {val}
            </li>
          </ol>
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  timer: state.timer,
  laps: state.laps,
});
const mapDispatchToProps = (dispatch) => ({
  updateState: (change) => dispatch(updateState(change)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
