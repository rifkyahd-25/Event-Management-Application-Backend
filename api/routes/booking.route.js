import { creatBooking, getUserBookings, cancelBooking, getAllbooking } from '../controllers/booking.controller.js';
import express from 'express';
import { verifyToken } from '../utils/verifyUser.js'

const router = express.Router();

router.post('/create', verifyToken, creatBooking);
router.get('/getevuser', verifyToken, getUserBookings);
router.get('/all', verifyToken, getAllbooking);
router.put('/:id/cancel', verifyToken, cancelBooking);


export default router;