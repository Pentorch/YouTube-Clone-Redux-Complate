import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyD-bHUJowdyZJxkCt3R_L9EkqVQ6mlj7W0",
  },
});

export default request;
