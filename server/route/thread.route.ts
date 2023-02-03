import express  from "express";
import { createThread, deleteThread, getThread, getThreads } from "../controller/thread.controller";
import { upload } from "../middleware/file.middleware";

const router = express.Router();

router.get('/:threadId', getThread);
router.get('/:board/all', getThreads);
router.post('/', createThread);
router.delete('/', deleteThread);

module.exports = router;