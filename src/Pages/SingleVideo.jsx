import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import { useVideo } from "../main";

import { GoClock, GoClockFill } from "react-icons/go";
import { MdOutlinePlaylistAdd, MdNotes } from "react-icons/md";

const SingleVideo = () => {
  const { videoId } = useParams();
  const {
    state: { allVideos, watchLater },
    handleAddWatch,
  } = useVideo();
  const navigate = useNavigate();

  const videoSuggest = allVideos?.filter(
    (_id) => _id.toString() !== videoId?.toString()
  );

  const singleVideo = allVideos?.find(
    ({ _id }) => _id.toString() === videoId.toString()
  );
  const handleSingleVideo = (videoId) => {
    navigate(`/video/${videoId}`);
  };
  const watchLaterVideo = watchLater?.find(()=>)

  return (
    <div className="flex flex-row justify-between h-full w-full">
      <div>
        <Sidebar />
      </div>
      <div className="flex flex-col gap-5 w-1/2 mt-10">
        <iframe src={singleVideo?.src} height="350px" width="650px"></iframe>
        <div className="flex justify-between items-center">
          <img
            src={singleVideo?.creatorImg}
            alt={singleVideo?.creator}
            className="h-10 w-10 rounded-full object-fill"
          />
          <h2 className="text-lg font-bold">{singleVideo?.title}</h2>
          <div className="flex gap-4">
            {singleVideo ? (
              <GoClockFill className="text-xl" />
            ) : (
              <GoClock
                className="text-xl"
                onClick={() => handleAddWatch(singleVideo)}
              />
            )}
            <MdOutlinePlaylistAdd className="text-xl" />
            <MdNotes className="text-xl" />
          </div>
        </div>
        <div>
          <h3>My Notes</h3>
        </div>
      </div>
      <div className="h-screen overflow-y-scroll w-1/3 flex flex-col gap-5">
        <h1 className="text-xl font-bold">Watch More:</h1>
        <div className="flex flex-col gap-5">
          {videoSuggest?.map((video) => {
            return (
              <div
                key={video?._id}
                className="flex items-center gap-2 shadow-3xl hover:shadow-orange-50"
              >
                <img
                  src={video?.thumbnail}
                  alt={video?.title}
                  className=" w-48 h-32 object-contain cursor-pointer"
                  onClick={() => handleSingleVideo(video?._id)}
                />
                <div className="flex flex-col gap-1">
                  <h2 className="font-semibold text-sm tracking-tight">
                    {video?.title}
                  </h2>
                  <p className="text-sm">{video?.creator}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SingleVideo;
