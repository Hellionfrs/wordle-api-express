import { NextFunction, Request, Response } from "express";
import { wordLengthRange } from "../utils/dictionary.utils";
import { getDailyWord } from "../services/word.service";

export const wordController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { length } = req.body;

    if (typeof length !== "number" || !wordLengthRange.includes(length)) {
      res.status(400).json({
        ok: false,
        error: "Invalid length. Must be between 4 and 10.",
      });
    }

    const dailyWord = await getDailyWord(length);
    if (!dailyWord) {
      res
        .status(404)
        .json({ ok: false, error: "No word found for the specified length." });
    }
    res.json({ ok: true, word: dailyWord });
  } catch (error) {
    next(error);
  }
};
