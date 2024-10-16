'use client'

import { usePathname, useRouter } from "next/navigation";

export default function LinkHome({ className, children }: { className?: string, children: React.ReactNode }) {
    const pathname = usePathname();
  const router = useRouter();
    
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

      return <p onClick={handleHomeLink} className={className}>
        {children}
      </p>
}