import React, { useEffect, useState } from "react";
import { gApiKey } from "../utils/Constants";
import CommentCard from "./CommentCard";
import { json, useSearchParams } from "react-router-dom";

const Comments = () => {
  const [params] = useSearchParams();
  const paramSearch = params.get("v");
  const commentApi =
    "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=" +
    paramSearch +
    "&key=" +
    gApiKey;
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    const data = await fetch(commentApi);
    const json = await data.json();

    setComments(json.items);
    //console.log(json.items);
  };
  return (
    <div>
      <h1 className="font-bold text-3xl"> Comments</h1>
      {comments.map((item) => (
        <CommentCard key={item?.id} info={item} />
      ))}
    </div>
  );
};

export default Comments;
