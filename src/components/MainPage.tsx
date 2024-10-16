import { useState } from "react";
import Navbar from "./navbar";
import GameList from "./GameList";

const MainPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const games = [
    { id: 1, name: "Mobile Legends", image: "/list-ml.png", description: "Joki rank Mobile Legends." },
    { id: 2, name: "PUBG Mobile", image: "/list-ml.png", description: "Joki rank PUBG Mobile." },
    // ... (other games)
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} games={games} /> {/* Kirim games ke Navbar */}
      <GameList searchQuery={searchQuery} /> {/* Kirim query ke GameList */}
    </div>
  );
};

export default MainPage;
