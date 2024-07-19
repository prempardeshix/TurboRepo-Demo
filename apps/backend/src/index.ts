import express from "express";
const app = express();

const port: number = 3000;

app.get("/", (req, res) => {
  res.json({
    msg: "Healthy System",
  });
});

app.listen(port);
