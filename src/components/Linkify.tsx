import { linkify } from "@/lib/linkify";

type Props = { children: string };
export const Linkify = ({ children: text }: Props) => {
  const likified = linkify(text);
  return (
    <>
      {likified.map((fragment, i) =>
        fragment.type === "string" ? (
          fragment.value
        ) : (
          <a
            key={`${i}-${fragment.title}`}
            target="_blank"
            rel="noopener noreferrer"
            className="link link-primary"
            href={fragment.link}
          >
            {fragment.title}
          </a>
        ),
      )}
    </>
  );
};
