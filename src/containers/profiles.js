import React from "react";
import { Header, Profiles } from "../components";
import * as ROUTES from "../constants/routes";
import { useAuth } from "../contexts/AuthContext";

export function SelectProfileContainer() {
  const { user, setProfile } = useAuth();

  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo
            to={ROUTES.HOME}
            src="/images/misc/logo.svg"
            alt="Netflix"
          />
        </Header.Frame>
        <Profiles>
          <Profiles.Title>Who's watching?</Profiles.Title>
          <Profiles.List>
            <Profiles.User>
              <Profiles>
                <Profiles.List>
                  <Profiles.User
                    onClick={() =>
                      setProfile({
                        ...user,
                        photoURL: user.photoURL,
                      })
                    }
                  >
                    <Profiles.Picture src={user.photoURL} />
                    <Profiles.Name>{user.displayName}</Profiles.Name>
                  </Profiles.User>
                </Profiles.List>
              </Profiles>
            </Profiles.User>
          </Profiles.List>
        </Profiles>
      </Header>
    </>
  );
}
