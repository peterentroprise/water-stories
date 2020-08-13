import axios from "axios";

export default axios.create({
  baseURL: "https://tad.entroprise.com/video",
  headers: {
    "Content-type": "application/json",
  },
});
