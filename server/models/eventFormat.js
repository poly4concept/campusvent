import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
    title: String,
    message: String,
    organizer: String,
    date: String,
    time: String,
    price: String,
    image: String,
    contact: String,
    bookmarked: false
}, {
     timestamps: true
}
)

const eventFormat = mongoose.model('eventFormat', eventSchema)

export default eventFormat;