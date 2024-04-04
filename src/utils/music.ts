import music from "./music.json";

type TrackName = keyof typeof music;

export const getMusicPath = (trackName: TrackName) => {
  return music[trackName];
};
