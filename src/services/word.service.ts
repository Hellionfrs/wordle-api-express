import prisma from "../db/db";
import { trialDictionary } from "../utils/dictionary.utils";

export const generateWord = (length: number): string => {
  const filteredWords = trialDictionary.filter(
    (word) => word.length === length
  );
  if (filteredWords.length === 0) {
    throw new Error(`No words found with length ${length}`);
  }
  const randomIndex = Math.floor(Math.random() * filteredWords.length);
  return filteredWords[randomIndex];
};

export const addDailyWord = async (length: number) => {
  const word = generateWord(length);
  return prisma.dailyWord.create({
    data: {
      word,
      length,
    },
  });
};

export const getDailyWord = async (length: number) => {
  return prisma.dailyWord.findFirst({
    where: { length },
    orderBy: { createdAt: 'desc' },
  });
};