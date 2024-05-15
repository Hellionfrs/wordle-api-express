import { NextFunction, Request, Response } from "express";
import prisma from "../db/db";

export const gamerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const clientIp = req.clientIp;

    // Devuelve la dirección IP en la respuesta JSON
    if (clientIp) {
      // Devolver la dirección IP en la respuesta JSON
      let gamer = await prisma.gamer.findUnique({
        where: { user_ip: clientIp },
      });

      if (!gamer) {
        gamer = await prisma.gamer.create({
          data: {
            user_ip: clientIp,
            game_status: true,
          },
        });
      }
      res.json({ ok: true, gamer });
    } else {
      // Si no se pudo obtener la dirección IP, responder con un mensaje de error
      res.status(400).json({
        ok: false,
        error: "No se pudo obtener la dirección IP del cliente",
      });
    }
  } catch (error) {
    next(error)
  }
};
