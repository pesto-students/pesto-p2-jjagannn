// import { useState } from "react";
import Loader from "react-loader-spinner";

const ShowLoader = ({ item, isLoading }) => {

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
