export default function DisplayTables({ tableData, heading }) {
    return (
      <table className="table">
        <thead className="table-header">
          {/* <tr> */}
          <th>{heading}</th>
          {/* </tr> */}
        </thead>
        <tbody className="table-body">
          {tableData.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
  