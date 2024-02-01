import styles from "./Keyboard.module.css";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

export function Keyboard() {
  return (
    <div className="grid-cols-auto-fit grid gap-2">
      {KEYS.map((key) => {
        return (
          <button
            className={`aspect-square w-full cursor-pointer border-[3px] border-black p-2 text-4xl font-bold uppercase text-black hover:enabled:bg-sky-400`}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
