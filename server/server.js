const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

app.use(express.static(path.join(__dirname, "client/build")));
app.use(cors());

app.get("/api", (req, res) => {
  res.send({ test: "hi" });
});
/* 프론트와 동일 포트 이용시
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});
*/
