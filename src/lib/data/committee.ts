import type { IconType } from "react-icons";
import { FaXTwitter } from "react-icons/fa6";

export type Committee = {
  title: string;
  imageUrl?: string;
  subtitle?: string;
  description?: string;
  links: { icon?: IconType; href: string }[];
};

export const selectionCommittee: Committee[] = [
  {
    title: "うひょ",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1341186424423378944/gYTKIbFl_400x400.jpg",
    links: [{ icon: FaXTwitter, href: "https://twitter.com/uhyo_" }],
  },
];
