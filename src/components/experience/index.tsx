import { useState, type PropsWithChildren } from "react";
import type { Workplace } from "./workplaces";
import { workplaces } from "./workplaces";

import clsx from "clsx";
import { Container } from "components/container";
import { ExternalLinkIcon } from "icons/external-link";
import { LockIcon } from "icons/lock";

import { RedoIcon } from "icons/redo";
import styles from "./styles.module.css";

function Box({ children }: PropsWithChildren) {
  return (
    <div className="aspect-card relative h-full overflow-hidden rounded-lg bg-cyan-800 px-4 pt-4 pb-18 shadow-md">
      {children}
    </div>
  );
}

function Workplace({ duration, duty, name, role, url }: Workplace) {
  const getDate = (timestamp?: number) => {
    return timestamp ? new Date(timestamp * 1000).getFullYear() : "present";
  };

  const endDate = getDate(duration.end);

  return (
    <Box>
      <h2 className="text-center text-xl sm:text-2xl">{name}</h2>
      <p className="flex items-center justify-center gap-2">
        {getDate(duration.start)} - {endDate}
      </p>
      <p className="mt-4 rounded-md bg-cyan-900 p-2 text-center inset-shadow-sm">
        {role}
      </p>
      <div className="mt-4 space-y-4 sm:mt-6">
        {duty.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
      {url && (
        <a
          href={url}
          target="_blank"
          className="absolute right-4 bottom-4 rounded-full bg-cyan-400 p-2 text-cyan-800 hover:bg-cyan-900 hover:text-cyan-400"
        >
          <ExternalLinkIcon className="h-6" />
        </a>
      )}
    </Box>
  );
}

export function Experience() {
  const [isHover, setIsHover] = useState(false);

  return (
    <article className="bg-cyan-900 text-white sm:text-lg">
      <Container className="place-content-center space-y-4 sm:space-y-6">
        <h1
          className={clsx(
            "text-center text-5xl sm:text-7xl",
            styles.textShadow,
          )}
        >
          Levels cleared
        </h1>
        <ol className="grid gap-6 sm:grid-cols-[repeat(auto-fit,minmax(var(--container-xs),1fr))]">
          <li
            className={clsx("aspect-card", styles.card)}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <div
              className={clsx(styles.cardContent, isHover && styles.cardHover)}
            >
              <div className={clsx(styles.cardFront)}>
                <div
                  className={clsx(
                    styles.bgIsometric,
                    "relative h-full w-full place-content-center place-items-center rounded-lg bg-white",
                  )}
                >
                  <div className="mx-auto w-24 rounded-full bg-cyan-900 p-4 text-cyan-400">
                    <LockIcon className="h-16" />
                  </div>
                  <div className="absolute right-4 bottom-4 animate-bounce rounded-full bg-cyan-900 p-2 text-cyan-400">
                    <RedoIcon className="h-6" />
                  </div>
                </div>
              </div>
              <div className={clsx(styles.cardBack)}>
                <Box>
                  <h2 className="text-center text-xl sm:text-2xl">
                    Your company name
                  </h2>
                  <p className="flex items-center justify-center gap-2">
                    present - tbd
                  </p>
                  <p className="mt-4 rounded-md bg-cyan-900 p-2 text-center inset-shadow-sm">
                    N/A
                  </p>
                  <div className="mt-4 space-y-4 sm:mt-6">
                    <p>Hire me to clear this level!</p>
                  </div>
                </Box>
              </div>
            </div>
          </li>
          {workplaces.map((workplace) => {
            return (
              <li key={workplace.name}>
                <Workplace {...workplace} />
              </li>
            );
          })}
        </ol>
      </Container>
    </article>
  );
}
