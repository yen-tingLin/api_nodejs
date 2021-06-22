import http from "http";
import app from "./app.js";

const PORT = 3333;
const server = http.createServer(app);

server.listen(PORT, (err) => {
  if (err) {
    console.log("error: ", err);
  } else {
    console.log(`Server running on port ${PORT}`);
  }
});
