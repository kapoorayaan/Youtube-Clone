import React from "react";

const VidCard = ({ info }) => {
  return (
    <div className="p-2 m-7 w-60 shadow-lg  ">
      <img
        className="rounded-lg"
        alt="thumbnail"
        src={info?.snippet?.thumbnails.medium.url}
      />
      <ul>
        <li className="font-bold py-2">{info?.snippet?.title}</li>
        <li>
          <span className="font-bold"> </span>
          {info?.snippet?.channelTitle}
        </li>
        <li>
          <span className="font-bold"></span>
          {info?.statistics.viewCount} views
        </li>
      </ul>
    </div>
  );
};

export default VidCard;
