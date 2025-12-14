import './globals.css';

// SEO Metadata for Infinity CodeWave
// A 24-hour hackathon organized by Kathmandu University Mathematics Students' Club (KUMSC)
// Part of the annual Infinity event

export const metadata = {
  metadataBase: new URL('https://code-wave.pages.dev'),
  title: {
    default: "Infinity CodeWave | Nepal's Premier Data & Computing Hackathon",
    template: "%s | Infinity CodeWave"
  },
  description: "Infinity CodeWave is Nepal's premier data science and computing hackathon, part of the annual Infinity event organized by Kathmandu University Mathematics Students' Club (KUMSC). Join 120+ developers for 24 hours of innovation in AI, Quantum Computing, Cybersecurity & more. Free admission for all students!",
  keywords: [
    "Infinity CodeWave",
    "hackathon Nepal",
    "Kathmandu University hackathon",
    "KUMSC",
    "Kathmandu University Mathematics Students Club",
    "Infinity event",
    "data science hackathon",
    "computing hackathon",
    "AI hackathon Nepal",
    "machine learning competition",
    "quantum computing",
    "cybersecurity hackathon",
    "student hackathon Nepal",
    "free hackathon",
    "Dhulikhel",
    "tech event Nepal",
    "MLH hackathon",
    "Major League Hacking",
    "computational mathematics",
    "coding competition Nepal"
  ],
  authors: [
    { name: "Kathmandu University Mathematics Students' Club", url: "https://mathsclub.ku.edu.np" }
  ],
  creator: "Kathmandu University Mathematics Students' Club (KUMSC)",
  publisher: "Kathmandu University Mathematics Students' Club",
  category: "Technology",
  openGraph: {
    title: "Infinity CodeWave | Nepal's Premier Data & Computing Hackathon",
    description: "Part of KUMSC's annual Infinity event. Join 120+ developers for a 24-hour hackathon at Kathmandu University. AI, Quantum Computing, Cybersecurity & more. Free for all students!",
    url: "https://code-wave.pages.dev",
    siteName: "Infinity CodeWave",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Infinity CodeWave - Nepal's Premier Data & Computing Hackathon by KUMSC"
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://code-wave.pages.dev"
  },
  verification: {
    // Add verification tokens when available
    // google: "verification_token",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0a0510" />
      </head>
      <body className="bg-[#0a0510] text-[#E6E1F0] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
