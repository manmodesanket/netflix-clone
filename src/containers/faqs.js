import React from "react";
import { Accordian, OptForm } from "../components";
import faqData from "../fixtures/faqs.json";

export const FaqContainer = function () {
  return (
    <Accordian>
      <Accordian.Title>Frequently Asked Questions</Accordian.Title>
      <Accordian.Frame>
        {faqData.map((item) => (
          <Accordian.Item key={item.id}>
            <Accordian.Header itemId={item.id}>{item.header}</Accordian.Header>
            <Accordian.Body itemId={item.id}>{item.body}</Accordian.Body>
          </Accordian.Item>
        ))}
      </Accordian.Frame>

      <OptForm>
        <OptForm.Text>
          Ready to watch? Enter your email to create or restart your membership.
        </OptForm.Text>
        <OptForm.Form>
          <OptForm.Input placeholder={"Email address"} />
          <OptForm.Button>
            <span>Get Started</span>
          </OptForm.Button>
        </OptForm.Form>
      </OptForm>
    </Accordian>
  );
};
