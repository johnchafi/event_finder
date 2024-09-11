
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import type { Metadata } from "next";
import localFont from "next/font/local";
import {Poppins} from "next/font/google";

import "./globals.css";

const PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const poppins = Poppins({subsets : ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: "Evently",
  description: "Evently is a platform for event management",
  icons:'/assets/images/logo.svg'
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <ClerkProvider>
      <html lang="en">
        <body
          className={poppins.variable}
        >
          {children}
        </body>
      </html>

     </ClerkProvider>
  //   <ClerkProvider>
  //   <html lang="en">
  //     <body>
  //       <SignedOut>
  //         <SignInButton />
  //       </SignedOut>
  //       <SignedIn>
  //         <UserButton />
  //       </SignedIn>
  //       {children}
  //     </body>
  //   </html>
  // </ClerkProvider>
    
  );
}
