import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
    title: String,
    message: String,
    organizer: String,
    eventDate: Date,
    eventTime: Number,
    ticketPrice: Number,
    eventImage: String,
    bookmarked: false
}, {
     timestamps: true
}
)

const eventFormat = mongoose.model('eventFormat', eventSchema)

export default eventFormat;