const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
require('dotenv').config();

const port = process.env.PORT || 3001;

const app = express();

const server = http.createServer(app);

const io = socketIO(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

const connectDB = require('./config/db');
connectDB();

const Item = require('./models/itemModel');

io.on("connection", socket => {
    console.log(`New client connected ${socket.id}`)

    socket.on("initial_data", async () => {
        const items = await Item.find({});

        const checkedItems = items.filter(item => item.isChecked);
        const notCheckedItems = items.filter(item => !item.isChecked);

        io.sockets.emit("get_data", [...notCheckedItems, ...checkedItems]);
    })

    socket.on("addItem", async (itemToAdd) => {
        await Item.create(itemToAdd);
        io.sockets.emit("change_data");
    })

    socket.on("check", async (itemToUpdate) => {
        const item = await Item.findById(itemToUpdate._id);
        console.log(item);
        item.isChecked = !itemToUpdate.isChecked;
        await item.save();
        io.sockets.emit("change_data");
    });

    socket.on("delete", async (id) => {
        await Item.deleteOne({ _id: id});
        io.sockets.emit("change_data");
    })

    socket.on("disconnect", () => {
        console.log("user disconnected");
    })
})



server.listen(port, () => console.log(`Listening on port ${port}`));