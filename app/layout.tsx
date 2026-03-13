import "./globals.css";
import type {RootLayoutProps} from "./types/index";
import Navbar from "@/app/components/NavBar";
import { Albert_Sans, Montserrat_Alternates } from "next/font/google";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-albert-sans",
});

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat-alternates",
});

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${albertSans.variable} ${montserratAlternates.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
