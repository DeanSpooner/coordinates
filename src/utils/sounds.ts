import sounds from "./sounds.json";

type SoundName = keyof typeof sounds;

export const playSound = (soundName: SoundName, volume?: number) => {
  const soundPath = sounds[soundName];

  const audio = new Audio(soundPath);

  audio.volume = volume ?? 1;

  audio.play();
};
