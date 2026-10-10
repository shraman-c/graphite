import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/lib/ThemeProvider";
import SessionSync from "@/components/SessionSync";

export const metadata: Metadata = {
  metadataBase: new URL("https://catalyst-jet.vercel.app"),
  title: "Graphite — From raw thoughts to connected graphs.",
  description:
    "Graphite automatically turns your raw local notes into an interconnected knowledge graph and active-recall flashcards. From raw thoughts to connected graphs.",
  keywords: ["notes", "flashcards", "knowledge graph", "spaced repetition", "studying"],
  openGraph: {
    title: "Graphite — From raw thoughts to connected graphs.",
    description: "From raw thoughts to connected graphs.",
    url: "https://catalyst-jet.vercel.app",
    siteName: "Graphite",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/* PWA (design.md §1 tokens): manifest + installability metas */}
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#F2F0E9" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Graphite" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            try {
              var theme = localStorage.getItem('graphite-theme') || localStorage.getItem('catalyst-theme');
              if (theme === 'dark' || theme === 'light') {
                document.documentElement.classList.add(theme);
                document.documentElement.setAttribute('data-theme', theme);
              } else {
                var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                document.documentElement.classList.add(prefersDark ? 'dark' : 'light');
                document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
              }
            } catch(e) {}
          })();
        ` }} />
      </head>
      <body>
        {/* Theme switching lives in Settings → Appearance (LIGHT / DARK / SYSTEM). */}
        <ThemeProvider>{children}</ThemeProvider>
        {/* Keeps every open tab in sync when the session changes in one of them. */}
        <SessionSync />
      </body>
    </html>
  );
}
