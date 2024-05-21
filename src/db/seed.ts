import prisma from "./db";
import { wordLengthRange } from "../utils/dictionary.utils";
import { getWordByLength } from "../services/word.service";

const generateWords = async (range: number[]): Promise<string[]> => {
  const words: string[] = [];
  for (const len of range) {
    const word = await getWordByLength(len);
    words.push(word);
  }
  return words;
};

const seedDatabase = async () => {
  try {
    console.log("Seeding database...");

    for (const length of wordLengthRange) {
      const generatedWords = await generateWords(wordLengthRange);
      const filteredWords = generatedWords.filter(
        (word) => word.length === length
      );

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
