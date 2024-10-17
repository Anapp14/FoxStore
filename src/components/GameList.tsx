"use client";
import { useState } from "react";
import { SearchIcon } from "lucide-react"; // Menggunakan ikon Search dari lucide-react

const GameList = () => {
  // Data daftar game
  const games = [
    { id: 1, name: "Mobile Legends", image: "/list-ml.png", description: "Joki rank Mobile Legends." },
    { id: 2, name: "PUBG Mobile", image: "/pubg.jpg", description: "Joki rank PUBG Mobile." },
    { id: 3, name: "Free Fire", image: "/freefire.jpg", description: "Joki rank Free Fire." },
    { id: 4, name: "Dota 2", image: "/dota.jpg", description: "Joki MMR Dota 2." },
    { id: 5, name: "Valorant", image: "/valorant.jpg", description: "Joki rank Valorant." },
    { id: 6, name: "Apex Legends", image: "/apex.jpg", description: "Joki rank Apex Legends." },
    { id: 7, name: "League of Legends", image: "/lol.jpg", description: "Joki rank LoL." },
    { id: 8, name: "Call of Duty Mobile", image: "/list-ml.png", description: "Joki rank COD Mobile." },
    { id: 9, name: "Genshin Impact", image: "/list-ml.png", description: "Joki progress Genshin Impact." },
    { id: 10, name: "Fortnite", image: "/list-ml.png", description: "Joki rank Fortnite." },
    { id: 11, name: "Overwatch", image: "/list-ml.png", description: "Joki rank Overwatch." },
    { id: 12, name: "CS:GO", image: "/list-ml.png", description: "Joki rank CS:GO." },
    { id: 13, name: "Ragnarok", image: "/list-ml.png", description: "Joki level Ragnarok." },
    { id: 14, name: "Clash of Clans", image: "/list-ml.png", description: "Joki Clan War CoC." },
    { id: 15, name: "Clash Royale", image: "/list-ml.png", description: "Joki rank Clash Royale." },
    { id: 16, name: "Among Us", image: "/list-ml.png", description: "Joki impostor win rate Among Us." },
    { id: 17, name: "FIFA Mobile", image: "/list-ml.png", description: "Joki rank FIFA Mobile." },
    { id: 18, name: "Brawl Stars", image: "/list-ml.png", description: "Joki rank Brawl Stars." },
    { id: 19, name: "Wild Rift", image: "/list-ml.png", description: "Joki rank Wild Rift." },
    { id: 20, name: "Diablo Immortal", image: "/list-ml.png", description: "Joki leveling Diablo Immortal." },
  ];

  // State untuk pencarian dan hasil filter
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredGames, setFilteredGames] = useState(games);

  // State untuk jumlah game yang ditampilkan
  const [visibleCount, setVisibleCount] = useState(6); // Mulai dengan 6 game yang ditampilkan

  // Fungsi untuk menangani input pencarian
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter game berdasarkan query
    const filtered = games.filter((game) => game.name.toLowerCase().includes(query.toLowerCase()));
    setFilteredGames(filtered);
  };

  // Fungsi untuk menampilkan lebih banyak game
  const loadMoreGames = () => {
    setVisibleCount((prevCount) => prevCount + 6); // Tampilkan 6 game lagi setiap kali tombol ditekan
  };

  return (
    <div className="p-6" id="game-list">
      {/* Search Bar dengan Ikon */}
      <div className="text-center mb-4 lg:text-4xl font-bold">List Game</div>
      <div className="flex justify-center mb-4">
        <div className="relative w-96">
          <input
            type="text"
            placeholder="Cari game..."
            value={searchQuery}
            onChange={handleSearch}
            className="p-2 pl-10 border rounded-lg w-full"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <SearchIcon className="w-5 h-5 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Daftar game */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredGames.slice(0, visibleCount).map((game) => (
          <div key={game.id} className="border p-4 rounded-lg shadow-lg bg-white">
            <img src={game.image} alt={game.name} className="w-full h-40 object-cover mb-4 rounded-lg" />
            <h2 className="text-lg font-bold mb-2">{game.name}</h2>
            <p>{game.description}</p>
          </div>
        ))}
      </div>

      {/* Tombol 'Tampilan Lainnya' */}
      {visibleCount < filteredGames.length && (
        <div className="flex justify-center mt-6">
          <button onClick={loadMoreGames} className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
            Tampilan Lainnya...
          </button>
        </div>
      )}
    </div>
  );
};

export default GameList;
