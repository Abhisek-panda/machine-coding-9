import { useParams } from "react-router-dom";
import { useVideo } from "../main";
import Sidebar from "../Components/Sidebar";
import VideoCard from "../Components/VideoCard";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const {
    state: { allVideos },
  } = useVideo();
  const filterCategoryVideo = allVideos?.filter(
    ({ category }) => category.replace(" ", "") === categoryName
  );
  return (
    <div className="flex flex-row gap-5">
      <div>
        <Sidebar />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-2xl font-bold ">
          Showing Video About {categoryName}
        </h2>
        <div className="flex gap-10">
          {filterCategoryVideo?.map((video) => {
            const { _id } = video;
            return (
              <div key={_id}>
                <VideoCard video={video} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
