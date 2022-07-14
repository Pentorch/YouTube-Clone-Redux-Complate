import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyBDH7HYpJZsonr3lHg-wvUKkplRu3GTTXQ",
  },
});

export default request;
