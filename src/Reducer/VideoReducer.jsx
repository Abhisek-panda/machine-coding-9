import { categories } from "../Data/CategoryData";
import { videos } from "../Data/VideoData";

export const initialState = {
  allVideos: videos,
  allCategory: categories,
  playlists: {},
  watchLater: [],
  searchVideo: videos,
};

export const videoReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_VIDEO":
      return {
        ...state,
        searchVideo: action.payload,
      };
    case "ADD_WATCH_LATER":
      return {
        ...state,
        watchLater: action.payload,
      };
    default:
      return state;
  }
};
