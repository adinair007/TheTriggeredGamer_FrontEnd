import axios from "axios";

export default axios.create({
  baseURL: "https://5678-47-185-123-17.ngrok-free.app",
  headers: {"ngrok-skip-browser-warning": "true", "Access-Control-Allow-Origin":"*"},
});
 