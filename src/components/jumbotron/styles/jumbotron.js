import styled from "styled-components";

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${(props) => props.direction};
  max-width: 1100px;
  margin: auto;
  padding: 1em;
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

export const Item = styled.div`
  display: flex;
  color: white;
  border-bottom: 8px solid #222;
  overflow: hidden;
`;

export const Pane = styled.div`
  width: 50%;
  @media (max-width: 650px) {
    width: 100%;
    text-align: center;
  }
`;

export const Container = styled.section`
  background-color: black;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 3rem;
  line-height: 1.1;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    font-size: 2.2rem;
  }
`;

export const SubTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: normal;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
