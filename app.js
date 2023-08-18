import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import postRoutes from './routes/posts.routes.js';
import { Server } from 'socket.io';
import http from 'http';

// Configurations

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

const app = express();

const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(morgan(':method :url :status :response-time ms'));
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

// Routes

app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/posts", postRoutes);

// Mongoose Setup

const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));

}).catch((err) => {
    console.log(err.message);
});

// Socket.io


io.on("connection", (socket) => {

    console.log("User connected: ", socket.id);

    socket.on("disconnect", () => {

        console.log("User disconnected: ", socket.id);
    });

    socket.on("NewPost", (data) => {
        console.log("New Post: ", data);
        socket.broadcast.emit("NewPost", data);
    });

    socket.on("NewLike", (data) => {
        console.log("New Like:", data);
        socket.broadcast.emit("NewLike", data);

    });

    socket.on("NewFriend", (data) => {
        console.log("New Friend: ", data);
        socket.broadcast.emit("NewFriend", data);
        
    });

}); 



