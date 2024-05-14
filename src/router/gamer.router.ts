import express from "express"
import { gamerController } from "../controller/gamer.controller"
import ipMiddleware from "../middlewares/ip.middleware"

export const gamerRouter = express.Router()

gamerRouter.use(ipMiddleware)
gamerRouter.get("/gamer_status",gamerController)