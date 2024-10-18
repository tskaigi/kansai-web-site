const LINK_WHOLE_REGEXP = /(\[.+\]\(.+\))/;
const LINK_PART_REGEXP = /\[(.+)\]\((.+)\)/;

type LinkifyItem =
  | { type: "string"; value: string }
  | {
      type: "link";
      title: string;
      link: string;
    };

export const linkify = (text: string): LinkifyItem[] => {
  const fragments = text.split(LINK_WHOLE_REGEXP);

  return fragments.map((fragment) => {
    const result = fragment.match(LINK_PART_REGEXP);
    if (result == null) {
      return {
        type: "string",
        value: fragment,
      };
    }
    return {
      type: "link",
      title: result[1],
      link: result[2],
    };
  });
};
