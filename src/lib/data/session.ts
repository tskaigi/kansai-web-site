export interface SessionInfo {
  type?: string;
  title: string;
  displayName: string;
  org?: string;
  username?: string;
}

export interface CardInfo {
  type: string; // time, info, session
  content: string | SessionInfo[];
  size: string; // md:col-span-1, 3, 6
  track?: string | string[];
  labels?: string[];
  keynoteSpeaker?: string;
}

export const TRACK_HEADER_NAMES = [
  {
    id: "Track1",
    name: "トグルルーム",
  },
  {
    id: "Track2",
    name: "カミナシ堂",
  },
];

export const TRACK_HEADER_HASHTAGS: string[] = ["#トグルルーム", "#カミナシ堂"];

export const LABEL_BG_COLOR: { [key: string]: string } = {
  Track1: "bg-secondary",
  Track2: "bg-accent",
};

export const SESSION_SPEAKERS = [
  "tak-onda",
  "maroKanatani",
  "tacck",
  "ysknsid25",
  "euxn23",
  "uhyo",
  "canalun",
  "mrsekut",
  "kawamataryo",
  "10tera",
  "syumai",
  "taro-28",
  "sajikix",
  "all-user",
  "sakupi01",
  "yamatsum",
  "tocomi",
  "sadnessOjisan",
  "izumin5210",
  "noko_noko619",
  "sugar-cat7",
  "Exerea",
  "yuta-ike",
  "yebis0942",
  "yudai-nishiyama",
  "moroball14",
  "yoshiko_pg",
  "ysk8hori",
  "smoothbronco",
  "jamashita",
  "suzuki-takahiro",
  "kkkaoru",
  "toripeeeeee",
  "nusuke",
  "KosukeTakahashi0410",
  "naoya7076",
] as const;

export const SESSION_LIST = {
  s_001: {
    type: "session",
    title: "TypeScriptの型システムは万能機械の夢を見るか？",
    displayName: "canalun(かなるん)",
    username: "canalun",
  },
  s_002: {
    type: "session",
    title: "型チェック 速度改善 奮闘記⏳",
    displayName: "Kenta TSUNEMI",
    username: "tocomi",
  },
  s_003: {
    type: "session",
    title: "ローコードSaaSのUXを向上させるためのTypeScript",
    displayName: "taro",
    username: "taro-28",
  },
  s_004: {
    type: "session",
    title: "型付き API リクエストを実現するいくつかの手法とその選択",
    displayName: "ユーン",
    username: "euxn23",
  },
  s_005: {
    type: "session",
    title: "フロントエンドの型安全性を高める！Jotaiを用いたフォーム設計の実践",
    displayName: "mrsekut (まる)",
    username: "mrsekut",
  },
  s_006: {
    type: "session",
    title:
      "Amplify Gen2 Deep Dive / バックエンドの型をいかにしてフロントエンドへ伝えるか",
    displayName: "tacck",
    username: "tacck",
  },
  s_007: {
    type: "session",
    title: "複雑なフロントエンド（ノーコード）を堅牢に作る",
    displayName: "yuta-ike",
    username: "yuta-ike",
  },
  s_008: {
    type: "session",
    title: "TypeScript、上達の瞬間",
    displayName: "sadnessOjisan",
    username: "sadnessOjisan",
  },
  s_009: {
    type: "session",
    title: "構造的型付けと serialize 境界",
    displayName: "恩田 崇",
    username: "tak-onda",
  },
  s_010: {
    type: "session",
    title: "よくできたテンプレート言語として TypeScript + JSX を利用する試み",
    displayName: "izumin5210",
    username: "izumin5210",
  },
  s_011: {
    type: "session",
    title:
      "テストコード品質を高めるためにMutation Testingライブラリ・Strykerを実戦導入してみた",
    displayName: "Kanon",
    username: "ysknsid25",
  },
} satisfies { [key: string]: SessionInfo };

export const LT_LIST = {
  sp_lt_01: {
    type: "LT",
    title: "TSでシステムが堅牢になっていくさまをスポンサーになるたびに報告",
    displayName: "やました (jamashita)",
    username: "jamashita",
    org: "クラフトバンク株式会社",
  },
  sp_lt_02: {
    type: "LT",
    title: "コンパウンド戦略を支えるフロントエンド基盤設計",
    displayName: "よしこ",
    username: "yoshiko_pg",
    org: "株式会社ナレッジワーク",
  },
  sp_lt_03: {
    type: "LT",
    title: "生産性を爆上げするため入社後すぐBiomeを導入した話",
    displayName: "鈴木 貴大",
    username: "suzuki-takahiro",
    org: "トグルホールディングス株式会社",
  },
  sp_lt_04: {
    type: "LT",
    title: "TypeScript Graph でコードレビューの心理的障壁を乗り越える",
    displayName: "ホリちゃん",
    username: "ysk8hori",
    org: "株式会社ドワンゴ",
  },
  sp_lt_05: {
    type: "LT",
    title:
      "俺ってなんでTypeScriptを書いてるんだっけ：チームラボフロントのTypeScript採用までの歴史",
    displayName: "Takahashi Kosuke",
    username: "KosukeTakahashi0410",
    org: "チームラボ",
  },
  sp_lt_06: {
    type: "LT",
    title: 'IDEでTypeScriptの補完が"始まる"まで',
    displayName: "もろこし",
    username: "moroball14",
    org: "株式会社ビットキー",
  },
  sp_lt_07: {
    type: "LT",
    title:
      "Full TypeScriptな環境でLINE配信のコンテンツエディタを型安全に実装している話",
    displayName: "Takahiro Hayashi",
    username: "smoothbronco",
    org: "株式会社プレイド",
  },
  sp_lt_08: {
    type: "LT",
    title: "Tanstack Routerに移行するのかい、しないのかい、どっちなんだい！",
    displayName: "Naoya Shimizu(Shimmy)",
    username: "naoya7076",
    org: "カミナシ",
  },
  sp_lt_09: {
    type: "LT",
    title:
      "サービス連携機能を例とした開発体験を向上するための適材適所の技術選定",
    displayName: "鳥海 航",
    username: "toripeeeeee",
    org: "株式会社カケハシ",
  },
  sp_lt_10: {
    type: "LT",
    title: "ベースマキナにおけるTypeScriptコードベース改善活動の紹介",
    displayName: "福田健人",
    username: "yebis0942",
    org: "株式会社ベースマキナ",
  },
  sp_lt_11: {
    type: "LT",
    title: "美しい京都の型と文化財",
    displayName: "yudai nishiyama",
    username: "yudai-nishiyama",
    org: "株式会社Helpfeel",
  },
  sp_lt_12: {
    type: "LT",
    title: "gRPC-Gatewayとの通信でTypeScriptの型の恩恵を受ける活用事例",
    displayName: "大高薫",
    username: "kkkaoru",
    org: "AVITA株式会社",
  },
  sp_lt_13: {
    type: "LT",
    title: "ブラウザで完結！DuckDB Wasmでタクシー地図情報を可視化",
    displayName: "大貫優介",
    username: "nusuke",
    org: "newmo株式会社",
  },
  lt_001: {
    type: "LT",
    title: "tslogで実現するセキュアなメタデータ管理とロギング",
    displayName: "sugar-cat",
    username: "sugar-cat7",
  },
  lt_002: {
    type: "LT",
    title:
      "TypeScriptの名前空間を活用したUIコンポーネントの設計と型安全性の追求",
    displayName: "saku",
    username: "sakupi01",
  },
  lt_003: {
    type: "LT",
    title: "ts-morphのパフォーマンス改善Tips",
    displayName: "Kawamata Ryo",
    username: "kawamataryo",
  },
  lt_004: {
    type: "LT",
    title: "TypeScriptでライブラリとの依存を限定的にする方法",
    displayName: "つちのこ",
    username: "noko_noko619",
  },
  lt_005: {
    type: "LT",
    title:
      "GraphQLのダイエット術：TypeScript Language Service Pluginで未使用フィールドをなくす",
    displayName: "松本泰幸（yamatsum）",
    username: "yamatsum",
  },
  lt_006: {
    type: "LT",
    title: "subpath importsで始めるモック生活",
    displayName: "10tera",
    username: "10tera",
  },
  lt_007: {
    type: "LT",
    title: "Full-Stack TypeScript開発で共通化すべき型とは",
    displayName: "龍野 卓己",
    username: "Exerea",
  },
  lt_008: {
    type: "LT",
    title: "interfaceを活用して安全性と拡張性を兼ね備えた型を作る",
    displayName: "岡本 圭太@all-user",
    username: "all-user",
  },
  lt_009: {
    type: "LT",
    title: "as（型アサーション）を書く前にできること",
    displayName: "maroKanatani",
    username: "maroKanatani",
  },
  lt_010: {
    type: "LT",
    title: "アプリ文言のパースで学ぶ文字列Literal型パズル入門",
    displayName: "Saji",
    username: "sajikix",
  },
  lt_011: {
    type: "LT",
    title: "初めてDefinitelyTypedにPRを出した話",
    displayName: "syumai",
    username: "syumai",
  },
  lt_012: {
    type: "LT",
    title: "TypeScriptの次なる大進化なるか！？条件型を返り値とする関数の型推論",
    displayName: "うひょ",
    username: "uhyo",
  },
} satisfies { [key: string]: SessionInfo };

export const TIME_TABLE_DATA: CardInfo[][] = [
  // 10:00 ~ 10:30
  [
    { type: "time", content: "10:00 ~ 10:30", size: "md:col-span-1" },
    {
      type: "close",
      content: "開場",
      size: "md:col-span-6",
    },
  ],

  // 10:30 ~ 10:35
  [
    { type: "time", content: "10:30 ~ 10:35", size: "md:col-span-1" },
    {
      type: "info",
      content: "オープニング",
      size: "md:col-span-6",
      track: ["Track1"],
      labels: ["トグルルーム"],
    },
  ],

  // 10:40 ~ 11:10
  [
    { type: "time", content: "10:40 ~ 11:10", size: "md:col-span-1" },
    {
      type: "keynote",
      content: [SESSION_LIST.s_001],
      size: "md:col-span-3",
      track: "Track1",
      labels: ["トグルルーム", "セッション", "Keynote"],
    },
    {
      type: "info",
      content: "サテライト",
      size: "md:col-span-3",
      track: ["Track2"],
      labels: ["カミナシ堂"],
    },
  ],

  // 11:10 ~ 11:30
  [
    { type: "time", content: "11:10 ~ 11:30", size: "" },
    {
      type: "close",
      content: "休憩",
      size: "md:col-span-6",
    },
  ],

  // 11:30 ~ 12:00
  [
    { type: "time", content: "11:30 ~ 12:00", size: "md:col-span-1" },
    {
      type: "session",
      content: [SESSION_LIST.s_002],
      size: "md:col-span-3",
      track: "Track1",
      labels: ["トグルルーム", "セッション"],
    },
    {
      type: "session",
      content: [SESSION_LIST.s_003],
      size: "md:col-span-3",
      track: "Track2",
      labels: ["カミナシ堂", "セッション"],
    },
  ],

  // 12:00 ~ 12:10
  [
    { type: "time", content: "12:00 ~ 12:10", size: "" },
    {
      type: "close",
      content: "休憩",
      size: "md:col-span-6",
    },
  ],

  // 12:10 ~ 12:20
  [
    { type: "time", content: "12:10 ~ 12:20", size: "" },
    {
      type: "close",
      content: "昼食配布",
      size: "md:col-span-6",
    },
  ],

  // 12:25 ~ 13:20
  [
    { type: "time", content: "12:25 ~ 13:20", size: "md:col-span-1" },
    {
      type: "session",
      content: [
        LT_LIST.sp_lt_01,
        LT_LIST.sp_lt_03,
        LT_LIST.sp_lt_05,
        LT_LIST.sp_lt_07,
        LT_LIST.sp_lt_09,
        LT_LIST.sp_lt_11,
        LT_LIST.sp_lt_13,
      ],
      size: "md:col-span-3",
      track: "Track1",
      labels: ["トグルルーム", "スポンサーLT"],
    },
    {
      type: "session",
      content: [
        LT_LIST.sp_lt_02,
        LT_LIST.sp_lt_04,
        LT_LIST.sp_lt_06,
        LT_LIST.sp_lt_08,
        LT_LIST.sp_lt_10,
        LT_LIST.sp_lt_12,
      ],
      size: "md:col-span-3",
      track: "Track2",
      labels: ["カミナシ堂", "スポンサーLT"],
    },
  ],

  // 13:20 ~ 13:40
  [
    { type: "time", content: "13:20 ~ 13:40", size: "" },
    {
      type: "close",
      content: "休憩",
      size: "md:col-span-6",
    },
  ],

  // 13:40 ~ 14:10
  [
    { type: "time", content: "13:40 ~ 14:10", size: "md:col-span-1" },
    {
      type: "session",
      content: [SESSION_LIST.s_004],
      size: "md:col-span-3",
      track: "Track1",
      labels: ["トグルルーム", "セッション"],
    },
    {
      type: "session",
      content: [SESSION_LIST.s_005],
      size: "md:col-span-3",
      track: "Track2",
      labels: ["カミナシ堂", "セッション"],
    },
  ],

  // 14:10 ~ 14:20
  [
    { type: "time", content: "14:10 ~ 14:20", size: "" },
    {
      type: "close",
      content: "休憩",
      size: "md:col-span-6",
    },
  ],

  // 14:20 ~ 14:50
  [
    { type: "time", content: "14:20 ~ 14:50", size: "md:col-span-1" },
    {
      type: "session",
      content: [SESSION_LIST.s_006],
      size: "md:col-span-3",
      track: "Track1",
      labels: ["トグルルーム", "セッション"],
    },
    {
      type: "session",
      content: [SESSION_LIST.s_007],
      size: "md:col-span-3",
      track: "Track2",
      labels: ["カミナシ堂", "セッション"],
    },
  ],

  // 14:50 ~ 15:00
  [
    { type: "time", content: "14:50 ~ 15:00", size: "" },
    {
      type: "close",
      content: "休憩",
      size: "md:col-span-6",
    },
  ],

  // 15:00 ~ 15:25
  [
    { type: "time", content: "15:00 ~ 15:25", size: "md:col-span-1" },
    {
      type: "session",
      content: [LT_LIST.lt_001, LT_LIST.lt_003, LT_LIST.lt_005, LT_LIST.lt_007],
      size: "md:col-span-3",
      track: "Track1",
      labels: ["トグルルーム", "LT"],
    },
    {
      type: "session",
      content: [LT_LIST.lt_002, LT_LIST.lt_004, LT_LIST.lt_006, LT_LIST.lt_008],
      size: "md:col-span-3",
      track: "Track2",
      labels: ["カミナシ堂", "LT"],
    },
  ],

  // 15:25 ~ 16:00
  [
    { type: "time", content: "15:25 ~ 16:00", size: "" },
    {
      type: "close",
      content: "休憩",
      size: "md:col-span-6",
    },
  ],

  // 16:00 ~ 16:30
  [
    { type: "time", content: "16:00 ~ 16:30", size: "md:col-span-1" },
    {
      type: "session",
      content: [SESSION_LIST.s_008],
      size: "md:col-span-3",
      track: "Track1",
      labels: ["トグルルーム", "セッション"],
    },
    {
      type: "session",
      content: [SESSION_LIST.s_009],
      size: "md:col-span-3",
      track: "Track2",
      labels: ["カミナシ堂", "セッション"],
    },
  ],

  // 16:30 ~ 16:40
  [
    { type: "time", content: "16:30 ~ 16:40", size: "" },
    {
      type: "close",
      content: "休憩",
      size: "md:col-span-6",
    },
  ],

  // 16:40 ~ 17:10
  [
    { type: "time", content: "16:40 ~ 17:10", size: "md:col-span-1" },
    {
      type: "session",
      content: [SESSION_LIST.s_010],
      size: "md:col-span-3",
      track: "Track1",
      labels: ["トグルルーム", "セッション"],
    },
    {
      type: "session",
      content: [SESSION_LIST.s_011],
      size: "md:col-span-3",
      track: "Track2",
      labels: ["カミナシ堂", "セッション"],
    },
  ],

  // 17:10 ~ 17:20
  [
    { type: "time", content: "17:10 ~ 17:20", size: "" },
    {
      type: "close",
      content: "休憩",
      size: "md:col-span-6",
    },
  ],

  // 17:20 ~ 17:50
  [
    { type: "time", content: "17:20 ~ 17:50", size: "md:col-span-1" },
    {
      type: "info",
      content: "懇親会準備",
      size: "md:col-span-3",
      track: "Track1",
      labels: ["トグルルーム"],
    },
    {
      type: "session",
      content: [LT_LIST.lt_009, LT_LIST.lt_010, LT_LIST.lt_011, LT_LIST.lt_012],
      size: "md:col-span-3",
      track: "Track2",
      labels: ["カミナシ堂", "LT"],
    },
  ],

  // 17:50 ~ 18:00
  [
    { type: "time", content: "17:50 ~ 18:00", size: "" },
    {
      type: "close",
      content: "クロージング",
      size: "md:col-span-6",
    },
  ],

  // 18:00 ~ 18:05
  [
    { type: "time", content: "18:00 ~ 18:10", size: "" },
    {
      type: "close",
      content: "懇親会誘導",
      size: "md:col-span-6",
    },
  ],

  // 18:10 ~ 20:00
  [
    { type: "time", content: "18:10 ~ 20:00", size: "" },
    {
      type: "close",
      content: "懇親会",
      size: "md:col-span-3 md:h-72",
    },
    {
      type: "close",
      content: "クローズ",
      size: "md:col-span-3 hidden",
    },
  ],
];
