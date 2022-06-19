import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyDMKjvW8hjEo9aJaFllG27NWnp6-QmZvGw",
  },
});

export default request;
