import React from "react";
import { Link } from "react-router-dom";

export default ({ text }) => {
  return (
    <div>
      <div>Home Page {text}</div>
      <Link to="/dog">move to dog</Link>
    </div>
  );
};
