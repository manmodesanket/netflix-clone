import styled from "styled-components";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 4rem 4rem 3rem;
  margin: 1rem auto 1rem;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  color: white;

  @media (min-width: 1100px) {
    width: 40%;
  }
`;

export const Error = styled.div``;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

export const Text = styled.h1``;

export const TextSmall = styled.h2``;

export const Link = styled(ReactRouterLink)`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Input = styled.input`
  background: #333;
  border-radius: 4px;
  border: 0;
  color: #fff;
  height: 50px;
  line-height: 50px;
  padding: 0.4rem 1.25rem;
  margin-bottom: 1.25rem;

  &:last-of-type {
    margin-bottom: 30px;
  }
`;

export const Submit = styled.button`
  background: #e50914;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  margin: 1.5rem 0 0.75rem;
  padding: 1rem;
  border: 0;
  color: white;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }
`;
