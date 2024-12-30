import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { Provider } from "@/components/ui/provider";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "旅の本棚",
  description:
    "旅の本を紹介しながら、関連する旅の魅力を伝えるブログをnoteから選びました。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${notoSansJP.className}`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
