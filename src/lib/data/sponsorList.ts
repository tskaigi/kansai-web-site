type CommonSponsorData = {
  id: string;
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
    id: "P01",
    name: "クラフトバンク株式会社",
    logoImage: "sponsor/craftbank.png",
    logoLink: "https://corp.craft-bank.com/",
    description:
      "クラフトバンク株式会社は「世界に誇れる建設職人と建設会社がもっと儲かる仕組みをつくる」をビジョンに掲げ、オールインワンの経営管理システム「CraftBank office」を運営する会社です。 弊社プロダクトはノーコードで柔軟にカスタマイズできることが最大の特徴で、Frontend開発にTypescriptを採用し、コードの拡張性・堅牢性を高めることに大きく寄与しています。 Frontendを一緒に開発する仲間を絶賛募集中ですのでぜひお話しさせてください！ [採用情報](https://craftbank.notion.site/5fc97cc6a23044b8b4e2ba67766063bc)",
  },
  {
    id: "P02",
    name: "トグルホールディングス株式会社",
    logoImage: "sponsor/toggle.png",
    logoLink: "https://toggle.co.jp/",
    description:
      "トグルホールディングスは、「すべてのまちと、まちをつくる人たちのために」というミッションのもと「不動産」「建築」「金融」の3業界の統合を目指します。日本の不動産業界はIT投資が米国の1/10と、テクノロジー活用が遅れています。このギャップこそ業界変革のチャンスです。弊社はフロントエンドからバックエンド、さらにはインフラの定義までTypeScriptを用いています。TypeScriptの厳密な型チェック機能をフル活用することで複雑なドメインの実装を柔軟、かつ安全に行うことを実現しています。",
  },
  {
    id: "P03",
    name: "株式会社ナレッジワーク",
    logoImage: "sponsor/knowledgework.png",
    logoLink: "https://kwork.studio/",
    description:
      "ナレッジワークは「できる喜びが巡る日々を届ける」をミッションに掲げ、働く人たちのイネーブルメント（成果の創出や能力の向上）を支援するスタートアップです。エンジニアチームは少数精鋭で、各領域のスペシャリストが集っています。プロダクトの特性や未来のスタンダードを想像して技術選定を行っており、フロントエンド開発には主にTypeScriptを採用しています。マルチプロダクト展開に向けた組織体制を強化するため、現在エンジニア採用を加速中です！TypeScriptをお使いの皆様、会場で是非お話ししましょう。",
  },
  {
    id: "P04",
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
  {
    id: "G01",
    name: "AVITA株式会社",
    logoImage: "sponsor/avita.png",
    logoLink: "https://avita.co.jp/",
    description:
      "AVITAは大阪大学基礎工学研究科教授の石黒浩が代表を務める大学発スタートアップ企業。弊社のフロントエンド開発ではTypeScriptで開発することを統一しており、アバターのリモート接客で利用者間のリアルタイム通信処理やVRMのアバター表示制御もTypeScriptの型の恩恵を最大限享受しています。",
  },
  {
    id: "G02",
    name: "株式会社ベースマキナ",
    logoImage: "sponsor/basemachina.png",
    logoLink: "https://about.basemachina.com",
    description:
      "株式会社ベースマキナは、管理画面を数分で立ち上げるローコードSaaS「BaseMachina」を提供しています。\n画面の構築やAPI・DBの呼び出しをする機能の汎用性を高める中でTypeScriptの恩恵を多大に受けています。\n技術的に面白い裏話も多々ございますので、懇親会やブースでお話しましょう！",
  },
  {
    id: "G03",
    name: "株式会社Helpfeel",
    logoImage: "sponsor/helpfeel.png",
    logoLink: "https://recruit-engineer.helpfeel.com/",
    description:
      "株式会社HelpfeelではHelpfeel,Scrapbox,Gyazoの開発運用を行なっています。全てのプロダクトでTypeScriptを使用し、中でもHelpfeelはブラウザ上で動く独自の検索エンジンをTypeScriptで実装しています。TypeScriptについて語りましょう！",
  },
  {
    id: "G04",
    name: "株式会社カケハシ",
    logoImage: "sponsor/kakehashi.png",
    logoLink: "https://hrmos.co/pages/kakehashi",
    description:
      "株式会社カケハシは、日本の医療システムの再構築を目指すヘルステックスタートアップ企業です。患者さんにとってより良い医療を、医療現場にとって持続可能な形で実現します。 スピーディーな開発を実現するため、カケハシではフロントエンドからバックエンドまで幅広くTypeScriptを活用しています。",
  },
  {
    id: "G05",
    name: "株式会社プレイド",
    logoImage: "sponsor/plaid.png",
    logoLink: "https://recruit.plaid.co.jp/engineer",
    description:
      "[プレイド](https://recruit.plaid.co.jp/engineer)は、サイトやアプリの来訪ユーザーをリアルタイムで解析＆最適なアクションを届ける「KARTE」などのプロダクトを展開しています。\n各プロダクトのフロントエンドとバックエンド双方でTypeScriptを採用し、エディタなどの複雑系UIや大規模データ基盤などを開発したいエンジニアを絶賛募集中です！",
  },
  {
    id: "G06",
    name: "株式会社ビットキー",
    logoImage: "sponsor/bitkey.png",
    logoLink: "https://bitkey.co.jp/",
    description:
      "ビットキーは、独自開発のデジタルコネクトプラットフォームを通して、人と「暮らし」や「仕事」の間にある分断を解消するアプリ/SaaSを開発しています。 あらゆるサービスやモノを柔軟につなげることで、体験のアップデートを進めています。",
  },
  {
    id: "G07",
    name: "カミナシ",
    logoImage: "sponsor/kaminashi.png",
    logoLink: "https://careers.kaminashi.jp/",
    description:
      "カミナシは「ノンデスクワーカーの才能を解き放つ」をミッションに掲げるスタートアップです。ノンデスクワーカー現場にある、OperationやEmployee領域の課題解決を目指す、ホリゾンタルSaaSの現場DXプラットフォーム「カミナシ」を複数のサービスで提供しています。",
  },
  {
    id: "G08",
    name: "newmo株式会社",
    logoImage: "sponsor/newmo.png",
    logoLink: "https://newmo.me/",
    description:
      'newmoは "移動で地域をカラフルに" をミッションに掲げ、利用者視点に立ったサステナブルな地域交通の実現を目指すスタートアップです。newmoは移動の多様化を通じて、新たな地域交通を実現し、地域の潜在力を引き出すことを目指します。',
  },
  {
    id: "G09",
    name: "チームラボ",
    logoImage: "sponsor/teamlab.png",
    logoLink: "https://www.team-lab.com/",
    description:
      "最新のテクノロジーを活用したデジタルソリューション、大規模なシステム開発や、プロダクト、デジタルコンテンツの制作、都市計画や建築空間設計などを行う。\n多種多様な分野のスペシャリストから構成されており、アート、サイエンス、テクノロジー、クリエイティビティの境界を越えて、集団的創造をコンセプトに活動。",
  },
];

const silverSponsors: Silver[] = [
  {
    id: "S01",
    name: "LINEヤフー株式会社",
    logoImage: "sponsor/lineyahoo.png",
    logoLink: "https://www.lycorp.co.jp/ja/technology/",
  },
  {
    id: "S02",
    name: "株式会社オプティム",
    logoImage: "sponsor/optim.png",
    logoLink: "https://www.optim.co.jp",
  },
  {
    id: "S03",
    name: "NILTO",
    logoImage: "sponsor/nilto.png",
    logoLink: "https://www.nilto.com/ja",
  },
  {
    id: "S04",
    name: "株式会社令和トラベル",
    logoImage: "sponsor/reiwa.png",
    logoLink: "https://www.reiwatravel.co.jp/",
  },
];

const bronzeSponsors: Bronze[] = [
  {
    id: "B01",
    name: "株式会社LabBase",
    logoImage: "sponsor/labbase.png",
    logoLink: "https://labbase.co.jp/",
  },
  {
    id: "B02",
    name: "株式会社Luup",
    logoImage: "sponsor/luup.png",
    logoLink: "https://luup.sc/",
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
    name: "Drink",
    sponsors: [
      {
        name: "トグルホールディングス株式会社",
        logoImage: "sponsor/toggle.png",
        logoLink: "https://toggle.co.jp/",
      },
    ],
  },
  {
    name: "Naming Rights",
    sponsors: [
      {
        name: "トグルホールディングス株式会社",
        logoImage: "sponsor/toggle.png",
        logoLink: "https://toggle.co.jp/",
      },
      {
        name: "カミナシ",
        logoImage: "sponsor/kaminashi.png",
        logoLink: "https://careers.kaminashi.jp/",
      },
    ],
  },
] as const;
