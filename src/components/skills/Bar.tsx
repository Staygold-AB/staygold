import { Meter } from "./Meter";

export function Bar({ level }: { level: number }) {
  return (
    <div className="flex h-5 gap-0.5">
      <span className="sr-only">Skill level: ${level} out of 5`</span>
      {Array.from({ length: 5 }, (_, index) => {
        return <Meter key={index} active={level > index} />;
      })}
    </div>
  );
}
