import express from "express";

import { BACKEND_URL } from "@repo/common/config";

console.log(BACKEND_URL);

const app = express();
const port: number = 3000;

app.get("/", (req, res) => {
  res.json({
    msg: "Healthy System",
  });
});

app.listen(port);
