import type { PropsWithChildren } from "react";

export function Container({
  children,
  className,
}: PropsWithChildren & { className?: string }) {
  return (
    <div className="p-4 sm:p-6">
      {className ? <div className={className}>{children}</div> : children}
    </div>
  );
}
