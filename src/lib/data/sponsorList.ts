type CommonSponsorData = {
  name: string;
  logoImage: string;
  logoLink: string;
};

type Gold = CommonSponsorData & {
  description: string;
};
type Platinum = CommonSponsorData & {
  description: string;
};
type Silver = CommonSponsorData;
type Bronze = CommonSponsorData;

/**
 * description: 250 / 8行まで
 */
const platinumSponsors: Platinum[] = [
  {
    name: "プラチナスポンサー１",
    logoImage: "https://picsum.photos/seed/picsum/1200/600",
    logoLink: "https://x.com/tskaigi",
    description:
      "これはプラチナスポンサーのテスト説明文です。\n改行もできます。",
  },
  {
    name: "プラチナスポンサー２",
    logoImage: "https://picsum.photos/seed/picsum/1200/600",
    logoLink: "https://x.com/tskaigi",
    description:
      "これはプラチナスポンサーのテスト説明文です。\n改行もできます。",
  },
];

/**
 * description: 150 / 5行まで
 */
const goldSponsors: Gold[] = [
  {
    name: "ゴールドスポンサー１",
    logoImage: "https://picsum.photos/seed/picsum/1200/600",
    logoLink: "https://x.com/tskaigi",
    description:
      "これはゴールドスポンサーのテスト説明文です。\n改行もできます。",
  },
  {
    name: "ゴールドスポンサー２",
    logoImage: "https://picsum.photos/seed/picsum/1200/600",
    logoLink: "https://x.com/tskaigi",
    description:
      "これはゴールドスポンサーのテスト説明文です。\n改行もできます。",
  },
];

const silverSponsors: Silver[] = [
  {
    name: "シルバースポンサー１",
    logoImage: "https://picsum.photos/seed/picsum/1200/600",
    logoLink: "https://x.com/tskaigi",
  },
  {
    name: "シルバースポンサー２",
    logoImage: "https://picsum.photos/seed/picsum/1200/600",
    logoLink: "https://x.com/tskaigi",
  },
];

const bronzeSponsors: Bronze[] = [
  {
    name: "ブロンズスポンサー１",
    logoImage: "https://picsum.photos/seed/picsum/1200/600",
    logoLink: "https://x.com/tskaigi",
  },
  {
    name: "ブロンズスポンサー２",
    logoImage: "https://picsum.photos/seed/picsum/1200/600",
    logoLink: "https://x.com/tskaigi",
  },
  {
    name: "ブロンズスポンサー３",
    logoImage: "https://picsum.photos/seed/picsum/1200/600",
    logoLink: "https://x.com/tskaigi",
  },
  {
    name: "ブロンズスポンサー４",
    logoImage: "https://picsum.photos/seed/picsum/1200/600",
    logoLink: "https://x.com/tskaigi",
  },
  {
    name: "ブロンズスポンサー５",
    logoImage: "https://picsum.photos/seed/picsum/1200/600",
    logoLink: "https://x.com/tskaigi",
  },
];

export const sponsorPlans = [
  {
    name: "Platinum",
    sponsors: platinumSponsors,
  },
  {
    name: "Gold",
    sponsors: goldSponsors,
  },
  {
    name: "Silver",
    sponsors: silverSponsors,
  },
  {
    name: "Bronze",
    sponsors: bronzeSponsors,
  },
  {
    name: "Snack",
    sponsors: [
      {
        name: "スナックスポンサー１",
        logoImage: "https://picsum.photos/seed/picsum/1200/600",
        logoLink: "https://x.com/tskaigi",
      },
    ],
  },
  {
    name: "Drink",
    sponsors: [
      {
        name: "ドリンクスポンサー１",
        logoImage: "https://picsum.photos/seed/picsum/1200/600",
        logoLink: "https://x.com/tskaigi",
      },
    ],
  },
  {
    name: "Naming Rights",
    sponsors: [
      {
        name: "ネーミングライツスポンサー１",
        logoImage: "https://picsum.photos/seed/picsum/1200/600",
        logoLink: "https://x.com/tskaigi",
      },
    ],
  },
] as const;
