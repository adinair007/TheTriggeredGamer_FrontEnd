import axios from "axios";

export default axios.create({
  baseURL: "https://58ee-47-185-123-17.ngrok-free.app/",
  headers: {"ngrok-skip-browser-warning": "true", "Access-Control-Allow-Origin":"*"},
});
 