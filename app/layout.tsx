// // metadata.js (or metadata.ts if using TypeScript)
// export const metadata = {
//     // ... your metadata object
//     metadataBase: new URL("https://www.seekvisualartist.com/"),
//     title: "Seek Visual Artist",
//     description:
//     "Hobby Designer and Software Engineer, currently at Neumann Kaffee Gruppe. Focused on immersive experiences, studying in Hamburg, Germany.",
//     generator: "Next.js",
//     applicationName: "Seek Visual Artist",
//     keywords: [
//         "Dr. Prateek Agrawal",
//         "LPU",
//         "IEEE CIS LPU",
//         "Deputy Dean LPu",
//         "HOS lpu",
//         "LEAder",
//         "CSE lpu",
//         "Austria",
//         "prateek",
//         "profesor prateek",
//         "Portfolio",
//         "Lovely Proffesional university",
//         "Lpu",
//         "frontend developer portfolio",

//     ],
//     colorScheme: "dark",
//     openGraph: {
//         title: "Dr. Prateek Agrawal",
//         description:
//        "A proactive learner with a flair for adopting emerging trends & addressing industry requirements to achieve organizational objectives & profitability norms. Experienced individual in teaching with a demonstrated history of working in the education and administration. Successfully completed Post-Doctoral Research from AAU, Austria. Skilled in Natural Language Processing (NLP), Fuzzy Sysstems, AI, Machine Learning etc. Strong education professional with a Ph.D focused in Natural Language Translation (Sanskrit to Hindi).",
//         url: "https://www.seekvisualartist.com/",
//         siteName: "www.seekvisualartist.com",
//         images: [
//             {
//                 url: "./public/metadata.jpg",
//                 width: 1200,
//                 height: 630,
//                 alt: "Seek Visual Artist - Designer and Developer",
//             },
//         ],
//         locale: "en-US",
//         type: "website",
//     },
//     twitter: {
//         card: "summary_large_image",
//         title: "Seek Visual Artist - Designer and Developer",
//         description:
//       "Hobby Designer and Software Engineer, currently at Neumann Kaffee Gruppe. Focused on immersive experiences, studying in Hamburg, Germany.",
//         creator: "SeekVFX",
//         creatorId: "0000000000",
//         images: ["./public/metadata.jpg"],
//     },
//     robots: {
//         index: true,
//         follow: true,
//         nocache: false,
//         googleBot: {
//             index: true,
//             follow: false,
//             noimageindex: true,
//             "max-video-preview": -1,
//             "max-image-preview": "large",
//             "max-snippet": -1,
//         },
//     },
//     category: "technology",
// };

// RootLayout.js (or RootLayout.tsx if using TypeScript)
"use client";
import "./globals.css";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
// import { Syne } from "next/font/google";
import { Providers } from "./providers";
import { Analytics } from '@vercel/analytics/react';

// const syne = Syne({
//     subsets: ["latin"],
//     display: "block",
//     weight: ["400", "500", "600", "700", "800"],
// });

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={` scroll-smooth scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        <Providers>{children}</Providers>
        <Analytics/>
      </body>
    </html>
  );
}
