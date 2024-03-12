import Footer from "../components/footer"
import Navbar from "../components/navbar"
import VideosGallery from "./reelsGalery"
import AboutHeader from "./aboutHeader"
import AboutBody from "./aboutBody"

export default function About() {
  return (
    <div>
      <Navbar />
      <AboutHeader />
      <AboutBody />
      <div className="flex flex-col items-center">
        <VideosGallery />
        <p className="text-home-link-background-blue mb-5">Mais projetos em nossas Redes Sociais!</p>
      </div>
      <Footer />
    </div>
  )
}