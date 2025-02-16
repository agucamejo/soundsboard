import "./App.css"
import { AudioClip } from "./types"
import Drum from "./Drum"
import audio1 from './assets/audio/1MillonIQ.mp3'
import audio2 from './assets/audio/WAITWAIT.mp3'
import audio3 from './assets/audio/ExplosionSaturada.mp3'
import audio4 from './assets/audio/que-rica-cola.mp3'
import audio5 from './assets/audio/tienen-que-cerrar-el-estadio.mp3'
import audio6 from './assets/audio/se-puede-ser-más-boliviano.mp3'
import audio7 from './assets/audio/un-titi-un-pom.mp3'
import audio8 from './assets/audio/ankara-messi.mp3'
import audio9 from './assets/audio/oh-my-god-meme.mp3'
import audio10 from './assets/audio/pipa-pipa-pipa-no-no-no.mp3'
import audio11 from './assets/audio/ahi-va-almiron.mp3'
import audio12 from './assets/audio/argentina-saturado.mp3'
import audio13 from './assets/audio/meri-wey.mp3'
import audio14 from './assets/audio/si-saco-la-gun.mp3'
import audio15 from './assets/audio/arranca-por-la-derecha-el-genio-del-futbol-mundial.mp3'
import audio16 from './assets/audio/hot-sax.mp3'
import audio17 from './assets/audio/ronaldo-siuuuu.mp3'
import audio18 from './assets/audio/que-quieres-que-haga-pereira.mp3'
import audio19 from './assets/audio/cat-laugh-meme.mp3'
import audio20 from './assets/audio/esto-no-es-coca-papi.mp3'
import audio21 from './assets/audio/outro-coscu.mp3'
import audio22 from './assets/audio/pero-la-queria-tanto.mp3'
import audio23 from './assets/audio/conchetumaree.mp3'
import audio24 from './assets/audio/viven-en-country.mp3'
import audio25 from './assets/audio/boee.mp3'
import audio26 from './assets/audio/nashe-coscu.mp3'
import audio27 from './assets/audio/sad-meow-song.mp3'
import { useEffect } from "react"

const audioClips: AudioClip[] = [
  {
    keyTrigger: "Q",
    url: audio1,
    description: "1 MILLON DE IQ",
  },
  {
    keyTrigger: "W",
    url: audio2,
    description: "WAIT WAIT WAIT",
  },
  {
    keyTrigger: "E",
    url: audio3,
    description: "EXPLOSIÓN SATURADA",
  },
  {
    keyTrigger: "R",
    url: audio4,
    description: "QUE RICA COLA",
  },
  {
    keyTrigger: "T",
    url: audio5,
    description: "TENE QUE CERRA EL ESTADIO",
  },
  {
    keyTrigger: "Y",
    url: audio6,
    description: "SE PUEDE SER MÁS BOLIVIANO",
  },
  {
    keyTrigger: "U",
    url: audio7,
    description: "UN TITI UN POM",
  },
  {
    keyTrigger: "I",
    url: audio8,
    description: "ANKARA MESSI",
  },
  {
    keyTrigger: "O",
    url: audio9,
    description: "OH MY GOD MEME",
  },
  {
    keyTrigger: "P",
    url: audio10,
    description: "PIPA PIPA PIPA, NO NO NO",
  },
  {
    keyTrigger: "A",
    url: audio11,
    description: "AHI VA ALMIRON",
  },
  {
    keyTrigger: "S",
    url: audio12,
    description: "ARGENTINA SATURADA",
  },
  {
    keyTrigger: "D",
    url: audio13,
    description: "NO DIGAS MAMADAS MERY WEY",
  },
  {
    keyTrigger: "F",
    url: audio14,
    description: "SI SACO LA GUN",
  },
  {
    keyTrigger: "G",
    url: audio15,
    description: "ARRANCA POR LA DERECHA EL GENIO DEL FÚTBOL MUNDIAL",
  },
  {
    keyTrigger: "H",
    url: audio16,
    description: "HOT SAX",
  },
  {
    keyTrigger: "J",
    url: audio17,
    description: "BICHO SIUUU",
  },
  {
    keyTrigger: "K",
    url: audio18,
    description: "QUE QUIERES QUE HAGA PEREIRA",
  },
  {
    keyTrigger: "L",
    url: audio19,
    description: "CAT LAUGH MEME",
  },
  {
    keyTrigger: "Ñ",
    url: audio20,
    description: "ESTO NO ES COCA PAPI",
  },
  {
    keyTrigger: "Z",
    url: audio21,
    description: "OUTRO COSCU",
  },
  {
    keyTrigger: "X",
    url: audio22,
    description: "XOKAS - PERO LA QUERIA TANTO",
  },
  {
    keyTrigger: "C",
    url: audio23,
    description: "CONCHETUMARE",
  },
  {
    keyTrigger: "V",
    url: audio24,
    description: "VIVEN EN UN COUNTRY",
  },
  {
    keyTrigger: "B",
    url: audio25,
    description: "BOEE LACOBRAA",
  },
  {
    keyTrigger: "N",
    url: audio26,
    description: "NASHE COSCU",
  },
  {
    keyTrigger: "M",
    url: audio27,
    description: "MEOW MEOW MEOW SAD",
  }
]

function App() {
  const playAudio = (e: KeyboardEvent) => {
    if (e.key === " ") {
      // Detiene todos los audios cuando se presiona la barra espaciadora
      audioClips.forEach((clip) => {
        const audioElement = document.getElementById(
          clip.keyTrigger
        ) as HTMLAudioElement;
        if (audioElement) {
          audioElement.pause();
          audioElement.currentTime = 0;
        }
      });
      return;
    }
  
    const clip = audioClips.find(
      (clip) => clip.keyTrigger === e.key.toUpperCase()
    );
    if (!clip) return;
    const audioElement = document.getElementById(
      clip.keyTrigger
    ) as HTMLAudioElement;
    if (audioElement) {
      audioElement.currentTime = 0;
      audioElement.play().catch(console.error);
    }
    document.getElementById("display")!.innerText = clip.description;
  };
  
  useEffect(() => {
    window.addEventListener("keydown", playAudio);
    return () => {
      window.removeEventListener("keydown", playAudio);
    };
  }, []);

  return (
    <div className="container" id="drum-machine">
      <h1>Soundsboard</h1>
      <div className="whole-drum">
        {audioClips.map((clip) => (
          <Drum audioClip={clip} key={clip.keyTrigger} />
        ))}
      </div>
      <div id="display"></div>
    </div>
  );
}

export default App;