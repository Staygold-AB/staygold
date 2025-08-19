import clsx from "clsx";
import { Container } from "components";
import { LockIcon, RedoIcon } from "icons";
import { Box } from "./Box";
import styles from "./experience.module.css";
import { Workplace } from "./Workplace";
import { workplaces } from "./workplaces";

export function Experience() {
  // const [isHover, setIsHover] = useState(false);

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
          <li>
            <div className={clsx("aspect-card", styles.card)}>
              <div
                className={clsx(
                  styles.cardContent,
                  // isHover && styles.cardHover,
                )}
                // onMouseEnter={() => setIsHover(true)}
                // onMouseLeave={() => setIsHover(false)}
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
                    <div className="absolute right-4 bottom-4 rounded-full bg-cyan-900 p-2 text-cyan-400">
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
