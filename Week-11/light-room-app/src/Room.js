import { React } from "react";

//Functional
export default function Room(props) {
  // const [isLightOn, setIsLightOn] = useState(true);
  const { isLightOn = true, dispatch } = props;
  function changeLight(lightStatus) {
    return {
      type: "CHANGE_LIGHT",
      isLightOn: lightStatus
    };
  }
  const flipLight = () => {
    console.log(isLightOn);
    dispatch(changeLight(!isLightOn));
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

// export default Room;
