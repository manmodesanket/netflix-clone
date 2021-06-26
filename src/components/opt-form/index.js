import React from "react";
import {
  Container,
  Form,
  Input,
  Button,
  Header,
  SubHeader,
  Text,
} from "./styles/opt-form";

function OptForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

OptForm.Form = ({ ...restProps }) => {
  return <Form {...restProps}></Form>;
};

OptForm.Input = ({ ...restProps }) => {
  return <Input {...restProps} />;
};

OptForm.Button = ({ children, ...restProps }) => {
  return (
    <Button {...restProps}>
      {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

OptForm.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

export default OptForm;
