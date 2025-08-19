import clsx from "clsx";
import { Container } from "components";
import {
  CodeIcon,
  CoffeeIcon,
  DebugCheckIcon,
  KanbanIcon,
  PaintBucketIcon,
  ServerIcon,
  ShipIcon,
  SyncIcon,
  ZapIcon,
} from "icons";
import { Skill } from "./Skill";
import styles from "./skills.module.css";

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
