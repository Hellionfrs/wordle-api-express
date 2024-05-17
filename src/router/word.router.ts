import express from "express";
import { wordController } from "../controller/word.controller";

export const wordRouter = express.Router();

wordRouter.post("/get_word", wordController);