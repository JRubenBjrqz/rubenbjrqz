import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://jrubenbjrqzo.web.app'),
  title: {
    default: 'Rubén Bojórquez - Frontend Developer',
    template: 'Rubén Bojórquez'
  },
  description: 'Frontend Developer',
  keywords: [
    'frontend, developer, development, México, portfolio, ruben, bojorquez, web, design,'
  ],
  openGraph: {
    title: 'Rubén Bojórquez',
    description: 'Frontend Developer',
    url: 'https://jrubenbjrqzo.web.app',
    siteName: 'Rubén Bojórquez',
    images: [
      {
        url: '', // TODO: Add thumbnail
        width: 1920,
        height: 1080
      }
    ],
    locale: 'en-US',
    type: 'website'
  },
  // TODO: icons: {
  //   shortcut: ''
  // }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col h-full`}>
        <div className="relative flex-1">
          <main className="h-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
