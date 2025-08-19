import type { PropsWithChildren } from "react";

export function Container({
  children,
  className,
}: PropsWithChildren & { className?: string }) {
  return (
    <div className="px-4 py-8 sm:px-6 sm:py-16">
      {className ? <div className={className}>{children}</div> : children}
    </div>
  );
}
