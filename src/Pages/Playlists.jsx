import Modal from "react-modal";

import Sidebar from "../Components/Sidebar";
import { useVideo } from "../main";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useState } from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "50px",
  },
};

const Playlists = () => {
  const {
    state: { playlists },
    dispatch,
  } = useVideo();
  const [showModal, setShowModal] = useState(false);
  const [newPlaylist, setNewPlaylist] = useState({ title: "" });

  console.log(playlists);

  const handlePlaylist = () => {
    dispatch({
      type: "ADD_NEW_PLAYLIST",
      payload: [...newPlaylist],
    });
    setShowModal(false);
  };

  return (
    <div className="flex flex-row">
      <div>
        <Sidebar />
      </div>
      <div>
        {/* {playlists?.map((item) => {
          return (
            <div key={item?._id}>
              <img src={item?.thumbnail} alt={item?.title} />
              <h1 className="bg-blue-500">{item?.title}</h1>
            </div>
          );
        })} */}
        <BsFillPlusCircleFill onClick={() => setShowModal(true)} />
      </div>

      <div>
        <Modal isOpen={showModal} style={customStyles} ariaHideApp={false}>
          <div className="flex flex-col gap-5">
            <input
              type="text"
              onChange={(e) =>
                setNewPlaylist({ ...newPlaylist, title: e.target.value })
              }
            />
            <button type="submit" onClick={() => handlePlaylist()}>
              Submit
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Playlists;
