import "./App.css";
import { ReactComponent as Icon } from "../src/images/icon-star.svg";
import { data } from "../src/data.js";
import minus_image from "../src/images/icon-minus.svg";
import plus_image from "../src/images/icon-plus.svg";
import React, { useState } from "react";

export default function App() {
  const [open, setOpen] = useState(true);
  const handleClick = function () {
    setOpen();
  };
  return (
    <div className="card">
      <Header />
      <FaqsComponent prop={open} onToggle={handleClick} />
    </div>
  );
}

const Header = function () {
  return (
    <div className="navi">
      <Icon />
      <h1>FAQs</h1>
    </div>
  );
};

const FaqsComponent = function ({ onToggle, prop }) {
  return data.map((list) => (
    <>
      <div className="list">
        <ul>
          <li key={list.id} className="question">
            {list.question}
          </li>
          <li className="answer" style={{ display: "none" }}>
            {list.answer}
          </li>
        </ul>
        <button type="button" onClick={onToggle}>
          <img src={prop ? plus_image : minus_image} alt="plus_button" />
        </button>
      </div>
      <hr />
    </>
  ));
};
