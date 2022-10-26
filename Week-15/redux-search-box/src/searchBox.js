import DisplayTables from "../src/displayData";

function SearchBox(props) {
  const { searchData, dispatch } = props;

  function handleUpdate(newText) {
    console.log("onchange was called");
    console.log(newText);
    // if (newText !== null || typeof newText === Number) {
    newText = newText.replace(/[^0-9,]/gi, "");
    return {
      type: "UPDATE",
      searchData: newText
    };
    // }
  }
  function handleReset() {
    console.log("Reset called");
    return {
      type: "RESET",
      searchData: ""
    };
  }

  return (
    <>
      <h1>Redux SearchBox</h1>
      <input
        type="text"
        value={searchData}
        onChange={(event) => {
          dispatch(handleUpdate(event.target.value));
        }}
      />
      <button
        className="ResetButton"
        onClick={() => {
          dispatch(handleReset());
        }}
      >
        Reset
      </button>
      <div className="table-group">
        <DisplayTables
          heading="ASCENDING"
          tableData={searchData.split(",").sort((a, b) => {
            return a - b;
          })}
        />
        <DisplayTables
          heading="DESCENDING"
          tableData={searchData.split(",").sort((a, b) => {
            return b - a;
          })}
        />
        <DisplayTables
          heading="EVEN NUMBERS"
          tableData={searchData.split(",").filter((value) => value % 2 === 0)}
        />
        <DisplayTables
          heading="ODD NUMBERS"
          tableData={searchData.split(",").filter((value) => value % 2 !== 0)}
        />
      </div>
    </>
  );
}

export { SearchBox };
