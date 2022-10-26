import { SearchBox } from "./searchBox";
import "./styles.css";
import { connect } from "react-redux";

let ConnectedSearchBox = connect((state) => {
  return { ...state };
})(SearchBox);

export default function App() {
  return (
    <div className="App">
      <ConnectedSearchBox />
    </div>
  );
}
