import { Request, Response, NextFunction } from 'express';
import requestIp from 'request-ip';

const ipMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Obtener la dirección IP del cliente utilizando request-ip
  const clientIp = requestIp.getClientIp(req);

  // Verificar si se pudo obtener la dirección IP
  if (clientIp) {
    // Adjuntar la dirección IP al objeto req para que esté disponible en los controladores
    req.clientIp = clientIp;
    next(); // Llamar a next() para pasar al siguiente middleware o controlador
  } else {
    // Si no se pudo obtener la dirección IP, responder con un error
    res.status(400).json({ ok: false, error: 'No se pudo obtener la dirección IP del cliente' });
  }
};

export default ipMiddleware;
