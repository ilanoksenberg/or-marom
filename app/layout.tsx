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

export const metadata: Metadata = {
  title: "אור מרום | עיסוי רפואי Deep Tissue בהוד השרון",
  description:
    "אור מרום, מעסה רפואית בטכניקת Deep Tissue. מקבלת בהוד השרון, תל אביב בקרוב. קביעת תור ביומן אונליין.",
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
