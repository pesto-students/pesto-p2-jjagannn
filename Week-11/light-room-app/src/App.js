import React from "react";
import { connect } from "react-redux";
import Room from "./Room";

// const mapStateToPropsRoom = (state) => {
//   return { isLightOn: state };
// };

//connection should be in room.js
const ConnectedRoom = connect((state) => {
  // console.log(state)
  //setting default state - all
  return {...state} //causes multiple re-render if unused state(non-dependent) are being passed 
  //setting a specific state at default
  // return { isLightOn: state.isLightOn };
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

// 1. Provider at global
// 2. setup store which is the global var
// 3. Reducer
// 4. Reducer takes in state and an action and changes the state