import { AlignJustifyIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import LinkHome from "./LinkHome";
import Image from "next/image";

export default function HamburgerMenu() {
  return (
    <Sheet>
      <div className="flex gap-3 lg:hidden">
        <SheetTrigger type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5">
          <span className="sr-only">Open main menu</span>
          <AlignJustifyIcon aria-hidden="true" className="h-6 w-6" />
        </SheetTrigger>
        <SheetContent>
          <div className="mt-6 flow-root h-full">
            <div className="-my-6 h-full">
            <Image src={"/logo-fox-bg.png"} width={100} height={10} alt="logo-fox" />
              <div className="space-y-2 py-1">
                <LinkHome className="hover:text-yellow-500 items-center gap-2 flex cursor-pointer">
                  Beranda
                </LinkHome>
                <Link href="/#game-list" className="hover:text-yellow-500 items-center gap-2 flex">
                  Cek Transaksi
                </Link>
                <Link href="/calculator-winrate" className="hover:text-yellow-500 items-center gap-2 flex">
                  Kalkulator
                </Link>
                <Link href="/#footer" className="hover:text-yellow-500 items-center gap-2 flex">
                  Kontak
                </Link>
              </div>
            </div>
          </div>
        </SheetContent>
      </div>
    </Sheet>
  );
}
