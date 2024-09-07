export type Member = {
  name: string;
  image: string;
  href: `http://${string}` | `https://${string}` | "";
};

export const coreMemberInfos: Member[] = [
  // TODO: 正式なメンバーに差し替える
  {
    name: "soso",
    image: "soso.jpg",
    href: "https://twitter.com/sosomuse",
  },
] satisfies Member[];

export const memberInfos = [
  // TODO: 正式なメンバーに差し替える
  {
    name: "soso",
    image: "soso.jpg",
    href: "https://twitter.com/sosomuse",
  },
] satisfies Member[];
