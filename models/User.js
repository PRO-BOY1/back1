import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  discordId: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  avatar: { type: String },
  cash: { type: Number, default: 0 },
  bank: { type: Number, default: 0 },
  total: { type: Number, default: 0 },
  roles: { type: [String], default: [] }
});

export default mongoose.model('User', userSchema);
