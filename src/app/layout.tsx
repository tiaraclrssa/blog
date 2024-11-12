import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
// import Wrapper from "@/components/wrapper";
// import { IBlog } from "@/types/blog";
// import { getBlogSlug } from "@/libs/blog";
// import { title } from "process";

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

export const metadata: Metadata = {
  title: {
    template: "art | %s",
    default: "art"
  },
  description: "berbagai informasi,berita insights, hingga tips terbaru seputar dunia dan art",
  icons: {
    icon: "https://flyclipart.com/thumb2/link-icon-172190.png",
  },
};
// export async function generateMetadata({params}:{params: {slug: string}} ){
//   const blog: IBlog = await getBlogSlug(params.slug)
  
//   return{
//     title: blog.fields.tittle,
//     description: blog.fields.tittle

//   }
// }
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
