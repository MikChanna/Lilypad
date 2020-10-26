// import YTkey from "./YTkey";
import axios from "axios";
const YTkey = "AIzaSyBiuXDOyS6vpeW22DRZSwsaQSSsHyMwGwc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 10,
    key: YTkey,
  },
});
