import React from "react";
import { Accordian } from "../components";
import faqData from "../fixtures/faqs.json";

export const FaqContainer = function () {
  return (
    <Accordian>
      <Accordian.Title>Frequently Asked Questions</Accordian.Title>
      <Accordian.Frame>
        {faqData.map((item) => (
          <Accordian.Item key={item.id}>
            <Accordian.Header>{item.header}</Accordian.Header>
            <Accordian.Body>{item.body}</Accordian.Body>
          </Accordian.Item>
        ))}
      </Accordian.Frame>
    </Accordian>
  );
};
