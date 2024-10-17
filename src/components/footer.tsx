import React from "react";
import Link from "next/link";
import { GithubIcon} from "lucide-react";
import Image from "next/image";
import LinkHome from "./LinkHome";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-7" id="footer">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Section */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="flex gap-1 ">
              <Link
                href={"https://github.com/Anapp14"}
                className="bg-transparent hover:bg-slate-700 transition-colors duration-200 flex items-center justify-center size-10 rounded-full"
                target="_blank"
              >
                <GithubIcon />
              </Link>
              <Link
                href={"https://www.instagram.com/akhnaf_ryn/"}
                className="bg-transparent hover:bg-slate-700 transition-colors duration-200 flex items-center justify-center size-10 rounded-full"
                target="_blank"
              >
                <Image src={"/Instagram.svg"} alt="Ig" width={30} height={30}></Image>
              </Link>
              <Link
                href={"https://wa.me/+6288226398703"}
                className="bg-transparent hover:bg-slate-700 transition-colors duration-200 flex items-center justify-center size-10 rounded-full"
                target="_blank"
              >
                <Image src={"/WhatsApp.svg"} alt="Wa" width={30} height={30}></Image>
              </Link>
            </div>
          </div>

          {/* Menu Section */}
          <div className="footer-section">
            <h3 className="text-lg font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>
                <LinkHome className="hover:text-gray-400 cursor-pointer">Home</LinkHome>
              </li>
              <li>
                <Link href="/books" className="hover:text-gray-400">
                  Cek Transaksi
                </Link>
              </li>
              <li>
                <Link href="/calculator-winrate" className="hover:text-gray-400">
                  Kalkulator
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
          <p>&copy; 2024 Ryn. Kemenangan di Ujung Jari.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
