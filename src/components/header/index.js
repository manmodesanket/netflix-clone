import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Background, Container, Logo, ButtonLink } from "./styles/header";

const Header = ({ bg = true, children, ...restprops }) => {
  return bg ? <Background {...restprops}>{children}</Background> : children;
};

Header.Frame = ({ children, ...restprops }) => {
  return <Container {...restprops}>{children}</Container>;
};

Header.Logo = ({ to, children, ...restprops }) => {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restprops} />
    </ReactRouterLink>
  );
};

Header.ButtonLink = ({ children, ...restProps }) => {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

export default Header;
