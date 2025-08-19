import type { PropsWithChildren } from "react";
import type { Workplace } from "./workplaces";
import { workplaces } from "./workplaces";

import clsx from "clsx";
import { Container } from "components/container";
import { ExternalLinkIcon } from "icons/external-link";

// import { ExternalLink } from "pixelarticons/fonts/react";

function Box({ children, active }: PropsWithChildren & { active?: boolean }) {
  return (
    <div
      className={clsx("h-full border-2 p-4 sm:p-6", active && "border-dashed")}
    >
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
    <Box active={endDate === "present"}>
      <h2 className="text-xl sm:text-2xl">
        <a
          href={url}
          target="_blank"
          className="space-x-1 text-white underline hover:text-yellow-200"
        >
          <span>{name}</span>
          <ExternalLinkIcon className="inline-block h-4 align-middle sm:h-5" />
          {/* <ExternalLink /> */}
        </a>
      </h2>
      <p>
        {getDate(duration.start)} - {endDate}
      </p>
      <p>{role}</p>
      <div className="mt-4 space-y-4 sm:mt-6">
        {duty.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
    </Box>
  );
}

export function Experience() {
  return (
    <article className="bg-cyan-800 text-white sm:text-lg">
      <Container className="place-content-center space-y-4 sm:space-y-6">
        <Box>
          <h1 className="text-center text-2xl sm:text-4xl">Levels cleared</h1>
        </Box>
        <ol className="grid gap-4 sm:grid-cols-[repeat(auto-fit,minmax(var(--container-xs),1fr))] sm:gap-6">
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
