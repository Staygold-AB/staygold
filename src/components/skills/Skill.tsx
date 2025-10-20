import { TrophyIcon } from "icons";
import { Bar } from "./Bar";

export function Skill({
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
