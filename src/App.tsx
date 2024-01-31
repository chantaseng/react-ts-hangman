import { useState } from "react";
import words from "./wordList.json";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  console.log(wordToGuess);
  return (
    <>
      <h1 className="relative text-3xl font-bold text-yellow-300 underline">
        Hiiiiii
      </h1>
    </>
  );
}

export default App;
