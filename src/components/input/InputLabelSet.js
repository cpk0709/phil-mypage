import React from "react";
import styled from "styled-components";
import Label from "../Label";

const InputLabelSet = ({ label, children }) => {
  return (
    <div>
      <Label>{label}</Label>
      {children}
    </div>
  );
};

export default InputLabelSet;

// const Container = styled.div`

// `;
