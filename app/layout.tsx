import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "optional",
  weight: ["300", "400", "500", "600", "700", "800"],
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: "HIMASI UNAS",
  description:
    "HIMASI (Himpunan Mahasiswa Sistem Informasi)",
  icons: "./favicon.ico",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins text-white overflow-x-hidden`}>
        <div id="root-layout">
          
          {children}

        </div>
      </body>
    </html>
  );
}