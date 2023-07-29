import { createContext, useReducer } from "react";
import { initialState, videoReducer } from "../Reducer/VideoReducer";

export const VideoContext = createContext();

// eslint-disable-next-line react/prop-types
export const VideoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(videoReducer, initialState);

  const handleAddWatch = (video) => {
    const isVideoPresent = state?.watchLater?.find(
      ({ _id }) => _id.toString() === video?._id.toString()
    );
    if (!isVideoPresent) {
      dispatch({
        type: "ADD_WATCH_LATER",
        payload: [...state.watchLater, video],
      });
    } else {
      const newWatchLaterVideo = state?.watchLater?.map((vid) =>
        vid?._id === video?._id ? { ...vid, video, watchLater: true } : vid
      );
      dispatch({ type: "ADD_WATCH_LATER", payload: newWatchLaterVideo });
    }
  };
  return (
    <VideoContext.Provider value={{ handleAddWatch, state, dispatch }}>
      {children}
    </VideoContext.Provider>
  );
};
