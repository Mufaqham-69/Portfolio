const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  tags: [{ type: String }],
  category: {
    type: String,
    enum: ['ai-ml', 'nlp', 'cv', 'fullstack', 'mlops', 'other'],
    default: 'ai-ml'
  },
  icon: { type: String, default: '🤖' },
  link: { type: String },
  github: { type: String },
  featured: { type: Boolean, default: false },
  order: { type: Number, default: 0 }
}, {
  timestamps: true
});

module.exports = mongoose.model('Project', projectSchema);
