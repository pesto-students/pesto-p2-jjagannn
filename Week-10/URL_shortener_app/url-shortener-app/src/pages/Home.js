import React, { useState } from "react";
// import ShowLoader from "./ShowLoader";
import Loader from "react-loader-spinner";

const Home = () => {
  const [url, setUrl] = useState("");
  const [shortInfo, setShortInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  // const [showUrlInfo, setShowUrlInfo] = useState([]);

  const handleShorten = () => {
    if (url === "") {
      alert("Please enter url");
    }
    handleAsyncFetch();
  };

  const updateUrl = (e) => {
    setUrl(e.target.value);
  };

  const handleAsyncFetch = async () => {
    // try {
    // console.log(window.device.version);
    console.log("started");
    setIsLoading(!isLoading);
    let shortenedData = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${url}`
    );
    console.log(shortenedData);
    let shortData = await shortenedData.json();
    console.log(shortData);
    if (shortData.ok) {
      setShortInfo(shortData.result);
      console.log("Set completed!");
      console.log(shortInfo);
    } else if (shortData.ok === false) {
      setShortInfo({
        full_short_link: shortData.error,
        code: `Error code --> ${shortData.error_code}`
      });
    }
    setIsLoading(!isLoading);
    // } catch (err) {
    //   console.log(`Error: ${err}`);
    // }
  };

  const showUrlInfo = [shortInfo].map((data, i) => {
    return (
      <>
        <h3 key={i}>Short link: {data["full_short_link"]} </h3>
        <h3>Link code: {data["code"]} </h3>
      </>
    );
  });

  return (
    <>
      <h1>Viewing home content</h1>
      <input
        type="url"
        name="url"
        value={url}
        onChange={updateUrl}
        placeholder="Type url..."
      />
      <button onClick={handleShorten}>Shorten</button>
      {/* {isLoading && (
        <Loader height="100" width="100" color="grey" ariaLabel="loading" />
        // <ShowLoader isLoading={isLoading} item={shortInfo}></ShowLoader>
      )} */}
      <h2>{showUrlInfo}</h2>
      {/* <h2>{showUrlInfo}</h2> */}
    </>
  );
};

export default Home;
