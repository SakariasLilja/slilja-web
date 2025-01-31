import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "./components/navigation";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sakarias Lilja",
  description: "Personal portfolio of Sakarias Lilja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div 
        className="bg-cover" 
        style={{
          backgroundImage: `url('/background.png')`,
          height: `100vh`
          }}>
          <div className="bg-cover bg-black bg-opacity-75 text-zinc-300 text-lg font-medium text-pretty sm:text-xl/6">
            <header className="bg-black bg-opacity-30 text-amber-100 px-3 py-5 text-center">
              <Navigation/>
            </header>
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
