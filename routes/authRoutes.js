import express from 'express';
import { loginWithDiscord, getProfile } from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/discord', loginWithDiscord);
router.get('/profile', protect, getProfile);

export default router;
