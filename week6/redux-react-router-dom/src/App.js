import "./App.css";
import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Movies from "./Components/Movies/movieList";
import TvShows from "./Components/TvShows/showList";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { addTvShow, deleteTvShow, getTvShow } from "./Redux/tvshows";
import { addMovie, deleteMovie, getMovie } from "./Redux/movies";

function App(props) {
  return (
    <div className="appDiv">
      <Navbar />
      <Switch>
        <Route exact path="/movies">
          <Movies add={addMovie} sub={deleteMovie} get={getMovie} />
        </Route>
        <Route exact path="/tvshows">
          <TvShows add={addTvShow} sub={deleteTvShow} get={getTvShow} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
function mapStateToProps(globalState) {
  console.log(globalState);
  return {
    payload: globalState,
  };
}
const mapDispatchToProps = {
  addMovie: addMovie,
  deleteMovie: deleteMovie,
  getMovie: getMovie,
  addTvShow: addTvShow,
  deleteTvShow: deleteTvShow,
  getTvShow: getTvShow,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
