import React from "react";
import { connect } from "react-redux";
import Room from "./Room";

// const mapStateToPropsRoom = (state) => {
//   return { isLightOn: state };
// };

const ConnectedRoom = connect((state) => {
  return { isLightOn: state };
})(Room);
console.log(ConnectedRoom);

function App() {
  return (
    <div className="App">
      <ConnectedRoom />
    </div>
  );
}

export default App;
