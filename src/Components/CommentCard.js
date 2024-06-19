import React from "react";
const card = ["authorDisplayName", "textDisplay"];
const CommentCard = ({ info }) => {
  return (
    <div className="shadow py-2 m-2 w-50 rounded-lg flex">
      <img
        className="rounded-lg"
        src={info?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
        alt="user-image"
      ></img>
      <h1 className="font-bold mx-1">
        {info?.snippet?.topLevelComment?.snippet?.authorDisplayName}
      </h1>
      <div className="px-1">
        <h2>{info?.snippet?.topLevelComment?.snippet?.textOriginal}</h2>
      </div>
    </div>
  );
};

export default CommentCard;
