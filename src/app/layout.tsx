import type { Metadata } from "next";
import { Inter, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Japan 2026 | Educational Tour",
  description: "Secure Your Child's Seat for the Japan 2026 Educational Tour. A transformational journey through Tokyo, Kyoto, Nara, and Osaka.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${notoSerifJP.variable} font-sans antialiased text-charcoal bg-offwhite`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
