import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constatnts";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log(json);
    // console.log(json.items);
    setVideos(json.items);
  };
  if (!videos) return null;
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
      {/* {videos.length > 0 && <VideoCard info={videos[0]} />} */}
    </div>
  );
};

export default VideoContainer;
