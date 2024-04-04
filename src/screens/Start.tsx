import React from "react";
import styled from "styled-components";

const Start = ({
  setScreen,
}: {
  setScreen: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "40vh",
        justifyContent: "space-between",
        paddingTop: "20vh",
      }}
    >
      <StartButton onClick={() => setScreen("timerGame")}>Start</StartButton>
      <StartButton onClick={() => setScreen("timerGameHard")}>
        Start Hard
      </StartButton>
      <StartButton onClick={() => setScreen("timerGameExtraHard")}>
        Start Extra Hard
      </StartButton>
    </div>
  );
};

export default Start;

export const StartButton = styled.button`
  height: 10vh;
  font-size: 2.5em;
`;
