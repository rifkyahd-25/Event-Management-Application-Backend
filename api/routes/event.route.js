import express from 'express';
import { verifyToken } from '../utils/verifyUser.js'
import { create,getAllEvents, getAllEventbyId, updateEvent, deleteEvent } from '../controllers/event.controller.js';

const router = express.Router();
router.post('/create', verifyToken, create);
router.get('/getevents', getAllEvents)
router.get('/getevent/:id', getAllEventbyId)
router.put('/update/:id', verifyToken, updateEvent)
router.delete('/delete/:id', verifyToken, deleteEvent)

export default router;