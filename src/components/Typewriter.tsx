import { useEffect, useState } from "react";

/** Digita e apaga frases em loop. */
const Typewriter = ({ words }: { words: string[] }) => {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const t = setTimeout(
      () => {
        if (!del) {
          setText(word.slice(0, text.length + 1));
          if (text.length + 1 === word.length) setTimeout(() => setDel(true), 1200);
        } else {
          setText(word.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDel(false);
            setI((n) => n + 1);
          }
        }
      },
      del ? 35 : 80,
    );
    return () => clearTimeout(t);
  }, [text, del, i, words]);

  return (
    <span>
      {text}
      <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-primary align-middle">&nbsp;</span>
    </span>
  );
};

export default Typewriter;
