import express  from "express";
import { createThread, deleteThread, getThread, getThreads } from "../controller/thread.controller";

const router = express.Router();

router.get('/', getThread);
router.get('/all', getThreads);
router.post('/', createThread);
router.delete('/', deleteThread);

module.exports = router;