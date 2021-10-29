import React from "react";
import VideoPlayer from "./VideoPlayer";
import song from "./video/song.mp4";
import banner from "./posters/hacker.jpg";

function VideoJs() {
  const VideoJsOptions = {
    sources: [
      {
        src: song,
        type: "video/mp4",
      },
    ],
    autoplay: false,
    control: true,
    poster: banner,
    width: "500px",
    height: "250px",
    // children: ["bigPlayButton", "controlBar"],
    loop: true,
    playbackRates: [0.5, 1, 1.5, 2],
    plugins: {},
  };

  return <VideoPlayer {...VideoJsOptions} />;
}

export default VideoJs;
