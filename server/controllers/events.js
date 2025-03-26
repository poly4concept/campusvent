import eventFormat from "../models/eventFormat.js"
import mongoose from 'mongoose'

export const getEvents = async (req, res, next) => {

    try {
            const filters = req.query
            const events = await eventFormat.find()
            
            // console.log(filters);
           if (filters.length > 0) {
                const filteredEvents = events.filter(event => {
                    let isValid = true;
                    for ( key in filters) {
                     isValid = isValid && event[key] == filters[key]
                    }
                    return isValid;
                })
                res.status(200).json(filteredEvents)
            }              
        res.status(200).json(events)
                
        } catch (error) {
                res.status(404).json({ error, message: "Something went wrong" })
                console.log(error);
        }
}

export const createEvent = async (req, res) => { 
    
    const event = req.body
    const newEvent = eventFormat(event)
    try {
        await newEvent.save()
        res.status(201).json(newEvent)
    } catch (error) {
        res.status(409).json({ error, message: "Something went wrong" })
    }
}

export const bookmarkEvent = async (req, res) => { 
    const { id } = req.params
    if (!req.userId) {
        return res.json({ message: "Unauthenticated" });
      }
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No event with id: ${id}`);
    const event = await eventFormat.findById(id)
    const updatedEvent = await eventFormat.findByIdAndUpdate(id, { bookmarked: !event.bookmarked }, { new: true });
    res.json(updatedEvent)
}