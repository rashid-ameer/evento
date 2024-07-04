import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Container, Footer, Header } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evento - Find the events around you",
  description: "Find more than 10,000 events around you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-950 text-white overflow-y-scroll`}>
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
