import axios from "axios";

export default axios.create({
  baseURL: "http://34.98.70.119/video",
  headers: {
    "Content-type": "application/json",
  },
});
