import { useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import { useVideo } from "../main";

const Home = () => {
  const { state } = useVideo();
  const navigate = useNavigate();
  const handleCategory = (category) => {
    navigate(`/${category}`);
  };
  return (
    <div className="flex flex-row gap-5">
      <div>
        <Sidebar />
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl font-bold">Categories</h1>
        <div className="grid grid-cols-4 h-max gap-10">
          {state.allCategory.map((cat) => {
            const { _id, thumbnail, category } = cat;
            return (
              <div
                key={_id}
                className=" flex flex-col rounded-sm items-start gap-2"
              >
                <div>
                  <img
                    src={thumbnail}
                    alt={category}
                    className="object-contain h-full w-full shadow-xl cursor-pointer"
                    onClick={() => handleCategory(category.replace(" ", ""))}
                  />
                </div>
                <h2 className="text-lg font-semibold">{category}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
