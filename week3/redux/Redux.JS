// const redux = require("redux");
const initialState = {
  hours: 0,
  mins: 0,
  secs: 0,
  timer: "00:00.000",
  laps: [],
  stopTime: true,
};

// const initialState = {
//   hours: hrs,
//   mins: mins,
//   secs: secs,
//   laps: [],
//   stopTime: true,
// };
function start() {
  return { type: "START" };
}
function stop() {
  return { type: "STOP" };
}
function reset() {
  return { type: "RESET" };
}
function lap() {
  return { type: "LAP" };
}
function reducer(state = initialState, action) {
  switch (action.type) {
    case "START":
      return {
        stopTime: false,
        secs: state.secs < 60 ? state.secs + 1 : 0,
        mins: state.mins < 60 && state.secs > 59 ? state.mins + 1 : 0,
        hours: state.mins > 59 ? state.hours + 1 : 0,
      };
    case "STOP":
      return {};
    case "RESET":
      return {};
    case "LAP":
      return {};
    default:
      return state;
  }
}
const store = Redux.createStore(reducer);
let state = store.getState();
const subscribe = store.subscribe(() => store.getState());
subscribe();
function timer() {
  store.dispatch(start());
}

let time = document.getElementById("timer");
time.textContent = store.getState().timer;

const startBtn = document.getElementById("start");
startBtn.addEventListener("click", () => {
  let time = document.getElementById("timer");
  time.textContent = `${store.getState().hours} : ${store.getState().mins} : ${
    store.getState().secs
  }`;
  store.dispatch(start());
  console.log(store.getState());
});
const stopBtn = document.getElementById("stop");
stopBtn.addEventListener("click", () => {});
const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", () => {});
const lapBtn = document.getElementById("lap");
lapBtn.addEventListener("click", () => {});
