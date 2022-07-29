// import { configureStore } from "redux";
import { configureStore } from '@reduxjs/toolkit'

const initialState = {isLightOn: true};
//set default values in reducer level

export function lightReducer(currentState = initialState, action) {
  console.log(action);
  console.log(action.type);
  switch (action.type) {
    case "CHANGE_LIGHT": {
      return { isLightOn: !action.isLightOn };
    }
    default: {
      return currentState;
    }
  }
}
// sepObj = {}
const store = configureStore({reducer: lightReducer})

export { store };

//Redux debugging tool in chrome
// file structure
// reducers in 1 File
// actions in 1 file
// store in 1 file -- imports the reducers to apply
//reducer should have the logic
// action shouldn't have the logic