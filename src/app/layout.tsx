import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AnimationController from "./animation-controller";

export const bringbold = localFont({
  src: "../assets/fonts/bringbold-nineties.ttf",
  variable: "--font-bringbold",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fahmi Achmad — Front-end Developer & Designer",
  description: "Portfolio of Fahmi Achmad Fahrudin, a front-end developer and designer based in Indonesia.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={bringbold.variable}>
      <body>
        <AnimationController>{children}</AnimationController>
      </body>
    </html>
  );
}
