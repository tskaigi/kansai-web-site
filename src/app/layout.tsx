import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Footer from "@/ui/footer";
import NavBar from "@/ui/navbar";

const noto = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "TSKaigi Kansai 2024 | %s",
    default: "TSKaigi Kansai 2024",
  },
  metadataBase: new URL("https://kansai.tskaigi.org/"),
  description:
    "日本最大級のTypeScriptをテーマとした技術カンファレンスを関西でも開催",
  applicationName: "TSKaigi Kansai 2024",
  authors: [
    {
      name: "一般社団法人TSKaigi Association",
      url: "https://association.tskaigi.org/",
    },
  ],
  keywords: [
    "TypeScript",
    "TSKaigi",
    "TS会議",
    "TSKaigi Kansai",
    "関西",
    "カンファレンス",
    "イベント",
    "オンライン",
  ],
  publisher: "TSKaigi.org",
  robots: "index, follow",
  twitter: {
    title: "TSKaigi Kansai 2024",
    description: "日本最大級のTypeScriptカンファレンスを関西でも",
    card: "summary_large_image",
    site: "@tskaigi",
    creator: "@tskaigi",
    images: ["/banner_ogp.jpg"],
  },
  openGraph: {
    title: "TSKaigi Kansai 2024",
    url: "https://kansai.tskaigi.org/",
    description:
      "日本最大級のTypeScriptをテーマとした技術カンファレンスを関西でも開催",
    type: "website",
    images: ["/banner_ogp.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#345DA7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={noto.className}>
        <div>
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
