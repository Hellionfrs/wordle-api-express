import express, { Request, Response } from "express";
import { gamerRouter } from "./router/gamer.router";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({ ok: "successfuly loading index page" });
});
app.use(gamerRouter);
app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
