import { MoonIcon, SunIcon } from 'lucide-react';

interface ThemeToggleProps {
  toggleTheme: () => void;  // Fungsi untuk mengganti tema
  isDarkMode: boolean;  // Status mode saat ini
}

const ThemeIcon: React.FC<ThemeToggleProps> = ({ toggleTheme, isDarkMode }) => {
  return (
    <div className="fixed bottom-4 right-4">
      {isDarkMode ? (
        <SunIcon
          className="w-10 h-10 text-yellow-500 cursor-pointer"
          onClick={toggleTheme}
        />
      ) : (
        <MoonIcon
          className="w-10 h-10 text-gray-800 cursor-pointer"
          onClick={toggleTheme}
        />
      )}
    </div>
  );
};

export default ThemeIcon;
