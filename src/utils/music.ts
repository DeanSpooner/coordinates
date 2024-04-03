import music from "./music.json";

type TrackName = keyof typeof music;

// Determine the base path dynamically based on the environment
const basePath = process.env.NODE_ENV === "development" ? "public/" : "./";

export const getMusicPath = (trackName: TrackName) => {
  return `${basePath}${music[trackName]}`;
};
