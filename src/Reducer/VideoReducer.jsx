import { categories } from "../Data/CategoryData";
import { videos } from "../Data/VideoData";
import { v4 } from "uuid";

export const initialState = {
  allVideos: videos,
  allCategory: categories,
  playlists: [
    {
      id: v4(),
      title: "",
      videos: [],
      // thumbnail: "https://source.unsplash.com/random/",
    },
  ],
  watchLater: [],
  searchVideo: videos,
  suggestedVideo: videos,
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
    case "REMOVE_WATCH_LATER":
      return {
        ...state,
        watchLater: action.payload,
      };
    case "NEW_PLAYLIST_TITLE":
      return {
        ...state,
        playlists: action.payload,
      };
    default:
      return state;
  }
};
