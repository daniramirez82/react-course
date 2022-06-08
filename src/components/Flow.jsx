import React from 'react';
import './Flow.css';

export default function Flow() {
  return (
    <div className="wrapper-flow">
      <div className="flow">
        <div className="ball-1 ball">
          <img
            className="ball-1-svg"
            src="img/ellipse1.svg"
            alt="ellipse"
          />
          <img className="check-1-svg" src="img/check.svg" alt="ellipse" />
        </div>
        <div className="line-1">
          <img src="img/line.svg" className="line-1-line-svg" alt="line" />
        </div>
        <div className="ball-2 ball">
          <img
            className="ball-1-svg"
            src="img/ellipse1.svg"
            alt="ellipse"
          />
          <img className="check-1-svg" src="img/check.svg" alt="ellipse" />

        </div>
        <div className="line-1">
          <img src="img/line.svg" className="line-1-line-svg" alt="line" />

        </div>
        <div className="ball-3">
          <div className="circle-3">
            <span className="number-3">3</span>
          </div>
        </div>
        <div className="line-1">
          <img src="img/line-dot.svg" className="line-1-line-svg" alt="line" />

        </div>
        <div className="ball-4">
          <div className="circle-4">
            <span className="number-3">4</span>
          </div>
        </div>
      </div>
    </div>
  );
}
