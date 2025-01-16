import React from "react";
import PuffLoader from "react-spinners/PuffLoader";
import "./Spinner.scss";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Spinner = () => {
  return (
    <div
      className="spinner d-flex justify-content-center align-items-center"
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        background: "#fcf4ff",
        zIndex: 9999,
      }}
    >
      <PuffLoader
        cssOverride={override}
        color={"#8815ae"}
        loading={true}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Spinner;
