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
  { // チェック不要
    name: "クラフトバンク株式会社",
    logoImage: "sponsor/craftbank.png",
    logoLink: "https://corp.craft-bank.com/",
    description:
      "クラフトバンク株式会社は「世界に誇れる建設職人と建設会社がもっと儲かる仕組みをつくる」をビジョンに掲げ、オールインワンの経営管理システム「CraftBank office」を運営する会社です。 弊社プロダクトはノーコードで柔軟にカスタマイズできることが最大の特徴で、Frontend開発にTypescriptを採用し、コードの拡張性・堅牢性を高めることに大きく寄与しています。 Frontendを一緒に開発する仲間を絶賛募集中ですのでぜひお話しさせてください！ 採用情報(https://craftbank.notion.site/5fc97cc6a23044b8b4e2ba67766063bc)",
  },
  { // チェック不要
    name: "トグルホールディングス株式会社",
    logoImage: "sponsor/toggle.png",
    logoLink: "https://toggle.co.jp/",
    description:
      "トグルホールディングスは、「すべてのまちと、まちをつくる人たちのために」というミッションを基に、「不動産」「建築」「金融」の3つの業界をひとつの産業インフラへと統合することを目指しています。  日本の不動産業界はIT資本投資で米国の1/10に留まり、テクノロジーの活用が遅れています。 このギャップは「新しい仕組みで業界変革できる余地が多い」ということでもあり、エンジニアにとって大きなチャンスがあります。  弊社ではプロダクトのコア技術の実装にはフロントエンドからバックエンド、さらにはインフラストラクチャの定義までTypeScriptを用いています。 TypeScriptの厳密な型チェック機能をフル活用することで複雑なドメインの実装を柔軟、かつ安全に行うことを実現しています。",
  },
  { // ロゴチェックが必要
    name: "株式会社ナレッジワーク",
    logoImage: "sponsor/knowledgework.png",
    logoLink: "https://kwork.studio/",
    description:
      "",
  },
  { // ロゴチェックが必要
    name: "株式会社ドワンゴ",
    logoImage: "sponsor/dwango.png",
    logoLink: "https://dwango.co.jp/",
    description:
      'ドワンゴは "ネットの向こうの、リアルを動かす。人間らしさと、つながるデジタルを。" をコーポレートメッセージとして、学校法人角川ドワンゴ学園が運営するネットに特化した通信制高校「N高等学校・S高等学校」とオンライン学習アプリ「N予備校」、ネットの双方向性を最大限に動画や生放送に取り込んだ「ニコニコ」、ネットとリアルの融合をテーマにした巨大イベント「ニコニコ超会議」など、新しい価値を創り出し、それを事業として成立させていくことに挑戦しつづける企業です。',
  },
];

/**
 * description: 150 / 5行まで
 */
const goldSponsors: Gold[] = [
  { // ロゴチェックが必要
    name: "AVITA株式会社",
    logoImage: "sponsor/avita.png",
    logoLink: "https://avita.co.jp/",
    description:
      "",
  },
  // { // ベースマキナ、未回答
  //   name: "ゴールドスポンサー２",
  //   logoImage: "https://picsum.photos/seed/picsum/1200/600",
  //   logoLink: "https://x.com/tskaigi",
  //   description:
  //     "これはゴールドスポンサーのテスト説明文です。\n改行もできます。",
  // },
  { // チェック不要、ロゴ未回収
    name: "株式会社Helpfeel",
    logoImage: "https://picsum.photos/seed/picsum/1200/600",
    logoLink: "https://recruit-engineer.helpfeel.com/",
    description:
      "株式会社HelpfeelではHelpfeel,Scrapbox,Gyazoの開発運用を行なっています。全てのプロダクトでTypeScriptを使用し、中でもHelpfeelはブラウザ上で動く独自の検索エンジンをTypeScriptで実装しています。TypeScriptについて語りましょう！",
  },
  { // ロゴチェックが必要、ロゴ未回収
    name: "株式会社カケハシ",
    logoImage: "https://picsum.photos/seed/picsum/1200/600",
    logoLink: "https://hrmos.co/pages/kakehashi",
    description:
      "株式会社カケハシは、日本の医療システムの再構築を目指すヘルステックスタートアップ企業です。患者さんにとってより良い医療を、医療現場にとって持続可能な形で実現します。 スピーディーな開発を実現するため、カケハシではフロントエンドからバックエンドまで幅広くTypeScriptを活用しています。",
  },
  { // チェック不要
    name: "株式会社プレイド",
    logoImage: "sponsor/plaid.png",
    logoLink: "https://recruit.plaid.co.jp/engineer",
    description:
      "",
  },
  { // チェック不要、ロゴ未回収
    name: "株式会社ビットキー",
    logoImage: "https://picsum.photos/seed/picsum/1200/600",
    logoLink: "https://bitkey.co.jp/",
    description:
      "",
  },
  { // チェック不要
    name: "カミナシ",
    logoImage: "sponsor/kaminashi.png",
    logoLink: "https://careers.kaminashi.jp/",
    description:
      "",
  },
  { // チェック不要
    name: "newmo株式会社",
    logoImage: "sponsor/newmo.png",
    logoLink: "https://newmo.me/",
    description:
      'newmoは "移動で地域をカラフルに" をミッションに掲げ、利用者視点に立ったサステナブルな地域交通の実現を目指すスタートアップです。newmoは移動の多様化を通じて、新たな地域交通を実現し、地域の潜在力を引き出すことを目指します  テクノロジーを活用し多くの方が安全に柔軟に働くことができる環境を',
  },
  { // ロゴチェックが必要
    name: "チームラボ",
    logoImage: "sponsor/teamlab.png",
    logoLink: "https://www.team-lab.com/",
    description:
      "",
  },
];

const silverSponsors: Silver[] = [
  { // ロゴチェックが必要、ロゴ未回収
    name: "LINEヤフー株式会社",
    logoImage: "https://picsum.photos/seed/picsum/1200/600",
    logoLink: "https://www.lycorp.co.jp/ja/technology/",
  },
  { // チェック不要
    name: "株式会社オプティム",
    logoImage: "sponsor/optim.png",
    logoLink: "https://www.optim.co.jp",
  },
];

const bronzeSponsors: Bronze[] = [
  { // ロゴチェックが必要
    name: "株式会社LabBase",
    logoImage: "sponsor/labbase.png",
    logoLink: "https://labbase.co.jp/engineer/",
  },
  // { // Luup、未回答
  //   name: "ブロンズスポンサー２",
  //   logoImage: "https://picsum.photos/seed/picsum/1200/600",
  //   logoLink: "https://x.com/tskaigi",
  // },
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
  // { // 現時点で応募なし
  //   name: "Snack",
  //   sponsors: [
  //     {
  //       name: "スナックスポンサー１",
  //       logoImage: "https://picsum.photos/seed/picsum/1200/600",
  //       logoLink: "https://x.com/tskaigi",
  //     },
  //   ],
  // },
  {
    name: "Drink",
    sponsors: [
      { // チェック不要
        name: "トグルホールディングス株式会社",
        logoImage: "sponsor/toggle.png",
        logoLink: "https://toggle.co.jp/",
      },
    ],
  },
  {
    name: "Naming Rights",
    sponsors: [
      { // チェック不要
        name: "トグルホールディングス株式会社",
        logoImage: "sponsor/toggle.png",
        logoLink: "https://toggle.co.jp/",
      },
      { // チェック不要
        name: "カミナシ",
        logoImage: "sponsor/kaminashi.png",
        logoLink: "https://careers.kaminashi.jp/",
      },
    ],
  },
] as const;
