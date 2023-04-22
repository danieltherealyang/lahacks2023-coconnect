const mongoose = require("mongoose");

const TutorSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  subjects: {
    type: [String],
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  interests: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  matches: {
    type: [String],
    required: true,
  },
});

const TuteeSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  subjects: {
    type: [String],
    required: true,
  },
  gpa: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  interests: {
    type: String,
    required: true,
  },
  matches: {
    type: [String],
    required: true,
  },
});

const Tutor = mongoose.model("Tutor", TutorSchema);
const Tutee = mongoose.model("Tutee", TuteeSchema);

module.exports = {
  Tutor,
  Tutee,
};
