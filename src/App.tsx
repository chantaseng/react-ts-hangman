import { useState } from "react";
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";
import words from "./wordList.json";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  console.log(wordToGuess);
  return (
    <>
      <div className="mx-auto my-0 flex max-w-5xl flex-col items-center gap-8">
        <div className="text-center text-3xl">Lose Win</div>
        <HangmanDrawing />
        <HangmanWord />
        <Keyboard />
      </div>
    </>
  );
}

export default App;
