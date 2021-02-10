import React from "react";
import "./ProgressBar.css";

interface Props {}

const ProgressBar = (props: Props) => {
  return (
    <div>
      <div className="wrapper">
        <div className="progress-bar">
          <span className="progress-bar-fill" style={{ width: "70%" }}></span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
