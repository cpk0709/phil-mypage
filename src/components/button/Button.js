import styled from "styled-components";

const Button = ({ buttonTitle, children, isDisabled = false }) => {
  <CustomButton>{children}</CustomButton>;
};

const CustomButton = styled.button`
  width: 50px;
  height: 20px;
`;

export default Button;
