const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const http = require("http");
const { Server } = require("socket.io");

const Job = require("./models/Job.js");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/ustadgo")
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log(err));

// Create HTTP server
const server = http.createServer(app);

// Create Socket.io server
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// Attach io AFTER creation ✅
app.set("io", io);

setInterval(async () => {
  const jobs = await Job.find();

  if (jobs.length > 0) {
    const randomJob = jobs[0];

    randomJob.lat = (24.8 + Math.random() * 0.1).toFixed(4);
    randomJob.lng = (67.0 + Math.random() * 0.1).toFixed(4);

    await randomJob.save();

    io.emit("jobUpdated", randomJob);
  }
}, 5000);


// Socket connection
io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

// ROUTES
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.get("/api/test", (req, res) => {
  res.json({ message: "Backend connected 🚀" });
});

const jobRoutes = require("./routes/job.routes");
app.use("/api/jobs", jobRoutes);


// Start server
server.listen(5000, () => {
  console.log("Server running on http://localhost:5000 🚀");
});
