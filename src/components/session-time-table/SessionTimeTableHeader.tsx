import {
  LABEL_BG_COLOR,
  TRACK_HEADER_HASHTAGS,
  TRACK_HEADER_NAMES,
} from "@/lib/data/session";

const SessionTimeTableHeader = () => {
  return (
    <div className="grid size-full grid-flow-row gap-4 md:grid-cols-7">
      <div className="md:flex md:min-h-24 md:rounded-lg md:bg-white" />

      {TRACK_HEADER_NAMES.map(({ id, name }, index: number) => (
        <div
          key={id}
          className={`hidden md:col-span-3 md:flex md:flex-col md:items-center md:rounded-lg ${LABEL_BG_COLOR[id]} md:min-h-24 md:justify-center`}
        >
          <div className="text-wrap text-base text-neutral-800 md:px-2 md:text-2xl">
            {name}
          </div>
          <p className="text-sm text-neutral-500">
            {TRACK_HEADER_HASHTAGS[index]}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SessionTimeTableHeader;
