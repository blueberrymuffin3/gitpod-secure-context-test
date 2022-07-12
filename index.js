const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.header("Cross-Origin-Opener-Policy", "same-origin");
  res.header("Cross-Origin-Embedder-Policy", "require-corp");
  res.header("X-Frame-Options", "DENY");
  res.sendFile("index.html", { root: __dirname });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
