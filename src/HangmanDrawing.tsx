const HEAD = (
  <div className="absolute right-[-20px] top-[50px] h-[50px] w-[50px] rounded-[100%] border-[10px] border-black" />
);

const BODY = (
  <div className="absolute right-0 top-[100px] h-[100px] w-2.5 bg-black" />
);

const LEFT_ARM = (
  <div className="absolute right-[10px] top-[130px] h-2.5 w-[80px] origin-bottom-right rotate-[30deg] bg-black" />
);

const RIGHT_ARM = (
  <div className="absolute right-[-80px] top-[130px] h-2.5 w-[80px] origin-bottom-left -rotate-[30deg] bg-black" />
);

const LEFT_LEG = (
  <div className="absolute right-[3px] top-[190px] h-2.5 w-[100px] origin-bottom-right -rotate-45 bg-black" />
);

const RIGHT_LEG = (
  <div className="absolute right-[-92px] top-[190px] h-2.5 w-[100px] origin-bottom-left rotate-45 bg-black" />
);

export function HangmanDrawing() {
  return (
    <div className="relative">
      {HEAD}
      {BODY}
      {LEFT_ARM}
      {RIGHT_ARM}
      {LEFT_LEG}
      {RIGHT_LEG}
      <div className="absolute right-0 top-0 h-[50px] w-2.5 bg-black" />
      <div className="ml-[120px] h-2.5 w-[200px] bg-black" />
      <div className="ml-[120px] h-[400px] w-2.5 bg-black" />
      <div className="h-2.5 w-[250px] bg-black" />
    </div>
  );
}
