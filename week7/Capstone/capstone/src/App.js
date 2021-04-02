import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import RM from "./Components/Rick&Morty/RM";
import SW from "./Components/StarWars/SW.js";
import DBZ from "./Components/DragonBallZ/DBZ";
import Home from "./Components/Home";
import Footer from "./Components/Footer"
import { addRmChar, delRmChar, getRmChars } from "./redux-state/rmReducer";
import { addSwChar, delSwChar, getSwChars } from "./redux-state/swReducer";
import { addDbzChar, delDbzChar, getDbzChars } from "./redux-state/dbzReducer";

function App(props) {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
          <Navbar />
        </Route>
        <Route exact path="/RickAndMorty">
          <RM
            add={addRmChar}
            del={delRmChar}
            state={props.data.rmChars.chars}
          />
        </Route>
        <Route exact path="/StarWars">
          <SW
            add={addSwChar}
            del={delSwChar}
            state={props.data.swChars.chars}
          />
        </Route>
        <Route exact path="/DragonBallZ">
          <DBZ
            add={addDbzChar}
            del={delDbzChar}
            state={props.data.dbzChars.chars}
          />
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}
function mapStateToProps(globalState) {
  console.log(globalState);
  return { data: globalState };
}
const mapDispatchToProps = {
  addRm: addRmChar,
  addSw: addSwChar,
  addDbz: addDbzChar,

  delRm: delRmChar,
  delSw: delSwChar,
  delDbz: delDbzChar,

  getRm: getRmChars,
  getSw: getSwChars,
  getDbz: getDbzChars,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
