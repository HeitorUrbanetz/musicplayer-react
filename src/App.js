import React, {useEffect, useState} from "react";
import Player from "./components/Player";

function App() {
  const [songs] = useState([
    {
      title: "The Trooper",
      artist: "Iron Maiden",
      img_src: "./images/the-trooper.jpg",
      src: "./music/the-trooper.mp3"
    },
    {
      title: "Paranoid",
      artist: "Black Sabbath",
      img_src: "./images/paranoid.jpg",
      src: "./music/paranoid.mp3"
    },
    {
      title: "Master of puppets",
      artist: "Metallica",
      img_src: "./images/master-of-puppets.jpg",
      src: "./music/master-of-puppets.mp3"
    },
    {
      title: "Fear of the dark",
      artist: "Iron Maiden",
      img_src: "./images/fear-of-the-dark.jpg",
      src: "./music/fear-of-the-dark.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentIndex] = useState(0);
  const [nextSongIndex, setNextIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1
      }
    })
  }, [currentSongIndex])

  return (
    <div className="App">
     <Player 
      currentSongIndex={currentSongIndex}
      setCurrentIndex={setCurrentIndex}
      nextSongIndex={nextSongIndex}
      songs={songs}/>
    </div>
  );
}

export default App;

