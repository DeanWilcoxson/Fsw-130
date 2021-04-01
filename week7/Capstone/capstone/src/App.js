import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import RM from "./Components/RM";
import SW from "./Components/SW.js";
import DBZ from "./Components/DBZ";
import { addRmChar, delRmChar, getRmChars } from "./redux-state/rmReducer";
import { addSwChar, delSwChar, getSwChars } from "./redux-state/swReducer";
import { addDbzChar, delDbzChar, getDbzChars } from "./redux-state/dbzReducer";

function App(props) {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/RickAndMorty">
          <RM />
        </Route>
        <Route exact path="/StarWars">
          <SW />
        </Route>
        <Route exact path="/DragonBallZ">
          <DBZ />
        </Route>
      </Switch>
    </div>
  );
}
function mapStateToProps(globalState) {
  console.log(globalState);
  return { payload: globalState };
}
const mapDispatchToProps = {
  addRm: addRmChar,
  delRm: delRmChar,
  getRm: getRmChars,
  addSw: addSwChar,
  delSw: delSwChar,
  getSw: getSwChars,
  addDbz: addDbzChar,
  delDbz: delDbzChar,
  getDbz: getDbzChars,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
