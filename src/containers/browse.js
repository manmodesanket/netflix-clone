import React, { useEffect, useState } from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import { useFirebase } from "../contexts/firebase";
import { SelectProfileContainer } from "./profiles";
import { FooterContainer } from "./footer";
import { Redirect } from "react-router-dom";
import { Loading } from "../components";

export function BrowseContainer() {
  const { user, setProfile, firebase } = useFirebase();
  const currentUser = firebase.auth().currentUser;

  const [category, setCategory] = useState("series");
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSignout = () => {
    firebase.auth().signOut();
    setProfile(null);
  };

  useEffect(() => {
    if (user != null) {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  });

  if (user) {
    return (
      <>
        {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
        <Header src="joker1" dontShowOnSmallViewPort>
          <Header.Frame>
            <Header.Group>
              <Header.Logo
                to={ROUTES.HOME}
                src="/images/misc/logo.svg"
                alt="Netflix"
              />
              <Header.Link
                active={category === "series" ? "true" : "false"}
                onClick={() => setCategory("series")}
              >
                Series
              </Header.Link>
              <Header.Link
                active={category === "films" ? "true" : "false"}
                onClick={() => setCategory("films")}
              >
                Films
              </Header.Link>
            </Header.Group>
            <Header.Group>
              <Header.Search
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
              <Header.Profile>
                <Header.Picture src={user.photoURL} />
                <Header.Dropdown>
                  <Header.Group>
                    <Header.Picture src={user.photoURL} />
                    <Header.Link>{user.displayName}</Header.Link>
                  </Header.Group>
                  <Header.Group>
                    <Header.Link onClick={handleSignout}>Sign out</Header.Link>
                  </Header.Group>
                </Header.Dropdown>
              </Header.Profile>
            </Header.Group>
          </Header.Frame>

          <Header.Feature>
            <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
            <Header.Text>
              Forever alone in a crowd, failed comedian Arthur Fleck seeks
              connection as he walks the streets of Gotham City. Arthur wears
              two masks -- the one he paints for his day job as a clown, and the
              guise he projects in a futile attempt to feel like he's part of
              the world around him.
            </Header.Text>
            <Header.PlayButton>Play</Header.PlayButton>
          </Header.Feature>
        </Header>
        <FooterContainer />
      </>
    );
  } else {
    return <Redirect to={ROUTES.HOME} />;
  }
}
