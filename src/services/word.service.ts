import prisma from "../db/db";

export const getWordByLength = async (length: number): Promise<string> => {
  const randomWords = await import('random-words');
  return randomWords.generate({ exactly: 1, minLength: length, maxLength: length })[0];
};

export const addDailyWord = async (length: number) => {
  const word = await getWordByLength(length);
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
