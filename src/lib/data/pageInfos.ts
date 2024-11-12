import type { IconType } from "react-icons";
import { FaBan, FaBook } from "react-icons/fa";
import { FaHandshake, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GiPublicSpeaker } from "react-icons/gi";
import { HiHome } from "react-icons/hi";

export const TICKET_PAGE_URL = "https://peatix.com/event/4149743";
export const TOGGLE_ROOM_STREAM_URL =
  "https://www.youtube.com/live/rwrMjd028Ro";
export const KAMINASHI_DO_STREAM_URL =
  "https://www.youtube.com/live/-1qNnAPEK8E";

export type PageInfo = {
  id: string;
  showNavbar: boolean;
  showFooter: boolean;
  title: string;
  description?: string;
  metaImage?: string;
  icon: IconType;
  href: string;
};

export type AccountLink = {
  id: string;
  showNavbar: boolean;
  showFooter: boolean;
  emphasis: boolean;
  title: string;
  description?: string;
  icon: IconType;
  href: string;
};

export const pageInfos = [
  {
    id: "home",
    showNavbar: false,
    showFooter: true,
    title: "Home",
    description: "",
    icon: HiHome,
    href: "/",
  },
  {
    id: "sponsor",
    showNavbar: true,
    showFooter: true,
    title: "スポンサー",
    description:
      "TSKaigi Kansai 2024はTypeScriptコミュニティを盛り上げるカンファレンスを開催します。TSKaigi Kansai 2024に協賛いただいた企業をご紹介します。",
    icon: FaHandshake,
    href: "/sponsor",
  },
  {
    id: "talks",
    title: "タイムテーブル",
    showNavbar: true,
    showFooter: true,
    description: "TSKaigi Kansai 2024のタイムテーブルです。",
    icon: GiPublicSpeaker,
    href: "/talks",
  },
  {
    id: "codeOfContact",
    showNavbar: true,
    showFooter: true,
    title: "行動規範",
    description: "TSKaigiの行動規範です。参加にあったって必ずご一読ください。",
    icon: FaBan,
    href: "/code-of-conduct",
  },
  {
    id: "specificCommercial",
    title: "特定商取引法に基づく表記",
    showNavbar: false,
    showFooter: true,
    description: "特定商取引法に基づく表記",
    icon: FaBan,
    href: "/specific-commercial",
  },
] as const satisfies PageInfo[];

export type PageID = (typeof pageInfos)[number]["id"];

export const accountLink = [
  {
    id: "x",
    showNavbar: true,
    showFooter: true,
    emphasis: false,
    title: "公式X",
    description: "TSKaigiの公式X",
    icon: FaXTwitter,
    href: "https://twitter.com/tskaigi",
  },
  {
    id: "hatenaBlog",
    title: "Blog",
    showNavbar: true,
    showFooter: true,
    emphasis: false,
    description: "TSKaigi運営のブログ",
    icon: FaBook,
    href: "https://tskaigi.hatenablog.com/",
  },
  {
    id: "youtube",
    title: "公式YouTube",
    showNavbar: true,
    showFooter: true,
    emphasis: false,
    description:
      "TSKaigi公式のYouTubeチャンネルです、主に講演のアーカイブ動画などを公開しています",
    icon: FaYoutube,
    href: "https://www.youtube.com/@tskaigi",
  },
] as const satisfies AccountLink[];

export type AccountLinkID = (typeof accountLink)[number]["id"];
