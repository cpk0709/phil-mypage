import styled from "styled-components";

const CheckBox = ({ children, checked, onChange }) => {
  return (
    <CheckBoxLabelWrapper>
      <CheckBoxInput
        type={"checkbox"}
        checked={checked}
        onChange={({ target: { checked } }) => onChange(checked)}
      />
      {children}
    </CheckBoxLabelWrapper>
  );
};

export default CheckBox;

const CheckBoxLabelWrapper = styled.label`
  display: flex;
  align-items: center;
`;

const CheckBoxInput = styled.input`
  margin-right: 10px;
`;
