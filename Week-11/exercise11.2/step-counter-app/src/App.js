import logo from './logo.svg';
import './App.css';
import StepCounter from './StepCounter';
import { connect } from "react-redux";

let ConnectedStepCounter = connect((state) => {
  return { ...state };
})(StepCounter);

function App() {
  return (
    <div className="App">
      <ConnectedStepCounter />
    </div>
  );
}

export default App;
