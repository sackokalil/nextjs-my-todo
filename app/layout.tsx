import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Background from "@/app/ui/Background";
import Logo from "@/app/ui/Logo";
import NavLinks from '@/app/ui/Nav-links'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MyTodo avec Next.js",
  description: "Application codé dans la formation Next.js",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>

        <header>
          <Logo />
          <div className="nav-links">
            <NavLinks />
          </div>
        </header>

        <main>
          {children}
          <Background />
        </main>

        <footer>
          <p>&copy; Kalil SACKO</p>
        </footer>
        
      </body>

    </html>
  );
}
