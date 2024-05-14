import { NextFunction, Request, Response } from "express";

export const gamerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    
    const clientIp = req.clientIp

    // Devuelve la dirección IP en la respuesta JSON
    if (clientIp) {
      // Devolver la dirección IP en la respuesta JSON
      res.json({ ok: true, ip_address: clientIp });
    } else {
      // Si no se pudo obtener la dirección IP, responder con un mensaje de error
      res.status(400).json({ ok: false, error: 'No se pudo obtener la dirección IP del cliente' });
    }
  } catch (error) {
    error; // Pasa el error al siguiente middleware de manejo de errores
  }
};
