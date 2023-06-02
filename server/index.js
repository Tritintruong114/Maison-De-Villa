import express from "express";
const app = express();
// import cors from "cors";

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5173");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.get("/api/data", (req, res) => {
  // handle the request and send a response
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
