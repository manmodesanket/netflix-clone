import React, { createContext, useContext, useState } from "react";
import {
  Container,
  Inner,
  Frame,
  Item,
  Title,
  Header,
  Body,
} from "./styles/accordian";

const ToggleContext = createContext();

const Accordian = ({ children, ...restprops }) => {
  return (
    <Container {...restprops}>
      <Inner>{children}</Inner>
    </Container>
  );
};

Accordian.Frame = function AccordianFrame({ children, ...restprops }) {
  return <Frame {...restprops}>{children}</Frame>;
};

Accordian.Item = function AccordianTitle({ children, ...restprops }) {
  const [toggleShow, setToggleShow] = useState(false);
  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restprops}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordian.Title = function AccordianTtitle({ children, ...restprops }) {
  return <Title {...restprops}>{children}</Title>;
};

Accordian.Header = function AccordionHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  return (
    <Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
      {children}
      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

Accordian.Body = function AccordionBody({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);
  return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};

export default Accordian;
