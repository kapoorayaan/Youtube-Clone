import { useSearchParams } from "react-router-dom";

export const gApiKey = "AIzaSyA9AyIgqSYfJMNOdq5vM-q3Flrzi-zeFX0";

export const ytApi =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  gApiKey;