import Image from "next/image";
import Navbar from "../app/components/navbar";
import Hero from "../app/components/hero";
import Footer from "../app/components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
