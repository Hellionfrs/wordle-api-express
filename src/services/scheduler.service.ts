import cron from "node-cron";
import { wordLengthRange } from "../utils/dictionary.utils";
import { addDailyWord } from "./word.service";

const scheduleDailyWordUpdate = () => {
  cron.schedule("0 * * * *", async () => {
    console.log("Cron job started at", new Date().toISOString());
    const lengths = wordLengthRange
    for (const length of lengths) {
      try {
        const word = await addDailyWord(length);
        console.log(`Added word: ${word.word} with length ${length}`);
      } catch (error) {
        console.error(`Failed to add word with length ${length}:`, error);
      }
    }
  })
};

export default scheduleDailyWordUpdate;