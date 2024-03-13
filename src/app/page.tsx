import Image from "next/image";
import Navbar from "../app/components/navbar";
import Hero from "../app/components/hero";
import Footer from "../app/components/footer";
import IndexNumber from "../app/indexNumbers";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <IndexNumber />
      <Footer />
    </div>
  );
}
