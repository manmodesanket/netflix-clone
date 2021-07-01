import React from "react";
import { LockBody, ReleaseBody, Spinner, Picture } from "./styles/loading";

const Loading = ({ src, ...restProps }) => {
  return (
    <Spinner>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} />
    </Spinner>
  );
};

Loading.ReleaseBody = () => {
  return <ReleaseBody />;
};

export default Loading;
