export function HangmanWord() {
  const word = "lohpoh";
  const guessedLetters = ["l", "h"];

  return (
    <div className="flex gap-8 font-mono text-8xl font-bold uppercase">
      {word.split("").map((letter, index) => (
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
