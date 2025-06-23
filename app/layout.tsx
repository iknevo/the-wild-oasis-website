import type { Metadata } from "next";
import { ReactNode } from "react";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "the wild oasis",
  description: "the wild oasis website description",
};

interface Props {
  children: ReactNode;
}

export default function layout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
        </header>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
