import express from 'express';
import { login, register } from '../controllers/auth.controllers.js';
import { uploadimage } from '../middleware/file.middleware.js';

const router = express.Router();

router.post('/login', login);
router.post("/register", uploadimage, register);

export default router;