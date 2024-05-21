import prisma from "../db/db";
const randomWords = require('random-words');

const getWordByLength = (length: number): string => {
  return randomWords({ minLength: length, maxLength: length });
};

export const addDailyWord = async (length: number) => {
  const word = getWordByLength(length);
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
    orderBy: { createdAt: "desc" },
  });
};
