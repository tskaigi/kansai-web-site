export interface SessionDetail {
  title: string;
  displayName: string;
  sessionAbstract: string;
  role: string;
  org: string;
  bio: string;
  speakerImage: string;
  labels: {
    track: string;
    type: string;
    time: string;
  };
  socials: {
    xAccount?: string;
    github: string;
  };
  additionalInfo?: string;
  archive?: {
    document?: string;
  };
}

export const SESSION_DETAILS: Record<string, SessionDetail> = {
  "tak-onda": {
    title: "構造的型付けと serialize 境界",
    displayName: "恩田 崇",
    sessionAbstract:
      "### 主題\n\nTypeScript の構造的型付け (structural typing) が serialize 境界で引き起こす問題と、その解決策についてお話したいと思います。\n\n構造的型付けは、外部とのインターフェース部分で json をはじめとする様々な形式にデータを serialize する場面で、不用意に serialize してしまうと出力すべきでないデータまで serialize してしまうというミスを犯しがちです。ユーザーの目に触れる query string であったり、値のチェックが厳密な GraphQL variables では特に問題となってしまいます。 \n\n加えて、最終的に serialize するまでの過程で、データの前処理や変換を伴うにも関わらず、変換前の型が構造的部分型を満たしてしまい、必要な変換が漏れてしまうといった場合があります。\n\n本トークでは、検索条件を表現するデータ型を例として、zod や valibot に代表されるバリデータライブラリを使って serialize 直前に出力する値を保証する方法を説明します。データ変換は brand 機能による公称型 (nominal typing) で型チェックを強制し validation を補助しています。\n\nどういったデータの変換処理で問題が起きやすいのか、型をどのように考えると強固な設計になりやすいのか、プロダクトでのリアルな事例をもとにご紹介できればと思います。\n\n### 背景\n\nRemix で書かれたレストラン予約サイトを運用しています。GraphQL バックエンドを持ち、Remix の loader を BFF 的に扱うアーキテクチャを取っています。\n\n旧システムから段階的なリニューアルを進めているのですが、今回問題となったのは検索画面で、後方互換性を維持するため、画面ごとに少しずつ異なる検索条件を持つ必要がある場面でした。\n\nそれらのわずかに異なる検索条件が、省略可能なフィールドの多い検索条件というデータの特性も相まって、互換性のある構造的部分型となり、型チェックが効かない状況に陥りました。\n\n加えて、扱うべき検索条件のデータ型の峻別ができていなかったがために、不用意に処理をまとめてしまい、必要な型変換が漏れてしまい、意図しない情報を含む serialize で問題を引き起こしてしまいました。\n\nまた SSR のために TanStack Query の prefetch 機能を使っていたことも問題の発見を遅らせてしまいました。\n\nこの失敗事例をもとに、型安全に変換を行いながら、適切な serialize 前の validation を行うようにした改善について、ご紹介したいと考えています。\n\n### 想定聴衆\n\n外部とのインターフェース部分でデータの serialize を行った経験のある方が対象です。\n\nstructural typing と nominal typing の違い、zod や valibot などの validator ライブラリ、それら提供する brand 機能についても、トークの中で説明するので前提知識は不要です。",
    role: "ソフトウェアエンジニア",
    org: "株式会社一休 CTO室",
    bio: "1978年生まれ、京都在住。\nフルスタックでなんでも屋。\nフロントエンドとの関わりは IE4/DHTML の頃から。\n2023年9月から、一休レストランのフロントエンドアーキテクトを努める。\nNext.js App Router から Remix に置き換えた。",
    speakerImage:
      "https://pbs.twimg.com/profile_images/1748879536891342848/xpJWwU6h_400x400.jpg",
    socials: {
      xAccount: "https://x.com/takashi_onda",
      github: "https://github.com/tak-onda",
    },
    labels: { track: "カミナシ堂", type: "セッション", time: "16:00 ~ 16:30" },
    additionalInfo: "",
    archive: {
      document:
        "https://speakerdeck.com/takonda/structural-subtyping-and-serialize",
    },
  },
  maroKanatani: {
    title: "as（型アサーション）を書く前にできること",
    displayName: "maroKanatani",
    sessionAbstract:
      "このトークでは as（型アサーション）について扱います。\nTSを書くにあたって、anyは可能な限り避けるべしという認識は一定普及してきたように感じていますが、asの扱いに関してはanyほど普及しておらず、濫用されることも多いのではないかと思っています。\nトークではasを使ったコードを書く前に考えてほしいことについてお話します。",
    role: "ソフトウェアエンジニア",
    org: "クラスメソッド株式会社",
    bio: "大学卒業後、業務系Webアプリケーションの開発やIT講師を経験。2021年、クラスメソッド株式会社へジョイン。現在はAWS総合支援サービス・クラスメソッドメンバーズに関わるシステムにおいてフロントエンド領域をメインに開発を担当しています。",
    speakerImage:
      "https://pbs.twimg.com/profile_images/826445077631217667/QOOg5nm3_400x400.jpg",
    socials: {
      xAccount: "https://x.com/maroKanatani",
      github: "https://github.com/maroKanatani",
    },
    labels: { track: "カミナシ堂", type: "LT", time: "17:20 ~ 17:50" },
    additionalInfo: "https://zenn.dev/marokanatani",
    archive: {
      document:
        "https://dev.classmethod.jp/articles/tskaigi-kansai-2024-avoid-using-as/",
    },
  },
  tacck: {
    title:
      "Amplify Gen2 Deep Dive / バックエンドの型をいかにしてフロントエンドへ伝えるか",
    displayName: "tacck",
    sessionAbstract:
      "AWS Amplify は、AWS の中でも珍しくフロントエンドで活用できるサービスです。\n2024年5月に一般提供された Amplify Gen2 により、フロントエンドだけでなく、バックエンド機能やその背後にある必要なリソース情報すべてを TypeScript で記述できるようになりました。\nそれだけでなく、 AWS Amplify はデータ操作APIに GraphQL を使用しますが、Gen2 ではそのスキーマ定義も TypeScript で行えるようになりました。\nさらに、定義したスキーマ情報は、型情報も含めてフロントエンドから参照可能です。\n\nこの仕組みがどのように実現されているのかを掘り下げていき、 AWS Amplify Gen2 がどのような開発体験を提供してくれるのかをみなさまにお伝えしたいと思います。",
    role: "ソフトウェアエンジニア",
    org: "生活協同組合コープさっぽろ",
    bio: "北の大地の普通のソフトウェアエンジニア。たまにやるIoTが楽しい。\n\nゆるWeb勉強会@札幌 主催\nAmplify Japan User Group 運営メンバー\nAWS Community Builder (Frontend Web and Mobile)",
    speakerImage:
      "https://pbs.twimg.com/profile_images/1571789838097207297/V2aYM6_A_400x400.jpg",
    socials: {
      xAccount: "https://x.com/tacck",
      github: "https://github.com/tacck",
    },
    labels: {
      track: "トグルルーム",
      type: "セッション",
      time: "14:20 ~ 14:50",
    },
    additionalInfo: "",
    archive: {
      document:
        "https://speakerdeck.com/tacck/batukuendonoxing-woikanisitehurontoendohechuan-eruka-number-tskaigi-number-tskaigikansai-number-awsamplifyjp",
    },
  },
  ysknsid25: {
    title:
      "テストコード品質を高めるためにMutation Testingライブラリ・Strykerを実戦導入してみた",
    displayName: "Kanon",
    sessionAbstract:
      "昨今において、フロント・バックエンドに限らずテストコードは必須のものとなりつつあります。\nしかし、このように思ったことがある方は多いのではないのでしょうか？\n\n『プロダクションコードの品質はテストコードが高めてくれるけど、テストコードの品質はどうやって高めればいいの？』\n\nこの疑問を解決し、定量的にテストコード品質を測定するための手法がMutation Testです。\n\nこのセッションではTypeScript×Next.jsで作られたフロントエンドアプリに対して、Mutation TestライブラリであるStrykerを用いて計測を行い、どのようにテストコードの品質を高めていったか？を実際の導入事例を踏まえながらお話ししたいと思います。",
    role: "",
    org: "",
    bio: "完全在宅 programmer",
    speakerImage: "/speakerImages/kanon.png",
    socials: {
      xAccount: "https://x.com/ysknsid25",
      github: "https://github.com/ysknsid25",
    },
    labels: { track: "カミナシ堂", type: "セッション", time: "16:40 ~ 17:10" },
    additionalInfo: "https://zenn.dev/yskn_sid25",
    archive: {
      document:
        "https://speakerdeck.com/ysknsid25/tesutokodopin-zhi-wogao-merutamenimutation-testingraiburaristrykerwoshi-zhan-dao-ru-sitemita",
    },
  },
  euxn23: {
    title: "型付き API リクエストを実現するいくつかの手法とその選択",
    displayName: "ユーン",
    sessionAbstract:
      "近年 TypeScript あるいはそのエコシステムの成熟によって、フロント-サーバ間、あるいはサーバ同士間での型安全な API リクエストが現実的なものとなってきています。\nその手段としては型情報の共有や自動生成、あるいはバリデーションなど様々ですが、それぞれ利点と欠点を抱えており、常に最善であるケース、というのは存在せず、またそれぞれ一筋縄では行かないケースも往々にしてあります。\n\n本セッションでは、バックエンドに TypeScript を採用した場合とそうでない場合、新規開発の場合とそうでない場合など、様々なケースについて、それぞれどのようなアプローチがあり、どのように取り組むべきかについての実体験の感想と得た教訓と、またそれに基づく今後への考察をお話します。\n\n関連技術:\n・OpenAPI / Swagger / TypeSpec\n・Zod / Zodios\n・Hono(Hono RPC / @hono/zod-openapi)\n・NestJS (@nestjs/swagger)\n・tRPC\n・FastAPI など、 OpenAPI 対応の Node.js 以外の Web フレームワーク\n\n話さないこと:\n・GraphQL\n・gRPC",
    role: "エンジニア",
    org: "株式会社ドワンゴ",
    bio: "新しい認証基盤で TypeScript と OpenAPI を主に書いています。RABBIT 小隊が好きです。",
    speakerImage: "https://avatars.githubusercontent.com/u/5271091?v=4",
    socials: {
      xAccount: "https://x.com/euxn23",
      github: "https://github.com/euxn23",
    },
    labels: {
      track: "トグルルーム",
      type: "セッション",
      time: "13:40 ~ 14:10",
    },
    additionalInfo: "https://blog.euxn.me",
    archive: {
      document: "https://speakerdeck.com/euxn23/typed-api-request",
    },
  },
  uhyo: {
    title:
      "TypeScriptの次なる大進化なるか！？　条件型を返り値とする関数の型推論",
    displayName: "うひょ",
    sessionAbstract:
      "この発表では、TypeScriptのGitHubリポジトリにあるissue「Relate control flow to conditional types in return types」の内容を解説します。\n\nhttps://github.com/microsoft/TypeScript/issues/33912\n\nこのissueは数年前から存在する難題ですが、にわかにTypeScript 5.7のIteration Planに加えられました。そのため、TS 5.7の新機能候補として期待されています。（ただし、TS 5.7にこれが実装されることが確約されるものではありません）\n\n## 発表の内容（issueの内容）\n\n条件型 (conditional types) はTypeScriptの型定義におけるきわめて強力なツールです。特に、返り値の型として使えば、引数の内容に応じて返り値の型を細かく調整することができるます。条件型を活用することで、複雑なロジックを含む型定義が可能になり、関数の挙動を最大限型に反映した、最大限の安全性を提供することができます。\n\nしかし、従来条件型の型推論は全くされていませんでした。条件型を返り値とする関数の中身は、asなどの危険な機能を駆使して書かなければいけませんでした。\n\nこのissueの内容が実装されれば、返り値に条件型があってもasなどを使わずに型チェックを通せる場合が増えます。これにより、条件型の活用範囲が広がり、より高度かつな型定義を安全に書くことができるようになるでしょう。\n\n※ TS 5.7でこの機能が実装される見込みが無くなった場合でも、発表内容は変えずに発表します。",
    role: "フロントエンドエキスパート",
    org: "株式会社カオナビ",
    bio: "2024年1月から現職。フロントエンド開発の環境改善などを担当。TypeScriptのGitHub issueを全部読むのが趣味。",
    speakerImage:
      "https://pbs.twimg.com/profile_images/1341186424423378944/gYTKIbFl_400x400.jpg",
    socials: {
      xAccount: "https://x.com/uhyo_",
      github: "https://github.com/uhyo",
    },
    labels: { track: "カミナシ堂", type: "LT", time: "17:20 ~ 17:50" },
    additionalInfo: "",
  },
  canalun: {
    title: "TypeScriptの型システムは万能機械の夢を見るか？",
    displayName: "canalun(かなるん)",
    sessionAbstract:
      "TypeScriptの型システム(型計算)は、チューリング完全であると言われています。つまり、誤解を恐れずに言えば、計算機でできるすべての計算はTypeScriptの型システムでもできるというわけです！\n\nこれは驚くべきことです。「TypeScriptでもできる」ではなくて「TypeScriptの『型システムでも』できる」なのです。要するに、型システム単体で計算機の代わりになるというのです。\n\nでも、それって本当なのでしょうか。パソコンという身近な計算機一つをとってもいろいろなことができます。四則演算はもちろん、ゲームプログラミングから型推論まで、本当にたくさんのことができます。\nそして、TypeScriptの型システムを使えばそれらすべてができるというのです。にわかには信じられません。\n\n型システムで四則演算ができるのでしょうか？\n型システムでゲームが作れるのでしょうか？\n……もしかして、型システムで型システムを実装できるのでしょうか？\n\nというか、そもそも「計算機でできる計算はTypeScriptの型システムでぜんぶできる」だなんて言う人は、何を根拠にそんなことを言うのでしょうか。\nというか、もっと言えば、ある計算を取り上げて「この計算は計算機でできる/できない」だなんて言うとき、それは何を意味しているのでしょうか。\n\n気になるのは理論的な側面だけではありません。\n「TypeScriptの型システムはチューリング完全である」という事実は、TypeScriptを使う開発者にどのような利点と欠点をもたらすのでしょうか。\nチューリング完全であること、つまり「計算機代わりになるという性質」には何のデメリットもないように見えます。でも、本当に何の心配もないのでしょうか。\n\nこのセッションでは、「TypeScriptの型システムはチューリング完全である」という主張を証明しながら、型理論やチューリング完全性、そしてクワイン(自分自身を出力するプログラム)に関する計算理論をふかぼっていきます。\nそして、型システムがチューリング完全性を帯びて「しまう」理由、帯びることによる不都合やその回避可能性といった、決まった答えのない問いについても考察してみます。\n\nTypeScriptと一緒に、計算の不思議でおもしろい世界へと飛び込みましょう！",
    role: "エンジニア",
    org: "テックタッチ株式会社",
    bio: "型が大好きです！！みなさんはどうですか！？",
    speakerImage:
      "https://pbs.twimg.com/profile_images/1446378342706384896/cRJInHdC_400x400.jpg",
    socials: {
      xAccount: "https://x.com/i_am_canalun",
      github: "https://github.com/canalun",
    },
    labels: {
      track: "トグルルーム",
      type: "セッション",
      time: "10:40 ~ 11:10",
    },
    additionalInfo: "https://zenn.dev/canalun",
    archive: {
      document:
        "https://docs.google.com/presentation/d/1hnvPiSCI2UBIZ0x5OTl3ZFHvIGMIl3g37It1_Qd7hNA",
    },
  },
  mrsekut: {
    title: "フロントエンドの型安全性を高める！Jotaiを用いたフォーム設計の実践",
    displayName: "mrsekut (まる)",
    sessionAbstract:
      "フロントエンド開発における型安全な設計論について解説します。\n特に、受注管理システムの開発を通じて直面したフォーム周りの型の整合性や値の変換に関する課題に焦点をあてます。\n\n以前に私が使っていたhooksベースのフォームライブラリでは、型の不一致などの問題が発生していました。\n例えば、「長さ」というフィールドを作ったときに、numberが欲しいのに、stringが入ってきて困ったことはありませんか？こういった課題を解決するために、Jotaiを用いたアプローチを採用しました。それによって、型の保証を強化しながら、アプリケーションの外側と内側での変換を安全に行うことが可能になりました。\n\n今回は以下のような内容についてお話します\n・hooksベースでのフォームライブラリの問題点\n・Jotaiの概要\n・Jotaiでフォームを作成する具体的な方法や工夫\n・関数型プログラミングの界隈で知られる「Parse, don't validate」の考え方\n・値変換の様々な応用例\n・etc.\n\nこの講演を通じて、型安全なフロントエンド設計ついて考えている方の助けになることを目指します。\n\n想定する対象者\n・型を意識したフロントエンド開発に興味のある方\n・Reactでフォームを書いたことがある方",
    role: "エンジニア",
    org: "tryangle株式会社",
    bio: "大阪にあるベンチャーのtryangle株式会社で、ハンドメイド向けのSNSであるcrocchaを作っています。\n設計からデザインやら開発やら分析などいろいろやってます。特にフロントエンドが得意です。\n良い道具を作りたい、良い道具を使いたい。\n\nCosense (旧 Scrapbox)に日々のメモを書いています。",
    speakerImage: "https://avatars.githubusercontent.com/u/24796587?v=4",
    socials: {
      xAccount: "https://x.com/mrsekut",
      github: "https://github.com/mrsekut",
    },
    labels: { track: "カミナシ堂", type: "セッション", time: "13:40 ~ 14:10" },
    additionalInfo: "https://scrapbox.io/mrsekut-p/",
    archive: {
      document:
        "https://scrapbox.io/mrsekut-merry-firends/フロントエンドの型安全性を高める%EF%BC%81Jotaiを用いたフォーム設計の実践_@TSKaigi_Kansai_2024",
    },
  },
  kawamataryo: {
    title: "ts-morphのパフォーマンス改善Tips",
    displayName: "Kawamata Ryo",
    sessionAbstract:
      "TypeScriptのCompiler APIのラッパーライブラリとして広く利用されているts-morph。しかし、プロジェクトの解析規模が大きくなるにつれて、多くの開発者が直面するのがts-morphの実行速度に関する問題だと思います。本トークでは、ts-morphを用いた開発においてパフォーマンスを向上させるためのテクニックを、実際の改善プロセスとその結果をもとに解説します。\n\n想定聴衆:\nts-morphを用いてツールを開発中、またはこれから開発を始めようとしている方々。ts-morphについても簡単に説明しますので、前提知識は必要ありません。",
    role: "ソフトウェアエンジニア",
    org: "LAPRAS株式会社",
    bio: "LAPRAS株式会社のソフトウェアエンジニア。元消防士。余暇で始めたWeb制作をきっかけにプログラミングの楽しさを知りエンジニアへ転職。 エムスリー、Misocaを経て現職に。趣味は懸垂と個人開発。",
    speakerImage: "https://avatars.githubusercontent.com/u/11070996?v=4",
    socials: {
      xAccount: "https://x.com/KawamataRyo",
      github: "https://github.com/kawamataryo",
    },
    labels: { track: "トグルルーム", type: "LT", time: "15:00 ~ 15:25" },
    additionalInfo: "",
    archive: {
      document:
        "https://www.docswell.com/s/kawamataryo/56VJ1W-ts-morph-performance",
    },
  },
  "10tera": {
    title: "subpath importsで始めるモック生活",
    displayName: "10tera",
    sessionAbstract:
      "subpath importsを使うと、環境に応じて特定のパスを他のパスに再マッピングすることができます。\nこの機能はTypeScript 5.4から正式にサポートされるようになりました。この機能を活用すると、型安全かつ簡単にモックを実装することができます。\n\nこのLTでは\n・subpath importsでどうやって型安全に簡単にモックするのか？なぜ簡単なのか？\n・Storybookと組み合わせることの旨み\nについてお話しします。",
    role: "エンジニア",
    org: "株式会社ゆめみ",
    bio: "高専卒業後、株式会社ゆめみに24卒として入社。\nフロントエンドを主領域として働いているエンジニアです。",
    speakerImage:
      "https://pbs.twimg.com/profile_images/1593589878075580417/ux6QmBSd_400x400.jpg",
    socials: {
      xAccount: "https://x.com/10tera1",
      github: "https://github.com/10tera",
    },
    labels: { track: "カミナシ堂", type: "LT", time: "15:00 ~ 15:25" },
    additionalInfo: "https://10tera.dev/",
  },
  syumai: {
    title: "初めてDefinitelyTypedにPRを出した話",
    displayName: "syumai",
    sessionAbstract:
      "皆さんは、DefinitelyTypedにPRを出したことはあるでしょうか？\nTypeScriptを使った開発を行ったことがあれば、誰もが一度はお世話になったことがあるはずのDefinitelyTypedですが、これを利用した時に、型定義がライブラリと合っていなかったという経験がある方もいらっしゃると思います。そうした場合に、修正を行う方法を知っておくのは有益でしょう。\n先日のことですが、私は実際に、JavaScriptで実装され、DefinitelyTypedで型定義を配布しているライブラリにPRを出し、その流れでDefinitelyTyped側の更新も行うという経験をしました。その中で、DefinitelyTypedが9000プロジェクトを超える巨大なpnpmのモノレポになっていることや、独特なバージョンタグ付け方法を使用していることなどを知りました。\n本発表では、実際に私がDefinitelyTypedにPRを出すにあたって得た知識や、知っておくべき / 読んでおくべきものについて簡単に紹介させていただきます。",
    role: "ソフトウェアエンジニア",
    org: "株式会社ベースマキナ",
    bio: "株式会社ベースマキナ所属。GoやTypeScriptでWebアプリケーション開発をしている。ECMAScript仕様輪読会主催。Software DesignでCloudflare Workersの連載中。",
    speakerImage: "https://avatars.githubusercontent.com/u/6882878?v=4",
    socials: {
      xAccount: "https://x.com/__syumai",
      github: "https://github.com/syumai",
    },
    labels: { track: "カミナシ堂", type: "LT", time: "17:20 ~ 17:50" },
    additionalInfo: "https://syum.ai",
  },
  "taro-28": {
    title: "ローコードSaaSのUXを向上させるためのTypeScript",
    displayName: "taro",
    sessionAbstract:
      "管理画面のローコードSaaSであるベースマキナには、JavaScriptで組み込みの関数の呼び出しや条件分岐などの処理を書いて、ワークフローを作成できる機能があります。\n\nこのセッションでは、この機能のUXを向上させるためにどのようにTypeScriptを活用しているかを紹介します。\n\n以下が話す予定の内容です。\n\n- ブラウザ上のMonaco Editorを使ったコードエディターで、ユーザーが定義した関数や組み込みの関数に型をつけて補完を可能にする\n- 組み込みの関数の引数の型をzodのスキーマで定義して、実行前に引数の値をバリデートし、日本語のエラーメッセージを表示する\n\nなど\n\n一部Monaco Editorとzodの話も含みますが、大部分はTypeScriptの機能を使った話です。\n特定のライブラリの機能を使う部分には都度説明を入れるので、TypeScriptを使ったことのある方であれば楽しめる内容になる予定です。",
    role: "ソフトウェアエンジニア",
    org: "株式会社ベースマキナ",
    bio: "管理画面のローコードSaaS「ベースマキナ」を作っています。TypeScript, Go, GraphQLを使っています。",
    speakerImage:
      "https://pbs.twimg.com/profile_images/1528453898196856832/0jhmxEPF_400x400.jpg",
    socials: {
      xAccount: "https://x.com/taroro_tarotaro",
      github: "https://github.com/taro-28",
    },
    labels: { track: "カミナシ堂", type: "セッション", time: "11:30 ~ 12:00" },
    additionalInfo: "",
    archive: {
      document: "https://zenn.dev/taroro28/scraps/83e2a3cd6ea2b4",
    },
  },
  sajikix: {
    title: "アプリ文言のパースで学ぶ文字列Literal型パズル入門",
    displayName: "Saji",
    sessionAbstract:
      "TypeScriptは非常に強力な型推論機能をもっており、特にinferやconditional types、再帰型などの構文はほかの言語でも珍しい強力な機能です。また数値や文字列のリテラル型に対して、これらの強力な型推論機能を使えば「疑似的なパース処理」や「型に計算機能を持たせる」といったことまで出来ることはTypeScriptのファンの中では知られています。\n\n一方で、このような機能や知見はもっぱらtype-challengesなどのいわゆる「型パズル」への解法として紹介されることが多く、普段業務でのみTypeScriptを利用される方などになじみ深いとは言えません。\n\nそこでこのLTは、前述したような複雑な型推論機能を利用していなかった人に向けて、身近な例から興味を持ってもらい、TypeScriptの複雑で強力な推論機能理解へのあしがかりになることをゴールとします。\n\n具体的には「アプリの文言管理」というなるべく一般的な題材をスタート地点としつつ、文字列リテラル型に対しての解析を「conditional types,infer,再帰型」の3つを理解することで可能になるという話を行います。",
    role: "フロントエンドエンジニア",
    org: "サイボウズ株式会社",
    bio: "サイボウズのフロントエンドエンジニア。 業務ではフロントエンド刷新を中心とした製品チームへのフロントエンド技術支援や社内外への技術発信を行っている。フロントエンド領域でも特にJavaScriptの仕様自体や国際化機能・構文解析などに興味がある。",
    speakerImage: "https://avatars.githubusercontent.com/u/14814057?v=4",
    socials: {
      xAccount: "https://x.com/sajikix",
      github: "https://github.com/sajikix",
    },
    labels: { track: "カミナシ堂", type: "LT", time: "17:20 ~ 17:50" },
    additionalInfo: "https://sajiki.dev/",
  },
  "all-user": {
    title: "interfaceを活用して安全性と拡張性を兼ね備えた型を作る",
    displayName: "岡本 圭太@all-user",
    sessionAbstract:
      "TypeScriptのinterfaceの拡張性を活用した、ライブラリとアプリケーション間の柔軟な型定義の実現方法について紹介します。具体的には、クロスドメインiframe間のメッセージング機能での採用例を紹介し、ライブラリ側で型を固定せずにアプリケーション側で自由に型を拡張できる手法を解説します。\nまた、実装の中でぶつかった課題や注意点についても触れます。\nこの手法により、ライブラリとアプリケーション間の依存関係を適切に保ちつつ、型安全性を確保することができました。さらに、応用例として、Reduxのstate、ロガーのreason、ルーティングのpath/paramsなどへの適用可能性についても妄想してみます。",
    role: "エンジニア",
    org: "テックタッチ株式会社",
    bio: "TSの柔軟かつ厳格な型の表現力が大好きなフロントエンドエンジニアです。現在はテックタッチ株式会社でDOMとのインタラクション周りの開発を中心としたチーム（Elementチーム）のフロントエンドを担当しています。",
    speakerImage:
      "https://pbs.twimg.com/profile_images/498061652512628736/bJnHQEe0_400x400.jpeg",
    socials: {
      xAccount: "https://x.com/all__user",
      github: "https://github.com/all-user",
    },
    labels: { track: "カミナシ堂", type: "LT", time: "15:00 ~ 15:25" },
    additionalInfo: "https://memowomome.hatenablog.com/",
  },
  sakupi01: {
    title:
      "TypeScriptの名前空間を活用したUIコンポーネントの設計と型安全性の追求",
    displayName: "saku",
    sessionAbstract:
      "このトークでは、TypeScriptの名前空間（namespace）機能を活用したUIコンポーネントの設計について紹介します。\n具体的には、名前空間を用いることで、関連する型やコンポーネントを論理的にグループ化し、コードの簡素化や保守性の向上を実現する手法についてお話できればと思っています。\nモダンなフロントエンド開発において、モジュールシステムを用いたコンポーネントベースの設計は標準となってきています。\nTypeScriptの名前空間は、現在では特殊な用途以外で使うことが少ないとされていますが、特定のユースケースにおいては非常に有用です。\n特に、UIコンポーネントの実装においては、名前空間を用いることで、関連する型やコンポーネントをグループ化し、単一インポートによるコードの簡素化、名前の衝突を避けるための柔軟な命名、そして内部使用の型のカプセル化を実現できます。\nこのトークは、TypeScriptを使用して大規模なUIコンポーネントを開発している方や、TypeScriptを使ったプロジェクトで構造化や型安全性の向上に取り組んでいる方を対象としています。\nまた、TypeScriptのnamespaceに興味はある・知っているが、その具体的な活用方法について知りたいと考えている方にも有益かと思われます。",
    role: "フロントエンドエンジニア",
    org: "サイボウズ株式会社",
    bio: "Web Frontend Developer @Cybozu, Inc.",
    speakerImage:
      "https://pbs.twimg.com/profile_images/1712109986288144384/6T8ypntK_400x400.jpg",
    socials: {
      xAccount: "https://x.com/sakupi01",
      github: "https://github.com/sakupi01",
    },
    labels: { track: "カミナシ堂", type: "LT", time: "15:00 ~ 15:25" },
    additionalInfo: "https://sakupi01.com/",
    archive: {
      document: "https://sakupi01.github.io/slides/ja/2024_tskaigi_kansai/",
    },
  },
  yamatsum: {
    title:
      "GraphQLのダイエット術：TypeScript Language Service Pluginで未使用フィールドをなくす",
    displayName: "松本泰幸（yamatsum）",
    sessionAbstract:
      "### トークで主に扱う題材\n\nTypeScript Language Service Pluginを活用し、GraphQLの未使用フィールドをエディタ上で警告表示する手法を紹介します。具体的には、GraphQLSPを利用してTracking unused fieldsを実現するまでの過程を解説します。参加者はこのトークを通じて、TypeScriptの型安全性をGraphQL開発にも拡張する方法を学び、より効率的で堅牢なフロントエンド開発を実現するための具体的な手法を習得できます。\n\n### トークの背景\n\nGraphQLを利用したフロントエンド開発では、over fetching（過剰なデータ取得）の課題解決に向けた様々な工夫がされています。over fetchingを削減することは、ネットワーク帯域の節約、サーバー負荷の軽減、そしてユーザー体験の向上に繋がります。昨今ではFragment Collocationなどの工夫により、コンポーネントの変更に伴う不要なフィールドの削除が容易になりました。しかし、未使用フィールドの特定と削除は依然として開発者の手作業に頼る部分が多く、改善の余地が残されています。\n\n### 想定聴衆\n\nTypeScriptとGraphQLを用いたフロントエンド開発に携わっているエンジニアを対象としています。TypeScriptの基本的な知識とGraphQLの基礎知識がある方を想定しています。TypeScript Language Service PluginやGraphQLに関する深い知識は前提としませんが、型安全性や効率的な開発に関心のある方であれば十分に理解できる内容です。\n\nこのトークを通じて、TypeScriptの型安全性をGraphQL開発にも適用し、未使用フィールドの問題を解決するための具体的な手法を習得できます。フロントエンド開発における型安全性の重要性を再認識し、より効率的で堅牢なアプリケーション開発を実現を目指します。",
    role: "フロントエンドエンジニア / EM",
    org: "株式会社令和トラベル",
    bio: "2017年にLINEヤフー株式会社に新卒入社後、社内プラットフォームの開発・運用に従事。\n2021年より異動を経て、「Yahoo!フリマ」のフロントエンドの開発を担当。\n2022年に株式会社令和トラベルに入社し、現在はWeb領域のテックリードおよびEMを担当。",
    speakerImage:
      "https://pbs.twimg.com/profile_images/1798710054247641088/H3a7Px-p_400x400.jpg",
    socials: {
      xAccount: "https://x.com/_yamatsum",
      github: "https://github.com/yamatsum",
    },
    labels: { track: "トグルルーム", type: "LT", time: "15:00 ~ 15:25" },
    additionalInfo: "https://zenn.dev/yamatsum",
    archive: {
      document: "https://zenn.dev/reiwatravel/articles/9d9551f5a9cee2",
    },
  },
  tocomi: {
    title: "型チェック 速度改善 奮闘記⏳",
    displayName: "Kenta TSUNEMI",
    sessionAbstract:
      "このトークでは、TypeScript における型チェックの速度改善について扱います。\n\n速度改善で直面した課題、うまくいったこと、いかなかったこと、その過程をなるべくありのままお伝えできればと思っています！\n\n- 速度改善のための具体的な調査方法の紹介\n- 型チェックの遅延が発生する原因とそれに対するアプローチ\n- 改善の結果とその評価\n\n## 背景\n\n私は現在、React + TypeScript を利用したアプリケーション開発に携わっています。\n\nNx を利用したモノレポ構成で、5 つのアプリケーションと 100 近くの内部パッケージが 1 つのリポジトリで管理されています。\n\nアプリケーションが成長していく中で、エディタ上での型チェックやコード保存時の型チェックが遅いという声を社内でよく耳にするようになりました。\n\nただ、各自の担当業務で手一杯のためこの問題は劣後してしまい、問題が放置されてしまう状況が続いていました。\n\nこのままでは開発効率は悪化の一途をたどるので、私はこの問題に取り組むことにしました💪\n\n## 想定聴衆\n\n- TypeScript の速度改善に取り組みたいと考えている方\n- 速度改善の結果だけでなく、調査の過程に興味を持っている方",
    role: "エンジニア",
    org: "テックタッチ株式会社",
    bio: "テックタッチ株式会社でフロントエンドエンジニアをしています。笑いの取れるエンジニアを目指しています！",
    speakerImage: "https://avatars.githubusercontent.com/u/25561744?v=4",
    socials: {
      xAccount: "https://x.com/tocomi0112",
      github: "https://github.com/tocomi",
    },
    labels: {
      track: "トグルルーム",
      type: "セッション",
      time: "11:30 ~ 12:00",
    },
    additionalInfo: "https://tocomi.net/",
    archive: {
      document:
        "https://speakerdeck.com/tocomi/xing-tietuku-su-du-gai-shan-fen-dou-ji",
    },
  },
  sadnessOjisan: {
    title: "TypeScript、上達の瞬間",
    displayName: "sadnessOjisan",
    sessionAbstract:
      '# トークの主題\n\nこのトークでは自分が TypeScript を使っていく中で明らかに上達した瞬間について話します。\n\n例えば次の経験を得て、自分は TypeScript 力を上達させました。\n\n* 仕事上であるニーズを満たそうと調べたり、type-challenges を解く上で、TypeScript の便利な使い方を知り、その理屈を深掘る。（例: 制約が満たされない場合にunknown型になる関数を作ることで制約を満たすか検証する）\n* 別言語でよく使われる有用なパターンを TypeScript にも取り込み、これまでしなかった考え方を身につける。（例: 判別共用体、exhaustive check、opaque、型にeffectを書く）\n* 簡単な型検査機を自作し、型検査が何かを知る。\n\nしかしこれらを理解できたのは優れたドキュメントや手取り足取り解説してくれた友人のおかげです。\nこのとき、自分は何に詰まっていて、友人のどのような教えによって理解したかを紹介し、理解を導くために自分の経験から再現性のありそうな話を紹介します。\n\n# トークの背景\n\nプログラミング学習において、何かしらの壁があってそれを乗り越えると上達したと言えると思います。\nそしてその壁を乗り越えるのは知識と経験を駆使して自分で乗り越える以外にも、"天啓"、"出会い"、"導き" などの外部要因があると思います。\n自分はがむしゃらに勉強してもなかなか壁を乗り越えられなかったのですが、たまたま様々な外部要因である "偶然" によって、一つのピースを得て壁を乗り越えられた経験が往々にしてあります。\nただこの外部要因に出会えるかは運だと思っており再現性はないと思っています。\nそこでこのトークでは再現性をもたらすべく、自分が上達した瞬間を共有したいです。\n\n# 想定聴衆\n\n* TypeScript を使っている人\n* 別言語の経験が少ない人\n\nTypeScriptをよりよく書くための方法にフォーカスするトークであり、TypeScript未経験の方は対象外となります。',
    role: "",
    org: "",
    bio: "tsconfig と linter の設定を噛み合わせるのが下手",
    speakerImage:
      "https://pbs.twimg.com/profile_images/1792751442425733121/UN6h23Yj_400x400.jpg",
    socials: {
      xAccount: "https://x.com/sadnessOjisan",
      github: "https://github.com/sadnessOjisan",
    },
    labels: {
      track: "トグルルーム",
      type: "セッション",
      time: "16:00 ~ 16:30",
    },
    additionalInfo: "https://blog.ojisan.io/",
  },
  izumin5210: {
    title: "よくできたテンプレート言語として TypeScript + JSX を利用する試み",
    displayName: "izumin5210",
    sessionAbstract:
      "プロダクト開発ではメールや Slack 通知などの実装のために複雑な構造化文字列の組み立てが必要になることがあります。\nしかし、このような文字列・構造の構築を見通しよく・メンテナンスしやすく実装するのは簡単ではありません。これは JavaScript 以外の言語でも同様に悩ましい問題です。\n\n本発表では、そんなメールや Slack 通知などの組み立てを TypeScript + JSX を利用することで、簡単・安全・見通しよく実現する方法について話します。\nなぜ TypeScript や JSX か, メリット・デメリット, 技術選定, アーキテクチャなどを紹介します。\nまた、TypeScript からだけでなく、Go など他の言語から TypeScript + JSX で記述されたコードを利用したいという実際のユースケースで、どのようなアプローチを検討し、結果どのようなアーキテクチャを採用し、実装したかについても紹介します。",
    role: "Software Engineer",
    org: "株式会社LayerX",
    bio: "バックエンドや Web フロントエンドの開発速度・体験・拡張性を高める基盤開発をしたり、プロダクト開発をしたりするソフトウェアエンジニア。 Connect RPC や GraphQL  などの API 技術が好き。関西出身。",
    speakerImage: "https://avatars.githubusercontent.com/u/2010175?v=4",
    socials: {
      xAccount: "https://x.com/izumin5210",
      github: "https://github.com/izumin5210",
    },
    labels: {
      track: "トグルルーム",
      type: "セッション",
      time: "16:40 ~ 17:10",
    },
    additionalInfo: "",
  },
  noko_noko619: {
    title: "TypeScriptでライブラリとの依存を限定的にする方法",
    displayName: "つちのこ",
    sessionAbstract:
      "フレームワークやライブラリへの依存が深くなってしまう問題は、開発者は誰しもが経験していることだと思います。そうした中で、そういった課題を解決するための方法の一つとして、TypeScriptを使用した「ライブラリのスコープの限定」や「使用用途の制限」などを行う方法を紹介します。\n\n具体的には、ライブラリを使用する箇所を特定のファイル内に限定し、そのライブラリを使用する上で必要な情報を型によって制限することにあります。そうすることで、ライブラリのアップデートや変更に対して、その特定のファイルへの対応のみで済むことや、型によって使用用途が制限されることで、ライブラリを使用する側の実装ミスなどを減らすことができるメリットを有しております。\n\n特別珍しいことを行っているわけではないため、今回紹介する方法を普段何気なく実践しているチームや環境もあるかと思いますが、改めて方法の一つとして提示し、今後開発に取り入れるかどうか検討する材料にしていただけると幸いです。",
    role: "エンジニア",
    org: "株式会社サイバーエージェント",
    bio: "2022年に株式会社サイバーエージェントに入社。ゲーム配信サービスの開発を経験した後、新規サービスの立ち上げにおいてWebフロント領域のリーダーを経験。",
    speakerImage:
      "https://pbs.twimg.com/profile_images/1708073664464494592/LR3OWw8I_400x400.jpg",
    socials: { xAccount: "https://x.com/noko_noko619", github: "" },
    labels: { track: "カミナシ堂", type: "LT", time: "15:00 ~ 15:25" },
    additionalInfo: "",
  },
  "sugar-cat7": {
    title: "tslogで実現するセキュアなメタデータ管理とロギング",
    displayName: "sugar-cat",
    sessionAbstract:
      "[主題]\nTypeScript製Loggerで構造化ロギングをより扱いやすいものにする\n\n[題材を選んだ理由・背景]\n昨今エッジコンピューティング等の流行りからバックエンド開発にTypeScriptを採用する機会が増えました。\nしかし、他の言語に比べバックエンドTypescriptの本番運用の知見は少ないように感じます。\n運用を始めると、思わぬ障害や開発途中でのトラブルに巻き込まれる可能性があります。その際に意味のあるロギングが行えているかどうかは非常に重要です。\nこのセッションではtsLogというTypescript製Loggerを利用し、メタデータの管理やマスキングなど実運用を行うために必要なコンテキストフルなLoggerの作成方法、及び監視SaaSと組み合わせた運用方法を紹介します。",
    role: "SRE",
    org: "所属非公開",
    bio: "某所でSREをしています。\nアプリケーション開発からインフラの運用まで何でもやる人。セキュリティやパフォーマンスチューニングの話が好き。",
    speakerImage:
      "https://pbs.twimg.com/profile_images/1390598303851507714/JbP26ybO_400x400.jpg",
    socials: {
      xAccount: "https://x.com/sugar235711",
      github: "https://github.com/sugar-cat7",
    },
    labels: { track: "トグルルーム", type: "LT", time: "15:00 ~ 15:25" },
    additionalInfo: "",
  },
  Exerea: {
    title: "Full-Stack TypeScript開発で共通化すべき型とは",
    displayName: "龍野 卓己",
    sessionAbstract:
      "近年、フロントエンドもバックエンドもTypeScriptで統一する「Full-Stack TypeScript」開発が急速に普及しています。しかし、モジュール間の型共有や連携に関する知見はまだ十分に共有されていません。フロントエンドとサーバーサイド間で言語の切り替えコストを抑える鍵となるのが「型の共有」です。本セッションでは、実務上で共有することで特に効果を発揮した「定義して良かった型」と実例について紹介します。開発効率を向上させる実践的な型定義とその共有方法をお伝えし、プロジェクトで活用できるノウハウを提供します。",
    role: "エンジニア",
    org: "トグルホールディングス株式会社",
    bio: "トグルホールディングス株式会社のプロダクトエンジニア \n不動産開発領域でのデジタルインフラを実現する「つくるAI」シリーズの開発をフルスタックで担当しています。\n最近は名前の「龍野」からもじって、「ドラゴンさん」なんて呼ばれることも。\n憧れのTSKaigiでの初LT、めいっぱい楽しんでいきます！",
    speakerImage: "https://avatars.githubusercontent.com/u/97393820?v=4",
    socials: {
      xAccount: "https://x.com/Takumi_T_JP",
      github: "https://github.com/Exerea",
    },
    labels: { track: "トグルルーム", type: "LT", time: "15:00 ~ 15:25" },
    additionalInfo: "https://note.com/toggle/n/n25ce52d3a2ae",
    archive: {
      document:
        "https://speakerdeck.com/takumi_tatsuno/tskaigi-kansai-deng-tan-zi-liao",
    },
  },
  "yuta-ike": {
    title: "複雑なフロントエンド（ノーコード）を堅牢に作る",
    displayName: "yuta-ike",
    sessionAbstract:
      "現在、GUIでシナリオテストを作成できるノーコードツールを開発しています。このツールでは、各APIエンドポイントへの呼び出しをブロックで表し、ブロック同士を線で繋げることで直感的なテストシナリオの構築が可能となります。\n\n===\n\nこのようなノーコードをはじめとする複雑なGUIの実装では、通常のアプリケーションと比較し、フロントエンドで扱う状態とロジックの数が圧倒的に多くなります。\n\nこの複雑性に立ち向かうために、現在のプロジェクトでは、EffectとJotaiを利用したCQRS/Fluxライクなアーキテクチャを取り入れています。Write部分ではEffectを利用した堅牢なロジックの記述を心がけ、Read部分においてはJotaiの派生アトムを利用した柔軟にデータ取得が可能な設計としています。\n\n今回の発表では、実際にこれらのライブラリを組み合わせてフロントエンドを開発してみて得られた知見や難しさ、設計方針などを、実際のコード等を交えながらご紹介したいと思います。\n\n私自身は、ソフトウェア設計や関数型パラダイムの専門家ではありませんが、一つの事例として皆さんの議論のきっかけにしていただければと思います。\n\nなお、発表内容はIPA 未踏IT人材発掘・育成事業にて取り組んでいるプロジェクトに関するものになります。",
    role: "ソフトウェアエンジニア",
    org: "エムスリー株式会社",
    bio: "2024年4月にエムスリー株式会社に新卒入社。2024年度の未踏IT人材発掘・育成事業に採択。TSKaigi 運営スタッフ。\nプロトタイピングとハッカソン、ノーコード（作る方も）とデザインが好きです。",
    speakerImage:
      "https://pbs.twimg.com/profile_images/1260451774932156418/9D6Br_B6_400x400.jpg",
    socials: {
      xAccount: "https://x.com/Selria1",
      github: "https://github.com/yuta-ike",
    },
    labels: { track: "カミナシ堂", type: "セッション", time: "14:20 ~ 14:50" },
    additionalInfo: "",
    archive: {
      document:
        "https://www.docswell.com/s/yuta-ike/KJ486V-tskaigi-kansai-2024",
    },
  },
  yebis0942: {
    title: "ベースマキナにおけるTypeScriptコードベース改善活動の紹介",
    displayName: "福田健人",
    sessionAbstract:
      "株式会社ベースマキナでは、2020年（TypeScript v3）から現在（TypeScript v5）までTypeScript×Reactによるフロントエンド開発を行なってきました。 本セッションでは、私たちの継続的なコードベース改善活動についてご紹介します。",
    role: "ソフトウェアエンジニア",
    org: "株式会社ベースマキナ",
    bio: "株式会社ベースマキナの開発チームで働いています。TypeScriptとReactによるフロントエンド開発と、Goによるバックエンド開発を担当。好きなテクニックはタグ付きユニオンです。",
    speakerImage:
      "https://pbs.twimg.com/profile_images/1110154404894654464/O5K8Eb_S_400x400.jpg",
    socials: {
      xAccount: "https://x.com/yebis0942",
      github: "https://github.com/yebis0942",
    },
    labels: {
      track: "カミナシ堂",
      type: "スポンサーLT",
      time: "12:25 ~ 13:20",
    },
    additionalInfo: "",
  },
  "yudai-nishiyama": {
    title: "美しい京都の型と文化財",
    displayName: "yudai nishiyama",
    sessionAbstract: "秋の京都で開催されるTSKaigi Kansai 2024に寄せて",
    role: "Gyazo プロジェクトマネージャー",
    org: "株式会社Helpfeel",
    bio: "京都大学大学院人間・環境学研究科修了。学部では工業化学を専攻して福島第一原発事故のフィールド調査にも加わったが、大学院では心機一転して社会行動論分野を研究。在学中にGyazoとScrapboxを利用しはじめ、開発メンバーとも交流するようになりました。Webエンジニアとしてキャリアを開始した後、コロナ禍を機に住まい方を見直しNota（現Helpfeel）にジョイン。現在は主にGyazoのウェブ開発に携わるとともに、普遍性のある仕組みについて日々考えています。",
    speakerImage:
      "https://t.gyazo.com/teams/nota/d28681e3ba9865d911cc1eb4759da3cd.jpg",
    socials: { xAccount: "", github: "" },
    labels: {
      track: "トグルルーム",
      type: "スポンサーLT",
      time: "12:25 ~ 13:20",
    },
    additionalInfo: "",
  },
  moroball14: {
    title: 'IDEでTypeScriptの補完が"始まる"まで',
    displayName: "もろこし",
    sessionAbstract:
      "私たちが開発する上で欠かせないのがIDE（Integrated Development Environment）。エラーや警告などをエディタ上にハイライトしたり、ホバーしてAPI情報を表示したり、変数や関数の定義箇所にジャンプしたりと、IDEは様々な機能を日々私たちに提供しています。今回はそのIDEが提供する機能の一つである「補完」が実行されるまでに何が行われているか、TypeScript Language Server のコードに触れてみたいと思います。",
    role: "エンジニア",
    org: "株式会社ビットキー",
    bio: "株式会社ビットキーのソフトウェアエンジニア。新しい働き方を実現するためのプロダクト「workhub」の開発に従事。テストコードが好き。アイスランドに住むことを夢見て日々仕事を頑張っている。",
    speakerImage:
      "https://pbs.twimg.com/profile_images/1485593400183525376/WfykAWsA_400x400.png",
    socials: {
      xAccount: "https://x.com/moroball14",
      github: "https://github.com/moroball14",
    },
    labels: {
      track: "カミナシ堂",
      type: "スポンサーLT",
      time: "12:25 ~ 13:20",
    },
    additionalInfo: "",
  },
  yoshiko_pg: {
    title: "コンパウンド戦略を支えるフロントエンド基盤設計",
    displayName: "よしこ",
    sessionAbstract:
      "ナレッジワークでは事業戦略のひとつにコンパウンド戦略を掲げています。コンパウンド戦略とは何なのか、それを実現するための技術戦略には何が必要なのか、そこから導かれる技術基盤設計はどうなるのか、マクロからミクロまでお話しします。",
    role: "フロントエンドエンジニア",
    org: "株式会社ナレッジワーク",
    bio: "2015年、株式会社グッドパッチ入社。2017年、株式会社FOLIO入社。2020年、株式会社ナレッジワーク共同創業。Google Developer Experts (GDE) 選出。著書『HTML5/CSS3モダンコーディング』。",
    speakerImage:
      "https://pbs.twimg.com/profile_images/1675041212120858626/yg5ylM8G_400x400.jpg",
    socials: {
      xAccount: "https://x.com/yoshiko_pg",
      github: "",
    },
    labels: {
      track: "カミナシ堂",
      type: "スポンサーLT",
      time: "12:25 ~ 13:20",
    },
    additionalInfo: "",
  },
  ysk8hori: {
    title: "TypeScript Graph でコードレビューの心理的障壁を乗り越える",
    displayName: "ホリちゃん",
    sessionAbstract:
      "コードレビューを任されたとき、特にコードベースの土地勘のない箇所のレビューに対して心理的な障壁を感じませんか？ TypeScript Graph というツールを作り心理的障壁を乗り越えた事例を紹介します。また、TypeScript Graph を使うことで視覚化されてきた、我々の PR や設計の問題点についても考察します。",
    role: "フロントエンドエンジニア",
    org: "株式会社ドワンゴ",
    bio: "プログラムチョット書ける。ナンプレアプリ作ってます。北海道江別市在住Webフロントエンドエンジニア。",
    speakerImage:
      "https://pbs.twimg.com/profile_images/1646851593944588290/MtIgxD0F_400x400.jpg",
    socials: {
      xAccount: "https://x.com/@YSK8_",
      github: "https://github.com/ysk8hori",
    },
    labels: {
      track: "カミナシ堂",
      type: "スポンサーLT",
      time: "12:25 ~ 13:20",
    },
    additionalInfo: "https://numberp.net/",
  },
  smoothbronco: {
    title:
      "Full TypeScriptな環境でLINE配信のコンテンツエディタを型安全に実装している話",
    displayName: "Takahiro Hayashi",
    sessionAbstract:
      "- KARTE, およびKARTE Messageというプロダクトの紹介\n- KARTE Messageを使ったLINE配信のパーソナライズに関する課題と取り組み",
    role: "エンジニア",
    org: "株式会社プレイド",
    bio: "2023年の7月から株式会社プレイドのインターンに参加し、2024年4月に新卒エンジニアとして入社。\nKARTE Messageの開発チームに所属し、管理画面から配信基盤まで技術領域を問わず担当している。\nプロダクト開発に加え、学生インターンの採用・育成にも取り組んでいる。",
    speakerImage:
      "https://pbs.twimg.com/profile_images/1769362672263532545/PnakujLL_400x400.jpg",
    socials: {
      xAccount: "https://x.com/smoothbronco",
      github: "https://github.com/smoothbronco",
    },
    labels: {
      track: "トグルルーム",
      type: "スポンサーLT",
      time: "12:25 ~ 13:20",
    },
    additionalInfo: "",
  },
  jamashita: {
    title: "TSでシステムが堅牢になっていくさまをスポンサーになるたびに報告",
    displayName: "やました (jamashita)",
    sessionAbstract:
      "フロントエンドにTSを取り入れたことによってシステムを複雑で変化に富んだ世界でも生き残れるようにする",
    role: "新入生",
    org: "クラフトバンク株式会社",
    bio: "サバイバルTypeScriptをよく書いています！たぶん2番目くらいに書いています！",
    speakerImage: "/speakerImages/jamashita.png",
    socials: { xAccount: "", github: "https://github.com/jamashita" },
    labels: {
      track: "トグルルーム",
      type: "スポンサーLT",
      time: "12:25 ~ 13:20",
    },
    additionalInfo: "",
  },
  "suzuki-takahiro": {
    title: "生産性を爆上げするため入社後すぐBiomeを導入した話",
    displayName: "鈴木 貴大",
    sessionAbstract:
      "TypeScript の開発環境では、静的解析に ESLint、フォーマットに Prettier を使うことが多いのでないでしょうか。しかし、プロジェクトが拡大するにつれて「実行速度が課題になる」という声は少なくありません。\n\n私たちトグルホールディングスでは、フロントエンドからバックエンド、IaCまで、開発全体をTypeScriptで統一し、さらにモノレポ構成を採用しています。そのため、開発環境における実行速度は非常に重要な要素となります。\nそこで、近年注目を集めている Rust製の Biome にフォーマットと lint を移行してみました。\n\n入社したばかりの登壇者が「速さと品質の両立」のために、全社へ影響する環境改善をどのように行い、爆速な開発環境を提供できるようになったかご紹介します。",
    role: "エンジニア",
    org: "トグルホールディングス株式会社",
    bio: "新卒で住宅営業職についた後、エンジニアへ転身。\nアプリケーションエンジニアとしてデータ基盤アプリや広告運用DXツールの開発を行い、Web開発や業務システムの構築を担当。フロントエンドからバックエンドまで幅広く携わる。\n\n現在は不動産流通プラットフォーム「つくるAI」のMap技術に携わる開発をフルスタックに担当しチームリーダーとして活躍中。",
    speakerImage: "/speakerImages/suzuki_takahiro.jpg",
    socials: { xAccount: "", github: "" },
    labels: {
      track: "トグルルーム",
      type: "スポンサーLT",
      time: "12:25 ~ 13:20",
    },
    additionalInfo: "",
  },
  kkkaoru: {
    title: "gRPC-Gatewayとの通信でTypeScriptの型の恩恵を受ける活用事例",
    displayName: "大高薫",
    sessionAbstract:
      "AVITAではgRPC-Gatewayを利用してAPIを開発しているプロダクトがあり、このAPIとの通信では機械的にTypeScriptのファイルを生成して開発をしています。\nこのセッションでは、どういう仕組みでTypeScriptの型定義を生成しているのか実例や構築する中で得た知見を共有します。",
    role: "VPoE",
    org: "AVITA株式会社",
    bio: "2015年から様々な会社でフロントエンジニアとして開発経験を経て、2022年にAVITA株式会社に入社。\nAVITA株式会社では、開発効率を良くすることやチームが成長できることを日々模索しています。",
    speakerImage:
      "https://pbs.twimg.com/profile_images/1103976972487581697/ZjlTfbM1_400x400.jpg",
    socials: {
      xAccount: "https://x.com/kkk4oru",
      github: "https://github.com/kkkaoru",
    },
    labels: {
      track: "カミナシ堂",
      type: "スポンサーLT",
      time: "12:25 ~ 13:20",
    },
    additionalInfo: "",
  },
  toripeeeeee: {
    title:
      "サービス連携機能を例とした開発体験を向上するための適材適所の技術選定",
    displayName: "鳥海 航",
    sessionAbstract:
      "カケハシでは「AI在庫管理」というプロダクトだけでなく「Pharmarket」という医薬品流通事業を行っています。AI在庫管理との連携機能の事例と共に、APIの技術選定について整理し、選定基準をご紹介します。",
    role: "フロントエンドエンジニア",
    org: "株式会社カケハシ",
    bio: "大学院卒業後、2018年ソフトバンク株式会社に入社。データエンジニア、フロントエンドエンジニアとして、位置情報データを用いたサービス開発に従事。2022年9月より株式会社カケハシにソフトウェアエンジニアとして入社。AI在庫管理のフロントエンド開発を主に担当し、サブチームのプロダクト開発を牽引しています。",
    speakerImage: "/speakerImages/toripeeeeee.png",
    socials: {
      xAccount: "https://x.com/@toripeeeeee",
      github: "",
    },
    labels: {
      track: "トグルルーム",
      type: "スポンサーLT",
      time: "12:25 ~ 13:20",
    },
    additionalInfo: "",
  },
  nusuke: {
    title: "ブラウザで完結！DuckDB Wasmでタクシー地図情報を可視化",
    displayName: "大貫優介",
    sessionAbstract:
      "newmoでは、タクシーの位置情報や営業エリアの管理・可視化ツールをWebアプリケーションで実装しています。\nその中でも、複雑なデータ構造を持つ営業エリア等の地図の範囲を指定するデータ構造を、Backendを介さずにDuckDB Wasmを使ってブラウザ上で簡単にProposal実装をしました。\nデモを通じてそれらの技術の利便性やFrontendで出来る事の可能性をお伝えします。",
    role: "Software Engineer",
    org: "newmo株式会社",
    bio: "2019年ヤフー株式会社(現:LINEヤフー株式会社)にエンジニアとして入社。複数のプロダクト開発やEngineerManagerを経験した後に2024年8月にnewmoにジョイン。\nプロダクト開発全般好きです。",
    speakerImage:
      "https://pbs.twimg.com/profile_images/1839154838422093824/GKfCNpVe_400x400.jpg",
    socials: {
      xAccount: "https://x.com/nusuke_y",
      github: "https://github.com/nusuke",
    },
    labels: {
      track: "トグルルーム",
      type: "スポンサーLT",
      time: "12:25 ~ 13:20",
    },
    additionalInfo: "",
  },
  KosukeTakahashi0410: {
    title:
      "俺ってなんでTypescriptを書いてるんだっけ：チームラボフロントのTypescript採用までの歴史",
    displayName: "Takahashi Kosuke",
    sessionAbstract: "",
    role: "",
    org: "チームラボ",
    bio: "チームラボでフロントエンドエンジニアをやっています。好きなVSCodeのテーマは「Kabukichō」。",
    speakerImage: "/speakerImages/KosukeTakahashi0410.jpg",
    socials: { xAccount: "", github: "https://github.com/KosukeTakahashi0410" },
    labels: {
      track: "トグルルーム",
      type: "スポンサーLT",
      time: "12:25 ~ 13:20",
    },
    additionalInfo: "",
  },
  naoya7076: {
    title: "Tanstack Routerに移行するのかい、しないのかい、どっちなんだい！",
    displayName: "Naoya Shimizu(Shimmy)",
    sessionAbstract:
      "Tanstack Routerが型安全なルーティングライブラリとして注目されています。\n弊社のプロダクトではReact Routerを利用していますが、移行の検討を行いました。\n実際にコードを書き換えてみたり、欲しい機能についてはライブラリの作者に聞いてみたりしました。そのうえで移行の是非を判断したのでお話します。",
    role: "エンジニア",
    org: "株式会社カミナシ",
    bio: "カミナシでソフトウェアエンジニアをしています\n大阪からフルリモートで働いています\n関西の開発者コミュニティを盛り上げたい",
    speakerImage:
      "https://pbs.twimg.com/profile_images/1111788691804946432/bcNC7E5X_400x400.jpg",
    socials: {
      xAccount: "https://x.com/naoya7076",
      github: "https://github.com/naoya7076",
    },
    labels: {
      track: "カミナシ堂",
      type: "スポンサーLT",
      time: "12:25 ~ 13:20",
    },
    additionalInfo: "",
  },
} satisfies Record<string, SessionDetail>;
