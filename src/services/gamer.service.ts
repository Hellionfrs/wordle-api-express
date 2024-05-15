// src/repositories/gamer.repository.ts

import prisma from "../db/db";

export const findGamerByIp = async (userIp: string) => {
  return prisma.gamer.findUnique({
    where: { user_ip: userIp },
  });
};

export const createGamer = async (userIp: string) => {
  return prisma.gamer.create({
    data: {
      user_ip: userIp,
      game_status: true,
    },
  });
};

export const updateGamerStatus = async (userIp: string, gameStatus: boolean) => {
  return prisma.gamer.update({
    where: { user_ip: userIp },
    data: { game_status: gameStatus },
  });
};
