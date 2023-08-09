import "./globals.css";
import { Outfit } from "next/font/google";
import { Navbar, Footer } from "@/components";
import { Providers } from "@/redux/provider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Fahmi Achmad | Portfolio",
  description: "Personal Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
