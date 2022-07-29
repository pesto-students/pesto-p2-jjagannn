import { createStore } from "redux";

const initialState = [];

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

const store = createStore(lightReducer);

export { store };
