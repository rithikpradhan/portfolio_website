import { Outfit, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["italic", "normal"],
});

export const metadata = {
  title: "Portfon — Rithik Pradhan | Web Developer",
  description: "Portfolio of Rithik Pradhan — Web Developer crafting modern digital experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${playfair.variable} antialiased`}>
      <body className="flex flex-col font-sans">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
