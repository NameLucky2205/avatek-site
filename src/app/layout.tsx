import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "AVATEK — Информационная безопасность",
  description:
    "Комплексные решения в области кибербезопасности и защиты персональных данных. Защита бизнеса с 2004 года.",
  keywords: [
    "информационная безопасность",
    "кибербезопасность",
    "защита персональных данных",
    "ФЗ-152",
    "Якутск",
    "AVATEK",
  ],
  openGraph: {
    title: "AVATEK — Информационная безопасность",
    description:
      "Комплексные решения в области кибербезопасности и защиты персональных данных",
    url: "https://avatek.su",
    siteName: "AVATEK",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
