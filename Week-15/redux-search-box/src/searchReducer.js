let initialState = { searchData: "1,2" };

function SearchBoxReducer(currentState = initialState, action) {
  switch (action.type) {
    case "UPDATE":
      return { searchData: action.searchData };
    case "RESET":
      return { searchData: action.searchData };
    default:
      return currentState;
  }
}

export { SearchBoxReducer };
