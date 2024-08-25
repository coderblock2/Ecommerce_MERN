import axios from "axios";

const instance = axios.create({
  baseURL: "https://myecommerce-web.onrender.com/",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true
});

export default instance;