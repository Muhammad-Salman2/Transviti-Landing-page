import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div >
      <Navbar />

      <div className="bg-[#F6F9FF] min-h-screen pt-6">
        <HeroSection />
      </div>
    </div>
  );
}

