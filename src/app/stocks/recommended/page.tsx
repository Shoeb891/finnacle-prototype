"use client";

import React, { useState } from "react";

type Props = {};

const Recommended = (props: Props) => {
  const [input, setInput] = useState(0);
  const stocks = [
    1141.3929443359, 3199.4526367188, 1105.0306396484, 1786.8155517578,
    4233.8818359375, 465.1791381836, 1059.6761474609, 421.9351196289,
    1710.9089355469, 126.5522155762, 1544.3348388672, 611.8457641602,
    1087.6556396484, 139.6662597656, 3616.9252929688, 751.9565429688,
    213.7019348145, 92.0915908813, 2311.9580078125, 1719.7713623047,
    1567.5357666016, 1335.3165283203, 2536.0649414062, 2542.7668457031,
    2659.048828125, 3505.9028320312, 4011.0234375, 3898.2211914062,
    3064.1267089844, 4541.244140625, 506.2456970215, 338.5391540527,
    537.7581787109,
  ];

  let recommendedStocks = [];
  for (let i = 0; i < stocks.length; i++) {
    if (stocks[i] < input) {
      recommendedStocks.push(stocks[i]);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setInput(e.value);
  }

  return (
    <div>
      <input
        className="mx-[275px] my-16 text-black"
        type="text"
        placeholder="Enter your budget"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      {recommendedStocks.map((stock) => (
        // eslint-disable-next-line react/jsx-key
        <div className="mx-[275px] my-16">
          <p>{stock}</p>
        </div>
      ))}
    </div>
  );
};

export default Recommended;
