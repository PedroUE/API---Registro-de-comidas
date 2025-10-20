import { Router } from "express";
import * as comidaController from "../controllers/comidaController.js";

const router = Router();

router.get("/", comidaController.getAllComidas);
router.get("/:id", comidaController.getComidaById);

export default router;