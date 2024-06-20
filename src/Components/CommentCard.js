import React from "react";
const card = ["authorDisplayName", "textDisplay"];
const CommentCard = ({ info }) => {
  return (
    <div className="shadow-sm bg-slate-200 shadow-gray-300 py-2 m-1 w-50 rounded-lg flex">
      <img
        className="rounded-lg"
        src={info?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
        alt="user-image"
      ></img>
      <div className="px-2">
        <h1 className="font-bold mx-1">
          {info?.snippet?.topLevelComment?.snippet?.authorDisplayName}
        </h1>

        <p>{info?.snippet?.topLevelComment?.snippet?.textOriginal}</p>
      </div>
    </div>
  );
};

export default CommentCard;
