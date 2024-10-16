const HeroSection: React.FC = () => {
    return (
      <section className="flex items-center justify-center min-h-screen bg-cover bg-center" 
               style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
        <div className="bg-black bg-opacity-60 p-10 rounded-lg text-center">
          <h1 className="text-5xl font-bold text-white">Jasa Joki Game Profesional</h1>
          <p className="mt-4 text-xl text-gray-200">Naikkan rank dengan cepat dan aman bersama tim kami!</p>
          <a href="#services" className="mt-6 inline-block bg-yellow-500 text-black py-3 px-6 rounded-full hover:bg-yellow-600">
            Lihat Layanan Kami
          </a>
        </div>
      </section>
    );
  };
  
export default HeroSection