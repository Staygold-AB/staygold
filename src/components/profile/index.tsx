import clsx from "clsx";
import { Container } from "components/container";
import { useEffect, useState, type HTMLAttributes } from "react";
import { profile } from "./profile";

type TypewriterProps = HTMLAttributes<HTMLElement> & {
  paragrahps: string[];
  speed?: number;
};

function Cursor({
  active = true,
}: HTMLAttributes<HTMLElement> & { active?: boolean }) {
  return (
    <span
      className={clsx(
        "bg-current shadow-[0_0_.5em] shadow-current",
        active && "animate-blink",
      )}
    >
      |
    </span>
  );
}

function Typewriter({ paragrahps, speed = 100, ...rest }: TypewriterProps) {
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

export function Profile() {
  return (
    <article className="min-h-dvh place-content-center place-items-center bg-zinc-950 text-green-400 text-shadow-[0_0_.5em]">
      <Container className="max-w-4xl">
        <h1 className="text-center">
          <pre
            aria-label="Patrick Chan"
            className="text-xs leading-none font-black sm:text-lg"
          >
            {` ____       _        _      _       ____ _                 
|  _ \\ __ _| |_ _ __(_) ___| | __  / ___| |__   __ _ _ __  
| |_) / _\` | __| '__| |/ __| |/ / | |   | '_ \\ / _\` | '_ \\ 
|  __/ (_| | |_| |  | | (__|   <  | |___| | | | (_| | | | |
|_|   \\__,_|\\__|_|  |_|\\___|_|\\_\\  \\____|_| |_|\\__,_|_| |_|`}
          </pre>
        </h1>
        <div className="relative mt-8 sm:text-2xl">
          <div className="space-y-4 opacity-0">
            {profile.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <Typewriter
            aria-hidden
            paragrahps={profile}
            speed={10}
            className="absolute inset-0 space-y-4"
          />
        </div>
      </Container>
    </article>
  );
}
