import React from "react";
function Button(props) {
  return (
    <div id="switchButton">
      <button className={`${props.theme}-theme`}>Switch Theme</button>
    </div>
  );
}
export default Button;
