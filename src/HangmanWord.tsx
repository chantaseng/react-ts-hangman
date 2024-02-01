type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

export function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) {
  return (
    <div className="flex gap-8 font-mono text-8xl font-bold uppercase">
      {wordToGuess.split("").map((letter, index) => (
        <span className="border-b-8 border-black" key={index}>
          <span
            className={`
            ${
              guessedLetters.includes(letter) || reveal
                ? "visible"
                : "invisible"
            }

            ${!guessedLetters.includes(letter) && reveal ? "text-red-600" : "text-black"}
            `}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
