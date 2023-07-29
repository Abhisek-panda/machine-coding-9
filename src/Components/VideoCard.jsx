import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const VideoCard = ({ video }) => {
  const navigate = useNavigate();
  const handleSingleVideo = (videoId) => {
    navigate(`/video/${videoId}`);
  };
  return (
    <div className="flex flex-col items-center shadow-3xl hover:shadow-orange-50 hover:bg-slate-200 h-72 w-80 rounded-lg gap-4">
      <div>
        <img
          src={video?.thumbnail}
          alt={video?.title}
          className="w-72 h-44 object-cover cursor-pointer"
          onClick={() => handleSingleVideo(video?._id)}
        />
      </div>
      <div className="flex items-center gap-5">
        <img
          src={video?.creatorImg}
          alt={video?.creator}
          className="w-8 h-8 rounded-full "
        />
        <div className="flex flex-col gap-1 ">
          <h2 className="font-semibold ">{video?.title}</h2>
          <p>{video?.views} views</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
