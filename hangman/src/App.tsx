import { useState } from "react";
import words from "./wordList.json";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]; //This chooses a random index from 0 to the length of words (not including it), then returns the element at that index.
  });

  //Array of strings
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  return (
    <div
      style={{
        maxWidth: "800px", //Limits the width to 800 pixels.
        display: "flex", //Makes the container flexbox.
        flexDirection: "column", // Arranges the elements one below the other.
        gap: "2rem", //2 rem spacing between elements.
        margin: "0 auto", // Centers the container in the middle of the screen.
        alignItems: "center", //Aligns the elements in the center.
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}>Lose Win</div>
      <HangmanDrawing />
      <HangmanWord />
      <Keyboard />
    </div>
  );
}

export default App;
