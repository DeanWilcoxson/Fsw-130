import React from "react";
import { connect } from "react-redux";
import { addPerson, removePerson } from "./Redux/Redux";
import Form from "./Components/Form";
import Contacts from "./Components/Contacts";
import "./Style.css";
function App(props) {
  return (
    <div>
      <header>{props.payload}The Connect</header>
      <Form addUser={addPerson} />
      <Contacts delUser={removePerson} />
      <footer>&copy; 2021 WebDev Student Dean Wilcoxson</footer>
    </div>
  );
}
function mapStateToProps(globalState) {
  return {
    payload: globalState,
  };
}
const mapDispatchToProps = {
  addUser: addPerson,
  delUser: removePerson,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);