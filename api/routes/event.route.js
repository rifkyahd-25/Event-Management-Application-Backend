import express from 'express';
import { verifyToken } from '../utils/verifyUser.js'
import { create,getAllEvents } from '../controllers/event.controller.js';

const router = express.Router();
router.post('/create', verifyToken, create);
router.get('/getevents', getAllEvents)

export default router;