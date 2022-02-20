import express from "express";
import { getEvents, createEvent, bookmarkEvent } from "../controllers/events.js";
const router = express.Router()

router.get('/', getEvents)
// router.get('/', quSearch)
router.post('/', createEvent)
router.patch('/:id/bookmarkEvent', bookmarkEvent)

export default router;