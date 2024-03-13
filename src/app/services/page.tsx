import Footer from "../components/footer";
import Navbar from "../components/navbar";
import ServicesBody from "./servicesBody";
import ServicesHero from "./servicesHero";


export default function Services() {
  return (
    <div>
      <Navbar />
      <ServicesHero />
      <ServicesBody />
      <Footer />
    </div>
  )
}