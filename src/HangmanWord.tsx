type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
};

export function HangmanWord({ guessedLetters, wordToGuess }: HangmanWordProps) {
  return (
    <div className="flex gap-8 font-mono text-8xl font-bold uppercase">
      {wordToGuess.split("").map((letter, index) => (
        <span className="border-b-8 border-black" key={index}>
          <span
            className={
              guessedLetters.includes(letter) ? "visible" : "invisible"
            }
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
