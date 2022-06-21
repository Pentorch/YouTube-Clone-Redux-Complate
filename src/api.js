import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyCU1riLq0tTtP4jgLHz4SlnsW7FQoa86xU",
  },
});

export default request;
