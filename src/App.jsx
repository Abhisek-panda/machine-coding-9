import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CategoryPage from "./Pages/CategoryPage";
import SingleVideo from "./Pages/SingleVideo";
import Explore from "./Pages/Explore";
import WatchLater from "./Pages/WatchLater";
import Playlists from "./Pages/Playlists";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route paht="/video" element={<Home />} />
        <Route path="/:categoryName" element={<CategoryPage />} />
        <Route path="/video/:videoId" element={<SingleVideo />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/watch-later" element={<WatchLater />} />
        <Route path="/playlists" element={<Playlists />} />
      </Routes>
    </div>
  );
}

export default App;
