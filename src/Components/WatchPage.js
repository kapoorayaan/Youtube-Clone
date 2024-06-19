import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/AppSlice";
import { useSearchParams } from "react-router-dom";
import Comments from "./Comments";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  //console.log(searchParams.get("v"));
  const dispatchEvent = useDispatch();
  useEffect(() => {
    dispatchEvent(closeMenu());
  }, []);

  return (
    <div className="px-5">
      <iframe
        width="1688"
        height="700"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="Winning Speech (Music Video) Karan Aujla | Mxrci | Latest Punjabi Songs 2024"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div>
        <Comments />
      </div>
    </div>
  );
};

export default WatchPage;
