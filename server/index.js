import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors"
import eventsRoutes from "./routes/events.js";
import usersRoutes from "./routes/users.js";
import dotenv from 'dotenv'


const app = express()
dotenv.config()
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

app.use('/events', eventsRoutes)
app.use('/users', usersRoutes)

app.get('/', (req, res) => {
    res.send('hello to campusvent API')
})

const PORT =  process.env.PORT || 5000 ;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT,()=>console.log(`server running on server ${PORT}`)))
    .catch((error) => console.log(error))