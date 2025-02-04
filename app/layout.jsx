import "./globals.css";

/// Import Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Toast Massage
import { Toaster } from "@/components/ui/toaster";


/// ThemeProvider
import { ThemeProvider } from "@/components/ThemeProvider";
import {  Sen } from 'next/font/google';

const SenFont = Sen({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

import Favicon from '../public/favicon.ico';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  icons: {icon: [{ rel: 'icon', url: Favicon.src }]},
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>   

      <body className={SenFont.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
