const ScoreScreen = ({
  setScreen,
  finalScore,
}: {
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  finalScore: number;
}) => {
  return (
    <div>
      <p>
        Your final score is: <strong>{finalScore}</strong>
      </p>
      <button onClick={() => setScreen("start")}>Return home</button>
    </div>
  );
};

export default ScoreScreen;
