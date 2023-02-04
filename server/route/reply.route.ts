import express  from "express";
import { createReply, deleteReply } from "../controller/reply.controller";
import { upload } from "../middleware/file.middleware";

const router = express.Router();

router.post('/', createReply);
router.delete('/', deleteReply);

module.exports = router;