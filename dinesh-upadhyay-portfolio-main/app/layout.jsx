import React, { Suspense } from "react";
import { Inter } from "next/font/google"; // If not using Next.js fonts, ignore this.
import Header from "../components/header";
import Loading from "../components/loading";
import { ThemeProvider } from "../components/theme-provider";
import "../styles/globals.css"

const inter = Inter({ subsets: ["latin"] }); // Optional for font

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Suspense fallback={<Loading />}>
            <Header />
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
            <footer className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} Dinesh. All rights reserved.
            </footer>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
