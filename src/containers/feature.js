import React from "react";
import { Feature } from "../components";

export const FeatureContainer = function ({ title, subtitle }) {
  return (
    <Feature>
      <Feature.Title>{title}</Feature.Title>
      <Feature.SubTitle>{subtitle}</Feature.SubTitle>
    </Feature>
  );
};
