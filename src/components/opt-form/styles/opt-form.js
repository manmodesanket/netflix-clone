import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
`;

export const Form = styled.form`
  width: 100%;
  margin-top: 1em;

  @media (min-width: 650px) {
    display: flex;
    flex-direction: row;
    width: 40%;
    justify-content: center;
  }
`;

export const Input = styled.input`
  height: 48px;
  padding: 10px 10px;
  margin: 0.5em 0;
  border: 1px solid #8c8c8c;
  border-radius: 2px;
  font-size: 1rem;
  width: 100%;
  @media (min-width: 650px) {
    width: 70%;
    border: 0;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  min-height: 48px;
  width: auto;

  color: white;
  background: #e50914;

  padding: 0 1em;
  margin: 0.5em auto;

  font-size: 1rem;
  font-weight: 400;

  border: 0;
  border-radius: 2px;

  cursor: pointer;

  img {
    filter: brightness(0) invert(1);
    width: 10px;
  }

  @media (min-width: 650px) {
    margin: 0.5em 0;
    border-radius: 0;
  }
`;

export const Text = styled.p`
  font-size: 1.2rem;
  text-align: center;
`;
