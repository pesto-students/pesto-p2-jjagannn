// import { useState } from "react";
import Loader from "react-loader-spinner";

const ShowLoader = ({ item, isLoading }) => {
  // const [showUrlInfo, setShowUrlInfo] = useState([]);

  // const showUrlInfo = items.map((data, i) => {
  //   return (
  //     <>
  //       <h3 key={i}>Short link: {data["full_short_link"]} </h3>
  //       <h3>Link code: {data["code"]} </h3>
  //     </>
  //   );
  // });

  console.log(item);
  console.log(isLoading);
  return isLoading ? (
    <Loader height="100" width="100" color="grey" ariaLabel="loading" />
  ) : (
    <section className="frame">
      <h3>Short link: {item["full_short_link"]} </h3>
      <h3>Link code: {item["code"]} </h3>
    </section>
  );
};

export default ShowLoader;
