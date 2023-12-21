import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WrapperPage from "./wrapperPage";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Extract Light",
  description: "Sua conta de luz em suas mãos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} p-8`}>
        <WrapperPage pages={children} />
      </body>
    </html>
  );
}
