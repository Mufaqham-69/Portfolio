const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  email: { type: String, required: true },
  location: { type: String },
  bio: { type: String },
  linkedin: { type: String },
  github: { type: String },
  kaggle: { type: String },
  resumeUrl: { type: String },
  stats: [{
    label: String,
    value: String
  }],
  skills: [{
    group: String,
    icon: String,
    items: [String]
  }],
  experience: [{
    role: String,
    company: String,
    location: String,
    date: String,
    description: [String],
    color: String
  }],
  education: [{
    degree: String,
    university: String,
    year: String,
    cgpa: String
  }],
  certifications: [{
    name: String,
    issuer: String,
    icon: String
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Profile', profileSchema);
