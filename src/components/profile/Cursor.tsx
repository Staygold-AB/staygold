import clsx from "clsx";
import { type HTMLAttributes } from "react";

export function Cursor({
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
