import React from "react";
import { FaqContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";
import { FeatureContainer } from "../containers/feature";
import { JumbotronContainer } from "../containers/jumbotron";
import { HeaderContainer } from "../containers/header";
import { OptForm } from "../components";
import { Redirect } from "react-router-dom";
import { useFirebase } from "../contexts/firebase";
import * as ROUTES from "../constants/routes";

const Home = () => {
  const { user } = useFirebase();

  if (user?.displayname) {
    return <Redirect to={ROUTES.BROWSE} />;
  } else {
    return (
      <>
        <HeaderContainer>
          <OptForm>
            <FeatureContainer
              title={"Unlimited movies, TV shows and more."}
              subtitle={"Watch anywhere. Cancel anytime."}
            />
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </OptForm.Text>
            <OptForm.Form width={90}>
              <OptForm.Input placeholder={"Email address"} />
              <OptForm.Button>
                <span>Get Started</span>
              </OptForm.Button>
            </OptForm.Form>
          </OptForm>
        </HeaderContainer>
        <JumbotronContainer />
        <FaqContainer />
        <FooterContainer />
      </>
    );
  }
};

export default Home;
