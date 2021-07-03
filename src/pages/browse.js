import React from "react";
import { BrowseContainer } from "../containers/browse";
import { useContent } from "../hooks";
import { selectionMap } from "../utils";

const Browse = () => {
  const { films } = useContent("films");
  const { series } = useContent("series");
  const slides = selectionMap({ series, films });

  console.log(slides);

  return <BrowseContainer />;
};

export default Browse;
