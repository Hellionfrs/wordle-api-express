import { NextFunction, Request, Response } from "express";
import {
  createGamer,
  findGamerByIp,
  updateGamerStatus,
} from "../services/gamer.service";

export const createGamerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const clientIp = req.clientIp;

    // Devuelve la dirección IP en la respuesta JSON
    if (clientIp) {
      // Devolver la dirección IP en la respuesta JSON
      let gamer = await findGamerByIp(clientIp);

      if (!gamer) {
        gamer = await createGamer(clientIp);
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
    next(error);
  }
};

export const updateGameStatusController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const clientIp = req.clientIp;
    const { game_status } = req.body;

    if (clientIp) {
      const gamer = await updateGamerStatus(clientIp, game_status);
      res.json({ ok: true, gamer });
    } else {
      res.status(400).json({
        ok: false,
        error: "No se pudo obtener la dirección IP del cliente",
      });
    }
  } catch (error) {
    next(error);
  }
};
