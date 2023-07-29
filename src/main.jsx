import React, { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { VideoProvider, VideoContext } from "./Context/VideoContext.jsx";

export const useVideo = () => useContext(VideoContext);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <VideoProvider>
      <Router>
        <App />
      </Router>
    </VideoProvider>
  </React.StrictMode>
);
