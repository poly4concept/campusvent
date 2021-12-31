import eventFormat from "../models/eventFormat.js"

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
