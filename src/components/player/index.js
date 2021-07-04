import React, { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom";
import { Close, Container, Button, Overlay, Inner } from "./styles/player";

const PlayerContext = createContext();

const Player = ({ children, ...restprops }) => {
  const [showPlayer, setShowPlayer] = useState(false);
  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container>{children}</Container>
    </PlayerContext.Provider>
  );
};

Player.Video = () => {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay onClick={() => setShowPlayer(false)}>
          <Inner>
            <video id="netflix-player" controls>
              <source src="/videos/bunny.mp4" type="video/mp4" />
            </video>
            <Close />
          </Inner>
        </Overlay>,
        document.body
      )
    : null;
};

Player.Button = function PlayerButton({ ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return <Button onClick={() => setShowPlayer(!showPlayer)}>Play</Button>;
};

export default Player;
