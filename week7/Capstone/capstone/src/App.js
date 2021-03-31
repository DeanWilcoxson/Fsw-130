import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import RM from './Components/RM'
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path ="/RickAndMorty"><RM/></Route>
        <Route></Route>
      </Switch>
    </div>
  );
}
function mapStateToProps(globalState) {
  console.log(globalState)
  return { payload: globalState };
}
const mapDispatchToProps = {
  // add: ,
  // del: ,
  // get: ,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);