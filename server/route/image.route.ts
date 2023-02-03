import express from 'express';
import { uploadFile } from '../controller/image.controller';
import { upload } from '../middleware/file.middleware';

const router = express.Router();

router.post('/', upload.single('img'), uploadFile);

module.exports = router;