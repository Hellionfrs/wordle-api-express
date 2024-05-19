import prisma from "./db";
import { trialDictionary, wordLengthRange } from "../utils/dictionary.utils";

const seedDatabase = async () => {
  try {
    console.log("Seeding database...");

    for (const length of wordLengthRange) {
      const filteredWords = trialDictionary.filter(word => word.length === length);

      if (filteredWords.length > 0) {
        for (const word of filteredWords) {
          await prisma.dailyWord.upsert({
            where: { word },
            update: {},
            create: {
              word,
              length,
            },
          });
        }
      }
    }

    console.log("Database seeded successfully.");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
};

seedDatabase();
