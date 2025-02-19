import { creatBooking } from '../controllers/booking.controller.js';
import express from 'express';
import { verifyToken } from '../utils/verifyUser.js'

const router = express.Router();

router.post('/create', verifyToken, creatBooking);

export default router;