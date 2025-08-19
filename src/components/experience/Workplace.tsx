import { ExternalLinkIcon } from "icons";
import { Box } from "./Box";
import { type Workplace } from "./workplaces";

export function Workplace({ duration, duty, name, role, url }: Workplace) {
  const getDate = (timestamp?: number) => {
    return timestamp ? new Date(timestamp * 1000).getFullYear() : "present";
  };

  const endDate = getDate(duration.end);

  return (
    <Box>
      <h2 className="text-center text-xl sm:text-2xl">{name}</h2>
      <p className="flex items-center justify-center gap-2">
        {getDate(duration.start)} - {endDate}
      </p>
      <p className="mt-4 rounded-md bg-cyan-900 p-2 text-center inset-shadow-sm">
        {role}
      </p>
      <div className="mt-4 space-y-4 sm:mt-6">
        {duty.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
      {url && (
        <a
          href={url}
          target="_blank"
          className="absolute right-4 bottom-4 rounded-full bg-cyan-400 p-2 text-cyan-800 hover:bg-cyan-900 hover:text-cyan-400"
        >
          <ExternalLinkIcon className="h-6" />
        </a>
      )}
    </Box>
  );
}
