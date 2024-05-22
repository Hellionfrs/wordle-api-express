import express, { Request, Response } from "express";
import { gamerRouter } from "./router/gamer.router";
import { wordRouter } from "./router/word.router";
import scheduleDailyWordUpdate from "./services/scheduler.service";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.json({ ok: "successfuly loading index page" });
});
app.use(gamerRouter);
app.use(wordRouter);
scheduleDailyWordUpdate();

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
