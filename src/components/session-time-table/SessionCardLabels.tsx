import SessionLabel from "./SessionLabel";

interface SessionCardLabels {
  labels: string[];
  bgColor: string;
}

const SessionCardLabels = ({ labels, bgColor }: SessionCardLabels) => {
  return (
    <div className="flex gap-3.5 pl-4 pt-4">
      {labels.map((label, index) => (
        <SessionLabel
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={`${label}-${index}`}
          label={label}
          bgColor={label === "Keynote" ? "bg-[#f3a200]" : bgColor}
        />
      ))}
    </div>
  );
};

export default SessionCardLabels;
