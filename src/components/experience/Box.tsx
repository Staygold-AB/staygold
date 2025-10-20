import type { PropsWithChildren } from "react";

export function Box({ children }: PropsWithChildren) {
  return (
    <div className="aspect-card relative h-full overflow-hidden rounded-lg bg-cyan-800 px-4 pt-4 pb-18 shadow-md">
      {children}
    </div>
  );
}
