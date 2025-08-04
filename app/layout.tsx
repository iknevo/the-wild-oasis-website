import "@/app/_styles/globals.css";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import { ReactNode } from "react";
import Header from "./_components/Header";
import ReservationProvider from "./_contexts/ReservationContext";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Luxurious cabin hoter, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 flex min-h-dvh flex-col antialiased`}
      >
        <Header />
        <div className="grid flex-1 px-8 py-12">
          <main className="mx-auto w-full max-w-7xl">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
