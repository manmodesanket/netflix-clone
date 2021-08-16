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
  const [toggleShow, setToggleShow] = useState({ id: -1 });
  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Frame {...restprops}>{children}</Frame>
    </ToggleContext.Provider>
  );
};

Accordian.Item = function AccordianTitle({ children, ...restprops }) {
  return <Item {...restprops}>{children}</Item>;
};

Accordian.Title = function AccordianTtitle({ children, ...restprops }) {
  return <Title {...restprops}>{children}</Title>;
};

Accordian.Header = function AccordionHeader({
  children,
  itemId,
  ...restProps
}) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  const handleItemBody = () => {
    if (toggleShow.id !== itemId) {
      const toggleObj = { id: itemId };
      setToggleShow(toggleObj);
    } else if (toggleShow.id === itemId) {
      const toggleObj = { id: -1 };
      setToggleShow(toggleObj);
    }
  };

  return (
    <Header onClick={() => handleItemBody()} {...restProps}>
      {children}
      {toggleShow.id === itemId.id ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

Accordian.Body = function AccordionBody({ children, itemId, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);
  return toggleShow.id === itemId ? (
    <Body {...restProps}>{children}</Body>
  ) : null;
};

export default Accordian;
