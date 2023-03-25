import cors from "cors";
import express from "express";

const app = express();
const port = 8000;

app.use(cors());

app.get("/", (_, response) => {
  const data = { now: new Date() };
  response.json(data);
});

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
