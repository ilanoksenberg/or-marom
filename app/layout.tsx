import type { Metadata, Viewport } from "next";
import { Frank_Ruhl_Libre, Assistant } from "next/font/google";
import "./globals.css";

const frank = Frank_Ruhl_Libre({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500"],
  variable: "--font-frank",
  display: "swap",
});

const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  weight: ["400", "600"],
  variable: "--font-assistant",
  display: "swap",
});

const SITE = "https://ilanoksenberg.github.io/or-marom";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "אור מרום | עיסוי רפואי Deep Tissue בהוד השרון",
  description:
    "אור מרום, מעסה רפואית בטכניקת Deep Tissue. מקבלת בהוד השרון, תל אביב בקרוב. קביעת תור ביומן אונליין.",
  openGraph: {
    title: "אור מרום | עיסוי רפואי Deep Tissue",
    description: "הגוף שלכם יודה לכם. עיסוי רפואי בטכניקת Deep Tissue בהוד השרון.",
    url: SITE,
    siteName: "אור מרום",
    locale: "he_IL",
    type: "website",
    images: [{ url: "/images/poster-1.jpg", width: 720, height: 600, alt: "אור מרום בעבודה" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#170b15",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={`${frank.variable} ${assistant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
