import Sidebar from "../Components/Sidebar";
import VideoCard from "../Components/VideoCard";
import { useVideo } from "../main";

const WatchLater = () => {
  const {
    state: { watchLater },
  } = useVideo();
  console.log(watchLater);
  return (
    <div className="flex flex-row gap-5 h-screen">
      <div>
        <Sidebar />
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl font-bold">Watch Later Videos: </h1>
        <div className="grid grid-cols-3 gap-10 overflow-y-scroll h-screen">
          {watchLater.length === 0 ? (
            <h1 className="text-2xl font-bold">
              Nothing to Watch Now. Add Something.
            </h1>
          ) : (
            watchLater.map((video) => {
              return (
                <div key={video?._id}>
                  <VideoCard video={video} />
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default WatchLater;
