export type SponsorData = {
  name: string;
  description: string;
  logoImage: string;
  logoLink: string;
  subLogoImage?: string;
  links: {
    href: string;
    text: string;
  }[];
  addPadding: boolean;
  draft?: true;
};
export type SponsorList = {
  Platinum: SponsorData[];
  Gold: SponsorData[];
  Silver: SponsorData[];
  Bronze: SponsorData[];
  Refreshment: SponsorData[];
  Coffee: SponsorData[];
  Beer: SponsorData[];
  "Event Platform": SponsorData[];
};
export const sponsorList: SponsorList = {
  Platinum: [
    {
      name: "レバレジーズ株式会社",
      description: `レバレジーズ株式会社では、こんなエンジニアを求めています！ピンと来たらぜひご応募ください。
・新規事業や業務改善の提案など、ビジネスからエンジニアリングまで一気通貫でやっていきたい方
・営業、マーケター、デザイナー、事業企画、データアナリストなど、あらゆる職種と協力しながら、イノベーティブなサービスを開発したい方
・「関係者全員の幸福の追求」の理念を共にした仲間と一緒に、社会貢献性の高い事業を行っていきたい方
・先制・再生医療など新しい分野も含め、多角的かつグローバルなサービスに幅広く関わりたい方
       
■ 会社紹介 	
社会の課題を解決し関係者全員の幸福を追求し続けることをミッションに、IT・医療・介護・若年層を中心とした人材事業や、Webメディア事業、M&Aコンサルティング事業など、社会貢献を軸に様々な領域でこれまで40以上のサービスを展開。2005年に創業以来、黒字経営を継続し18期目の2022年度は年商869億を突破しました。各分野のスペシャリストが集うオールインハウスの組織構成と、業界を絞らないポートフォリオ経営で、時代を代表するグローバル企業を目指します。`,
      logoImage: "/sponsors/leverages.jpg",
      logoLink: "https://recruit.leverages.jp/recruit/engineer",
      links: [
        { href: "https://leverages.jp/", text: "公式サイト" },
        {
          href: "https://recruit.leverages.jp/recruit/engineer/",
          text: "エンジニア採用",
        },
        { href: "https://tech.leverages.jp/", text: "Leverages Tech Blog" },
      ],
      addPadding: false,
    },
  ],
  Gold: [
    {
      name: "Ubie株式会社",
      description: `「テクノロジーで人々を適切な医療に案内する」をミッションに掲げ、医師とエンジニアが2017年5月に創業したヘルステックスタートアップです。AIをコア技術とし、症状から適切な医療へと案内する「ユビー」と、診療の質向上を支援する医療機関向けサービスパッケージ「ユビ―メディカルナビ」等を開発・提供。誰もが自分にあった医療にアクセスできる社会づくりを進めています。
症状検索エンジン「ユビ―」は生活者の適切な医療へのかかり方をサポートする受診支援サービスです。気になる症状から関連する病名と適切な受診先を調べることができ、月間700万人以上の方々に利用いただいています。
「ユビーメディカルナビ」は問診業務効率化を図る「ユビーAI問診」や、認知向上をサポートする「ユビーリンク」などを提供しています。「ユビーAI問診」は全国47都道府県・1,700以上の医療機関で導入されております。(2024年2月現在)`,
      logoImage: "/sponsors/ubie_horizontal.png",
      logoLink: "https://ubie.life/",
      links: [
        { href: "https://ubie.life/", text: "Ubie株式会社" },
        { href: "https://ubie.app/", text: "症状検索エンジン「ユビ―」" },
        {
          href: "https://intro.dr-ubie.com/",
          text: "「ユビーメディカルナビ」",
        },
      ],
      addPadding: false,
    },
  ],
  Silver: [
    {
      name: "株式会社アイデミー",
      description: `「先端技術を、経済実装する。」をミッションに活動している株式会社アイデミーでは、オンラインAI/DXラーニングサービス「Aidemy」などの自社プロダクトの開発において、フロントエンドからバックエンドまで統一した言語として TypeScript を採用している「TypeScript Company」です。
Cloudflare Workers や Hono, Astro など、新しい技術を積極的に取り入れており、社内外での技術共有を行うことでエンジニアのスキルアップを支援しています。`,
      logoImage: "/sponsors/aidemy_horizontal.png",
      logoLink: "https://aidemy.co.jp/",
      links: [
        { href: "https://aidemy.co.jp/recruit/", text: "採用サイト" },
        { href: "https://zenn.dev/p/aidemy", text: "Zenn" },
        { href: "https://twitter.com/aidemytech", text: "X" },
      ],
      addPadding: true,
    },
  ],
  "Event Platform": [
    {
      name: "株式会社EventHub",
      description: `💁‍♀️ EventHubについて
EventHubは、マーケティング、営業のためのウェビナー・カンファレンスを主軸に、展示会、学会や商談会を含む幅広いニーズで利用されているシェアNo.1イベントマーケティングプラットフォームです。

＼フルサイクルエンジニア募集中／

🧑‍💻 開発環境
サーバーサイド：Node.js, NestJS, TypeScript
フロントエンド: React.js,TypeScript,styled-components
データベース ：MySQL, Redis`,
      logoImage: "/sponsors/eventhub_horizontal.png",
      logoLink: "https://jobs.eventhub.co.jp/",
      links: [
        { href: "https://jobs.eventhub.co.jp/", text: "💁‍♀️ EventHub 採用情報" },
        { href: "https://eventhub.jp/", text: "💁‍♂️ EventHub サービスページ" },
        {
          href: "https://jobs.eventhub.co.jp/engineer",
          text: "🧑‍💻 EventHub エンジニアチーム",
        },
      ],
      addPadding: true,
    },
  ],

  Refreshment: [
    {
      name: "エムスリー株式会社",
      description: `ギークな集団だからこそ世界の医療を変えられる

医療における様々な課題を
ユニークなプロダクトで解決するからこそ
ユニークなエンジニアリング文化があるからこそ
ユニークなメンバーが集っているからこそ
世界の医療を変えていくことができる
3つのユニークを掛け合わせ、新たな世界を創造する
挑み続けるエムスリーのエンジニア組織で世界の医療の変革に
挑戦してみませんか？

突然ですが、ここで難読クイズ
これが解けたら連絡を
[1, 2, 3].map(a => {arg1: a}).join()[1]`,
      logoImage: "/sponsors/m3.png",
      logoLink: "https://jobs.m3.com/engineer/",
      links: [
        { href: "https://jobs.m3.com/engineer/", text: "エンジニア採用サイト" },
        {
          href: "https://twitter.com/m3_engineering",
          text: "公式X（旧Twitter）",
        },
        { href: "https://www.m3tech.blog", text: "テックブログ" },
      ],
      addPadding: false,
    },
  ],

  Coffee: [
    {
      name: "KAKEHASHI Inc.",
      description:
        "日本の医療システムの再構築を目指すヘルステックスタートアップ。現在、主要サービスの一つ薬局SaaS「Musubi」のユーザーは全国7000店以上（シェア10％超）に。そのほか薬局関連サービスを複数展開。Dev/Bizの垣根なく一貫してアジャイルな組織を志向。「プロダクトを介して蓄積される医療現場の膨大なリアルデータを、医療価値の向上にどう活かしていくか」という観点で、既存プロダクトの改善から新規事業まで、一人ひとりの自律的な行動によりプロジェクトを推進。ミッションは「日本の医療体験を、しなやかに」。",
      logoImage: "/sponsors/kakehashi.png",
      logoLink: "https://www.kakehashi.life/",
      links: [
        {
          href: "https://kakehashi-dev.hatenablog.com/",
          text: "KAKEHASHI Tech Blog",
        },
        {
          href: "https://recruit.kakehashi.life/engineer",
          text: "KAKEHASHI RECRUTHING SITE",
        },
        {
          href: "https://twitter.com/kakehashi_dev",
          text: "X カケハシ技術広報(@kakehashi_dev)",
        },
      ],
      addPadding: false,
    },
  ],
  Beer: [
    {
      name: "Cloudbase株式会社",
      description: `「日本企業が世界を変える時代をつくる」というミッションのもと、日本企業からイノベーションを起こすべくクラウドセキュリティの SaaS を提供しております。
具体的にはAWS・Google Cloudなどのクラウドにおけるリスクを統合的に監視・管理するセキュリティプラットフォームです。
弊社では検出されたリスクをお客様に提供するSaaS部分では、バックエンドもフロントエンドもTypeScriptで実装されています。フルスタックにTypeScriptで開発していきたい人はぜひお話しさせてください。`,
      logoImage: "/sponsors/cloudbase.png",
      logoLink: "https://cloudbase.ink",
      links: [
        { href: "https://cloudbase.co.jp/", text: "Cloudbase株式会社" },
        {
          href: "https://levetty.notion.site/Cloudbase-Engineer-Entrance-Book-1f51dcaf9edd490e934780f526f833a3?pvs=74",
          text: "Cloudbase Engineer Entrance Book",
        },
        { href: "", text: "" },
      ],
      addPadding: true,
    },
  ],
  Bronze: [
    {
      name: "株式会社プレイド",
      description: "",
      logoImage: "/sponsors/plaid.png",
      logoLink: "https://plaid.co.jp/",
      links: [
        { href: "", text: "" },
        { href: "", text: "" },
        { href: "", text: "" },
      ],
      addPadding: true,
    },
  ],
};
