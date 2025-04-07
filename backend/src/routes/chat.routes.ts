import express from "express";
import ChatController from "../controllers/chat.controller";

const router = express.Router();

router.post("/create", ChatController.create);
router.put("/update", ChatController.update);

export default router;