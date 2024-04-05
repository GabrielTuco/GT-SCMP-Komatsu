import { Router } from "express";
import { getListOrden, updateTodo } from "../Controllers/OrdenController";
import { getListMotivos } from "../Controllers/MotivoController";

const router = Router();

router.get("/orden", getListOrden);
router.patch("/orden/todo", updateTodo);
router.patch("/orden/process", updateTodo);

router.get("/motivos", getListMotivos);

export default router;
