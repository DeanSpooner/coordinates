import { StartButton } from "./Start";

const ScoreScreen = ({
  setScreen,
  finalScore,
}: {
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  finalScore: number;
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
      <p style={{ fontSize: "1.5em" }}>
        Your final score is: <strong>{finalScore}</strong>
      </p>
      <StartButton onClick={() => setScreen("start")}>Return home</StartButton>
    </div>
  );
};

export default ScoreScreen;
