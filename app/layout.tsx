import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const opensans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "We Design Studio",
  description: "סטודיו עיצוב לחללים פרטיים ועסקיים",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" sizes="any" />
      </head>
      <body className={`antialiased ${opensans.className}`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
