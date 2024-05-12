
import express from 'express'
import dotenv from 'dotenv'


import authRoutes from './routes/auth.js'
import messageRoutes from "./routes/message.js";
import userRoutes from "./routes/user.js";


import connectMongoDb from './db/connectMongoDb.js'
import cookieParser from 'cookie-parser';

const app = express()


dotenv.config()


const port = process.env.PORT || 5000
app.use(express.json());
app.use(cookieParser())


app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)

// app.get('/', (req, res) => {
//     res.send("Hello World")
// })

app.listen(port, () => {
    connectMongoDb()
    console.log(`Server is running on port ${port}`)
})