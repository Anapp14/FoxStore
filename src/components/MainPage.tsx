import Navbar from "./navbar";
import GameList from "./GameList";

const MainPage = () => {
  return (
    <div>
      <Navbar /> {/* Kirim games ke Navbar */}
      <GameList /> {/* Kirim query ke GameList */}
    </div>
  );
};

export default MainPage;
