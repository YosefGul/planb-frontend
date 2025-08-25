import ReactQueryProvider from "@/providers/react-query-provider";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <ReactQueryProvider>
        <body
          className={`${poppins.variable} antialiased font-poppins overflow-x-hidden `}
        >
          <div className="container mx-auto px-4 pb-0 pt-4 lg:px-4 lg:pt-12">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
          <Toaster />
        </body>
      </ReactQueryProvider>
    </html>
  );
}
