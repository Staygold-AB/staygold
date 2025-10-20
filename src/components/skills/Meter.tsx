import clsx from "clsx";

export function Meter({ active }: { active?: boolean }) {
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
