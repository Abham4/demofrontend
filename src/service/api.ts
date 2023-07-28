import axios from "axios";
const axiosCreate = axios.create({
  baseURL: "https://localhost:7162/",
  headers: {
    "Content-Type": "application/json",
  },
});
export default axiosCreate;
