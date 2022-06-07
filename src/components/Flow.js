import React from "react";
import "./Flow.css";

export default function Flow() {
  return (
    <div className="wrapper">
      <div className="flow">
        <div className="ball-1 ball">
          <img
            className="ball-1-svg"
            src="img/ellipse1.svg"
            alt="ellipse"
          ></img>
          <img className="ball-1-svg" src="img/check.svg" alt="ellipse"></img>
        </div>
        <div className="line-1">
          <div className="innerLine"></div>
        </div>
        <div className="ball-2">
          <img
            className="ball-1-svg"
            src="img/ellipse1.svg"
            alt="ellipse"
          ></img>
        </div>
        <div className="line-2">
          <div className="innerLine"></div>
        </div>
        <div className="ball-3">
          <img
            className="ball-1-svg"
            src="img/ellipse1.svg"
            alt="ellipse"
          ></img>
        </div>
        <div className="line-3">
          <div className="innerLine"></div>
        </div>
        <div className="ball-4">
          <img
            className="ball-1-svg"
            src="img/ellipse1.svg"
            alt="ellipse"
          ></img>
        </div>
      </div>
    </div>
  );
}
