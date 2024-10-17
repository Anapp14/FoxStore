"use client";
import { cn } from "@/lib/utils";
import { CalculatorIcon, CircleUserIcon, HomeIcon, SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import LinkHome from "./LinkHome";
import HamburgerMenu from "./HamburgerMenu";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [language, setLanguage] = useState("Indonesia"); // State untuk bahasa
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  // State untuk membuka/tutup dropdown

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setDropdownOpen(false); // Tutup dropdown setelah memilih bahasa
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen); // Membuka atau menutup dropdown saat ID di-klik
  };

  const handleHomeLink = () => {
    if (pathname == "/") {
      backToTop();
    } else {
      router.push("/");
    }
  };

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full sticky top-0 inset-x-0 z-50">
      <nav
        className={cn(
          "text-white relative z-[60] w-full min-w-[80%] lg:min-w-[800px] will-change-auto transition-all duration-700 border-transparent mx-auto ",
          !scrolled
            ? "bg-gray-900 dark:bg-gray-900 translate-y-0 w-full"
            : "bg-gray-900/80 dark:bg-gray-900/80 translate-y-5 w-[40%] backdrop-blur-md border dark:border-l-0 dark:border-r-0 dark:border-b-0 dark:border-t border-border shadow-inner rounded-full max-w-7xl"
        )}
      >
        <div className="flex items-center justify-start px-0 pl-4">
          {/* Logo dan Nama Toko */}
          <Image src={"/logo-fox-bg.png"} width={70} height={60} alt="logo-fox" />
          <div className={cn("items-center space-x-4 py-1", scrolled ? "hidden" : "flex")}>
            <div className="text-2xl font-bold">FoxStore</div>
          </div>

          <div className="py-2"></div>

          {/* Links (Layanan, Harga, Kontak) */}
          <div className="space-x-6 ml-8 py-1 hidden lg:flex">
            <LinkHome className="hover:text-yellow-500 items-center gap-2 flex cursor-pointer">
              <HomeIcon size={20} />
              Beranda
            </LinkHome>
            <Link href="/#game-list" className="hover:text-yellow-500 items-center gap-2 flex">
              <SearchIcon size={20} />
              Cek Transaksi
            </Link>
            <Link href="/calculator-winrate" className="hover:text-yellow-500 items-center gap-2 flex">
              <CalculatorIcon size={20} />
              Kalkulator
            </Link>
            <Link href="/#footer" className="hover:text-yellow-500 items-center gap-2 flex">
              <CircleUserIcon size={20} />
              Kontak
            </Link>
          </div>

          {/* Search, ID, Login, Daftar (pojok kanan) */}
          <div className="flex space-x-6 ml-auto mr-8 py-1 items-center">
            {/* <div className="hover:text-yellow-500 flex items-center gap-2">
              <SearchIcon size={20} />
              <span className={cn(scrolled ? "hidden" : "inline-flex")}>Search</span>
            </div> */}

            {/* ID Dropdown */}
            <div className="flex gap-3">
              <div className="relative inline-block text-left">
                <button
                  onClick={toggleDropdown}
                  className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray-800 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  ID
                  <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>

                {/* Dropdown Pilihan Bahasa */}
                {isDropdownOpen && (
                  <div className="absolute right-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="none">
                      <a href="#" onClick={() => handleLanguageChange("Indonesia")} className="block px-4 py-2 text-sm text-white hover:bg-gray-700">
                        <span className="inline-block mr-2">
                          <Image src={"/flag-indo.png"} width={15} height={20} alt="indo" />
                        </span>
                        Indonesia
                      </a>
                      <a href="#" onClick={() => handleLanguageChange("English")} className="flex items-center px-4 py-2 text-sm text-white hover:bg-gray-700">
                        <span className="inline-block mr-2">
                          <Image src={"/us.svg"} width={15} height={20} alt="english" />
                        </span>
                        English
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <HamburgerMenu />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
