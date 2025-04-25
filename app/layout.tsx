import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image" // Required for external images

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "1 Play Global | Media Technology Solutions",
  description: "Innovative media technology solutions for broadcast, film, and entertainment industries",
  icons: {
    icon: "/favicon.ico.jpeg", // Saved in /public folder
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {/* Logo added here */}
          <div className="flex justify-center py-4">
            <Image
              src="https://media.licdn.com/dms/image/v2/C510BAQEhP-s4ejt1Ag/company-logo_200_200/0/1630602071829/1_play_sports_pte_ltd_logo?e=2147483647&v=beta&t=FwDmmB6ta1TAim6qCn08b8pZlhsCDwku2nN9orYWzxw"
              alt="1 Play Global Logo"
              width={200} // Adjust as needed
              height={200} // Adjust as needed
              className="h-auto"
              unoptimized // Required for external images in Next.js
            />
          </div>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
