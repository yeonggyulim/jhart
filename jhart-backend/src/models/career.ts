import mongoose from 'mongoose';

const { Schema } = mongoose;

const CareerSchema = new Schema({
  year: Number,
  history: String,
  user: {
    _id: mongoose.Types.ObjectId,
    username: String,
  },
});

const Career = mongoose.model('Career', CareerSchema);
export default Career;
