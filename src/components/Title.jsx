import React from "react";
import styled from "styled-components";

const Title = (props) => {
  const { text } = props;
  return <TitleContainer>{text}</TitleContainer>;
};

const TitleContainer = styled.span`
  font-size: 20px;
`;
