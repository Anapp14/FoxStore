import { useState } from "react";
import Navbar from "./navbar";
import GameList from "./GameList";

const MainPage = () => {
  const games = [
    { id: 1, name: "Mobile Legends", image: "/list-ml.png", description: "Joki rank Mobile Legends." },
    { id: 2, name: "PUBG Mobile", image: "/list-ml.png", description: "Joki rank PUBG Mobile." },
    // ... (other games)
  ];

  return (
    <div>
      <Navbar /> {/* Kirim games ke Navbar */}
      <GameList /> {/* Kirim query ke GameList */}
    </div>
  );
};

export default MainPage;
