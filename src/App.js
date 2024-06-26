import "./App.css";
import { ReactComponent as Icon } from "../src/images/icon-star.svg";
import { data } from "../src/data.js";
import minus_image from "../src/images/icon-minus.svg";
import plus_image from "../src/images/icon-plus.svg";
import React, { useState } from "react";

function App() {
  const [click, setClick] = useState(null);
  const toggle = (i) => {
    if (click == i) {
      return setClick(null);
    }
    setClick(i);
  };
  return (
    <div className="card">
      <div className="navi">
        <Icon />
        <h1>FAQS</h1>
      </div>
      <div>
        {data.map((item, i) => (
          <React.Fragment key={i}>
            <div className="content">
              <div>{item.question}</div>
              <span onClick={() => toggle(i)}>
                <img src={click == i ? minus_image : plus_image} />
              </span>
            </div>
            <div className={click === i ? "answer" : "hidden"}>
              {item.answer}{" "}
            </div>
            <hr />
          </React.Fragment>
        ))}
      </div>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.frontendmentor.io/profile/Kaung-Thant-Soe">
          Kaung Thant Soe{" "}
        </a>
        .
      </div>
    </div>
  );
}
export default App;
