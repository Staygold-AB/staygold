import { useEffect, useState, type HTMLAttributes } from "react";
import { Cursor } from "./Cursor";

export type TypewriterProps = HTMLAttributes<HTMLElement> & {
  paragrahps: string[];
  speed?: number;
};

export function Typewriter({
  paragrahps,
  speed = 100,
  ...rest
}: TypewriterProps) {
  const [typed, setTyped] = useState<string[]>(() => paragrahps.map(() => ""));

  const paragraphIndex = typed.findIndex((paragraph, index) => {
    return paragraph.length !== paragrahps[index].length;
  });

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | null = null;

    if (paragraphIndex >= 0) {
      timeout = setTimeout(() => {
        setTyped((prev) => {
          const next = [...prev];

          next[paragraphIndex] = paragrahps[paragraphIndex].slice(
            0,
            next[paragraphIndex].length + 1,
          );

          return next;
        });
      }, speed);
    }

    return () => {
      if (timeout !== null) {
        clearTimeout(timeout);
      }
    };
  }, [typed]);

  return (
    <div {...rest}>
      {typed.map((text, index, arr) => (
        <p key={index}>
          {text}
          {(index === paragraphIndex ||
            (paragraphIndex === -1 && index === arr.length - 1)) && (
            <Cursor active={paragraphIndex === -1} />
          )}
        </p>
      ))}
    </div>
  );
}
