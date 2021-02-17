import React from "react";
function Header(props) {
  return (
    <header className={`${props.theme}-theme`}>
      <h2>Amazing Themed Header</h2>
    </header>
  );
}
export default Header;