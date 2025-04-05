import React from "react";
import { THRESHOLD } from "../constants";

const ProgressBar = ({ subtotal }) => {
  const progress = Math.min((subtotal / THRESHOLD) * 100, 100);
  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      {subtotal < THRESHOLD && (
        <p>₹{THRESHOLD - subtotal} more to unlock a free gift!</p>
      )}
    </div>
  );
};

export default ProgressBar;
