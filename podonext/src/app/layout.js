import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/header";
import Customhome from "./components/home";
import Services from "./components/services";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Podovital",
  description: "Clínica podológica en Cunco región de la Araucanía",
  keywords: [
    "podovital",
    "podología",
    "podologia",
    "cunco",
    "araucanía",
    "araucania",
    "uña encarnada",
    "clínica podológica",
    "clinica podologica",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Customhome />
        <Services />
        <About />
        <Contact />
        <Footer />
        {children}
      </body>
    </html>
  );
}
