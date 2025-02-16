import { AudioClip } from "./types";

interface DrumProps {
  audioClip: AudioClip;
}

const Drum = ({ audioClip }: DrumProps) => {
  const playSound = (clip: AudioClip) => {
    (document.getElementById(clip.keyTrigger) as HTMLAudioElement)
      .play()
      .catch(console.error);

    document.getElementById("display")!.innerText = clip.description;
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === " ") {
      e.preventDefault();
    }
  };

  return (
    <button
      className="drum-pad"
      id={`drum-${audioClip.keyTrigger}`}
      onClick={() => playSound(audioClip)}
      onKeyDown={handleKeyDown}
    >
      <audio src={audioClip.url} id={audioClip.keyTrigger} className="clip"  />
      {audioClip.keyTrigger}
    </button>
  );
};

export default Drum;
