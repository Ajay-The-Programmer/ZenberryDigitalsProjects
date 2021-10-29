import React from "react";
// import VideoJs from "./VideoJs";
import videojs from "video.js";
import dash from "dashjs";
import song from "./video/song.mp4";
import "video.js/dist/video-js.css";

class VideoPlayer extends React.Component {
  state = {};
  componentDidMount() {
    console.log("mount");

    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log("onPlayerReady", this);
      // this.player.httpSourceSelector;
    });
  }

  componentDidUpdate() {
    console.log("update");
    const url = song;
    const video = this.player;
    const dashjs = dash.MediaPlayer().create();
    dashjs.initialize(video, url, true);
  }

  componentWillUnmountMount() {
    console.log("dispose");
    if (this.player) {
      this.player.dispose();
    }
  }

  render() {
    console.log("render");
    return (
      <div>
        <div data-vjs-player>
          <video
            ref={(node) => (this.videoNode = node)}
            className="video-js"
          ></video>
        </div>
      </div>
    );
  }
}
export default VideoPlayer;
