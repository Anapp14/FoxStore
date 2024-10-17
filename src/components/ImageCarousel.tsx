"use client";

// src/app/components/ImageCarousel.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const ImageCarousel = () => {
  const images = [
    { src: "/1.png", alt: "Banner 1" },
    { src: "/VIP.png", alt: "Banner 2" },
    { src: "/banner1.webp", alt: "Banner 3" },
    // Tambahkan gambar lainnya jika diperlukan
  ];

  return (
    <div className="bg-slate-400 p-2 lg:p-7">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }} // Auto play setiap 3 detik
        loop={true} // Membuat loop
        className="!m-0 h-[165px] lg:h-[521.96px] rounded-[40px]" // Set height of Swiper container
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="h-full">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full" // Ensure image takes full height and maintains aspect ratio
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
