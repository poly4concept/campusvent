import eventFormat from "../models/eventFormat.js"
import mongoose from 'mongoose'

export const getEvents = async (req, res) => {
        try {
            const events = await eventFormat.find()
            res.status(200).json(events)
        } catch (error) {
            res.status(404).json(error)
        }
}

export const createEvent = async (req, res) => { 
    const event = req.body
    const newEvent = eventFormat(event)
    try {
        await newEvent.save()
        console.log('controller')
        res.status(201).json(newEvent)
    } catch (error) {
        res.status(409).json(error)
    }
}

export const bookmarkEvent = async (req, res) => { 
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No event with id: ${id}`);
    const event = await eventFormat.findById(id)
    const updatedEvent = await eventFormat.findByIdAndUpdate(id, { bookmarked: !event.bookmarked }, { new: true });
    res.json(updatedEvent)
}