import { Link } from "react-router-dom";
import { FaHome, FaClock } from "react-icons/fa";
import { MdExplore, MdOutlinePlaylistAdd } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="h-screen w-52 flex flex-col gap-4 bg-slate-200 p-5">
      <Link to="/" className="flex items-center gap-2 text-xl">
        <FaHome className="text-lg" />
        Home
      </Link>
      <Link to="/explore" className="flex items-center gap-2 text-xl">
        <MdExplore className="text-lg" />
        Explore
      </Link>
      <Link to="/playlists" className="flex items-center gap-2 text-xl">
        <MdOutlinePlaylistAdd className="text-xl" />
        Playlists
      </Link>
      <Link to="/watch-later" className="flex items-center gap-2 text-xl">
        <FaClock className="text-lg" />
        Watch Later
      </Link>
    </div>
  );
};

export default Sidebar;
