import { React } from "react";
import changeLight from "./Action";

export default function Room(props) {

  const { isLightOn, dispatch } = props;

  const flipLight = () => {

    dispatch(changeLight());

  };

  const lightedness = isLightOn ? "lit" : "dark";

  return (
    <div className={`room ${lightedness}`}>
      the room is {lightedness}
      <br />
      <button onClick={flipLight}>flip</button>
    </div>
  );
}
