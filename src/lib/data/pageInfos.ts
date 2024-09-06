import type { IconType } from "react-icons";
import { FaBook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiHome } from "react-icons/hi";

export type PageInfo = {
	index: number;
	showNavbar: boolean;
	showFooter: boolean;
	title: string;
	description?: string;
	metaImage?: string;
	icon: IconType;
	href: string;
};

export type AccountLink = {
	index: number;
	showNavbar: boolean;
	showFooter: boolean;
	emphasis: boolean;
	title: string;
	description?: string;
	icon: IconType;
	href: string;
};

export const pageInfos: PageInfo[] = [
	{
		index: 1,
		showNavbar: false,
		showFooter: true,
		title: "Home",
		description: "",
		icon: HiHome,
		href: "/",
	},
];

export const accountLink: AccountLink[] = [
	{
		index: 1,
		showNavbar: true,
		showFooter: true,
		emphasis: false,
		title: "公式X",
		description: "TSKaigiの公式X",
		icon: FaXTwitter,
		href: "https://twitter.com/tskaigi",
	},
	{
		index: 2,
		title: "Blog",
		showNavbar: true,
		showFooter: true,
		emphasis: false,
		description: "TSKaigi運営のブログ",
		icon: FaBook,
		href: "https://tskaigi.hatenablog.com/",
	},
	{
		index: 3,
		title: "公式YouTube",
		showNavbar: true,
		showFooter: true,
		emphasis: false,
		description:
			"TSKaigi公式のYouTubeチャンネルです、主に講演のアーカイブ動画などを公開しています",
		icon: FaYoutube,
		href: "https://www.youtube.com/@tskaigi",
	},
];
