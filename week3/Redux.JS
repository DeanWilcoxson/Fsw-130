const redux = require("redux");
const time = new Date();
let minutes = time.getMinutes();
let seconds = time.getSeconds(); 
const initialState = {
    count: 0
}
function timer(){
    return{
        type:"TIMER"
    }
}
const store = redux.createStore(reducer)