import styled from "styled-components";

const Label = ({ children, ...props }) => {
  return <LabelSpan>{children}</LabelSpan>;
};

export default Label;

const LabelSpan = styled.div`
  font-size: 15px;
  line-height: 19px;
  font-weight: 700;
  margin-bottom: 8px;
`;
