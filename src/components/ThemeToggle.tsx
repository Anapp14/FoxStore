'use client';

import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from 'lucide-react';

const ThemeToggle = () => {
	const { theme, setTheme } = useTheme()

	return (
    <div className="w-full fixed bottom-0 inset-x-0 z-[150] block max-w-full">
      <button className="h-12 w-12 rounded-full flex items-center justify-center shadow-xl right-5 absolute bottom-5 bg-slate-300 p-2" onClick={() => setTheme(theme == "dark" ? "light" : "dark")} suppressHydrationWarning>
        {theme == "dark" ? <MoonIcon className="w-10 h-10 text-gray-800 cursor-pointer" /> : <SunIcon className="w-10 h-10 text-yellow-500 cursor-pointer" />}
      </button>
    </div>
  );
};

export default ThemeToggle;
