import express from "express";
import { getEvents, createEvent, bookmarkEvent } from "../controllers/events.js";
import auth from "../middleware/auth.js";
const router = express.Router()

router.get('/', getEvents)
// router.get('/', quSearch)
router.post('/', auth, createEvent)
router.patch('/:id/bookmarkEvent', bookmarkEvent)

export default router;