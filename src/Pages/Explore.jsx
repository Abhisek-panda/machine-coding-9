import Sidebar from "../Components/Sidebar";
import VideoCard from "../Components/VideoCard";
import { useVideo } from "../main";

const Explore = () => {
  const {
    state: { allVideos, searchVideo },
    dispatch,
  } = useVideo();

  const handleSearch = (e) => {
    const searchVideo = allVideos.filter(({ title }) =>
      title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    dispatch({ type: "SEARCH_VIDEO", payload: searchVideo });
  };
  return (
    <div className="flex flex-row gap-10 h-screen">
      <div>
        <Sidebar />
      </div>
      <div className="flex flex-col gap-5">
        <div className="mt-5">
          <input
            type="text"
            onChange={(e) => handleSearch(e)}
            placeholder=" Search Videos With Title"
            className="bg-slate-300 w-full h-8 rounded-sm p-4"
          />
        </div>
        <div className="grid grid-cols-3 gap-10 overflow-y-scroll h-screen">
          {searchVideo.length === 0 ? (
            <h1 className="text-2xl font-bold">Nothing Found</h1>
          ) : (
            searchVideo?.map((video) => {
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

export default Explore;
