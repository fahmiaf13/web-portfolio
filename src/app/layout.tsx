import "./globals.css";
import { Outfit } from "next/font/google";
import { Footer } from "@/components";
import { Providers } from "@/redux/provider";
import dynamic from "next/dynamic";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Fahmi Achmad | Portfolio",
  description: "Personal Portfolio",
};

const DynamicHeader = dynamic(() => import("@/components/Navbar"), { ssr: false });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Providers>
          <DynamicHeader />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
