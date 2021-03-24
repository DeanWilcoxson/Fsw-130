import React from "react";
import { connect } from "react-redux";
import { addPerson, removePerson } from "./Redux/Redux";
import Form from "./Components/Form";
import Contacts from "./Components/Contacts";
import "./Style.css";
function App(props) {
  const { payload } = props;
 
  return (
    <div>
      <header>The Phone Booth</header>
      <Form addUser={addPerson} />

      <div>
        {payload.length
          ? payload.map((x) => {
              return (
                <Contacts key={x.id}
                  name={x.name}
                  number={x.number}
                  id={x.id}
                  delUser={removePerson}
                />
              );
            })
          : "No Contacts"}
      </div>
      <footer>&copy; 2021 WebDev Student Dean Wilcoxson</footer>
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
  addUser: addPerson,
  delUser: removePerson,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
