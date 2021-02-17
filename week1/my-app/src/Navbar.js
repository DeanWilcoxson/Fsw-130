import React from "react";

function Navbar(props) {
  return (
    <div className="navbar">
      <button className={`${props.theme}-theme`}>Home</button>
      <button className={`${props.theme}-theme`}>About</button>
      <button className={`${props.theme}-theme`}>Contact Us</button>
      <button className={`${props.theme}-theme`}>Services</button>
    </div>
  );
}
export default Navbar;
