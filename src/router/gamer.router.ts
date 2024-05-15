import express from "express";
import {
  createGamerController,
  updateGameStatusController,
} from "../controller/gamer.controller";
import ipMiddleware from "../middlewares/ip.middleware";

export const gamerRouter = express.Router();

gamerRouter.use(ipMiddleware);
gamerRouter.get("/create_gamer", createGamerController);
gamerRouter.patch("update_game_status", updateGameStatusController);
