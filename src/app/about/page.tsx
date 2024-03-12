import Footer from "../components/footer"
import Navbar from "../components/navbar"
import VideosGallery from "./reelsGalery"

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center">
        <VideosGallery />
      </div>
      <Footer />
    </div>
  )
}