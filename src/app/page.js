import Gate from "@/components/Gate";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FloatingHearts from "@/components/FloatingHearts";
import LoveTimeline from "@/components/LoveTimeline";
import Gallery from "@/components/Gallery";
import LoveLetter from "@/components/LoveLetter";
import Surprise from "@/components/Surprise";
import MusicPlayer from "@/components/MusicPlayer";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Gate>
      <FloatingHearts />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <LoveTimeline />
        <Gallery />
        <LoveLetter />
        <Surprise />
      </main>
      <MusicPlayer />
      <Footer />
    </Gate>
  );
}
