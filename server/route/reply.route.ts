import express  from "express";
import { createReply } from "../controller/reply.controller";
import { upload } from "../middleware/file.middleware";

const router = express.Router();

router.post('/', createReply);
router.delete('/');

module.exports = router;