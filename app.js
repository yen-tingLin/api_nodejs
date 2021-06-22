import express from "express";
import usersRoutes from "./routes/users.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => res.send("Hello, Home page"));
app.use("/users", usersRoutes);

export default app;
