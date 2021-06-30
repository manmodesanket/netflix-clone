import React, { useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Group,
  Background,
  Container,
  Text,
  Link,
  Logo,
  ButtonLink,
  Feature,
  FeatureCallOut,
  PlayButton,
  Search,
  SearchIcon,
  SearchInput,
  Profile,
  Picture,
  Dropdown,
} from "./styles/header";

const Header = ({ bg = true, children, ...restprops }) => {
  return bg ? <Background {...restprops}>{children}</Background> : children;
};

Header.Frame = ({ children, ...restprops }) => {
  return <Container {...restprops}>{children}</Container>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Header.Search = function HeaderSearch({
  searchTerm,
  setSearchTerm,
  ...restProps
}) {
  const [searchActive, setSearchActive] = useState();
  return (
    <Search {...restProps}>
      <SearchIcon onClick={() => setSearchActive(!searchActive)}>
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Search files and series"
        active={searchActive}
      />
    </Search>
  );
};

Header.Logo = ({ to, children, ...restprops }) => {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restprops} />
    </ReactRouterLink>
  );
};

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Header.Link = function HeaderLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Header.ButtonLink = ({ children, ...restProps }) => {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({
  children,
  ...restProps
}) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
  return <PlayButton {...restProps}>{children}</PlayButton>;
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};

Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};

Header.Dropdown = function HeaderDRopdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};
export default Header;
