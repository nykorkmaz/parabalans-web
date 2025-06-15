import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ParaBalans - iPhone ve iPad için Akıllı Aile Bütçe Yönetimi",
  description: "iPhone ve iPad'inizde ParaBalans ile ailenizin finansal geleceğini güvence altına alın. Gelir-gider takibi, bütçe planlama ve hedef belirleme özellikleriyle finansal kontrolü elinize alın.",
  keywords: "bütçe yönetimi, aile finansı, gelir gider takibi, finansal planlama, para yönetimi, iPhone, iPad, iOS",
  authors: [{ name: "ParaBalans Team" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/parabalans_logo.png",
  },
  openGraph: {
    title: "ParaBalans - iPhone ve iPad için Akıllı Aile Bütçe Yönetimi",
    description: "iPhone ve iPad'inizde ParaBalans ile ailenizin finansal geleceğini güvence altına alın.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
