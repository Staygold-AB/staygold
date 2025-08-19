import { Container } from "components";
import { useEffect, useState } from "react";
import { bio } from "./bio";
import { Cursor } from "./Cursor";
import { Typewriter } from "./Typewriter";

export function Profile() {
  const [startTyping, setStartTyping] = useState(false);
  const [isFontsReady, setIsFontsReady] = useState(false);

  document.fonts.ready.then(() => {
    setIsFontsReady(true);
  });

  useEffect(() => {
    if (!isFontsReady) {
      return;
    }

    const timeout = setTimeout(() => {
      setStartTyping(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [isFontsReady]);

  return (
    <article className="min-h-dvh place-content-center place-items-center bg-zinc-950 text-green-400 text-shadow-[0_0_.5em]">
      <Container className="mx-auto max-w-4xl">
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
            {bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          {isFontsReady && (
            <div className="absolute inset-0" aria-hidden>
              {startTyping ? (
                <Typewriter paragrahps={bio} speed={10} className="space-y-4" />
              ) : (
                <Cursor />
              )}
            </div>
          )}
        </div>
      </Container>
    </article>
  );
}
