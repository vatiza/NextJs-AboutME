import Footer from "@/components/footer/Footer";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "About Me",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="lg:mx-20 h-screen max-h-svh">
          <ClerkProvider>{children}</ClerkProvider>
          <Footer></Footer>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
