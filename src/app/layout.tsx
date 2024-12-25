import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/shared/lib/classnames";
import { ThemeProvider } from "./providers/theme-provider";
import { Toaster } from "@/shared/ui/toaster";
import { ReactQueryProvider } from "./providers/react-query-provider";
import { NextTopLoader } from "./widgets/next-top-loader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JSONplaceholder posts app",
  description: "SONplaceholder posts app - demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReactQueryProvider>
            <NextTopLoader />
            <div className="max-w-4xl mx-auto">{children}</div>
            <Toaster />
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
