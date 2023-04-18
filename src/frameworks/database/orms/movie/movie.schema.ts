import mongoose from 'mongoose';

const movie = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  year: { type: Number, min: 1900, max: new Date().getFullYear(), required: true },
  createdAt: { type: Date, default: Date.now }
});

export default movie