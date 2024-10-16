import FeedbackForm from "@/components/FeedBack";
import Footer from "@/components/footer";
import GameList from "@/components/GameList";
import HeroSection from "@/components/hero";
import ImageCarousel from "@/components/ImageCarousel";

export default function Home(){
  return (
    <>
      <ImageCarousel />
      <GameList />
      <FeedbackForm />
      <Footer />
      {/* Tambahkan section lain seperti layanan, harga, kontak di sini */}
    </>
  );
}
