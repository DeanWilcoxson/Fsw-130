import "./App.css";
import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Movies from "./Components/Movies/movieList";
import TvShows from "./Components/TvShows/showList";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer"

function App(props) {
  return (
    <div className="appDiv">
      <Navbar />
      <Switch>
        <Route exact path="/movies">
          <Movies />
        </Route>
        <Route exact path="/tvshows">
          <TvShows />
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}
function mapStateToProps(globalState) {
  console.log(globalState);
  return {
    payload: globalState,
  };
}
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(App);
