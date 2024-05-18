import cron from "node-cron";
import { wordLengthRange } from "../utils/dictionary.utils";
import { addDailyWord } from "./word.service";

const scheduleDailyWordUpdate = () => {
  cron.schedule("0 * * * *", async () => {
    const lengths = wordLengthRange
    for (const length of lengths) {
      await addDailyWord(length)
    }
  })
};

export default scheduleDailyWordUpdate;