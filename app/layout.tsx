import NavBar from "@/components/NavBar";
import "./globals.css";
import Container from "@/components/ui/Container";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Link Genrator",
  description: "Create short Links",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <Container>
          <NavBar />
        </Container>

        {children}
        <Footer />
      </body>
    </html>
  );
}
