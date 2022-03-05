const express = require("express");
const path = require("path");

const app = express();

// 4. index.js를 사용하도록 설정
app.use("/js", express.static(path.resolve("frontend", "js")));

// 3. frontend 디렉토리의 index.html을 가져옴
app.get("/*", (req, res) => {
  res.sendFile(path.resolve("frontend", "index.html"));
});

app.listen(process.env.PORT || 7000, () => console.log("server running..."));
