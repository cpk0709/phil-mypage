import React from "react";
import { useParams } from "react-router-dom";

export default ({ textValue, ...props }) => {
  const test = useParams();
  console.log(test);
  console.log(props);
  return <div>Cat Page {textValue}</div>;
};
