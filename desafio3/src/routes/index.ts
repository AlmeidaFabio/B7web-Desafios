import { Router } from "express";
import { HomeController } from "../controllers/HomeController";

const router = Router()

router.get('/', new HomeController().home)

export { router }