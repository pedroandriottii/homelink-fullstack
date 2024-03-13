import { ReactNode } from 'react';
import Head from 'next/head';
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], weight: ['400', '700'], display: "swap" });

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Head>
        <title>Home Link</title>
        <meta name="description" content="Automação Residencial & Corporativa" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <html lang="pt-br">
        <body className={montserrat.className}>{children}</body>
      </html>
    </>
  );
}
