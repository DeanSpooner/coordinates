import sounds from "./sounds.json";

type SoundName = keyof typeof sounds;

export const playSound = (soundName: SoundName) => {
  const sound = new Howl({
    src: [sounds[soundName]],
  });

  return sound.play();
};
