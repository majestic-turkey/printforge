import "./globals.css";
import Image from "next/image";
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${albertSans.variable} ${montserratAlternates.variable}`}>
        <header className="w-full bg-white">
          <nav className="flex justify-between px-6 py-4">
            <div className="relative">
              {/* Desktop logo */}
              <Image
                src="/printforge-logo.png"
                alt="PrintForge Logo"
                width={200}
                height={50}
                className="w-50 h-auto hidden md:block"
              />
              {/* Mobile logo */}
              <Image
                src="/printforge-logo-mobile.png"
                alt="PrintForge Logo"
                width={40}
                height={40}
                className="w-10 h-auto block md:hidden"
              />
            </div>
            <ul className="flex items-center gap-2.5">
              <p>3D Models</p>
              <p>About</p>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
