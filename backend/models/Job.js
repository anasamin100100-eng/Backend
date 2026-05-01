const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  id: String,
  service: String,
  area: String,
  worker: String,
  initials: String,
  lat: String,
  lng: String,
  eta: String,
  status: String,
}, { timestamps: true });

module.exports = mongoose.model("Job", jobSchema);
