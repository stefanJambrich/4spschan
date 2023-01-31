import express  from "express";
import { createReply } from "../controller/reply.controller";

const router = express.Router();

router.post('/', createReply);
router.delete('/');

module.exports = router;