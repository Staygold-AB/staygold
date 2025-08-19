import { Container } from "components/container";
import { CoffeeIcon } from "icons/coffee";
import { DebugIcon } from "icons/debug";
import { KanbanIcon } from "icons/kanban";
import { ServerIcon } from "icons/server";
import { TrophyIcon } from "icons/trophy";
import type { PropsWithChildren } from "react";

// function Meter({ active }: { active?: boolean }) {
//   return (
//     <div className={clsx("h-4 rounded border-2", active && "bg-red-500")} />
//   );
// }

function Bar({ skill }: { skill: string; level?: number }) {
  // const bars = Math.ceil(level / 20);

  return (
    <div className="flex items-center gap-1">
      <TrophyIcon className="inline-block h-4" />
      <h3>{skill}</h3>
      {/* <div className="grid grid-cols-5 gap-0.5"> */}
      {/* <div className="space-x-1">
        {Array.from({ length: 5 }, (_, index) => {
          // return <Meter key={index} active={bars > index} />;
          return (
            <TrophyIcon
              className={clsx("inline-block h-8", bars > index && "text-black")}
            />
          );
        })}
      </div> */}
    </div>
  );
}

function HeadingWithIcon({
  Icon,
  children,
}: PropsWithChildren & { Icon: any }) {
  return (
    <h2 className="space-x-1 text-xl">
      <Icon className="inline-block h-6" />
      <span>{children}</span>
    </h2>
  );
}

export function Skills() {
  return (
    // <article className="bg-indigo-900 sm:text-lg">
    <article className="place-items-center bg-red-600 text-white sm:text-lg">
      <Container className="w-full max-w-7xl place-content-center space-y-4">
        {/* <h1 className="text-center text-3xl text-white text-shadow-[-.055em_.0416em_0] text-shadow-black"> */}
        <h1 className="text-center text-3xl text-white text-shadow-[-.15em_.11em_0] text-shadow-black sm:text-4xl">
          Achievements unlocked
        </h1>
        <ol className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {/* <ol className="grid grid-cols-2 space-y-4 text-white"> */}
          <li className="space-y-2">
            <HeadingWithIcon Icon={CoffeeIcon}>JavaScript</HeadingWithIcon>
            <ul className="pl-4">
              <li>
                <Bar skill="ES6+" level={90} />
              </li>
              <li>
                <Bar skill="TypeScript" level={80} />
              </li>
              <li>
                <Bar skill="React" level={90} />
              </li>
            </ul>
          </li>
          <li className="space-y-2">
            <HeadingWithIcon Icon={ServerIcon}>Backend</HeadingWithIcon>
            <ul className="pl-4">
              <li>
                <Bar skill="GraphQL" level={80} />
              </li>
              <li>
                <Bar skill="MySQL" level={70} />
              </li>
              <li>
                <Bar skill="PHP" level={60} />
              </li>
            </ul>
          </li>
          <li className="space-y-2">
            <HeadingWithIcon Icon={DebugIcon}>Testing &amp; QA</HeadingWithIcon>
            <ul className="pl-4">
              <li>
                <Bar skill="Jest/Vitest" level={90} />
              </li>
              <li>
                <Bar skill="Cypress" level={90} />
              </li>
              <li>
                <Bar skill="Gherkin" level={90} />
              </li>
            </ul>
          </li>
          <li className="space-y-2">
            <HeadingWithIcon Icon={KanbanIcon}>Methodologies</HeadingWithIcon>
            <ul className="pl-4">
              <li>
                <Bar skill="Scrum" level={90} />
              </li>
              <li>
                <Bar skill="Kanban" level={90} />
              </li>
            </ul>
          </li>
        </ol>
      </Container>
    </article>
  );
}
