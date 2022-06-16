import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyBnNRxdq-V50iEse9NDljS2N1PG0FDlRyA",
  },
});

export default request;
