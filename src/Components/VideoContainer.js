import React, { useEffect, useState } from "react";
import { ytApi } from "../utils/Constants";
import VidCard from "./VidCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVid();
  }, []);

  const getVid = async () => {
    const data = await fetch(ytApi);
    const json = await data.json();
    //console.log(json.items);
    setVideos(json.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos.map((item) => (
        <Link to={"/watch?v=" + item.id}>
          <VidCard key={item.id} info={item} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
