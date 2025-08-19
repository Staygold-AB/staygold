import clsx from "clsx";
import { Container } from "components/container";
import { CodeIcon } from "icons/code";
import { CoffeeIcon } from "icons/coffee";
import { DebugCheckIcon } from "icons/debug-check";
import { KanbanIcon } from "icons/kanban";
import { PaintBucketIcon } from "icons/paint-bucket";
import { ServerIcon } from "icons/server";
import { ShipIcon } from "icons/ship";
import { SyncIcon } from "icons/sync";
import { TrophyIcon } from "icons/trophy";
import { ZapIcon } from "icons/zap";

import styles from "./styles.module.css";

function Meter({ active }: { active?: boolean }) {
  return (
    <div
      className={clsx(
        "relative mx-1 w-1/5 border-y-4 border-black bg-linear-to-b from-70% to-neutral-600 to-70% before:absolute before:top-0 before:left-0 before:aspect-square before:h-1 before:bg-white after:absolute after:-right-1 after:-left-1 after:h-full after:border-x-4 after:border-black",
        active
          ? "from-emerald-400 to-emerald-600"
          : "from-neutral-400 to-neutral-600",
      )}
    ></div>
  );
}

function Bar({ level }: { level: number }) {
  return (
    <div className="flex h-5 gap-0.5">
      <span className="sr-only">Skill level: ${level} out of 5`</span>
      {Array.from({ length: 5 }, (_, index) => {
        return <Meter key={index} active={level > index} />;
      })}
    </div>
  );
}

function Skill({
  label,
  level,
  icon: Icon,
  list,
}: {
  label: string;
  level: number;
  icon: any;
  list: string[];
}) {
  return (
    <div className="h-full overflow-hidden rounded-lg bg-emerald-200 text-lg text-emerald-800">
      <h2 className="flex items-center gap-1 bg-emerald-800 p-2 text-xl text-white">
        <Icon className="inline-block h-6" />
        {label}
      </h2>
      <div className="space-y-4 p-4">
        <Bar level={level} />
        <ul>
          {list.sort().map((item) => (
            <li key={item} className="flex items-center gap-1">
              <TrophyIcon className="h-4" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <article className={clsx(styles.bgStriped, "bg-emerald-400")}>
      <Container className="place-content-center space-y-4 sm:space-y-6">
        <h1 className="text-center text-5xl text-emerald-800 sm:text-7xl">
          Skills
        </h1>
        <ol className="grid gap-4 sm:grid-cols-[repeat(auto-fit,minmax(var(--container-3xs),1fr))] sm:gap-6">
          <li>
            <Skill
              label="JavaScript"
              icon={CoffeeIcon}
              level={5}
              list={["ES6+", "TypeScript", "React", "React Native"]}
            />
          </li>
          <li>
            <Skill
              label="CSS"
              icon={PaintBucketIcon}
              level={5}
              list={[
                "Tailwind CSS",
                "BEM",
                "Sass",
                "Material UI",
                "Styled components",
                "CSS modules",
              ]}
            />
          </li>
          <li>
            <Skill label="HTML" icon={CodeIcon} level={5} list={["WCAG"]} />
          </li>
          <li>
            <Skill
              label="Backend"
              icon={ServerIcon}
              level={3}
              list={["GraphQL", "PHP", "MySQL", "Wordpress"]}
            />
          </li>
          <li>
            <Skill
              label="Testing &amp; QA"
              icon={DebugCheckIcon}
              level={5}
              list={["Jest", "Vitest", "Cypress", "Gherkin"]}
            />
          </li>
          <li>
            <Skill
              label="State management"
              icon={SyncIcon}
              level={5}
              list={["XState", "Redux"]}
            />
          </li>
          <li>
            <Skill
              label="Tools"
              icon={ZapIcon}
              level={4}
              list={["Webpack", "Vite", "Storybook", "Docker"]}
            />
          </li>
          <li>
            <Skill
              label="CI/CD"
              icon={ShipIcon}
              level={3}
              list={["Github", "Jenkins"]}
            />
          </li>
          <li>
            <Skill
              label="Methodologies"
              icon={KanbanIcon}
              level={4}
              list={["Scrum", "Kanban", "TDD", "BDD"]}
            />
          </li>
        </ol>
      </Container>
    </article>
  );
}
