import styled from "styled-components";

export const Container = styled.section``;

export const Title = styled.h1`
  display: block;
  font-size: 1.75rem;
  text-align: center;
  max-width: 640px;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;

  @media (min-width: 650px) {
    font-size: 3.125rem;
  }
`;

export const SubTitle = styled.h2`
  display: block;
  font-size: 1.125rem;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  @media (min-width: 650px) {
    font-size: 1.625rem;
  }
`;
