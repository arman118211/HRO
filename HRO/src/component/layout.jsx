import { Geist, Manrope } from "next/font/google"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata = {
  title: "Hope Foundation - Making a Difference Together",
  description:
    "Join us in creating positive change. Your donation helps provide education, healthcare, and hope to communities in need.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geist.variable} ${manrope.variable} antialiased`}>
      <body className="font-sans bg-slate-50 text-slate-900">{children}</body>
    </html>
  )
}
