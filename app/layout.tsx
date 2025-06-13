import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "PlanB - Game Development & Animation Studio",
  description:
    "PlanB is a leading game development and animation studio specializing in creating immersive gaming experiences, 2D animations, and innovative marketing solutions.",
  keywords:
    "game development, animation studio, 2D animation, game design, marketing solutions, web animation",
  authors: [{ name: "PlanB Studio" }],
  openGraph: {
    title: "PlanB - Game Development & Animation Studio",
    description:
      "Create immersive gaming experiences and stunning animations with PlanB Studio",
    type: "website",
    locale: "en_US",
    siteName: "PlanB Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "PlanB - Game Development & Animation Studio",
    description:
      "Create immersive gaming experiences and stunning animations with PlanB Studio",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://planb-studio.com" />
      </head>
      <body
        className={`${poppins.variable} antialiased font-poppins overflow-x-hidden`}
      >
        <div className="container mx-auto px-4 pb-0 pt-4 lg:px-4 lg:pt-12">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
