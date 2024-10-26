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
export const TRACK_HEADER_HASHTAGS: string[] = [
  "#tskaigi-kansai1",
  "#tskaigi-kansai2",
];

export const LABEL_BG_COLOR: { [key: string]: string } = {
  Track1: "bg-secondary",
  Track2: "bg-accent",
};

export const SESSION_SPEAKERS: string[] = [
  // "maroKanatani",
  // "tacck",
  // "Kanon",
  // "ユーン",
  // "うひょ",
  // "canalun(かなるん)",
  // "mrsekut (まる)",
  // "Kawamata Ryo",
  // "10tera",
  // "syumai",
  // "taro",
  // "Saji",
  // "岡本 圭太@all-user",
  // "saku",
  // "松本泰幸（yamatsum）",
  // "Kenta TSUNEMI",
  // "sadnessOjisan",
  // "恩田 崇",
  // "izumin5210",
  // "maroKanatani",
  // "sugar-cat",
  // "龍野 卓己",
  // "yuta-ike",
];

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
    username: "KentaTSUNEMI",
  },
  s_003: {
    type: "session",
    title: "ローコードSaaSのUXを向上させるためのTypeScript",
    displayName: "taro",
    username: "taro",
  },
  s_004: {
    type: "session",
    title: "型付き API リクエストを実現するいくつかの手法とその選択",
    displayName: "ユーン",
    username: "ユーン",
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
    displayName: "恩田崇",
    username: "ondat",
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
    username: "Kanon",
  },
} satisfies { [key: string]: SessionInfo };

export const LT_LIST = {
  sp_lt_01: {
    type: "LT",
    title: "TDB",
    displayName: "",
    username: "",
    org: "",
  },
  sp_lt_02: {
    type: "LT",
    title: "TDB",
    displayName: "",
    username: "",
    org: "",
  },
  sp_lt_03: {
    type: "LT",
    title: "TDB",
    displayName: "",
    username: "",
    org: "",
  },
  sp_lt_04: {
    type: "LT",
    title: "TDB",
    displayName: "",
    username: "",
    org: "",
  },
  sp_lt_05: {
    type: "LT",
    title: "TDB",
    displayName: "",
    username: "",
    org: "",
  },
  sp_lt_06: {
    type: "LT",
    title: "TDB",
    displayName: "",
    username: "",
    org: "",
  },
  sp_lt_07: {
    type: "LT",
    title: "TDB",
    displayName: "",
    username: "",
    org: "",
  },
  sp_lt_08: {
    type: "LT",
    title: "TDB",
    displayName: "",
    username: "",
    org: "",
  },
  sp_lt_09: {
    type: "LT",
    title: "TDB",
    displayName: "",
    username: "",
    org: "",
  },
  sp_lt_10: {
    type: "LT",
    title: "TDB",
    displayName: "",
    username: "",
    org: "",
  },
  sp_lt_11: {
    type: "LT",
    title: "TDB",
    displayName: "",
    username: "",
    org: "",
  },
  sp_lt_12: {
    type: "LT",
    title: "TDB",
    displayName: "",
    username: "",
    org: "",
  },
  sp_lt_13: {
    type: "LT",
    title: "TDB",
    displayName: "",
    username: "",
    org: "",
  },
  lt_001: {
    type: "LT",
    title: "tslogで実現するセキュアなメタデータ管理とロギング",
    displayName: "sugar-cat",
    username: "sugar-cat",
  },
  lt_002: {
    type: "LT",
    title:
      "TypeScriptの名前空間を活用したUIコンポーネントの設計と型安全性の追求",
    displayName: "saku",
    username: "saku",
  },
  lt_003: {
    type: "LT",
    title: "ts-morphのパフォーマンス改善Tips",
    displayName: "Kawamata Ryo",
    username: "KawamataRyo",
  },
  lt_004: {
    type: "LT",
    title: "TypeScriptでライブラリとの依存を限定的にする方法",
    displayName: "つちのこ",
    username: "つちのこ",
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
    username: "ryu",
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
    username: "Saji",
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
      type: "session",
      content: [SESSION_LIST.s_001],
      size: "md:col-span-3",
      track: "Track1",
      labels: ["トグルルーム", "セッション"],
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
      content: [LT_LIST.sp_lt_01, LT_LIST.sp_lt_02, LT_LIST.sp_lt_03],
      size: "md:col-span-3",
      track: "Track1",
      labels: ["トグルルーム", "スポンサーLT"],
    },
    {
      type: "session",
      content: [LT_LIST.sp_lt_04, LT_LIST.sp_lt_05, LT_LIST.sp_lt_06],
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

  // 15:00 ~ 15:30
  [
    { type: "time", content: "15:00 ~ 15:30", size: "md:col-span-1" },
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

  // 15:30 ~ 16:00
  [
    { type: "time", content: "15:30 ~ 16:00", size: "" },
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
      content: "懇親会誘導",
      size: "md:col-span-6",
    },
  ],

  // 18:00 ~ 18:05
  [
    { type: "time", content: "18:00 ~ 18:05", size: "" },
    {
      type: "close",
      content: "クロージング",
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
